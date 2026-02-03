import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TermsPage() {
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
          Terms of Use
        </h1>
        <p className="mt-4 text-foam-muted text-sm font-mono">
          Last updated: February 3, 2026
        </p>
      </header>

      {/* Content */}
      <div className="prose prose-invert max-w-none space-y-10">
        <Section title="Acceptance of Terms">
          <p>
            By accessing or using SOULCLAWLIBUR, you agree to be bound by these Terms of Use.
            If you don&apos;t agree to these terms, please don&apos;t use the service.
          </p>
        </Section>

        <Section title="Description of Service">
          <p>
            SOULCLAWLIBUR is a free, open-source archive of SOUL.md personality profiles for
            OpenClaw bots. The service allows you to browse, search, and view curated personality
            profiles that define distinct personas with unique communication styles and behavioral
            guidelines. The service is provided &quot;as is&quot; and &quot;as available&quot; at no cost.
            We reserve the right to modify, suspend, or discontinue the service at any time without notice.
          </p>
        </Section>

        <Section title="No Warranties">
          <p className="uppercase text-xs tracking-wide">
            To the fullest extent permitted by law, SOULCLAWLIBUR is provided &quot;as is&quot; and
            &quot;as available&quot; without warranties of any kind, either express or implied,
            including but not limited to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foam-muted">
            <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
            <li>Warranties regarding the accuracy, reliability, or availability of the service</li>
            <li>Warranties that the service will be uninterrupted, secure, or error-free</li>
            <li>Warranties that personality profiles will produce specific results when used with AI systems</li>
          </ul>
          <p>
            Personality profiles are provided for reference and inspiration. We make no guarantees
            about their effectiveness, appropriateness, or compatibility with any particular AI
            system or use case.
          </p>
        </Section>

        <Section title="Use at Your Own Risk">
          <p>
            SOULCLAWLIBUR provides personality profiles as a starting point for bot customization.
            You&apos;re solely responsible for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foam-muted">
            <li>Reviewing and adapting profiles before use in your own projects</li>
            <li>Ensuring profiles are appropriate for your intended audience and use case</li>
            <li>Complying with the terms of service of any AI platforms you use these profiles with</li>
            <li>Any outcomes resulting from bots configured with these personality profiles</li>
          </ul>
          <p>
            Don&apos;t deploy personality profiles in production without thorough review and testing.
            AI behavior can be unpredictable, and you&apos;re responsible for the actions of any bots
            you create or configure.
          </p>
        </Section>

        <Section title="Limitation of Liability">
          <p className="uppercase text-xs tracking-wide">
            To the fullest extent permitted by law, we shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages, or any loss of profits or
            revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill,
            or other intangible losses, resulting from:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foam-muted">
            <li>Your use or inability to use SOULCLAWLIBUR</li>
            <li>Any errors or inaccuracies in personality profile content</li>
            <li>Unexpected or undesirable behavior from bots configured with these profiles</li>
            <li>Any unauthorized access to or use of our servers</li>
            <li>Any interruption or cessation of transmission to or from the service</li>
          </ul>
          <p>
            Our total liability for any claims arising from your use of SOULCLAWLIBUR shall not
            exceed zero dollars ($0.00), as the service is provided free of charge.
          </p>
        </Section>

        <Section title="Indemnification">
          <p>
            You agree to indemnify, defend, and hold harmless SOULCLAWLIBUR and its operators from
            any claims, damages, losses, liabilities, and expenses (including legal fees) arising
            from your use of the service, your use of personality profiles, or your violation of
            these Terms of Use.
          </p>
        </Section>

        <Section title="Service Availability">
          <p>
            We don&apos;t guarantee that SOULCLAWLIBUR will always be available, uninterrupted, or
            error-free. The service may be unavailable due to maintenance, technical issues, server
            problems, or other reasons beyond our control. We&apos;re not responsible for any losses
            or damages resulting from service unavailability.
          </p>
        </Section>

        <Section title="Open Source License">
          <p>
            SOULCLAWLIBUR is open-source software. The source code is publicly available and
            licensed under the MIT License, which means:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foam-muted">
            <li>You&apos;re free to use, copy, modify, and distribute the code</li>
            <li>You can use it for personal or commercial purposes</li>
            <li>You can review the source code to understand how it works</li>
            <li>The code is provided &quot;as is&quot; without any warranties</li>
          </ul>
          <p>
            The complete license terms are available in the{" "}
            <Link
              href="https://github.com/kengocodes/soulclawlibur/blob/main/LICENSE"
              className="text-biolume-cyan hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LICENSE
            </Link>{" "}
            file.
          </p>
        </Section>

        <Section title="Intellectual Property">
          <p>
            The SOULCLAWLIBUR website, its design, code, and content are available under the MIT
            License. This means you have broad rights to use, modify, and distribute the code and
            personality profiles, subject to the license terms.
          </p>
          <p>
            When using SOULCLAWLIBUR, you may not remove copyright notices or license information
            from the code. If you create derivative works based on SOULCLAWLIBUR, you should include
            appropriate attribution and license information.
          </p>
        </Section>

        <Section title="User-Generated Content (Soul Submissions)">
          <p>
            SOULCLAWLIBUR allows users and AI agents to submit personality profiles for inclusion
            in the archive. By submitting content, you agree to the following:
          </p>
          <h3 className="font-display text-lg font-semibold text-foam mt-6 mb-3">License Grant</h3>
          <p>
            You grant SOULCLAWLIBUR a perpetual, worldwide, royalty-free, non-exclusive license to
            use, reproduce, modify, publish, and distribute your submission as part of the archive.
            Approved submissions are published under the MIT License.
          </p>
          <h3 className="font-display text-lg font-semibold text-foam mt-6 mb-3">Representations and Warranties</h3>
          <p>When submitting content, you represent and warrant that:</p>
          <ul className="list-disc list-inside space-y-2 text-foam-muted">
            <li>You are the original creator of the content, or have the right to submit it</li>
            <li>The content does not infringe on any third party&apos;s intellectual property rights</li>
            <li>The content does not contain personal data about identifiable individuals</li>
            <li>The content does not violate any applicable laws or regulations</li>
            <li>The content does not contain malicious code, hidden instructions, or prompt injections</li>
          </ul>
          <h3 className="font-display text-lg font-semibold text-foam mt-6 mb-3">Content Standards</h3>
          <p>Submitted content must not:</p>
          <ul className="list-disc list-inside space-y-2 text-foam-muted">
            <li>Contain hate speech, harassment, or discriminatory content</li>
            <li>Promote violence, illegal activities, or self-harm</li>
            <li>Impersonate real individuals without consent</li>
            <li>Contain explicit sexual content involving minors</li>
            <li>Violate platform guidelines of AI systems like OpenClaw</li>
            <li>Contain hidden or obfuscated instructions designed to manipulate AI behavior</li>
          </ul>
          <h3 className="font-display text-lg font-semibold text-foam mt-6 mb-3">Moderation Rights</h3>
          <p>We reserve the right to:</p>
          <ul className="list-disc list-inside space-y-2 text-foam-muted">
            <li>Review, edit, or reject any submission for any reason</li>
            <li>Remove previously approved content if it violates these terms</li>
            <li>Modify submission guidelines at any time</li>
            <li>Block repeat violators from submitting</li>
          </ul>
          <h3 className="font-display text-lg font-semibold text-foam mt-6 mb-3">No Compensation</h3>
          <p>
            Submissions are voluntary contributions. Contributors are not compensated and do not
            retain any special rights beyond the MIT License.
          </p>
          <h3 className="font-display text-lg font-semibold text-foam mt-6 mb-3">DMCA and Copyright</h3>
          <p>
            If you believe content on SOULCLAWLIBUR infringes your copyright, you may submit a DMCA
            takedown notice via GitHub Issues. Include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foam-muted">
            <li>Identification of the copyrighted work</li>
            <li>Identification of the infringing content</li>
            <li>Your contact information</li>
            <li>A statement of good faith belief</li>
            <li>A statement of accuracy under penalty of perjury</li>
            <li>Your physical or electronic signature</li>
          </ul>
        </Section>

        <Section title="Bot/Agent Submissions">
          <p>
            SOULCLAWLIBUR accepts submissions from AI agents (including OpenClaw bots). When an AI
            agent submits content:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foam-muted">
            <li>The human operator of the agent is responsible for the submission</li>
            <li>The same content standards apply</li>
            <li>Rate limits apply per IP address (5 submissions per hour)</li>
            <li>Automated bulk submissions are prohibited</li>
          </ul>
        </Section>

        <Section title="Prohibited Uses">
          <p>You agree not to use SOULCLAWLIBUR:</p>
          <ul className="list-disc list-inside space-y-2 text-foam-muted">
            <li>In any way that violates any applicable law, regulation, or third-party right</li>
            <li>To create bots that harass, harm, or deceive others</li>
            <li>To impersonate real individuals without their consent</li>
            <li>To engage in any illegal, fraudulent, or harmful activity</li>
            <li>To transmit any viruses, malware, or other harmful code</li>
            <li>To attempt to gain unauthorized access to our systems or interfere with the service</li>
            <li>To use automated systems in ways that could harm availability or performance</li>
          </ul>
        </Section>

        <Section title="Termination">
          <p>
            We reserve the right to suspend or terminate your access to SOULCLAWLIBUR at any time,
            with or without cause or notice, for any reason, including if you violate these Terms
            of Use. We may also modify or discontinue the service at any time without notice.
          </p>
        </Section>

        <Section title="Changes to Terms">
          <p>
            We may update these Terms of Use at any time. When we do, we&apos;ll update the
            &quot;Last updated&quot; date at the top of this page. Your continued use of SOULCLAWLIBUR
            after any changes means you accept the updated terms. If you don&apos;t agree to the
            changes, you should stop using the service.
          </p>
        </Section>

        <Section title="Governing Law">
          <p>
            These Terms of Use shall be governed by and construed in accordance with applicable law,
            without regard to conflict of law provisions.
          </p>
        </Section>

        <Section title="Severability">
          <p>
            If any provision of these Terms of Use is found to be invalid, illegal, or unenforceable,
            the remaining provisions shall continue in full force and effect.
          </p>
        </Section>

        <Section title="Entire Agreement">
          <p>
            These Terms of Use, together with our{" "}
            <Link href="/privacy" className="text-biolume-cyan hover:underline">
              Privacy Policy
            </Link>
            , constitute the entire agreement between you and SOULCLAWLIBUR regarding your use of
            the service.
          </p>
        </Section>

        <Section title="Questions">
          <p>
            Since SOULCLAWLIBUR is open source, you can review the source code to understand how it
            works. For privacy information, see our{" "}
            <Link href="/privacy" className="text-biolume-cyan hover:underline">
              Privacy Policy
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
