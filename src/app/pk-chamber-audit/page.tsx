import { Metadata } from "next";
import { Header, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Website Audit — Peterborough & Kawarthas Chamber of Commerce",
  description:
    "Full sitemap audit and redesign recommendations for pkchamber.ca",
  robots: { index: false, follow: false },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const currentPages = [
  {
    category: "Core / Evergreen",
    count: 15,
    status: "keep" as const,
    pages: [
      "index.html",
      "about-us.html",
      "about-us1.html",
      "contact-us.html",
      "board-of-directors.html",
      "staff-directory.html",
      "careers.html",
      "membership.html",
      "become-a-member.html",
      "benefits.html",
      "chambers-plan.html",
      "directory.html",
      "what-we-do.html",
      "accessibility.html",
      "privacy.html",
    ],
  },
  {
    category: "Events (Current / Recurring)",
    count: 15,
    status: "keep" as const,
    pages: [
      "business-summit.html",
      "business-summit1.html",
      "chamberam.html",
      "luminary-awards.html",
      "the-business-exchange-tbx.html",
      "not-for-profit-group-nfp.html",
      "not-for-profit-group.html",
      "seniors-showcase.html",
      "sales-lead-network.html",
      "host-a-chamber-event.html",
      "grow-events-with-county.html",
      "not-for-profit-showcase.html",
      "love-local-expo.html",
      "exhibitors.html",
      "mayors-breakfast--with-mayor-leal.html",
    ],
  },
  {
    category: "Advocacy & Policy",
    count: 12,
    status: "keep" as const,
    pages: [
      "advocacy.html",
      "advocacy-at-work.html",
      "advocacy-wins.html",
      "advocacy-wins1.html",
      "policy-resolutions.html",
      "policy-resolutions1.html",
      "policy-resolutions2.html",
      "policy-committee.html",
      "policy-publications.html",
      "government-advocacy.html",
      "issues-at-work.html",
      "municipal-business-platform.html",
    ],
  },
  {
    category: "Business Resources",
    count: 15,
    status: "keep" as const,
    pages: [
      "resource-hub.html",
      "business-resources.html",
      "business-resources1.html",
      "starting-a-business.html",
      "growing-a-business.html",
      "financial-assistance.html",
      "financial.html",
      "grants.html",
      "loans.html",
      "training-supports.html",
      "workforce-info.html",
      "export-ready.html",
      "business-programs.html",
      "technology.html",
      "micro-certifications.html",
    ],
  },
  {
    category: "News & Content",
    count: 8,
    status: "keep" as const,
    pages: [
      "news.html",
      "voice-of-business.html",
      "voice-of-business1.html",
      "the-business-beat.html",
      "member-podcasts.html",
      "the-local-show.html",
      "subscribe-to-e-newsletter.html",
      "subscribe-to-e-newsletter1.html",
    ],
  },
  {
    category: "Tariff Support (New, 2025)",
    count: 5,
    status: "keep" as const,
    pages: [
      "breaking-news---tariff-support.html",
      "updates.html",
      "resources.html",
      "support.html",
      "trade-analytics.html",
      "trade-opportunities.html",
    ],
  },
  {
    category: "Love Local Campaign",
    count: 5,
    status: "merge" as const,
    pages: [
      "lovelocalptbokawarthas-campaign.html",
      "lovelocalptbo-sponsors.html",
      "love-local-holidays.html",
      "love-local-expo.html",
      "hometown-holidays.html",
      "hometown-holiday.html",
      "lovelocalptboca.html",
    ],
  },
  {
    category: "COVID-19 Related",
    count: 12,
    status: "archive" as const,
    pages: [
      "covid-19-portal.html",
      "covid-19-pandemic-preparedness.html",
      "rapid-screening-kits.html",
      "financial-support-programs.html",
      "business-resources-for-recovery.html",
      "government-responses.html",
      "federal-government-response.html",
      "provincial-government-response.html",
      "peterborough-public-health-response.html",
      "vaccine-information.html",
      "wellness-support.html",
      "wellness-ptbo.html",
    ],
  },
  {
    category: "Past Elections",
    count: 4,
    status: "archive" as const,
    pages: [
      "federal-election-2019.html",
      "federal-election-2021.html",
      "provincial-election-2018.html",
      "provincial-election-2022.html",
    ],
  },
  {
    category: "Past Event One-Offs",
    count: 30,
    status: "archive" as const,
    pages: [
      "power-hour-2018.html",
      "power-hour.html",
      "china-trip-2018.html",
      "india-trip-2018.html",
      "leadercast-agenda.html",
      "leadercast-sponsors.html",
      "leadercast-virtual-swag-bag.html",
      "future-ready-business-summit-2020.html",
      "2020-peterborough-business-excellence-awards.html",
      "agenda-2020.html",
      "opening-remarks.html",
      "chairs-report.html",
      "treasurers-report.html",
      "message-from-the-chair.html",
      "annual-general-meeting.html",
      "workshops.html",
      "workshop-1a-what-happens-if.html",
      "workshop-1b-the-psychology-of-the-sale.html",
      "workshop-2a-the-circle-of-sustainability.html",
      "workshop-2b-the-impact-of-digitization.html",
      "lunch-panel-discussion.html",
      "morning-keynote-daniel-lewis.html",
      "meet-the-speakers.html",
      "meet-the-speakers1.html",
      "digital-swag-bag.html",
      "associate-pass.html",
      "2018-by-the-numbers.html",
      "travel-program.html",
      "today.html",
      "consolidation-vote.html",
    ],
  },
  {
    category: "Speaker Profile Pages",
    count: 8,
    status: "archive" as const,
    pages: [
      "earvin-magic-johnson.html",
      "bozoma-saint-john.html",
      "dr-henry-cloud.html",
      "amy-jo-martin.html",
      "rahaf-harfoush.html",
      "richard-montanez.html",
      "matt-wallaert.html",
      "boss-videos.html",
    ],
  },
  {
    category: "Individual Digital Profiles",
    count: 6,
    status: "archive" as const,
    pages: [
      "kathleen-thompson-digital.html",
      "olivia-farr-digital.html",
      "shelby-parker-digital.html",
      "joel-wiebe-digital.html",
      "sarah-budd-digital.html",
      "lindsay-walker-chiarelli-digital.html",
    ],
  },
  {
    category: "Duplicate / Variant Pages",
    count: 10,
    status: "delete" as const,
    pages: [
      "about-us1.html (duplicate of about-us.html)",
      "resources1.html (duplicate of resources.html)",
      "business-resources1.html (duplicate of business-resources.html)",
      "advocacy-wins1.html (duplicate of advocacy-wins.html)",
      "voice-of-business1.html (duplicate of voice-of-business.html)",
      "policy-resolutions1.html (duplicate)",
      "policy-resolutions2.html (duplicate)",
      "join-old.html (old join page)",
      "subscribe-to-e-newsletter1.html (duplicate)",
      "business-summit1.html (duplicate)",
    ],
  },
  {
    category: "Internal / Junk Pages",
    count: 5,
    status: "delete" as const,
    pages: [
      "copy-this-page.html",
      "mc-template.html",
      "random-links.html",
      "embeddable-widgets.html",
      "upload-verification.html",
    ],
  },
  {
    category: "Expired Programs",
    count: 8,
    status: "archive" as const,
    pages: [
      "canadian-digital-adoption-plan.html",
      "cdap-grants--gustin-quon.html",
      "canadaunited-small-business-relief-fund.html",
      "student-work-placement-program.html",
      "canada-summer-jobs-positions.html",
      "small-business-too-big-to-ignore.html",
      "advocacy-bill-148.html",
      "articles-on-bill-148.html",
    ],
  },
  {
    category: "Miscellaneous / Niche",
    count: 17,
    status: "merge" as const,
    pages: [
      "peterborough-history.html",
      "lakefield-history.html",
      "leisure-activities.html",
      "funeral-homes.html",
      "retirement-homes.html",
      "personal-care.html",
      "social-media.html",
      "cottage-and-tourism-regulations.html",
      "past-chairs-of-the-chamber.html",
      "knowledge.html",
      "knowledge-channel.html",
      "video-channel.html",
      "research.html",
      "partners.html",
      "profile-and-sponsorships.html",
      "teamptbo.html",
      "group-health-insurance.html",
    ],
  },
  {
    category: "Membership Tiers / Payment",
    count: 10,
    status: "merge" as const,
    pages: [
      "3-star-connections.html",
      "4-star-growth.html",
      "5-star-leadership.html",
      "pay-monthly.html",
      "pay-monthly-connections.html",
      "pay-monthly-growth.html",
      "pay-monthly-leadership.html",
      "join-us.html",
      "request-more-info.html",
      "members-only.html",
    ],
  },
  {
    category: "Other",
    count: 10,
    status: "keep" as const,
    pages: [
      "terms--conditions.html",
      "security.html",
      "feedback.html",
      "site-map.html",
      "training-confirmation.html",
      "26-coffees.html",
      "26-coffees-program.html",
      "business-owners-sharing-solutions-boss.html",
      "vob-archive.html",
      "policy-report-card-2018.html",
    ],
  },
];

const proposedSitemap = [
  {
    section: "/",
    label: "Home",
    children: [],
  },
  {
    section: "/about",
    label: "About Us",
    children: [
      { path: "/about/team", label: "Staff Directory & Board" },
      { path: "/about/history", label: "Peterborough & Lakefield History" },
      { path: "/about/careers", label: "Careers" },
      { path: "/about/contact", label: "Contact Us" },
    ],
  },
  {
    section: "/membership",
    label: "Membership",
    children: [
      { path: "/membership/join", label: "Become a Member (all tiers on one page)" },
      { path: "/membership/benefits", label: "Benefits & Chambers Plan" },
      { path: "/membership/directory", label: "Member Directory" },
      { path: "/membership/resources", label: "Members-Only Resources" },
    ],
  },
  {
    section: "/events",
    label: "Events",
    children: [
      { path: "/events", label: "Calendar (current & upcoming)" },
      { path: "/events/business-summit", label: "Business Summit (updated annually)" },
      { path: "/events/luminary-awards", label: "Luminary Awards" },
      { path: "/events/tbx", label: "The Business Exchange" },
      { path: "/events/chamberam", label: "ChamberAM" },
      { path: "/events/nfp-group", label: "Not-for-Profit Group" },
      { path: "/events/love-local", label: "Love Local (consolidated)" },
      { path: "/events/host", label: "Host a Chamber Event" },
    ],
  },
  {
    section: "/advocacy",
    label: "Advocacy",
    children: [
      { path: "/advocacy", label: "Overview & Current Priorities" },
      { path: "/advocacy/policy", label: "Policy Resolutions (single, current)" },
      { path: "/advocacy/wins", label: "Advocacy Wins" },
      { path: "/advocacy/tariffs", label: "Tariff Support (topical, rotates)" },
    ],
  },
  {
    section: "/resources",
    label: "Resources",
    children: [
      { path: "/resources", label: "Resource Hub" },
      { path: "/resources/starting", label: "Starting a Business" },
      { path: "/resources/growing", label: "Growing a Business" },
      { path: "/resources/funding", label: "Financial Assistance (grants & loans)" },
      { path: "/resources/training", label: "Training & Workforce" },
      { path: "/resources/export", label: "Export Ready" },
      { path: "/resources/programs", label: "Business Programs" },
    ],
  },
  {
    section: "/news",
    label: "News",
    children: [
      { path: "/news", label: "News Feed / Blog" },
      { path: "/news/podcast", label: "Voice of Business Podcast" },
      { path: "/news/newsletter", label: "Newsletter Signup" },
    ],
  },
  {
    section: "/legal",
    label: "Legal",
    children: [
      { path: "/privacy", label: "Privacy Policy" },
      { path: "/accessibility", label: "Accessibility" },
      { path: "/terms", label: "Terms of Service" },
    ],
  },
];

const migrationActions = [
  { action: "Delete", count: "~45", color: "bg-red-50 text-red-700 border-red-200", description: "Junk pages, templates, duplicates, empty portals" },
  { action: "Archive", count: "~60", color: "bg-amber-50 text-amber-700 border-amber-200", description: "Past elections, events, speakers, COVID, expired programs" },
  { action: "Merge", count: "~35", color: "bg-blue-50 text-blue-700 border-blue-200", description: "Duplicate versions, Love Local, financial, history, membership tiers" },
  { action: "Keep / Migrate", count: "~50", color: "bg-emerald-50 text-emerald-700 border-emerald-200", description: "Core pages restructured into clean hierarchy" },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function statusBadge(status: string) {
  const map: Record<string, string> = {
    keep: "bg-emerald-100 text-emerald-800",
    merge: "bg-blue-100 text-blue-800",
    archive: "bg-amber-100 text-amber-800",
    delete: "bg-red-100 text-red-800",
  };
  return map[status] ?? "bg-gray-100 text-gray-800";
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PKChamberAuditPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#004D36] pt-32 pb-20 lg:pt-44 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="mb-4 font-mono text-sm tracking-widest text-[#A8D5C2] uppercase">
              Website Audit
            </p>
            <h1 className="mb-6 text-4xl font-medium text-white lg:text-6xl">
              Peterborough &amp; Kawarthas
              <br />
              Chamber of Commerce
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#A8D5C2]">
              A full sitemap audit of{" "}
              <a
                href="https://www.pkchamber.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[#A8D5C2]/40 hover:decoration-white"
              >
                pkchamber.ca
              </a>{" "}
              with content freshness assessment, proposed information
              architecture, and migration recommendations.
            </p>
            <div className="mt-10 flex flex-wrap gap-6 font-mono text-sm text-[#A8D5C2]">
              <div>
                <span className="text-3xl font-semibold text-white">190</span>
                <br />
                pages in sitemap
              </div>
              <div className="border-l border-[#A8D5C2]/20 pl-6">
                <span className="text-3xl font-semibold text-gold">~35%</span>
                <br />
                outdated or dead weight
              </div>
              <div className="border-l border-[#A8D5C2]/20 pl-6">
                <span className="text-3xl font-semibold text-white">~55</span>
                <br />
                proposed active pages
              </div>
              <div className="border-l border-[#A8D5C2]/20 pl-6">
                <span className="text-3xl font-semibold text-white">Weebly</span>
                <br />
                current platform
              </div>
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="mb-8 text-3xl">Executive Summary</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-white p-8">
                <h3 className="mb-4 text-lg font-bold text-dark">Key Findings</h3>
                <ul className="space-y-3 text-text-light">
                  <li className="flex gap-3">
                    <span className="mt-1 text-red-500">&#9679;</span>
                    <span>~60-70 pages serve no purpose to visitors today (COVID portals, 2018 events, expired programs)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-amber-500">&#9679;</span>
                    <span>10+ duplicate pages (about-us + about-us1, policy-resolutions x3, etc.)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-amber-500">&#9679;</span>
                    <span>No content hierarchy: COVID-19 still featured as a primary resource in 2026</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-amber-500">&#9679;</span>
                    <span>No events archive pattern: past events live at same URL level as current</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-blue-500">&#9679;</span>
                    <span>Weebly platform limits: no dynamic content, no proper CMS, static .html files</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-white p-8">
                <h3 className="mb-4 text-lg font-bold text-dark">Recommendation</h3>
                <p className="mb-4 text-text-light">
                  Migrate from Weebly to a modern headless CMS + Next.js stack. Restructure 190 flat pages into ~55 organized pages across 6 clear sections.
                </p>
                <div className="space-y-2">
                  {migrationActions.map((a) => (
                    <div
                      key={a.action}
                      className={`flex items-center justify-between rounded-lg border px-4 py-2.5 text-sm font-medium ${a.color}`}
                    >
                      <span>
                        {a.action} <span className="font-normal opacity-70">{a.description}</span>
                      </span>
                      <span className="font-mono font-semibold">{a.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Sitemap Audit */}
        <section className="bg-cream py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="mb-2 text-3xl">Current Sitemap</h2>
            <p className="mb-10 text-text-light">
              All 190 pages from{" "}
              <a
                href="https://www.pkchamber.ca/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                pkchamber.ca/sitemap.xml
              </a>
              , categorized by type and recommended action. Last modified date for all pages: March 30, 2026.
            </p>

            <div className="space-y-6">
              {currentPages.map((group) => (
                <details
                  key={group.category}
                  className="group rounded-xl border border-border bg-white"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-5 select-none">
                    <div className="flex items-center gap-4">
                      <h3 className="text-lg font-bold text-dark">
                        {group.category}
                      </h3>
                      <span
                        className={`rounded-full px-3 py-0.5 text-xs font-semibold uppercase tracking-wide ${statusBadge(group.status)}`}
                      >
                        {group.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-text-light">
                        {group.pages.length} pages
                      </span>
                      <svg
                        className="h-5 w-5 text-text-light transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="border-t border-border px-6 py-4">
                    <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
                      {group.pages.map((page) => (
                        <a
                          key={page}
                          href={`https://www.pkchamber.ca/${page.replace(/ \(.*\)/, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-md px-3 py-1.5 font-mono text-xs text-text-light hover:bg-cream hover:text-primary"
                        >
                          /{page}
                        </a>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Proposed Sitemap */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="mb-2 text-3xl">Proposed Sitemap</h2>
            <p className="mb-10 max-w-2xl text-text-light">
              190 flat pages restructured into ~55 active pages across a clean
              hierarchy. 6 top-level sections, max 4-8 sub-items each.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {proposedSitemap.map((group) => (
                <div
                  key={group.section}
                  className="rounded-xl border border-border bg-white p-6"
                >
                  <div className="mb-4 flex items-center gap-2">
                    <span className="font-mono text-xs text-primary">
                      {group.section}
                    </span>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-dark">
                    {group.label}
                  </h3>
                  {group.children.length > 0 && (
                    <ul className="space-y-1.5">
                      {group.children.map((child) => (
                        <li
                          key={child.path}
                          className="flex items-start gap-2 text-sm text-text-light"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          <div>
                            <span className="font-medium text-dark">
                              {child.label}
                            </span>
                            <br />
                            <span className="font-mono text-xs text-text-light/60">
                              {child.path}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="mt-12 rounded-xl border border-border bg-cream p-8">
              <h3 className="mb-4 text-lg font-bold text-dark">
                Proposed Navigation
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                {["About Us", "Membership", "Events", "Advocacy", "Resources", "News"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary/20 bg-white px-4 py-2 text-primary"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
              <p className="mt-4 text-sm text-text-light">
                Drop &ldquo;Breaking News - Tariff Support&rdquo; as permanent top-level nav
                item. It becomes a dismissable alert banner linking to /advocacy/tariffs.
                Drop &ldquo;Directory&rdquo; from top-level (lives under Membership). Drop
                &ldquo;Resource Hub&rdquo; as separate from &ldquo;Resources.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Freshness Assessment */}
        <section className="bg-cream py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="mb-8 text-3xl">Freshness Assessment</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                <div className="mb-2 font-mono text-3xl font-semibold text-red-700">
                  60-70
                </div>
                <h3 className="mb-3 text-lg font-bold text-red-900">
                  Clearly Outdated
                </h3>
                <ul className="space-y-1.5 text-sm text-red-800/80">
                  <li>COVID-19 portal + 11 sub-pages (empty/stale)</li>
                  <li>Past elections: 2018, 2019, 2021, 2022</li>
                  <li>2018 trips to China and India</li>
                  <li>Power Hour 2018 (6+ years old)</li>
                  <li>Speaker profiles (Magic Johnson, etc.)</li>
                  <li>Bill 148 advocacy (2017-2018)</li>
                  <li>CDAP / CanadaUnited (programs ended)</li>
                  <li>2018 annual report, 2020 awards</li>
                </ul>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
                <div className="mb-2 font-mono text-3xl font-semibold text-amber-700">
                  15-20
                </div>
                <h3 className="mb-3 text-lg font-bold text-amber-900">
                  Stale but Salvageable
                </h3>
                <ul className="space-y-1.5 text-sm text-amber-800/80">
                  <li>Love Local campaign pages (good concept, past dates)</li>
                  <li>Business resources for recovery (post-COVID framing)</li>
                  <li>Cottage and tourism regulations</li>
                  <li>Policy report card 2018 (concept good, needs update)</li>
                  <li>Knowledge channel / video channel</li>
                </ul>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="mb-2 font-mono text-3xl font-semibold text-emerald-700">
                  80-90
                </div>
                <h3 className="mb-3 text-lg font-bold text-emerald-900">
                  Current / Active
                </h3>
                <ul className="space-y-1.5 text-sm text-emerald-800/80">
                  <li>Core pages (about, membership, directory)</li>
                  <li>Tariff support section (new, 2025)</li>
                  <li>Business Summit 2025 (upcoming Apr 30)</li>
                  <li>Recurring events (ChamberAM, TBX, Luminary)</li>
                  <li>Resource hub and business resources</li>
                  <li>Advocacy and policy pages</li>
                  <li>News and podcast pages</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Problems */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="mb-8 text-3xl">Key Problems</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  num: "01",
                  title: "~35% Dead Weight",
                  desc: "60-70 pages serve no purpose. Hurts SEO, credibility, and navigation. Visitors stumble on 2018 events with no context that they're historical.",
                },
                {
                  num: "02",
                  title: "Duplicate Pages Everywhere",
                  desc: "Weebly doesn't handle versioning. Result: about-us + about-us1, resources + resources1, policy-resolutions + policy-resolutions1 + policy-resolutions2.",
                },
                {
                  num: "03",
                  title: "No Content Hierarchy",
                  desc: "The Resource Hub still links to COVID-19 as a primary resource in 2026. Nav mixes evergreen pages with one-off event pages.",
                },
                {
                  num: "04",
                  title: "Weebly Platform Limits",
                  desc: "No blog/CMS workflow, no dynamic content, no member portal. Every page is a static .html file. Maintenance is painful.",
                },
                {
                  num: "05",
                  title: "PDFs as Content",
                  desc: "Policy documents, reports, and advocacy content lives in PDFs linked from pages. Invisible to search, hard to update, can't be audited.",
                },
                {
                  num: "06",
                  title: "No Events Archive Pattern",
                  desc: "Past events live at the same URL level as current ones. No /events/past/ or /archive/ pattern exists.",
                },
              ].map((problem) => (
                <div
                  key={problem.num}
                  className="rounded-xl border border-border bg-white p-6"
                >
                  <span className="font-mono text-xs text-primary">
                    {problem.num}
                  </span>
                  <h3 className="mt-2 mb-3 text-lg font-bold text-dark">
                    {problem.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-light">
                    {problem.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform & Approach */}
        <section className="bg-cream py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="mb-8 text-3xl">Recommended Approach</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-xl border border-border bg-white p-8">
                <h3 className="mb-4 text-lg font-bold text-dark">
                  Tech Stack
                </h3>
                <div className="space-y-4 text-sm text-text-light">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 rounded bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
                      Frontend
                    </span>
                    <span>Next.js (App Router) on Vercel. ISR for near-instant builds, structured routing, modern performance.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 rounded bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
                      CMS
                    </span>
                    <span>Sanity (headless). Custom schemas for structured content (events, policy resolutions, resources). Visual editing for staff. Free tier covers 3 users + 500k API requests/mo.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 rounded bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
                      Styling
                    </span>
                    <span>Tailwind CSS. Consistent, responsive, maintainable.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 rounded bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
                      PDFs
                    </span>
                    <span>Sanity asset pipeline. Each PDF gets an HTML summary page (searchable, indexable) with the PDF as attached download.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 rounded bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
                      Events
                    </span>
                    <span>Custom Sanity schema. One /events page with upcoming/past filter. Past events auto-archive. No more orphan pages.</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-white p-8">
                <h3 className="mb-4 text-lg font-bold text-dark">
                  Migration Path
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      phase: "Phase 1",
                      title: "Setup",
                      time: "1-2 days",
                      items: "Next.js + Sanity install, custom schemas, 55-page structure created",
                    },
                    {
                      phase: "Phase 2",
                      title: "Content Migration",
                      time: "3-5 days",
                      items: "Migrate ~55 active pages, upload and tag PDFs, migrate events, set up 301 redirects for all 190 old URLs",
                    },
                    {
                      phase: "Phase 3",
                      title: "Cleanup",
                      time: "1-2 days",
                      items: "Redirect archived URLs to nearest parent, submit new sitemap to Google Search Console, verify with Screaming Frog",
                    },
                  ].map((phase) => (
                    <div key={phase.phase} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        {phase.phase.split(" ")[1]}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-dark">
                            {phase.title}
                          </span>
                          <span className="font-mono text-xs text-text-light">
                            {phase.time}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-text-light">
                          {phase.items}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-lg bg-cream p-4">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-text-light">
                    Estimated Ongoing Cost
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-2xl font-semibold text-primary">
                      ~$20
                    </span>
                    <span className="text-sm text-text-light">/month</span>
                  </div>
                  <p className="mt-1 text-xs text-text-light">
                    Vercel Pro ($20/mo) + Sanity free tier + domain (owned)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#004D36] py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
            <h2 className="mb-4 text-3xl text-white lg:text-4xl">
              Ready to modernize?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-[#A8D5C2]">
              This audit was prepared by Good Company. We build and maintain
              operational systems for growing organizations.
            </p>
            <a
              href="https://yourgoodcompany.com/about"
              className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#004D36] transition hover:bg-gold hover:text-white"
            >
              Learn More About Good Company
            </a>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="text-center text-xs text-text-light/60">
              Audit conducted April 2026. Page count sourced from pkchamber.ca/sitemap.xml (190 URLs, all showing lastmod 2026-03-30).
              Content freshness assessed by sampling ~15 pages. Platform identified as Weebly from CSS class patterns and JavaScript references.
              This document is not affiliated with the Peterborough &amp; Kawarthas Chamber of Commerce.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
