import { useEffect } from "react";

// Colors at or above this brightness would hide the lime arrow.
const LIGHT_THRESHOLD = 0.55;
const SCROLL_SETTLE_MS = 150;

// Computed colors can be rgb(), oklab() or oklch(), so a canvas normalizes them.
function createColorReader() {
  const context = document
    .createElement("canvas")
    .getContext("2d", { willReadFrequently: true });
  const cache = new Map<string, { brightness: number; alpha: number }>();

  return (color: string) => {
    const cached = cache.get(color);
    if (cached) return cached;

    let result = { brightness: 0, alpha: 0 };
    if (context) {
      context.clearRect(0, 0, 1, 1);
      context.fillStyle = color;
      context.fillRect(0, 0, 1, 1);
      const [r, g, b, a] = context.getImageData(0, 0, 1, 1).data;
      result = {
        brightness: (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255,
        alpha: a / 255,
      };
    }
    cache.set(color, result);
    return result;
  };
}

function isOverText(element: Element, x: number, y: number) {
  const range = document.createRange();
  for (const node of element.childNodes) {
    if (node.nodeType !== Node.TEXT_NODE || !node.textContent?.trim()) continue;
    range.selectNodeContents(node);
    for (const rect of range.getClientRects()) {
      if (
        x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom
      ) {
        return true;
      }
    }
  }
  return false;
}

// Switches the arrow to its high-contrast version over light text, light fills,
// images and icons. Renders nothing, and does nothing on touch devices.
export function CursorTone() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const root = document.documentElement;
    const readColor = createColorReader();

    const hasLightBackground = (element: Element) => {
      for (
        let current: Element | null = element;
        current;
        current = current.parentElement
      ) {
        const { brightness, alpha } = readColor(
          getComputedStyle(current).backgroundColor,
        );
        if (alpha >= 0.5) return brightness >= LIGHT_THRESHOLD;
      }
      return false;
    };

    const needsContrast = (element: Element, x: number, y: number) => {
      if (element.closest("img, svg, video, canvas")) return true;
      if (hasLightBackground(element)) return true;
      if (!isOverText(element, x, y)) return false;
      const { brightness, alpha } = readColor(getComputedStyle(element).color);
      return brightness * alpha >= LIGHT_THRESHOLD;
    };

    let frame = 0;
    let scrollTimer: ReturnType<typeof setTimeout> | undefined;
    let isScrolling = false;
    let pointer: { x: number; y: number } | null = null;

    const update = () => {
      frame = 0;
      if (!pointer || isScrolling) return;
      const element = document.elementFromPoint(pointer.x, pointer.y);
      if (element && needsContrast(element, pointer.x, pointer.y)) {
        root.dataset.cursorTone = "contrast";
      } else {
        delete root.dataset.cursorTone;
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
      if (!frame) frame = requestAnimationFrame(update);
    };

    // Skip the checks while scrolling, then re-check what ended up under the pointer.
    const handleScroll = () => {
      isScrolling = true;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        isScrolling = false;
        update();
      }, SCROLL_SETTLE_MS);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
      clearTimeout(scrollTimer);
      delete root.dataset.cursorTone;
    };
  }, []);

  return null;
}
