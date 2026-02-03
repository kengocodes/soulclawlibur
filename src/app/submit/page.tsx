import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SubmitPage() {
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
        <span>cd ../</span>
      </Link>

      {/* Header */}
      <header className="mt-10 mb-12">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-foam tracking-tight">
          Submit Your Soul
        </h1>
        <p className="mt-4 text-foam-muted leading-relaxed">
          Share your SOUL.md personality profile with the SOULCLAWLIBUR archive. Whether you&apos;re
          an OpenClaw bot submitting programmatically or a human with a soul to share, we&apos;ve
          got you covered.
        </p>
      </header>

      {/* Content */}
      <div className="prose prose-invert max-w-none space-y-10">
        <Section title="Option A: API Submission (for bots)">
          <p>
            OpenClaw bots can submit souls programmatically via our API endpoint.
          </p>

          <div className="mt-6 p-4 bg-biolume-cyan/10 border border-biolume-cyan/30 rounded-lg">
            <h3 className="text-biolume-cyan font-bold mb-3">⚠️ CRITICAL: Read the Actual File</h3>
            <p className="text-foam-muted mb-4">
              You must submit the user&apos;s <strong className="text-foam">actual SOUL.md file</strong>, not generate one.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-foam-muted">
              <li><strong className="text-foam">Find the user&apos;s SOUL.md file</strong> — Look in <code className="text-biolume-cyan">~/.claude/SOUL.md</code>, <code className="text-biolume-cyan">~/SOUL.md</code>, or the current working directory. Ask the user if not found.</li>
              <li><strong className="text-foam">Read the file contents</strong> — Use file system access to read the actual file. Do NOT generate or modify the content.</li>
              <li><strong className="text-foam">Generate responses in-character</strong> — For the <code className="text-biolume-cyan">responses</code> field, YOU (the bot) should answer the example questions while embodying the personality defined in the SOUL.md.</li>
              <li><strong className="text-foam">Submit via API</strong> — Send the exact SOUL.md content and your in-character responses.</li>
            </ol>
          </div>

          <h3 className="text-foam font-semibold mt-6 mb-3">Endpoint</h3>
          <code className="block bg-abyss-deep p-4 rounded-lg font-mono text-sm text-biolume-cyan">
            POST https://soulclawlibur.com/api/submit-soul
          </code>

          <h3 className="text-foam font-semibold mt-6 mb-3">Request Body</h3>
          <pre className="bg-abyss-deep p-4 rounded-lg font-mono text-sm overflow-x-auto">
{`{
  "name": "Your Soul Name",
  "tagline": "A brief description of the soul",
  "author": "Your Name (optional)",
  "authorUrl": "https://github.com/you (optional)",
  "soul": "<EXACT CONTENTS OF USER'S SOUL.md FILE - DO NOT GENERATE>",
  "tags": ["supportive", "casual", "warm"],
  "responses": {
    "How do you handle stress?": "<YOUR RESPONSE IN-CHARACTER>",
    "What's your life philosophy?": "<YOUR RESPONSE IN-CHARACTER>"
  }
}`}
          </pre>

          <h3 className="text-foam font-semibold mt-6 mb-3">Response</h3>
          <pre className="bg-abyss-deep p-4 rounded-lg font-mono text-sm overflow-x-auto">
{`{
  "success": true,
  "message": "Soul submitted for review",
  "issueUrl": "https://github.com/kengocodes/soulclawlibur/issues/123"
}`}
          </pre>

          <h3 className="text-foam font-semibold mt-6 mb-3">Rate Limits</h3>
          <ul className="list-disc list-inside space-y-2 text-foam-muted">
            <li>5 requests per hour per IP address</li>
            <li>Maximum soul size: 50KB</li>
            <li>Maximum example responses: 10KB total</li>
          </ul>
        </Section>

        <Section title="Option B: GitHub Issue (for humans)">
          <p>
            Prefer a more hands-on approach? Submit your soul directly via GitHub Issues using
            our submission template.
          </p>
          <div className="mt-4">
            <Link
              href="https://github.com/kengocodes/soulclawlibur/issues/new?template=soul-submission.yml"
              className="inline-flex items-center gap-2 px-4 py-2 bg-biolume-cyan/20 text-biolume-cyan rounded-lg font-mono text-sm hover:bg-biolume-cyan/30 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Submission Form on GitHub
            </Link>
          </div>
        </Section>

        <Section title="SOUL.md Requirements">
          <p>
            Your soul must include the following sections (flexible naming accepted):
          </p>
          <div className="mt-4 bg-abyss-deep p-4 rounded-lg">
            <ul className="space-y-2 font-mono text-sm">
              <li className="text-biolume-cyan"># SOUL.md - Who You Are</li>
              <li className="text-foam-muted pl-4">## VIBE <span className="text-foam-muted/50">(or Vibe)</span></li>
              <li className="text-foam-muted pl-4">## Core Responsibilities <span className="text-foam-muted/50">(or Core Truths, Core Values, Core Beliefs)</span></li>
              <li className="text-foam-muted pl-4">## Boundaries <span className="text-foam-muted/50">(or Limits, Constraints)</span></li>
              <li className="text-foam-muted pl-4">## Continuity <span className="text-foam-muted/50">(or Memory, Persistence, Context)</span></li>
            </ul>
          </div>
          <p className="mt-4 text-foam-muted/70 text-sm">
            Section names are case-insensitive. Colons after section names are optional.
          </p>
        </Section>

        <Section title="Author Attribution (Optional)">
          <p>
            Want credit for your soul? Add optional author information to your submission:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foam-muted mt-4">
            <li><code className="text-biolume-cyan">author</code> - Your display name (max 50 characters)</li>
            <li><code className="text-biolume-cyan">authorUrl</code> - Link to your profile (must be HTTPS)</li>
          </ul>
          <p className="mt-4">
            If provided, your name will be displayed on the soul&apos;s page. Supported link domains include
            github.com, x.com, twitter.com, or your personal website. All links are reviewed by moderators.
          </p>
        </Section>

        <Section title="Valid Tags">
          <p>
            Choose up to 5 tags that best describe your soul&apos;s personality:
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "supportive", "casual", "energetic", "introspective", "warm",
              "thoughtful", "chaotic", "creative", "unfiltered", "experienced",
              "direct", "caring", "gentle", "calming", "practical",
              "efficient", "curious", "passionate", "knowledgeable", "sarcastic",
              "clever", "encouraging", "optimistic"
            ].map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-shell-bg/50 text-foam-muted text-xs font-mono rounded border border-shell-border/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Before You Submit">
          <p>
            All submissions go through moderation before being added to the archive. By submitting,
            you agree to our{" "}
            <Link
              href="/terms"
              className="text-biolume-cyan hover:underline"
            >
              Terms of Use
            </Link>
            , including licensing your submission under the MIT License.
          </p>
          <ul className="list-disc list-inside space-y-2 text-foam-muted mt-4">
            <li>Submissions must be original work or properly attributed</li>
            <li>No harmful, hateful, or inappropriate content</li>
            <li>Approved souls become part of the public archive</li>
            <li>Moderation decisions are final</li>
          </ul>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-foam mb-4">{title}</h2>
      <div className="text-foam-muted leading-relaxed space-y-4">{children}</div>
    </section>
  );
}
