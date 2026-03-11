// SEO-Optimized Case Studies with Long-Form Content
// These are extended versions for organic search traffic generation

import type { CaseStudy } from "./strapi";

export const SEO_CASE_STUDIES: CaseStudy[] = [
  {
    id: "eliminate-invoice-writeoffs-service-business",
    slug: "eliminate-invoice-writeoffs-service-business",
    department: "Operations",
    title: "How a Toronto Service Company Eliminated Six Figures in Invoice Write-Offs",
    description:
      "See how a GTA-based service company with 30+ field technicians eliminated six figures in invoice write-offs by creating visibility, accountability, and aligned incentives.",

    seoTitle: "How to Eliminate Invoice Write-Offs in Service Businesses | Toronto Case Study",
    seoDescription: "See how a GTA-based service company with 30+ field technicians eliminated six figures in invoice write-offs by creating visibility, accountability, and aligned incentives.",

    // Short problem summary for the hero/video section
    problem: `
      <p>When a mid-sized service company in the Greater Toronto Area discovered they were writing off six figures annually due to poor technician documentation, they knew they had a problem. But like most service businesses with field teams, they didn't know how widespread it was until they ran the numbers.</p>

      <p>Incomplete work orders. Missing materials lists. No record of who signed off on the job. When clients disputed charges, the company had no documentation to back up their invoices. They'd either write off the charge or damage the client relationship by fighting over it.</p>

      <p>The finance team was frustrated. The operations manager was spending hours every week trying to track down information. And the technicians, who were great at their jobs, just didn't see documentation as a priority.</p>
    `,

    // Short solution summary
    solution: `
      <p>We built a system that creates visibility, accountability, and incentive alignment around documentation quality. Here's the approach:</p>

      <p><strong>Create Visibility</strong><br/>
      Every evening, the system reviews each work order completed that day and scores it against a compliance checklist: time stamps logged, contact person documented, work performed described, materials used listed, customer sign-off captured.</p>

      <p><strong>Build Accountability</strong><br/>
      Technicians with incomplete notes get immediate, specific feedback on what's missing and how to fix it. No vague "document better" conversations. Just: "Job #4721 is missing materials used—here's the link to add it."</p>

      <p><strong>Align Incentives</strong><br/>
      Quarterly bonus tied to team compliance rate (not individual scores). When the team hits 90%+ compliance, everyone gets the bonus. This created peer accountability instead of competition—senior techs started reminding newer ones to log their materials.</p>

      <p><strong>Reduce Management Overhead</strong><br/>
      Operations manager gets a trend summary, not individual notes to review. Shifts from documentation police to strategic operator.</p>
    `,

    results: [
      { text: "Invoice write-offs eliminated", stat: "~100%" },
      { text: "Weekly hours reclaimed for ops manager", stat: "5+" },
      { text: "Team compliance rate achieved", stat: "90%+" },
    ],
    resultsTimeframe: "first 90 days",

    videoUrl: "https://youtu.be/TgYH2Vi-yrM",
    videoType: "youtube",
    thumbnailUrl: "https://img.youtube.com/vi/TgYH2Vi-yrM/sddefault.jpg",
    featured: true,
    order: 1,

    // Long-form SEO content sections
    longFormSections: [
      {
        heading: "The Problem: When Poor Documentation Costs Six Figures",
        content: "",
        subsections: [
          {
            subheading: "The Invoice Write-Off Spiral",
            content: `
              <p>For service businesses with field teams, documentation quality directly impacts revenue. Here's what was happening:</p>

              <p><strong>The Daily Pattern:</strong></p>
              <ul>
                <li>Technician completes a job</li>
                <li>Rushes notes at the end of the day (or forgets entirely)</li>
                <li>Invoice goes out with vague line items</li>
                <li>Client questions charges 30-60 days later</li>
                <li>No documentation to prove work was done</li>
                <li>Company writes off the charge to preserve the relationship</li>
              </ul>

              <p><strong>The Financial Impact:</strong><br/>
              Over 18 months, the company had written off six figures across three categories:</p>
              <ul>
                <li>Disputed labor charges (no proof of time spent)</li>
                <li>Materials with no documentation of use</li>
                <li>"Goodwill credits" to preserve client relationships</li>
              </ul>

              <p>One client alone accounted for a significant portion of the total write-offs because their site manager kept disputing charges and the service company couldn't prove what work was completed.</p>
            `,
          },
          {
            subheading: "Why Traditional Solutions Weren't Working",
            content: `
              <p>The operations manager had tried several approaches:</p>

              <p><strong>Attempt #1: Training sessions</strong><br/>
              Result: Compliance improved for 2 weeks, then dropped back to baseline.</p>

              <p><strong>Attempt #2: Manual spot-checks</strong><br/>
              Result: Operations manager spent 6+ hours weekly reviewing notes, still caught issues too late.</p>

              <p><strong>Attempt #3: Making it a "performance metric"</strong><br/>
              Result: Technicians felt micromanaged, turnover increased, documentation barely improved.</p>

              <p>The core issue wasn't that technicians didn't care. It was that:</p>
              <ol>
                <li>Good documentation took extra time with no immediate reward</li>
                <li>Bad documentation had no immediate consequence (write-offs happened months later)</li>
                <li>No one got real-time feedback on what was missing</li>
              </ol>
            `,
          },
          {
            subheading: "The Breaking Point",
            content: `
              <p>The breaking point came during an annual audit when the finance team calculated the true cost of write-offs. The CEO asked: "How much revenue are we leaving on the table because we can't prove the work was done?"</p>

              <p>The operations manager needed a system that would:</p>
              <ul>
                <li>Catch documentation problems immediately (not 60 days later when it's too late)</li>
                <li>Give technicians clear, specific feedback on what was missing</li>
                <li>Not add more work to the ops team's plate</li>
                <li>Create accountability without feeling punitive</li>
              </ul>
            `,
          },
        ],
      },
      {
        heading: "Why This Approach Works",
        content: `
          <p><strong>Visibility Creates Awareness</strong><br/>
          When technicians can see exactly what's missing—in real-time, not weeks later—they fix it. The system creates visibility into a problem that was previously invisible until it cost you money.</p>

          <p><strong>Accountability Through Specificity</strong><br/>
          The checklist removes subjectivity. It's not "write better notes." It's "Job #4721 is missing contact person—add it here." Clear, specific, actionable.</p>

          <p><strong>Incentives Drive Behavior</strong><br/>
          When you align incentives with outcomes, behavior changes. Team-based bonuses (not individual) created peer accountability. Senior techs started coaching newer ones: "Make sure you log your materials today."</p>

          <p><strong>Management Shifts from Policing to Leading</strong><br/>
          The operations manager went from spending hours reviewing individual notes to spending minutes reviewing trend reports. From firefighting to strategic work.</p>
        `,
      },
      {
        heading: "The 90-Day Timeline",
        content: "",
        subsections: [
          {
            subheading: "Weeks 1-3: Implementation",
            content: `
              <ul>
                <li>System built and integrated with FSM software</li>
                <li>Compliance checklist finalized with operations manager</li>
                <li>Slack notifications configured and tested</li>
              </ul>
            `,
          },
          {
            subheading: "Weeks 4-6: Soft Launch",
            content: `
              <ul>
                <li>System running in "feedback only" mode (no bonuses yet)</li>
                <li>Technicians received daily notifications but no consequences</li>
                <li>Team got used to new workflow</li>
              </ul>
            `,
          },
          {
            subheading: "Weeks 7-12: Full Launch",
            content: `
              <ul>
                <li>Quarterly bonus program announced</li>
                <li>Compliance rates jumped from 58% to 84% in first month</li>
                <li>Write-off rate began dropping immediately</li>
              </ul>
            `,
          },
          {
            subheading: "Month 4+: Sustained Results",
            content: `
              <ul>
                <li>Compliance stabilized at 90%+</li>
                <li>Write-offs dropped by 96% compared to prior year</li>
                <li>Operations manager shifted focus from firefighting to process improvement</li>
              </ul>
            `,
          },
        ],
      },
      {
        heading: "Why This Matters for Service Businesses",
        content: "",
        subsections: [
          {
            subheading: "Invoice Write-Offs Are a Hidden Tax on Growth",
            content: `
              <p>Most service businesses don't realize how much revenue they're leaving on the table due to poor documentation:</p>
              <ul>
                <li><strong>2-5% of revenue</strong> written off annually is common</li>
                <li><strong>8-15 hours per week</strong> spent by managers chasing information</li>
                <li><strong>Higher customer churn</strong> due to billing disputes and frustration</li>
              </ul>

              <p>As you scale, the problem compounds. More technicians means more documentation gaps. More clients means more disputes. The revenue leak grows faster than your business.</p>
            `,
          },
          {
            subheading: "The Real Cost Isn't Just Financial",
            content: `
              <p>Beyond the direct write-offs, poor documentation creates:</p>

              <p><strong>Customer Relationship Damage</strong><br/>
              When you can't prove work was done, customers lose trust. Even if you write off the charge, the damage is done.</p>

              <p><strong>Employee Frustration</strong><br/>
              Operations managers become documentation police instead of strategic leaders. Technicians feel micromanaged. Finance teams get stuck chasing paper trails.</p>

              <p><strong>Slower Cash Flow</strong><br/>
              Incomplete documentation delays invoicing. Billing cycles stretch from 7 days to 30+ days. That impacts working capital.</p>

              <p><strong>Inability to Scale</strong><br/>
              You can't grow a service business when 15% of your managers' time is spent tracking down information about jobs that happened weeks ago.</p>
            `,
          },
          {
            subheading: "Why Systems Beat Training Every Time",
            content: `
              <p>Training tells people what good looks like. Systems ensure it actually happens.</p>

              <p>The difference:</p>
              <ul>
                <li><strong>Training:</strong> "Remember to log your materials" (hope they remember)</li>
                <li><strong>Systems:</strong> "You didn't log materials for Job #4721. Here's the link to add them now." (ensures compliance)</li>
              </ul>

              <p>Immediate, specific, actionable feedback changes behavior. Delayed, vague feedback gets ignored.</p>

              <p>This isn't about technology. It's about visibility, accountability, and incentives. The tool is irrelevant. The principles are what matter.</p>
            `,
          },
        ],
      },
      {
        heading: "This Approach Works for Multiple Service Industries",
        content: `
          <p>While this case study focused on a field service company, the same principles apply to:</p>

          <ul>
            <li><strong>HVAC and plumbing companies</strong> (equipment installed, warranty coverage, customer sign-offs)</li>
            <li><strong>Electrical contractors</strong> (code compliance, permits, inspection readiness)</li>
            <li><strong>IT managed services</strong> (work performed, time tracking, asset documentation)</li>
            <li><strong>Property maintenance</strong> (work orders, materials used, customer approval)</li>
            <li><strong>Healthcare services</strong> (patient notes, care delivered, billing documentation)</li>
          </ul>

          <p>If your business bills for field work and struggles with documentation quality, this system can be adapted to your industry.</p>
        `,
      },
    ],

    keyTakeaways: [
      "Create visibility into the problem - you can't fix what you can't see",
      "Make feedback immediate and specific - not delayed and vague",
      "Align incentives with outcomes - reward what you want to see more of",
      "Use team-based (not individual) incentives to build peer accountability",
      "Remove subjectivity - clear checklists beat 'try harder' conversations",
      "The tool doesn't matter - visibility, accountability, and incentives do",
    ],

    faqs: [
      {
        question: "How long does implementation take?",
        answer: "Typical timeline is 3-4 weeks from kickoff to first automated report. This includes defining your compliance checklist, integrating with your existing software, testing notifications and reports, and training your team on the new workflow.",
      },
      {
        question: "What if we don't use Slack?",
        answer: "The notification system can integrate with Microsoft Teams, email, SMS, or any communication tool your team already uses. We don't force you to adopt new platforms.",
      },
      {
        question: "Does this work with our field service management software?",
        answer: "We've integrated with ServiceTitan, Fieldwire, ServiceMax, Salesforce Field Service, and custom-built systems. If your FSM has an API (or even just exports), we can pull the data.",
      },
      {
        question: "Will technicians feel micromanaged?",
        answer: "This was the operations manager's biggest concern too. In practice, the opposite happened. Technicians prefer immediate, clear feedback over vague 'you need to document better' conversations in performance reviews. The key is making feedback specific and actionable, not punitive.",
      },
      {
        question: "What if compliance doesn't improve?",
        answer: "In our experience implementing these systems, compliance improves when: (1) The checklist is clear and reasonable, (2) Feedback is immediate and specific, (3) Incentives are aligned with outcomes. If compliance doesn't improve, it's usually a sign that the standards are unclear or unrealistic, not that the team doesn't care.",
      },
      {
        question: "Can we try this with just one team first?",
        answer: "Absolutely. We recommend piloting with a small team (5-8 technicians) for 30 days before rolling out company-wide. This lets you refine the compliance checklist and notification timing before scaling.",
      },
      {
        question: "What happens after implementation?",
        answer: "The system runs automatically once it's set up. Most companies spend 10-15 minutes per week reviewing trend reports. If compliance starts to slip, you'll see it immediately in the data and can address it before it impacts revenue.",
      },
    ],
  },
];

export function getSEOCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return SEO_CASE_STUDIES.find((cs) => cs.slug === slug);
}
