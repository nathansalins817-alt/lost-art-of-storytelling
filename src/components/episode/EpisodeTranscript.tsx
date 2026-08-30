import { ChevronDown, FileText } from "lucide-react";
import type { TranscriptLine } from "@/types/content";

interface EpisodeTranscriptProps {
  transcript: TranscriptLine[];
}

/**
 * Native <details>/<summary> — content stays in the server-rendered HTML
 * and is crawlable regardless of open/closed state, with zero JS required.
 */
export function EpisodeTranscript({ transcript }: EpisodeTranscriptProps) {
  return (
    <details className="group rounded-2xl border border-line bg-surface open:pb-2">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 marker:content-none">
        <span className="flex items-center gap-2 text-sm font-semibold text-paper">
          <FileText className="size-4 text-accent-bright" aria-hidden="true" />
          Episode Transcript
        </span>
        <ChevronDown
          className="size-4 shrink-0 text-faint transition-transform duration-200 group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div className="space-y-4 px-5 pb-4 pt-1">
        {transcript.map((line, index) => (
          <p key={index} className="text-sm leading-relaxed text-muted">
            <span className="font-semibold text-paper">{line.speaker}</span>
            {line.timestamp ? (
              <span className="ml-2 font-mono text-xs text-faint">{line.timestamp}</span>
            ) : null}
            <br />
            {line.text}
          </p>
        ))}
      </div>
    </details>
  );
}
