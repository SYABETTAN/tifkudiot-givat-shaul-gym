import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-orange text-white hover:bg-amber shadow-lg shadow-orange/20 border border-orange/30",
  secondary:
    "bg-blue text-white hover:bg-blue/90 shadow-lg shadow-blue/20 border border-blue/30",
  ghost:
    "bg-white/5 text-off-white hover:bg-white/10 border border-white/10",
  outline:
    "bg-transparent text-off-white hover:bg-white/5 border border-white/20",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-2",
  md: "px-5 py-3 text-base gap-2",
  lg: "px-6 py-3.5 text-base gap-2.5",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type Props = ButtonProps | LinkProps;

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  Props
>(function Button(
  { variant = "primary", size = "md", className, children, ...props },
  ref
) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy disabled:opacity-50 disabled:pointer-events-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as LinkProps;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(props as ButtonProps)}
    >
      {children}
    </button>
  );
});
