import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variantStyles = {
  primary:
    "bg-accent text-white hover:bg-accent-bright shadow-[0_0_0_1px_rgba(255,255,255,0.05)]",
  secondary: "bg-paper text-ink hover:bg-white",
  outline:
    "border border-line-strong text-paper hover:border-accent-bright hover:text-accent-bright bg-transparent",
  ghost: "text-paper/80 hover:text-paper hover:bg-white/5",
  youtube: "bg-[#FF0000] text-white hover:bg-[#e00000]",
} as const;

const sizeStyles = {
  sm: "h-10 px-4 text-sm gap-1.5",
  md: "h-12 px-6 text-sm gap-2",
  lg: "h-14 px-8 text-base gap-2.5",
} as const;

type ButtonVariant = keyof typeof variantStyles;
type ButtonSize = keyof typeof sizeStyles;

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: ReactNode;
  href?: string;
  external?: boolean;
}

type ButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> &
  Omit<ComponentPropsWithoutRef<"a">, keyof CommonProps>;

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition-all duration-200 ease-out active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className,
  children,
  href,
  external,
  ...rest
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" ? icon : null}
      <span>{children}</span>
      {icon && iconPosition === "right" ? icon : null}
    </>
  );

  if (href && external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...(rest as ComponentPropsWithoutRef<"a">)}
      >
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} {...(rest as ComponentPropsWithoutRef<"a">)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {content}
    </button>
  );
}
