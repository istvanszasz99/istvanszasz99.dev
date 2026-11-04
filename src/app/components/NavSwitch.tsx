import type { ReactNode } from "react";

type NavSwitchProps = {
  /** Screen-reader name. It describes the "on" state, such as "Light mode". */
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** Shown on the left, for the default state. */
  off: ReactNode;
  /** Shown on the right. */
  on: ReactNode;
};

export function NavSwitch({
  label,
  checked,
  onChange,
  off,
  on,
}: NavSwitchProps) {
  const option = (content: ReactNode, active: boolean) => (
    <span
      aria-hidden="true"
      className={`relative z-10 flex flex-1 items-center justify-center font-space text-[10px] font-semibold tracking-[0.04em] transition-colors duration-200 ${
        active ? "text-canvas" : "text-ink-50"
      }`}
    >
      {content}
    </span>
  );

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className="relative flex h-7 w-14 shrink-0 items-center rounded-full border border-line-20 transition-colors duration-200 hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink before:absolute before:-inset-x-1 before:-inset-y-[9px] before:content-['']"
    >
      <span
        aria-hidden="true"
        className={`absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-ink transition-transform duration-200 ease-out ${
          checked ? "translate-x-full" : ""
        }`}
      />
      {option(off, !checked)}
      {option(on, checked)}
    </button>
  );
}
