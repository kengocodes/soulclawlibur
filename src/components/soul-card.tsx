import Link from "next/link";
import { ChevronRight, FileCode } from "lucide-react";
import type { Soul } from "@/data/souls";
import { cn } from "@/lib/utils";
import { getTagClasses } from "@/lib/tag-colors";

interface SoulCardProps {
  soul: Soul;
  index?: number;
  onTagClick?: (tag: string) => void;
  selectedTags?: string[];
}

export function SoulCard({ soul, index, onTagClick, selectedTags = [] }: SoulCardProps) {
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
            "h-1.5 w-full",
            accent === "biolume-cyan" && "bg-gradient-to-r from-biolume-cyan to-transparent",
            accent === "biolume-magenta" && "bg-gradient-to-r from-biolume-magenta to-transparent",
            accent === "biolume-green" && "bg-gradient-to-r from-biolume-green to-transparent",
            accent === "biolume-amber" && "bg-gradient-to-r from-biolume-amber to-transparent"
          )}
        />

        {/* Card content */}
        <div className="flex-1 p-4 sm:p-5">
          {/* Header with file icon */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className={cn(
                "p-1.5 rounded",
                accent === "biolume-cyan" && "bg-biolume-cyan/15 text-biolume-cyan",
                accent === "biolume-magenta" && "bg-biolume-magenta/15 text-biolume-magenta",
                accent === "biolume-green" && "bg-biolume-green/15 text-biolume-green",
                accent === "biolume-amber" && "bg-biolume-amber/15 text-biolume-amber"
              )}>
                <FileCode className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display font-bold text-foam tracking-tight">
                  {soul.name}
                </h2>
                <p className="text-[10px] font-mono text-foam-faint">
                  {soul.slug}.soul.md
                </p>
              </div>
            </div>

            {/* Hover arrow */}
            <ChevronRight className="w-4 h-4 text-foam-faint transition-colors group-hover:text-biolume-cyan" />
          </div>

          {/* Description */}
          <p className="mt-4 text-sm leading-relaxed text-foam-muted line-clamp-2">
            {soul.tagline}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {soul.tags.map((tag) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={(e) => {
                    if (onTagClick) {
                      e.preventDefault();
                      e.stopPropagation();
                      onTagClick(tag);
                    }
                  }}
                  className={cn(
                    "inline-flex items-center rounded px-2 py-0.5",
                    "text-[10px] font-mono uppercase tracking-wider",
                    "border transition-all",
                    onTagClick && "hover:scale-105 cursor-pointer",
                    isSelected ? "ring-1 ring-foam/50" : "",
                    getTagClasses(tag)
                  )}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

      </article>
    </Link>
  );
}
