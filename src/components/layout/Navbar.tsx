"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { YouTubeSubscribeButton } from "@/components/ui/YouTubeSubscribeButton";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled || open
          ? "border-b border-line bg-ink/85 backdrop-blur-lg"
          : "border-b border-transparent bg-gradient-to-b from-ink/70 to-transparent"
      )}
    >
      <div className="container-edit flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link
          href="/"
          className="group flex flex-col leading-none focus-visible:outline-offset-4"
        >
          <span className="font-display text-lg font-bold tracking-tight text-paper sm:text-xl">
            The Lost Art of{" "}
            <span className="text-accent-bright">Storytelling</span>
          </span>
          <span className="mt-1 hidden text-[0.65rem] font-medium uppercase tracking-[0.25em] text-faint sm:block">
            with {siteConfig.host}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-paper"
                    : "text-muted hover:text-paper"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:flex">
          <YouTubeSubscribeButton size="sm" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex size-11 items-center justify-center rounded-full border border-line text-paper xl:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-[var(--ease-editorial)] xl:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <nav
            className="container-edit flex flex-col gap-1 border-t border-line py-6"
            aria-label="Mobile"
          >
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-lg font-semibold transition-colors",
                    active ? "text-accent-bright" : "text-paper hover:text-accent-bright"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <YouTubeSubscribeButton className="mt-4 w-full" size="lg" />
          </nav>
        </div>
      </div>
    </header>
  );
}
