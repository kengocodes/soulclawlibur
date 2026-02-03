"use client";

import { useMemo, useState } from "react";
import { Search as SearchIcon, Terminal, X } from "lucide-react";
import type { Soul } from "@/data/souls";
import { SoulCard } from "./soul-card";
import { cn } from "@/lib/utils";
import { getTagClasses } from "@/lib/tag-colors";

export function Search({ souls }: { souls: Soul[] }) {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extract all unique tags from souls
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    souls.forEach((soul) => soul.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet).sort();
  }, [souls]);

  // Toggle tag selection
  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setQuery("");
    setSelectedTags([]);
  };

  const hasActiveFilters = query.length > 0 || selectedTags.length > 0;

  const filtered = souls.filter((soul) => {
    // First apply text search
    const q = query.toLowerCase();
    const matchesSearch =
      q === "" ||
      soul.name.toLowerCase().includes(q) ||
      soul.tagline.toLowerCase().includes(q) ||
      soul.tags.some((tag) => tag.toLowerCase().includes(q));

    // Then filter by selected tags (soul must have ALL selected tags)
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => soul.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  return (
    <div>
      {/* Tag cloud - horizontal scrollable row */}
      <div className="mb-4 -mx-1 px-1 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 pb-2">
          {allTags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagClick(tag)}
                className={cn(
                  "inline-flex items-center rounded px-2.5 py-1",
                  "text-[10px] font-mono uppercase tracking-wider",
                  "border transition-all whitespace-nowrap",
                  "hover:scale-105",
                  isSelected
                    ? "bg-foam/10 border-foam/40 text-foam ring-1 ring-foam/30"
                    : getTagClasses(tag)
                )}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Terminal-style search input */}
      <div className="relative group">
        <div className="flex items-center bg-shell border border-shell-border rounded-lg overflow-hidden">
          {/* Terminal prompt */}
          <div className="flex items-center gap-2 px-3 sm:px-4 py-3 border-r border-shell-border bg-abyss-surface">
            <Terminal className="h-4 w-4 text-biolume-cyan" />
            <span className="text-xs text-foam-muted font-mono hidden sm:inline">
              search
            </span>
          </div>

          {/* Input */}
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foam-faint" />
            <input
              type="text"
              placeholder="query: name, tagline, or tags..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={cn(
                "w-full bg-transparent py-3.5 pl-11 pr-4",
                "text-sm text-foam placeholder:text-foam-faint",
                "focus:outline-none font-mono"
              )}
            />
          </div>

          {/* Result count */}
          <div className="px-3 sm:px-4 py-3 border-l border-shell-border bg-abyss-surface">
            <span className="text-xs font-mono">
              <span className="text-foam-muted hidden sm:inline">found:</span>{" "}
              <span className={cn(
                filtered.length > 0 ? "text-biolume-green" : "text-biolume-amber"
              )}>
                {filtered.length}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Active filters / Clear button */}
      {hasActiveFilters && (
        <div className="mt-3 flex items-center gap-2 flex-wrap">
          {selectedTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleTagClick(tag)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded px-2 py-0.5",
                "text-[10px] font-mono uppercase tracking-wider",
                "bg-foam/10 border border-foam/40 text-foam",
                "hover:bg-foam/20 transition-colors"
              )}
            >
              {tag}
              <X className="w-3 h-3" />
            </button>
          ))}
          <button
            type="button"
            onClick={clearFilters}
            className={cn(
              "inline-flex items-center gap-1 rounded px-2 py-0.5",
              "text-[10px] font-mono uppercase tracking-wider",
              "text-foam-muted hover:text-foam transition-colors"
            )}
          >
            clear all
          </button>
        </div>
      )}

      {/* Results grid */}
      <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((soul, index) => (
          <SoulCard
            key={soul.slug}
            soul={soul}
            index={index}
            onTagClick={handleTagClick}
            selectedTags={selectedTags}
          />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <div className="inline-flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-shell-border flex items-center justify-center">
                <SearchIcon className="w-6 h-6 text-foam-faint" />
              </div>
              <div className="font-mono text-sm">
                <p className="text-foam-muted">nothing here</p>
                <p className="text-foam-faint mt-1">
                  try something else
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
