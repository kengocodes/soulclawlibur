"use client";

import { useState } from "react";
import { FileCode, MessageSquare, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Soul } from "@/data/souls";

type Tab = "soul" | "examples";

export function SoulTabs({ soul }: { soul: Soul }) {
  const [activeTab, setActiveTab] = useState<Tab>("soul");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(soul.soul);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      {/* Tab bar with terminal aesthetic */}
      <div className="flex items-center justify-between border-b border-shell-border">
        <div className="flex">
          <button
            onClick={() => setActiveTab("soul")}
            className={cn(
              "flex items-center gap-2 px-5 py-3 text-sm font-mono",
              "border-b-[3px] -mb-px",
              activeTab === "soul"
                ? "border-biolume-cyan text-biolume-cyan bg-biolume-cyan/10"
                : "border-transparent text-foam-muted hover:text-foam hover:bg-shell/50"
            )}
          >
            <FileCode className="w-4 h-4" />
            <span>SOUL.MD</span>
          </button>
          <button
            onClick={() => setActiveTab("examples")}
            className={cn(
              "flex items-center gap-2 px-5 py-3 text-sm font-mono",
              "border-b-[3px] -mb-px",
              activeTab === "examples"
                ? "border-biolume-magenta text-biolume-magenta bg-biolume-magenta/10"
                : "border-transparent text-foam-muted hover:text-foam hover:bg-shell/50"
            )}
          >
            <MessageSquare className="w-4 h-4" />
            <span>RESPONSES</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-shell-border/50">
              {Object.keys(soul.responses).length}
            </span>
          </button>
        </div>

        {/* Copy button (only show on soul tab) */}
        {activeTab === "soul" && (
          <button
            onClick={copyToClipboard}
            className={cn(
              "flex items-center gap-2 px-4 py-2 mr-2 rounded",
              "text-xs font-mono font-medium",
              "border border-shell-border hover:border-biolume-cyan/50 hover:bg-biolume-cyan/5",
              "text-foam-muted hover:text-biolume-cyan",
              copied && "border-biolume-green text-biolume-green"
            )}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>COPY</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Tab content */}
      <div className="mt-6">
        {activeTab === "soul" && (
          <div className="relative group">
            {/* Terminal window chrome */}
            <div className="rounded-t-lg border border-b-0 border-shell-border bg-abyss-surface px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-biolume-amber" />
                  <div className="w-3 h-3 rounded-full bg-biolume-green" />
                  <div className="w-3 h-3 rounded-full bg-biolume-cyan" />
                </div>
                <span className="text-xs font-mono text-foam-faint">
                  {soul.slug}.soul.md
                </span>
              </div>
              <span className="text-[10px] font-mono text-foam-faint">
                {soul.soul.split("\n").length} lines
              </span>
            </div>

            {/* Code content */}
            <div className="rounded-b-lg border border-shell-border bg-abyss-deep p-6 overflow-x-auto">
              <pre className="text-sm leading-relaxed whitespace-pre-wrap text-foam/90 font-mono">
                {soul.soul.split("\n").map((line, i) => (
                  <div key={i} className="flex">
                    <span className="w-8 shrink-0 text-foam-faint/50 select-none text-right pr-4">
                      {i + 1}
                    </span>
                    <span className={cn(
                      line.startsWith("#") && "text-biolume-cyan font-semibold",
                      line.startsWith("-") && "text-foam-muted"
                    )}>
                      {line || " "}
                    </span>
                  </div>
                ))}
              </pre>
            </div>
          </div>
        )}

        {activeTab === "examples" && (
          <div className="space-y-4">
            {Object.entries(soul.responses).map(([question, answer], index) => (
              <div
                key={question}
                className="rounded-lg border border-shell-border overflow-hidden"
              >
                {/* Question header */}
                <div className="px-5 py-3 bg-abyss-surface border-b border-shell-border">
                  <div className="flex items-center gap-2 text-xs font-mono text-foam-faint mb-1">
                    <span className="text-biolume-magenta">USER_QUERY</span>
                    <span className="text-shell-border">{"/"}</span>
                    <span>#{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="text-sm font-medium text-foam">
                    {question}
                  </p>
                </div>

                {/* Answer body */}
                <div className="px-5 py-4 bg-shell">
                  <div className="flex items-center gap-2 text-xs font-mono text-foam-faint mb-2">
                    <span className="text-biolume-cyan">SOUL_RESPONSE</span>
                  </div>
                  <p className="text-sm leading-relaxed text-foam/90">
                    {answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
