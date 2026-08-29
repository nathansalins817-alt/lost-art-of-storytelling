import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  viewAllHref?: string;
  viewAllLabel?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  viewAllHref,
  viewAllLabel = "View all",
  className,
}: SectionHeadingProps) {
  return (
    <RevealOnScroll
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div className={cn(align === "center" && "sm:mx-auto sm:text-center")}>
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-bright">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-balance text-3xl font-bold text-paper sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {viewAllHref ? (
        <Link
          href={viewAllHref}
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-paper transition-colors hover:text-accent-bright"
        >
          {viewAllLabel}
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      ) : null}
    </RevealOnScroll>
  );
}
