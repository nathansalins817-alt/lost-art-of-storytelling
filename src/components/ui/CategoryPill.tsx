import Link from "next/link";
import { cn } from "@/lib/utils";

interface CategoryPillProps {
  label: string;
  href?: string;
  active?: boolean;
  tone?: "default" | "trending" | "solid";
  className?: string;
}

export function CategoryPill({
  label,
  href,
  active,
  tone = "default",
  className,
}: CategoryPillProps) {
  const classes = cn(
    "inline-flex items-center rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] transition-colors",
    tone === "default" &&
      "border border-line-strong bg-ink-soft text-muted",
    tone === "trending" && "bg-accent text-white",
    tone === "solid" && "bg-white/10 text-paper",
    active && "border-accent-bright text-accent-bright",
    href && "hover:border-accent-bright hover:text-accent-bright",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    );
  }

  return <span className={classes}>{label}</span>;
}
