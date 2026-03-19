import type { Metadata } from "next";
import { Header, Footer } from "@/components";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "James — Technical Stack & Security | Good Company",
  description: "Technical architecture, infrastructure, and security details for James AI Executive Assistant.",
  robots: { index: false, follow: false },
};

function ServiceCard({
  name,
  role,
  provider,
  region,
  security,
  links,
}: {
  name: string;
  role: string;
  provider: string;
  region: string;
  security: string[];
  links: { label: string; url: string }[];
}) {
  return (
    <div className="rounded-xl border border-border bg-white p-6 lg:p-8">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-dark">{name}</h3>
          <p className="text-sm text-text-light">{role}</p>
        </div>
        <span className="shrink-0 rounded-full bg-cream px-3 py-1 font-mono text-xs text-text-light">
          {region}
        </span>
      </div>
      <p className="mb-4 text-sm text-text-light">Provider: {provider}</p>
      <div className="mb-4">
        <p className="mb-2 text-sm font-semibold text-dark">Security</p>
        <ul className="space-y-1">
          {security.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text">
              <span className="mt-1 shrink-0 text-primary">&#10003;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-3">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-3 py-1.5 font-mono text-xs text-text-light transition hover:border-primary hover:text-primary"
          >
            {link.label} &#8599;
          </a>
        ))}
      </div>
    </div>
  );
}

export default function JamesStackPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main>
          {/* Hero */}
          <section className="bg-[#004D36] pb-16 pt-32 lg:pb-20 lg:pt-44">
            <div className="mx-auto max-w-3xl px-6 lg:px-10">
              <p className="mb-4 font-mono text-sm uppercase tracking-widest text-primary-light/70">
                James / Technical Reference
              </p>
              <h1 className="mb-6 text-4xl font-semibold leading-tight text-white lg:text-5xl">
                Stack & Security
              </h1>
              <p className="text-xl leading-relaxed text-[#A8D5C2]">
                Technical architecture, infrastructure providers, and their
                security posture. This page is unlisted and intended for
                internal review.
              </p>
            </div>
          </section>

          {/* Architecture Overview */}
          <section className="py-12 lg:py-20">
            <div className="mx-auto max-w-3xl px-6 lg:px-10">
              <h2 className="mb-8 text-3xl font-semibold text-dark">
                Architecture Overview
              </h2>
              <div className="mb-10 rounded-xl border border-border bg-cream p-6 font-mono text-xs leading-relaxed text-text lg:p-8 lg:text-sm">
                <pre className="overflow-x-auto whitespace-pre">{`Channels        Router        AI            Storage
────────        ──────        ──            ───────
Email    ──►    Express ──►   Claude  ──►   Supabase
WhatsApp ──►    (Railway)     (Anthropic)   (Postgres)
Teams    ──►                          ◄──
                                       │
                Cron    ──►   Claude  ──►   Resend
                (daily)       (digest)      (email)`}</pre>
              </div>
              <div className="space-y-4 text-lg leading-relaxed text-text">
                <p>
                  Every inbound message — regardless of channel — goes through
                  the same processing pipeline. The message is normalized,
                  the user is identified by their email or phone number, their
                  current task list and recent conversation history are
                  fetched, and the full context is sent to Claude for
                  processing. Claude returns a conversational reply and any
                  task mutations (creates, completes, deferrals), which are
                  applied to the database. The reply is sent back through
                  whichever channel the message came from.
                </p>
                <p>
                  The daily digest runs on a cron schedule. For each user, it
                  fetches their active tasks, sends them to Claude for
                  summarization, and delivers the briefing via email.
                </p>
              </div>
            </div>
          </section>

          {/* Infrastructure */}
          <section className="bg-cream-textured py-12 lg:py-20">
            <div className="mx-auto max-w-3xl px-6 lg:px-10">
              <h2 className="mb-8 text-3xl font-semibold text-dark">
                Infrastructure
              </h2>
              <div className="space-y-6">
                <ServiceCard
                  name="Anthropic Claude API"
                  role="AI processing — intent parsing, task management, digest generation"
                  provider="Anthropic, PBC"
                  region="US"
                  security={[
                    "SOC 2 Type II certified",
                    "API data is NOT used for model training (Commercial Terms of Service)",
                    "Data encrypted in transit (TLS 1.2+) and at rest (AES-256)",
                    "Zero data retention on API inputs/outputs by default",
                    "HIPAA-eligible (BAA available on request)",
                    "Regular third-party penetration testing",
                  ]}
                  links={[
                    { label: "Usage Policy", url: "https://www.anthropic.com/policies/usage-policy" },
                    { label: "Privacy Policy", url: "https://www.anthropic.com/policies/privacy" },
                    { label: "Security", url: "https://www.anthropic.com/security" },
                  ]}
                />

                <ServiceCard
                  name="Supabase"
                  role="Database — user profiles, task storage, conversation history"
                  provider="Supabase, Inc."
                  region="North America (us-east-1)"
                  security={[
                    "SOC 2 Type II certified",
                    "Data encrypted at rest (AES-256) and in transit (TLS 1.2+)",
                    "Row Level Security (RLS) available at database level",
                    "Built on PostgreSQL with automatic backups",
                    "API access restricted by service-role keys (never exposed to clients)",
                    "No public-facing dashboard for end users",
                    "HIPAA-compliant plans available",
                  ]}
                  links={[
                    { label: "Security", url: "https://supabase.com/security" },
                    { label: "Privacy Policy", url: "https://supabase.com/privacy" },
                    { label: "SOC 2 Report", url: "https://supabase.com/security" },
                  ]}
                />

                <ServiceCard
                  name="Railway"
                  role="Application hosting — Node.js server, webhook endpoints, cron scheduler"
                  provider="Railway Corporation"
                  region="US West (us-west2)"
                  security={[
                    "SOC 2 Type II certified",
                    "Runs on Google Cloud Platform infrastructure",
                    "Private networking between services",
                    "Automatic TLS/SSL on all public endpoints",
                    "Environment variables encrypted at rest",
                    "No SSH access — deployments via Git push only",
                  ]}
                  links={[
                    { label: "Security", url: "https://railway.com/security" },
                    { label: "Privacy Policy", url: "https://railway.com/legal/privacy" },
                  ]}
                />

                <ServiceCard
                  name="Resend"
                  role="Email — inbound email reception (webhooks) and outbound email delivery"
                  provider="Resend, Inc."
                  region="US East (us-east-1)"
                  security={[
                    "SOC 2 Type II certified",
                    "Data encrypted in transit (TLS) and at rest",
                    "Webhook signing secrets for payload verification",
                    "DKIM, SPF, and DMARC email authentication",
                    "Email content not used for training or analytics",
                  ]}
                  links={[
                    { label: "Security", url: "https://resend.com/security" },
                    { label: "Privacy Policy", url: "https://resend.com/legal/privacy-policy" },
                  ]}
                />

                <ServiceCard
                  name="GitHub"
                  role="Source code repository (private)"
                  provider="GitHub, Inc. (Microsoft)"
                  region="US"
                  security={[
                    "SOC 2 Type II certified",
                    "Repository is private — not publicly accessible",
                    "No client data stored in code repository",
                    "Two-factor authentication enforced",
                  ]}
                  links={[
                    { label: "Security", url: "https://github.com/security" },
                  ]}
                />
              </div>
            </div>
          </section>

          {/* Data Flow */}
          <section className="py-12 lg:py-20">
            <div className="mx-auto max-w-3xl px-6 lg:px-10">
              <h2 className="mb-8 text-3xl font-semibold text-dark">
                Data Flow & Retention
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-text">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-dark">
                    What data is stored
                  </h3>
                  <p>
                    The Supabase database stores three types of data: user
                    profiles (name, email, timezone, preferences), tasks
                    (title, status, due dates, priority, timestamps), and
                    message history (inbound and outbound messages with
                    timestamps and channel). No passwords, no payment
                    information, no files or attachments are stored.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-dark">
                    What data is sent to Claude
                  </h3>
                  <p>
                    Each API call to Claude includes: the system prompt
                    (personality and rules), the user&apos;s current active task
                    list, the last 20 messages of conversation history, and
                    the new inbound message. Claude processes this and returns
                    a response. Anthropic does not retain API inputs or
                    outputs.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-dark">
                    What data is NOT collected
                  </h3>
                  <p>
                    James does not access, read, or store: email inbox
                    contents, calendar data (unless explicitly connected),
                    browser history, device information, location data, or any
                    files on the user&apos;s devices. James only knows what the
                    user directly tells him via message.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-dark">
                    Administrative access
                  </h3>
                  <p>
                    Alex Tribe (Good Company) has administrative access to the
                    Supabase database, Railway deployment, and Resend account.
                    This access is necessary for onboarding, troubleshooting,
                    and system maintenance. Database access is authenticated
                    via service-role API keys. There is no shared or
                    delegated admin access.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Model Details */}
          <section className="bg-cream-textured py-12 lg:py-20">
            <div className="mx-auto max-w-3xl px-6 lg:px-10">
              <h2 className="mb-8 text-3xl font-semibold text-dark">
                AI Model Details
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-text">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="py-3 pr-4 font-semibold text-dark">Model</td>
                        <td className="py-3">Claude Opus 4.6 (Anthropic)</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-semibold text-dark">API endpoint</td>
                        <td className="py-3 font-mono text-sm">api.anthropic.com</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-semibold text-dark">Data retention</td>
                        <td className="py-3">None — inputs and outputs are not stored by Anthropic</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-semibold text-dark">Training usage</td>
                        <td className="py-3">API data is explicitly excluded from model training</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-semibold text-dark">Encryption</td>
                        <td className="py-3">TLS 1.2+ in transit, AES-256 at rest</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-semibold text-dark">Compliance</td>
                        <td className="py-3">SOC 2 Type II, HIPAA-eligible</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Limitations */}
          <section className="py-12 lg:py-16">
            <div className="mx-auto max-w-3xl px-6 lg:px-10">
              <h2 className="mb-8 text-3xl font-semibold text-dark">
                Current Limitations
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-text">
                <p>
                  This is a managed service, not an enterprise SaaS product.
                  The following limitations should be understood:
                </p>
                <ul className="space-y-3 pl-1">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-text-light" />
                    <span>The overall system has not been independently audited (individual providers have their own SOC 2 certifications)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-text-light" />
                    <span>No formal SLA — uptime depends on Railway, Supabase, and Anthropic availability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-text-light" />
                    <span>Single administrator (Alex Tribe) — no redundancy in system access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-text-light" />
                    <span>Not suitable for regulated data (HIPAA, PCI, SOX) without additional review</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-text-light" />
                    <span>Custom email domain (for unified send/receive address) requires paid Resend plan</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
