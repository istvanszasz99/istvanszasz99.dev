import type { ReactNode } from "react";
import { motion, type HTMLMotionProps, type Variants } from "motion/react";

type ButtonVariant = "primary" | "ghost";
type ButtonShape = "square" | "pill" | "circle" | "underline";
type ButtonSize = "sm" | "md" | "none";

// Animation states are owned by Button, so they can't be passed in. Put entrance
// animations on a wrapping motion element.
type ManagedProps =
  | "variant"
  | "children"
  | "className"
  | "initial"
  | "animate"
  | "variants"
  | "whileHover"
  | "whileTap"
  | "transition";

type BaseProps = {
  variant?: ButtonVariant;
  shape?: ButtonShape;
  /**
   * `none` drops the padding so `className` can set its own. Ignored by `circle`
   * and `underline`.
   */
  size?: ButtonSize;
  /**
   * Primary only. Keeps the button's size on hover and slides the label 5px
   * right instead, with a softer 0.98 tap.
   */
  slideOnHover?: boolean;
  className?: string;
  children: ReactNode;
};

type LinkProps = BaseProps &
  Omit<HTMLMotionProps<"a">, ManagedProps> & { href: string };

type NativeProps = BaseProps &
  Omit<HTMLMotionProps<"button">, ManagedProps> & { href?: undefined };

export type ButtonProps = LinkProps | NativeProps;

const primaryVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.03 },
  tap: { scale: 0.97 },
};

const primarySlideVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1 },
  tap: { scale: 0.98 },
};

const ghostVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.96 },
};

const labelSlideVariants: Variants = {
  rest: { x: 0 },
  hover: { x: 5 },
  tap: { x: 5 },
};

const wipeVariants: Variants = {
  rest: { scaleX: 0 },
  hover: { scaleX: 1 },
  tap: { scaleX: 1 },
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "overflow-hidden bg-brand-fill text-on-brand font-space text-[14px] font-semibold tracking-[0.08em] uppercase",
  // Colours are CSS rather than Motion values, so they follow the theme switch.
  ghost:
    "text-ink border-line-20 hover:text-brand-ink hover:border-brand-ink active:text-brand-ink active:border-brand-ink transition-colors duration-150 text-base font-['Roboto']",
};

const shapeClasses: Record<ButtonShape, string> = {
  square: "",
  pill: "rounded-full",
  circle: "rounded-full w-10 h-10",
  underline: "pb-1",
};

const paddingClasses: Record<ButtonVariant, Record<ButtonSize, string>> = {
  primary: { sm: "px-5 py-2", md: "px-8 py-4", none: "" },
  ghost: { sm: "px-5 py-2", md: "px-6 py-3", none: "" },
};

export function Button({
  variant = "primary",
  shape = "square",
  size = "md",
  slideOnHover = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const disabled = "disabled" in rest && rest.disabled;
  const slides = variant === "primary" && slideOnHover;
  const underlined = shape === "underline";

  const motionProps = {
    variants:
      variant === "ghost"
        ? ghostVariants
        : slides
          ? primarySlideVariants
          : primaryVariants,
    initial: "rest",
    animate: "rest",
    whileHover: disabled ? undefined : "hover",
    whileTap: disabled ? undefined : "tap",
    transition: variant === "ghost" ? { duration: 0.15 } : undefined,
    className: [
      "relative inline-flex items-center justify-center no-underline",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink",
      "disabled:opacity-60 disabled:cursor-not-allowed",
      variantClasses[variant],
      variant === "ghost" &&
        (underlined ? "border-b" : "border"),
      shapeClasses[shape],
      shape === "circle" || underlined ? "" : paddingClasses[variant][size],
      className,
    ]
      .filter(Boolean)
      .join(" "),
  };

  const content = (
    <>
      {variant === "primary" && (
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 bg-brand-wipe"
          variants={wipeVariants}
          transition={{ duration: 0.35 }}
          style={{ originX: 0 }}
        />
      )}
      <motion.span
        className={`relative flex w-full items-center justify-center ${
          variant === "primary" || underlined ? "gap-2" : "gap-3"
        }`}
        variants={slides ? labelSlideVariants : undefined}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    </>
  );

  if (rest.href !== undefined) {
    return (
      <motion.a {...(rest as Omit<LinkProps, keyof BaseProps>)} {...motionProps}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      {...(rest as Omit<NativeProps, keyof BaseProps>)}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
