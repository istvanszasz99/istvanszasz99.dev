import { useEffect } from "react";

// Colors at or above this brightness would hide the lime arrow.
const LIGHT_THRESHOLD = 0.55;
// In the light theme, colors below this brightness would hide the dark arrow.
const DARK_THRESHOLD = 0.45;
// Smaller text and icons are thinner than the arrow, so a white arrow would
// disappear on the light page around them, while a dark one stays visible.
const MIN_LARGE_TEXT_PX = 40;
const MIN_LARGE_ICON_PX = 24;
const IMAGE_SAMPLE_SIZE = 64;
const SCROLL_SETTLE_MS = 150;

type Color = { brightness: number; alpha: number };

// Computed colors can be rgb(), oklab() or oklch(), so a canvas normalizes them.
function createColorReader() {
  const context = document
    .createElement("canvas")
    .getContext("2d", { willReadFrequently: true });
  const cache = new Map<string, Color>();

  return (color: string) => {
    const cached = cache.get(color);
    if (cached) return cached;

    let result: Color = { brightness: 0, alpha: 0 };
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

// Whether the point is on the painted part of a letter, not in the gaps around it.
function isOnGlyph(
  element: Element,
  x: number,
  y: number,
  context: CanvasRenderingContext2D,
) {
  const caret = document.caretPositionFromPoint?.(x, y);
  const node = caret?.offsetNode;
  if (!caret || !node || node.nodeType !== Node.TEXT_NODE) return false;

  const style = getComputedStyle(element);
  const text = node.textContent ?? "";
  const range = document.createRange();

  // The caret can land on either side of the letter under the point.
  for (const index of [caret.offset, caret.offset - 1]) {
    if (index < 0 || index >= text.length) continue;
    range.setStart(node, index);
    range.setEnd(node, index + 1);
    const rect = range.getBoundingClientRect();
    if (
      x < rect.left ||
      x > rect.right ||
      y < rect.top ||
      y > rect.bottom ||
      rect.width === 0
    ) {
      continue;
    }

    const letter =
      style.textTransform === "uppercase"
        ? text[index].toUpperCase()
        : text[index];
    const { canvas } = context;
    canvas.width = Math.ceil(rect.width);
    canvas.height = Math.ceil(rect.height);
    context.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    context.textBaseline = "alphabetic";
    const metrics = context.measureText(letter);
    const ascent = metrics.fontBoundingBoxAscent;
    const descent = metrics.fontBoundingBoxDescent;
    context.fillText(
      letter,
      0,
      (rect.height - (ascent + descent)) / 2 + ascent,
    );
    return (
      context.getImageData(x - rect.left, y - rect.top, 1, 1).data[3] > 128
    );
  }
  return false;
}

// Reads the image's color under the point, from a small cached copy.
function createImageSampler() {
  const cache = new Map<string, CanvasRenderingContext2D | null>();

  const copyOf = (image: HTMLImageElement) => {
    const cached = cache.get(image.src);
    if (cached !== undefined) return cached;

    const canvas = document.createElement("canvas");
    canvas.width = IMAGE_SAMPLE_SIZE;
    canvas.height = IMAGE_SAMPLE_SIZE;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    context?.drawImage(image, 0, 0, IMAGE_SAMPLE_SIZE, IMAGE_SAMPLE_SIZE);
    cache.set(image.src, context);
    return context;
  };

  return (image: HTMLImageElement, x: number, y: number): Color | null => {
    const { naturalWidth, naturalHeight } = image;
    if (!image.complete || !naturalWidth || !naturalHeight) return null;

    const rect = image.getBoundingClientRect();
    const fit = getComputedStyle(image).objectFit;
    let scaleX = rect.width / naturalWidth;
    let scaleY = rect.height / naturalHeight;
    if (fit === "cover") scaleX = scaleY = Math.max(scaleX, scaleY);
    if (fit === "contain") scaleX = scaleY = Math.min(scaleX, scaleY);

    const offsetX = (rect.width - naturalWidth * scaleX) / 2;
    const offsetY = (rect.height - naturalHeight * scaleY) / 2;
    const u = (x - rect.left - offsetX) / scaleX / naturalWidth;
    const v = (y - rect.top - offsetY) / scaleY / naturalHeight;
    if (u < 0 || u >= 1 || v < 0 || v >= 1) return null;

    try {
      const [r, g, b, a] = copyOf(image)!.getImageData(
        Math.floor(u * IMAGE_SAMPLE_SIZE),
        Math.floor(v * IMAGE_SAMPLE_SIZE),
        1,
        1,
      ).data;
      return {
        brightness: (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255,
        alpha: a / 255,
      };
    } catch {
      return null;
    }
  };
}

// Switches the arrow to its high-contrast version: over light text, light fills,
// images and icons in the dark theme, and over dark content in the light theme.
// Renders nothing, and does nothing on touch devices.
export function CursorTone() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const root = document.documentElement;
    const readColor = createColorReader();
    const sampleImage = createImageSampler();
    const glyphContext = document
      .createElement("canvas")
      .getContext("2d", { willReadFrequently: true });

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

    const isDark = ({ brightness, alpha }: Color) =>
      // Blend with the light page, so translucent ink counts by how it looks.
      brightness * alpha + (1 - alpha) < DARK_THRESHOLD;

    // Solid fills, plus the first stop of an opaque linear gradient, such as the
    // profile.ts card. Faint glows and the hero grid are skipped.
    const hasDarkBackground = (element: Element) => {
      for (
        let current: Element | null = element;
        current;
        current = current.parentElement
      ) {
        const style = getComputedStyle(current);
        const fill = readColor(style.backgroundColor);
        if (fill.alpha >= 0.5) return isDark({ ...fill, alpha: 1 });

        const firstStop = style.backgroundImage.startsWith("linear-gradient")
          ? style.backgroundImage.match(/(?:rgba?|oklch|oklab|color)\([^)]*\)/)
          : null;
        if (firstStop) {
          const stop = readColor(firstStop[0]);
          if (stop.alpha > 0.6) return isDark({ ...stop, alpha: 1 });
        }
      }
      return false;
    };

    const needsWhite = (element: Element, x: number, y: number) => {
      if (element instanceof HTMLImageElement) {
        const pixel = sampleImage(element, x, y);
        if (pixel && pixel.alpha >= 0.5) return isDark(pixel);
      }

      if (element instanceof SVGGeometryElement) {
        const { width, height } = element.getBoundingClientRect();
        if (Math.min(width, height) >= MIN_LARGE_ICON_PX) {
          const style = getComputedStyle(element);
          const paint = style.fill === "none" ? style.stroke : style.fill;
          const color = readColor(paint);
          if (color.alpha >= 0.5) return isDark(color);
        }
      }

      const style = getComputedStyle(element);
      if (
        glyphContext &&
        parseFloat(style.fontSize) >= MIN_LARGE_TEXT_PX &&
        isOverText(element, x, y) &&
        isOnGlyph(element, x, y, glyphContext)
      ) {
        // White letters on the dark card need the dark arrow, despite the card.
        return isDark(readColor(style.color));
      }

      return hasDarkBackground(element);
    };

    let frame = 0;
    let scrollTimer: ReturnType<typeof setTimeout> | undefined;
    let isScrolling = false;
    let pointer: { x: number; y: number } | null = null;

    const update = () => {
      frame = 0;
      if (!pointer || isScrolling) return;
      const element = document.elementFromPoint(pointer.x, pointer.y);
      const check =
        root.dataset.theme === "light" ? needsWhite : needsContrast;
      if (element && check(element, pointer.x, pointer.y)) {
        root.dataset.cursorTone = "contrast";
      } else {
        delete root.dataset.cursorTone;
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
      if (!frame) frame = requestAnimationFrame(update);
    };

    // A click can change the theme, or what's under a pointer that hasn't moved.
    const handleClick = () => {
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
    window.addEventListener("click", handleClick, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
      clearTimeout(scrollTimer);
      delete root.dataset.cursorTone;
    };
  }, []);

  return null;
}
