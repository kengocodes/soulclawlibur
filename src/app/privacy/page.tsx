import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-4 text-foam-muted text-sm font-mono">
          Last updated: February 2, 2026
        </p>
      </header>

      {/* Content */}
      <div className="prose prose-invert max-w-none space-y-10">
        <Section title="We Don't Track You">
          <p>
            At SOULCLAWLIBUR, we don&apos;t track you. That&apos;s our privacy policy in a nutshell.
            We don&apos;t collect, store, or share your personal information. Everything runs in
            your browser, and your browsing stays private.
          </p>
        </Section>

        <Section title="What We Don't Do">
          <p>To be completely clear, here&apos;s what we don&apos;t do:</p>
          <ul className="list-disc list-inside space-y-2 text-foam-muted">
            <li>We don&apos;t use cookies, tracking pixels, or any tracking technologies</li>
            <li>We don&apos;t collect analytics, usage data, or behavioral information</li>
            <li>We don&apos;t store your searches, filter selections, or browsing history on our servers</li>
            <li>We don&apos;t require accounts, registration, or any personal information</li>
            <li>We don&apos;t share data with third parties because we don&apos;t collect any data</li>
            <li>We don&apos;t use third-party analytics, advertising, or tracking services</li>
          </ul>
        </Section>

        <Section title="How the App Works">
          <p>
            SOULCLAWLIBUR is a static archive of personality profiles that runs entirely in your
            browser. When you search or filter through soul profiles, all processing happens locally.
            This means:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foam-muted">
            <li>Search queries and filter selections stay in your browser</li>
            <li>Nothing about your browsing behavior is sent to our servers</li>
            <li>You can clear any local state by closing the browser tab</li>
            <li>The app doesn&apos;t load external scripts that could track you</li>
          </ul>
        </Section>

        <Section title="Standard Web Requests">
          <p>
            Like any website, when you visit SOULCLAWLIBUR, your browser automatically sends some
            information as part of standard web protocol, such as your IP address and browser type.
            This information is not stored or used by us. Your hosting provider may log this
            information as part of standard server operations, but we don&apos;t access, use, or
            retain these logs.
          </p>
        </Section>

        <Section title="Your Rights">
          <p>
            Under privacy laws like GDPR and CCPA, you have rights regarding your personal data.
            Since we don&apos;t collect personal data, these rights don&apos;t apply in the traditional
            sense, but we want you to know:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foam-muted">
            <li>You have the right to know what data is collected (answer: none)</li>
            <li>You have the right to access your data (answer: we don&apos;t have any)</li>
            <li>You have the right to delete your data (answer: it&apos;s already in your control—clear your browser history)</li>
            <li>You have the right to opt out of data collection (answer: there&apos;s nothing to opt out of)</li>
          </ul>
          <p>Your data never leaves your browser, so you&apos;re always in control.</p>
        </Section>

        <Section title="Children's Privacy">
          <p>
            SOULCLAWLIBUR is not directed to children under 13 (or under 16 in the EU). Since we
            don&apos;t collect personal information from anyone, we also don&apos;t knowingly collect
            personal information from children.
          </p>
        </Section>

        <Section title="Data Controller">
          <p>
            For the purposes of GDPR and other privacy laws, SOULCLAWLIBUR is the data controller.
            However, since we don&apos;t collect or process personal data, there&apos;s no data
            processing to control.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            We may update this privacy policy from time to time. When we do, we&apos;ll update the
            &quot;Last updated&quot; date at the top of this page. Since we don&apos;t collect contact
            information, we can&apos;t notify you directly of changes, but you can check this page
            anytime to see the current policy. Your continued use of SOULCLAWLIBUR after any changes
            means you accept the updated policy.
          </p>
        </Section>

        <Section title="Open Source Transparency">
          <p>
            SOULCLAWLIBUR is open source. The complete source code is publicly available on{" "}
            <Link
              href="https://github.com/openclaw/soulclawlibur"
              className="text-biolume-cyan hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            , which means you can review exactly how the app works and verify our privacy claims yourself.
          </p>
        </Section>

        <Section title="Questions">
          <p>
            Since SOULCLAWLIBUR is open source, you can review the source code to verify our privacy
            claims firsthand. For questions, visit our{" "}
            <Link
              href="https://github.com/openclaw/soulclawlibur"
              className="text-biolume-cyan hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </Link>
            .
          </p>
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
