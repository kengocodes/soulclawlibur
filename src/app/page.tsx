import { souls } from "@/data/souls";
import { Search } from "@/components/search";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

const characters = [
  { name: "pirate" },
  { name: "flower" },
  { name: "royal" },
  { name: "chef" },
  { name: "bookworm" },
  { name: "music" },
];

export default function Home() {
  return (
    <main className="relative mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:py-16">
      {/* Hero section */}
      <header className="mb-12 sm:mb-16 lg:mb-20 text-center">
        {/* Characters row */}
        <div className="flex items-end justify-center gap-1 sm:gap-2 lg:gap-3 mb-8">
          {characters.map((char, i) => (
            <div
              key={char.name}
              className={`character character-${i + 1}`}
            >
              <Image
                src={`/characters/${char.name}.png`}
                alt={`${char.name} lobster character`}
                width={120}
                height={120}
                priority={i < 2}
              />
            </div>
          ))}
        </div>

        {/* Title */}
        <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foam glow-text-cyan mb-4">
          SOUL<span className="text-biolume-cyan">CLAW</span>LIBUR
        </h1>

        {/* Subtitle */}
        <p className="text-foam-muted max-w-lg mx-auto leading-relaxed text-sm sm:text-base">
          <span className="text-biolume-cyan">SOUL.md</span> personality files for your OpenClaw bot.
        </p>
      </header>

      {/* Search and grid */}
      <Search souls={souls} />

      {/* Footer */}
      <footer className="mt-20 pt-12 border-t border-shell-border/50">
        <div className="flex flex-col items-center gap-6">
          {/* Footer characters */}
          <div className="flex items-end justify-center gap-4 sm:gap-6">
            <div className="footer-character footer-char-1 w-12 sm:w-16 opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src="/characters/footer-anchor.png"
                alt="Sailor lobster waving"
                width={64}
                height={64}
              />
            </div>
            <div className="footer-character footer-char-2 w-10 sm:w-14 opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src="/characters/footer-sleepy.png"
                alt="Sleepy lobster"
                width={56}
                height={56}
              />
            </div>
            <div className="footer-character footer-char-3 w-12 sm:w-16 opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src="/characters/footer-star.png"
                alt="Lobster with starfish friend"
                width={64}
                height={64}
              />
            </div>
          </div>

          {/* Links row */}
          <div className="flex items-center gap-6">
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foam-muted hover:text-foam transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://x.com/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foam-muted hover:text-foam transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>

            <span className="text-foam-muted/50">|</span>

            {/* Legal links */}
            <div className="flex items-center gap-4 text-xs font-mono">
              <Link
                href="/privacy"
                className="text-foam-muted hover:text-foam transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-foam-muted hover:text-foam transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-foam-muted/80 text-xs font-mono">
            © 2026 SOULCLAWLIBUR
          </p>
        </div>
      </footer>

    </main>
  );
}
