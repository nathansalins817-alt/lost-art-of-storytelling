"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

const topics = [
  "General Inquiries",
  "Guest Requests",
  "Partnerships & Sponsorships",
  "Press",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-line-strong bg-surface px-4 py-3 text-sm text-paper placeholder:text-faint focus-visible:border-accent-bright";
const labelClasses = "mb-2 block text-sm font-medium text-paper";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    try {
      // TODO: wire to a form backend (Formspree, Resend, a Next.js API route, etc.)
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex items-start gap-3 rounded-2xl border border-accent-bright/40 bg-accent/10 p-6 text-paper"
        role="status"
      >
        <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-accent-bright" />
        <div>
          <p className="font-semibold">Message sent.</p>
          <p className="mt-1 text-sm text-muted">
            Thanks for reaching out — we typically reply within 2–3 business
            days.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="contact-name">
            Name
          </label>
          <input id="contact-name" name="name" type="text" required className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="contact-email">
            Email
          </label>
          <input id="contact-email" name="email" type="email" required className={inputClasses} />
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="contact-topic">
          What&apos;s this about?
        </label>
        <select id="contact-topic" name="topic" required className={inputClasses} defaultValue="">
          <option value="" disabled>
            Select a topic
          </option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClasses} htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          className={inputClasses}
          placeholder="Tell us a bit about what you're reaching out for..."
        />
      </div>

      {status === "error" ? (
        <div
          className="flex items-center gap-2 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-paper"
          role="alert"
        >
          <AlertCircle className="size-4 shrink-0 text-red-400" />
          Something went wrong sending your message. Please try again.
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold text-white transition-colors hover:bg-accent-bright disabled:opacity-60"
      >
        {status === "submitting" ? <Loader2 className="size-4 animate-spin" /> : null}
        Send Message
      </button>
    </form>
  );
}
