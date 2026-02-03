import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, FileCode } from "lucide-react";
import { souls, getSoulBySlug } from "@/data/souls";
import { cn } from "@/lib/utils";
import { getTagClasses } from "@/lib/tag-colors";
import { SoulTabs } from "@/components/soul-tabs";

export function generateStaticParams() {
  return souls.map((soul) => ({ slug: soul.slug }));
}

export default async function SoulPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const soul = getSoulBySlug(slug);

  if (!soul) notFound();

  const soulIndex = souls.findIndex((s) => s.slug === slug);

  return (
    <main className="relative mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:py-16">
      {/* Back navigation */}
      <Link
        href="/"
        className={cn(
          "inline-flex items-center gap-2 text-sm font-mono",
          "text-foam-muted hover:text-biolume-cyan",
          "group"
        )}
      >
        <ArrowLeft className="h-4 w-4" />
        <span>cd ../archive</span>
      </Link>

      {/* Hero header */}
      <header className="mt-10 mb-12">
        {/* Breadcrumb path */}
        <div className="flex items-center gap-2 text-xs text-foam-faint mb-4 font-mono">
          <span className="text-biolume-cyan">~</span>
          <span>/archive/souls/</span>
          <span className="text-biolume-green">{soul.slug}</span>
          <span>/</span>
          <span className="text-foam">soul.md</span>
        </div>

        {/* Title section */}
        <div>
          {/* Soul icon and name */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-biolume-cyan/10 border border-biolume-cyan/20">
              <FileCode className="w-6 h-6 text-biolume-cyan" />
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foam tracking-tight">
                {soul.name}
              </h1>
            </div>
          </div>

          {/* Tagline */}
          <p className="mt-6 text-foam-muted leading-relaxed max-w-xl">
            {soul.tagline}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {soul.tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  "inline-flex items-center rounded px-2.5 py-1",
                  "text-xs font-mono uppercase tracking-wider",
                  "border",
                  getTagClasses(tag)
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </header>

      {/* Tabs section */}
      <SoulTabs soul={soul} />

      {/* Navigation to other souls */}
      <nav className="mt-16 pt-8 border-t border-shell-border">
        <div className="flex items-center justify-between text-xs font-mono text-foam-faint">
          {soulIndex > 0 ? (
            <Link
              href={`/souls/${souls[soulIndex - 1].slug}`}
              className="flex items-center gap-2 hover:text-biolume-cyan"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{souls[soulIndex - 1].name}</span>
            </Link>
          ) : (
            <span />
          )}

          <span className="text-foam-faint/50">
            {soulIndex + 1} / {souls.length}
          </span>

          {soulIndex < souls.length - 1 ? (
            <Link
              href={`/souls/${souls[soulIndex + 1].slug}`}
              className="flex items-center gap-2 hover:text-biolume-cyan"
            >
              <span>{souls[soulIndex + 1].name}</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </nav>
    </main>
  );
}
