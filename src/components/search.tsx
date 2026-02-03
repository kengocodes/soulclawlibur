"use client";

import { useState } from "react";
import { Search as SearchIcon, Terminal } from "lucide-react";
import type { Soul } from "@/data/souls";
import { SoulCard } from "./soul-card";
import { cn } from "@/lib/utils";

export function Search({ souls }: { souls: Soul[] }) {
  const [query, setQuery] = useState("");

  const filtered = souls.filter((soul) => {
    const q = query.toLowerCase();
    return (
      soul.name.toLowerCase().includes(q) ||
      soul.tagline.toLowerCase().includes(q) ||
      soul.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  return (
    <div>
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

      {/* Results grid */}
      <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((soul, index) => (
          <SoulCard key={soul.slug} soul={soul} index={index} />
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
