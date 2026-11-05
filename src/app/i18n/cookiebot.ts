import type { Translation } from "./en";

declare global {
  interface Window {
    // Loaded by the script in index.html. Missing if a browser extension blocks it.
    Cookiebot?: { renew: () => void; consentUTC?: string };
  }
}

type Language = "en" | "hu";
type WidgetText = Translation["cookieWidget"];

// data-culture overrides Cookiebot's own browser language detection. Cookiebot reads
// it each time renew() runs, which also opens the banner, so that only happens here
// when the banner is already showing.
export function setCookiebotLanguage(lang: Language) {
  document
    .getElementById("Cookiebot")
    ?.setAttribute("data-culture", lang.toUpperCase());

  const banner = document.getElementById("CybotCookiebotDialog");
  if (banner && getComputedStyle(banner).display !== "none") {
    window.Cookiebot?.renew();
  }
}

function setText(element: Element | null | undefined, text: string) {
  if (element && element.textContent !== text) element.textContent = text;
}

// For elements that also hold an icon or spinner, which must stay in place.
function setOwnText(element: Element | null | undefined, text: string) {
  const node = Array.from(element?.childNodes ?? []).find(
    (child) => child.nodeType === Node.TEXT_NODE && child.nodeValue?.trim(),
  );
  if (node && node.nodeValue !== text) node.nodeValue = text;
}

function setAttribute(
  element: Element | null | undefined,
  name: string,
  value: string,
) {
  if (element && element.getAttribute(name) !== value) {
    element.setAttribute(name, value);
  }
}

function applyWidgetText(widget: Element, lang: Language, text: WidgetText) {
  setAttribute(widget, "lang", lang);
  widget
    .querySelectorAll("[lang]")
    .forEach((element) => setAttribute(element, "lang", lang));

  setAttribute(widget.querySelector(".CookiebotWidget-logo"), "aria-label", text.open);
  setAttribute(widget.querySelector(".CookiebotWidget-close"), "aria-label", text.close);
  setAttribute(widget.querySelector(".CookiebotWidget-main-logo a"), "aria-label", text.logo);

  setText(widget.querySelector(".CookiebotWidget-header strong"), text.title);
  setText(widget.querySelector(".CookiebotWidget-state"), text.state);

  (Object.keys(text.consents) as (keyof WidgetText["consents"])[]).forEach((name) => {
    const item = widget.querySelector(`li[data-consent="${name}"]`);
    setOwnText(item, text.consents[name]);
    const allowed = item?.classList.contains("CookiebotWidget-approved");
    setAttribute(
      item?.querySelector("svg"),
      "aria-label",
      name === "necessary" ? text.required : allowed ? text.allowed : text.notAllowed,
    );
  });

  const details = widget.querySelector(".CookiebotWidget-show-consent-details");
  setOwnText(
    details,
    `${details?.getAttribute("aria-expanded") === "true" ? text.hideDetails : text.showDetails} `,
  );

  const labels = widget.querySelectorAll(".CookiebotWidget-consent-details-box > strong");
  setText(labels[0], text.consentDate);
  setText(labels[1], text.consentId);

  const consentDate = window.Cookiebot?.consentUTC;
  if (consentDate) {
    setText(
      widget.querySelector(".CookiebotWidget-date"),
      new Intl.DateTimeFormat(lang, {
        dateStyle: "medium",
        timeStyle: "medium",
      }).format(new Date(consentDate)),
    );
  }

  setOwnText(widget.querySelector("#CookiebotWidget-btn-withdraw"), text.withdraw);
  setOwnText(widget.querySelector("#CookiebotWidget-btn-change"), text.change);
}

let current: { lang: Language; text: WidgetText } | null = null;
let watchedWidget: Element | null = null;
const widgetObserver = new MutationObserver(applyCurrent);

function applyCurrent() {
  const widget = document.getElementById("CookiebotWidget");
  if (!widget || !current) return;

  if (widget !== watchedWidget) {
    watchedWidget = widget;
    widgetObserver.disconnect();
    widgetObserver.observe(widget, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }
  applyWidgetText(widget, current.lang, current.text);
}

let watchingBody = false;

// Cookiebot builds the privacy widget once and in its own language, and rewrites parts
// of it when it opens or a consent changes. So the site's own text goes in here, and
// goes back in after each rewrite. If Cookiebot renames an element, that text just stays
// in Cookiebot's language.
export function setCookiebotWidgetText(lang: Language, text: WidgetText) {
  current = { lang, text };
  if (!watchingBody) {
    watchingBody = true;
    new MutationObserver(applyCurrent).observe(document.body, { childList: true });
  }
  applyCurrent();
}
