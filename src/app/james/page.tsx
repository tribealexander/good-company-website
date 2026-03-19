import type { Metadata } from "next";
import { Header, Footer } from "@/components";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "James — AI Executive Assistant | Good Company",
  description:
    "A persistent, multi-channel AI executive assistant that keeps track of everything you've committed to and makes sure nothing falls through the cracks.",
  robots: { index: false, follow: false },
};

function EmailExample({
  from,
  subject,
  body,
  time,
  align,
}: {
  from: string;
  subject: string;
  body: string;
  time: string;
  align: "left" | "right";
}) {
  return (
    <div
      className={`flex ${align === "right" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-lg rounded-xl border border-border p-5 ${
          align === "right"
            ? "bg-primary/5 border-primary/20"
            : "bg-white"
        }`}
      >
        <div className="mb-1 flex items-center justify-between gap-4">
          <span className="font-mono text-xs text-text-light">{from}</span>
          <span className="font-mono text-xs text-text-light">{time}</span>
        </div>
        {subject && (
          <p className="mb-2 text-sm font-semibold text-dark">{subject}</p>
        )}
        <p className="whitespace-pre-line text-sm leading-relaxed text-text">
          {body}
        </p>
      </div>
    </div>
  );
}

export default function JamesPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main>
          {/* Hero */}
          <section className="bg-[#004D36] pb-16 pt-32 lg:pb-24 lg:pt-44">
            <div className="mx-auto max-w-3xl px-6 lg:px-10">
              <p className="mb-4 font-mono text-sm uppercase tracking-widest text-primary-light/70">
                Executive Assistant
              </p>
              <h1 className="mb-6 text-4xl font-semibold leading-tight text-white lg:text-5xl">
                Meet James
              </h1>
              <p className="text-xl leading-relaxed text-[#A8D5C2]">
                James is an AI-powered executive assistant that keeps track of
                your tasks, commitments, and deadlines. You talk to him by
                email, WhatsApp, or whatever you already use. He keeps the
                list and sends you a briefing every morning.
              </p>
            </div>
          </section>

          {/* What James Does */}
          <section className="py-12 lg:py-20">
            <div className="mx-auto max-w-3xl px-6 lg:px-10">
              <h2 className="mb-8 text-3xl font-semibold text-dark">
                What It Is
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-text">
                <p>
                  James is built on the same AI that powers tools like ChatGPT
                  and Claude. The difference is that someone has already set it
                  up for you. The task tracking, the daily briefing, the
                  conversation memory, the personality, the channel
                  integrations — all of that is configured and running. You
                  don&apos;t have to build anything, learn anything, or maintain
                  anything.
                </p>
                <p>
                  You could technically set all of this up yourself using
                  Claude or ChatGPT, if you knew how to write the prompts,
                  structure the memory, connect the APIs, and host the
                  infrastructure. James is what it looks like when that work is
                  already done.
                </p>
                <p>
                  There&apos;s no app to install. No dashboard. No login. You just
                  email an address, and James responds.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="bg-cream-textured py-12 lg:py-20">
            <div className="mx-auto max-w-3xl px-6 lg:px-10">
              <h2 className="mb-8 text-3xl font-semibold text-dark">
                How It Works
              </h2>
              <div className="space-y-8 text-lg leading-relaxed text-text">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-dark">
                    You talk, James organizes.
                  </h3>
                  <p>
                    Send James a message like &quot;I need to call Dave about
                    the permit, and the Greenfield proposal is done.&quot;
                    James adds the call to your list and marks the proposal
                    complete. You get a short confirmation back. No forms, no
                    clicking, no drag and drop. Just plain language.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-dark">
                    Every morning, you get a briefing.
                  </h3>
                  <p>
                    At 8am, James sends you a summary of everything on your
                    plate. What&apos;s due today, what&apos;s overdue, what&apos;s
                    coming up. You don&apos;t have to remember to check anything.
                    James reaches out to you.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-dark">
                    Use it from anywhere.
                  </h3>
                  <p>
                    Reply to your morning briefing over email. Check in on
                    WhatsApp from the job site. Follow up on Slack from your
                    desk. It doesn&apos;t matter which channel you use — it&apos;s
                    the same James, the same memory, the same task list. He
                    meets you where you&apos;re at.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-dark">
                    It remembers everything.
                  </h3>
                  <p>
                    Unlike a regular AI chat that starts fresh every
                    conversation, James has persistent memory. He knows what
                    you told him last week, what you completed yesterday, and
                    what&apos;s been sitting untouched for ten days. Every
                    interaction builds on the last.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-dark">
                    It gets smarter over time.
                  </h3>
                  <p>
                    As we connect more of your systems — calendar, email
                    summaries, CRM — James sees more context and gives better
                    answers. You don&apos;t need to know anything changed. You
                    talk the same way you always have. James just understands
                    more.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Example Conversation */}
          <section className="py-12 lg:py-20">
            <div className="mx-auto max-w-3xl px-6 lg:px-10">
              <h2 className="mb-4 text-3xl font-semibold text-dark">
                A Day with James
              </h2>
              <p className="mb-10 text-lg text-text-light">
                Here&apos;s what a typical day looks like.
              </p>
              <div className="space-y-4">
                <EmailExample
                  from="James"
                  subject="Your daily briefing — March 19"
                  body={`Good morning. Here's your briefing for Wednesday.\n\nDUE TODAY\n- Send updated proposal to Greenfield\n\nUP NEXT\n- Follow up with Dave on compliance docs (HIGH) — due tomorrow\n- Review conference venue options — due Friday\n\nNO DUE DATE\n- Call Dave\n- Call Simon\n\n5 items on your plate today.`}
                  time="8:00 AM"
                  align="left"
                />
                <EmailExample
                  from="You"
                  subject=""
                  body="greenfield proposal is done. also need to call simon about the site visit and push the venue thing to next week"
                  time="8:12 AM"
                  align="right"
                />
                <EmailExample
                  from="James"
                  subject=""
                  body="Greenfield proposal marked done. Added the Simon call and pushed venue options to next week. 4 items left."
                  time="8:12 AM"
                  align="left"
                />
                <EmailExample
                  from="You (WhatsApp, later that day)"
                  subject=""
                  body="what do i have left this week?"
                  time="2:30 PM"
                  align="right"
                />
                <EmailExample
                  from="James"
                  subject=""
                  body={`3 items this week:\n1. Follow up with Dave on compliance docs (HIGH) — due tomorrow\n2. Call Simon about the site visit\n3. Northridge integration\n\nVenue options pushed to next week.`}
                  time="2:30 PM"
                  align="left"
                />
                <EmailExample
                  from="You"
                  subject=""
                  body="simon call is done. and actually drop the northridge thing for now"
                  time="4:45 PM"
                  align="right"
                />
                <EmailExample
                  from="James"
                  subject=""
                  body="Simon call marked done, Northridge dropped. You've got 1 item left this week: compliance docs follow-up with Dave tomorrow."
                  time="4:45 PM"
                  align="left"
                />
              </div>
            </div>
          </section>

          {/* What it is and isn't — honest */}
          <section className="bg-cream-textured py-12 lg:py-20">
            <div className="mx-auto max-w-3xl px-6 lg:px-10">
              <h2 className="mb-8 text-3xl font-semibold text-dark">
                Being Straight About What This Is
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-text">
                <p>
                  James is powered by the same AI that&apos;s available to
                  anyone. There&apos;s no proprietary technology here. What&apos;s
                  different is the work around it: the persistent task
                  database, the conversation memory across channels, the daily
                  briefing schedule, the personality tuning, the hosting and
                  infrastructure. That&apos;s all been built and configured so you
                  don&apos;t have to think about it.
                </p>
                <p>
                  Tools like OpenClaw, Lindy, and other AI agent platforms are
                  powerful, but they&apos;re built for people who want to configure
                  their own systems. They require installation, setup,
                  workflow design, and ongoing maintenance. James requires
                  none of that. The setup is done. You just use it.
                </p>
                <p>
                  Right now, James is focused on task tracking and
                  accountability. Over time, as we connect more systems, his
                  capabilities will grow — calendar awareness, email
                  summaries, document lookups, and more. You won&apos;t need to
                  change how you interact with him. He&apos;ll just be able to
                  do more.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy */}
          <section className="py-12 lg:py-20">
            <div className="mx-auto max-w-3xl px-6 lg:px-10">
              <h2 className="mb-8 text-3xl font-semibold text-dark">
                Privacy & Security
              </h2>
              <div className="space-y-8 text-lg leading-relaxed text-text">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-dark">
                    Where your data lives
                  </h3>
                  <p>
                    Your task list and conversation history are stored in a
                    secure, encrypted database hosted in North America. This
                    database is private to your instance — no one else&apos;s
                    data is mixed with yours. There is no public-facing
                    dashboard or login where your data is exposed.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-dark">
                    How AI processing works
                  </h3>
                  <p>
                    When you send James a message, your message and your
                    current task list are sent to Anthropic&apos;s Claude for
                    processing. Claude reads your message, figures out what you
                    want, and sends back a response. Anthropic does not use API
                    data to train their models. This is stated in their usage
                    policy. Your messages are processed and discarded — not
                    stored for training, not used to improve their AI, not
                    shared with anyone. Data is encrypted in transit between
                    all systems.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-dark">
                    What we can and can&apos;t see
                  </h3>
                  <p>
                    Alex has administrative access to the database for setup,
                    support, and troubleshooting. This is necessary to onboard
                    you, load your initial tasks, and fix issues. Your messages
                    are stored in the database, so they are technically
                    accessible — the same as any managed service where your IT
                    admin can see your emails. James cannot access your email
                    inbox, calendar, or any other system unless you explicitly
                    connect it. He only knows what you tell him.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-dark">
                    Honest limitations
                  </h3>
                  <p>
                    This system does not have SOC 2 certification or
                    enterprise-grade compliance certifications. It&apos;s a
                    managed service built on reputable infrastructure, but it
                    hasn&apos;t been independently audited. If your organization
                    has specific compliance requirements, we should discuss
                    whether this meets those needs before connecting sensitive
                    data.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section className="bg-cream-textured py-12 lg:py-20">
            <div className="mx-auto max-w-3xl px-6 lg:px-10">
              <h2 className="mb-8 text-3xl font-semibold text-dark">
                Getting Started
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-text">
                <p>There&apos;s nothing for you to set up.</p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-semibold text-white">
                      1
                    </span>
                    <p>
                      We sit down for 15 minutes and go through what&apos;s on
                      your plate — projects, tasks, commitments, deadlines.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-semibold text-white">
                      2
                    </span>
                    <p>James gets loaded up with your list.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-semibold text-white">
                      3
                    </span>
                    <p>
                      You start emailing James whenever something changes —
                      new tasks, completed items, questions about your
                      workload.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-semibold text-white">
                      4
                    </span>
                    <p>
                      Tomorrow morning, you get your first daily briefing.
                    </p>
                  </div>
                </div>
                <p>
                  That&apos;s it. If it&apos;s useful, you keep using it. If
                  it&apos;s not, you stop emailing the address. No contracts,
                  no commitments, no cancellation process.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#004D36] py-12 lg:py-16">
            <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
              <h2 className="mb-4 text-3xl font-semibold text-white">
                Questions?
              </h2>
              <p className="text-lg text-[#A8D5C2]">
                If you have questions about how James works, what he can see,
                or whether this makes sense for your situation, just ask.
              </p>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
