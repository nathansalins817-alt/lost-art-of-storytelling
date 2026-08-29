import Image from "next/image";
import Link from "next/link";
import type { Guest } from "@/types/content";
import { cn } from "@/lib/utils";

interface GuestCardProps {
  guest: Guest;
  className?: string;
}

export function GuestCard({ guest, className }: GuestCardProps) {
  return (
    <Link
      href={`/guests/${guest.slug}`}
      className={cn(
        "group flex flex-col items-center rounded-2xl border border-line bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:bg-surface-raised",
        className
      )}
    >
      <div className="relative size-24 overflow-hidden rounded-full ring-1 ring-line-strong transition-all duration-300 group-hover:ring-accent-bright">
        <Image
          src={guest.image}
          alt=""
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>
      <h3 className="mt-4 text-base font-bold text-paper transition-colors group-hover:text-accent-bright">
        {guest.name}
      </h3>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-accent-bright">
        {guest.title}
      </p>
      {guest.organization ? (
        <p className="text-xs text-faint">{guest.organization}</p>
      ) : null}
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
        {guest.shortBio}
      </p>
    </Link>
  );
}
