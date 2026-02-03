import Link from "next/link";
import { ChevronRight, FileCode } from "lucide-react";
import type { Soul } from "@/data/souls";
import { cn } from "@/lib/utils";
import { getTagClasses } from "@/lib/tag-colors";

export function SoulCard({ soul, index }: { soul: Soul; index?: number }) {
  // Alternate accent colors for visual variety
  const accentColors = [
    "biolume-cyan",
    "biolume-magenta",
    "biolume-green",
    "biolume-amber",
  ];
  const accent = accentColors[(index ?? 0) % accentColors.length];

  return (
    <Link href={`/souls/${soul.slug}`} className="group block h-full">
      <article
        className={cn(
          "relative h-full flex flex-col",
          "bg-shell border border-shell-border rounded-lg",
          "card-glow overflow-hidden"
        )}
      >
        {/* Top accent bar */}
        <div
          className={cn(
            "h-1 w-full",
            accent === "biolume-cyan" && "bg-gradient-to-r from-biolume-cyan/60 to-transparent",
            accent === "biolume-magenta" && "bg-gradient-to-r from-biolume-magenta/60 to-transparent",
            accent === "biolume-green" && "bg-gradient-to-r from-biolume-green/60 to-transparent",
            accent === "biolume-amber" && "bg-gradient-to-r from-biolume-amber/60 to-transparent"
          )}
        />

        {/* Card content */}
        <div className="flex-1 p-4 sm:p-5">
          {/* Header with file icon */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className={cn(
                "p-1.5 rounded",
                accent === "biolume-cyan" && "bg-biolume-cyan/10 text-biolume-cyan",
                accent === "biolume-magenta" && "bg-biolume-magenta/10 text-biolume-magenta",
                accent === "biolume-green" && "bg-biolume-green/10 text-biolume-green",
                accent === "biolume-amber" && "bg-biolume-amber/10 text-biolume-amber"
              )}>
                <FileCode className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-display font-semibold text-foam tracking-tight">
                  {soul.name}
                </h2>
                <p className="text-[10px] font-mono text-foam-faint">
                  {soul.slug}.soul.md
                </p>
              </div>
            </div>

            {/* Hover arrow */}
            <ChevronRight className="w-4 h-4 text-foam-faint" />
          </div>

          {/* Description */}
          <p className="mt-4 text-sm leading-relaxed text-foam-muted line-clamp-2">
            {soul.tagline}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {soul.tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  "inline-flex items-center rounded px-2 py-0.5",
                  "text-[10px] font-mono uppercase tracking-wider",
                  "border",
                  getTagClasses(tag)
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </article>
    </Link>
  );
}
