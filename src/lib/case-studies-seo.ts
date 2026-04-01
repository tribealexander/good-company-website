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
  {
    id: "intelligent-ticket-routing-service-business",
    slug: "intelligent-ticket-routing-service-business",
    department: "Operations",
    title: "How We Built an Intelligent Ticket Routing System That Gets It Right 97.9% of the Time",
    description:
      "See how a service company with 40+ field technicians turned messy ticket data into an automated routing system that assigns the right person to every job, faster than any dispatcher could.",

    seoTitle: "Intelligent Ticket Routing for Service Businesses | Case Study",
    seoDescription: "How a service company with 40+ technicians and 1,200 tickets a month built an automated routing system with 97.9% accuracy by mining historical ticket data for patterns.",

    problem: `
      <p>A service company with 40+ technicians was processing about 1,200 tickets a month. Every ticket had to be triaged for urgency, matched to the right technician based on skill set, geography, and client history, then assigned. Two dispatchers handled this manually, all day, every day.</p>

      <p>They were good at it. But it was entirely in their heads. When one was out sick or on vacation, assignments slowed down and mistakes crept in. Knowledge about which technician knew which client, who had the right skills for which type of work, and who was actually available, lived nowhere except in the dispatchers' memory.</p>

      <p>The company had tried rules-based auto-assignment before: "WiFi ticket in Zone 3 goes to the remote team." It was too rigid. It couldn't account for the fact that one technician had been to a specific property eight times and knew the infrastructure, while another had never been there.</p>
    `,

    solution: `
      <p>We started by looking at what the company actually had: years of historical ticket data sitting in their service management platform. The question was whether it contained enough signal to route intelligently.</p>

      <p><strong>Surface what the data already knows</strong><br/>
      Every ticket had a customer, an assignment, and a resolution. We analyzed thousands of closed tickets to find patterns: which technicians consistently handled which clients, who kept getting pulled into specific types of work, who had quietly become the go-to person for issues nobody had ever formally documented.</p>

      <p><strong>Build urgency scoring from the customer's own words</strong><br/>
      The cleanest data in the system turned out to be the incoming request itself. Subject lines, descriptions, and scope language from customers were consistent on every ticket because the customer wrote them. Words like "down," "locked out," and "all units" correlate strongly with actual urgency. We used this to replace the manual priority system that marked 90% of tickets as "Medium."</p>

      <p><strong>Combine history with real-time availability</strong><br/>
      Historical patterns tell you who should handle a ticket in theory. Real-time data tells you who can handle it right now. The system checks who's checked in, who's already at a nearby property, and who has capacity before making a recommendation.</p>
    `,

    results: [
      { text: "Routing accuracy rate", stat: "97.9%" },
      { text: "Tickets auto-assigned per month", stat: "1,170+" },
      { text: "Dispatcher overrides needed", stat: "~2%" },
    ],
    resultsTimeframe: "first 60 days",

    videoUrl: "",
    videoType: "none",
    thumbnailUrl: "",
    featured: true,
    order: 2,

    longFormSections: [
      {
        heading: "The Problem: Routing Knowledge That Lives in People's Heads",
        content: "",
        subsections: [
          {
            subheading: "The Dispatcher Bottleneck",
            content: `
              <p>In most service businesses, dispatch is one of the highest-leverage roles. The right assignment means a first-time fix. The wrong one means a wasted trip, a frustrated client, and a second visit.</p>

              <p>This company's dispatchers were experienced. They knew which technicians had which skills, which clients preferred which techs, and which properties had tricky infrastructure that required someone who'd been there before. But all of that knowledge was informal. It lived in conversations, in memory, in gut feel.</p>

              <p>When a dispatcher was out, the backup would assign based on availability alone. The result: more reassignments, more escalations, more return visits.</p>
            `,
          },
          {
            subheading: "Why Rules-Based Routing Falls Short",
            content: `
              <p>The company had already tried the obvious solution: build routing rules. "Category X goes to Team Y. Round-robin within the team."</p>

              <p>The problem is that categories are too broad. "Network" covers everything from restarting an access point (a five-minute remote task) to splicing fiber underground (a four-hour on-site job requiring specialized equipment). A static rule can't tell the difference.</p>

              <p>Worse, static rules can't capture institutional knowledge. They can't know that one technician has handled fiber work at a specific property eight times and knows the switch layout. They can't know that another technician is the informal specialist for audio and AV systems, even though that's not in his job title. Rules describe how routing should work in theory. Patterns describe how it actually works.</p>
            `,
          },
          {
            subheading: "The Data Quality Problem",
            content: `
              <p>When we first looked at the ticket data, it seemed like a dead end for building anything intelligent:</p>

              <ul>
                <li>Technician notes were inconsistent. Some wrote detailed private notes with exact materials used and time on site. Others wrote "fixed issue" and moved on.</li>
                <li>Time tracking was essentially zero across the board. Every ticket showed 0 hours logged.</li>
                <li>About 90% of tickets were marked "Medium" priority regardless of actual urgency.</li>
                <li>Categories were too broad to be useful for skill matching.</li>
              </ul>

              <p>If we'd tried to build a routing model on note quality or time tracking, we would have failed. The data simply wasn't there.</p>

              <p>But the structural data, the record of what actually happened, was solid on every single ticket. Who was assigned. Which customer. What category. How the ticket flowed between people. That was our training set.</p>
            `,
          },
        ],
      },
      {
        heading: "The Approach: Two Layers of Intelligence",
        content: "",
        subsections: [
          {
            subheading: "Layer 1: Urgency Scoring",
            content: `
              <p>The first problem to solve was triage. When everything is "Medium," nothing is prioritized.</p>

              <p>We built urgency scoring on the cleanest data in the system: the incoming request from the customer. Subject lines and descriptions are consistent on every ticket because the customer writes them.</p>

              <p>The scoring model looks at:</p>
              <ul>
                <li><strong>Outage language:</strong> "down," "out," "no service" all indicate something is broken, not degraded</li>
                <li><strong>Access language:</strong> "locked out," "can't get in," "keys not working" means someone is physically stuck</li>
                <li><strong>Scope language:</strong> "all," "entire," "resort-wide," "everyone" means many people are affected</li>
                <li><strong>Repeat frequency:</strong> Three tickets about the same issue in ten days signals escalating frustration</li>
                <li><strong>Customer type:</strong> A hotel with 200 guests scores differently than a back office with three employees</li>
              </ul>

              <p>This replaced the manual priority system immediately. The inputs are clean because they come from the customer, and the scoring replicates the judgment calls dispatchers were already making, just faster and more consistently.</p>
            `,
          },
          {
            subheading: "Layer 2: Technician Matching",
            content: `
              <p>The second layer is where the historical data becomes powerful. For every ticket, the system asks four questions in order:</p>

              <ol>
                <li><strong>Can this be handled remotely?</strong> Keyword patterns in the request (password, email, reset) indicate work that doesn't need a truck roll. Route to the remote support queue.</li>
                <li><strong>Which geography?</strong> The customer's location determines which pool of technicians is relevant.</li>
                <li><strong>Who has history with this client?</strong> If a technician has handled this customer before, especially recently, weight the assignment toward them. They know the property, the contacts, the quirks.</li>
                <li><strong>Who has the right skills?</strong> Keyword analysis of the request (fiber, audio, access control, camera) maps to skill profiles built from each technician's work history.</li>
              </ol>

              <p>Finally, the system checks real-time availability: who's checked in today, who's already at a nearby property, and who has the lowest open ticket count.</p>
            `,
          },
          {
            subheading: "Building Technician Profiles from History",
            content: `
              <p>The most valuable part of the system is the technician capability profiles. These weren't built from a skills spreadsheet or self-assessment. They were built from what the data showed each person actually does.</p>

              <p>We analyzed thousands of closed tickets per technician: which customers they served, which categories of work they handled, what their private notes revealed about the actual work performed, and how tickets flowed to and from them.</p>

              <p>What emerged were clear profiles:</p>
              <ul>
                <li>One technician handled the vast majority of remote support: email, passwords, cloud platform administration. High volume, fast resolution.</li>
                <li>Another was the infrastructure specialist: fiber splicing, RF diagnostics, underground cable work. Lower volume, high complexity.</li>
                <li>A third was the go-to for access control systems, gate programming, and security cameras. Clients at specific properties always got routed to him because he knew the physical layout.</li>
                <li>A fourth was the informal audio/AV specialist and senior authority. Other technicians called him for approval on complex jobs.</li>
              </ul>

              <p>None of this was formally documented anywhere. It was all in the ticket history.</p>
            `,
          },
        ],
      },
      {
        heading: "What 97.9% Accuracy Actually Means",
        content: `
          <p>The accuracy rate measures how often the system's assignment matches what the dispatcher would have chosen, or is accepted without override.</p>

          <p>In practice, the dispatcher confirms or doesn't touch the assignment on about 98 out of every 100 tickets. The remaining 2% are genuine edge cases:</p>

          <ul>
            <li><strong>New customers</strong> with no history for the system to learn from</li>
            <li><strong>Multi-discipline tickets</strong> that require more than one type of expertise</li>
            <li><strong>Misleading descriptions</strong> where the customer describes one problem but the actual issue is different</li>
            <li><strong>Availability conflicts</strong> where the best-matched technician is unavailable for reasons the system can't see (personal appointment, equipment issue)</li>
          </ul>

          <p>The system improved over the 60-day period. Week 1 accuracy was around 96%. By week 8 it was over 98%. Every confirmed assignment becomes another data point that makes the next decision better.</p>
        `,
      },
      {
        heading: "The Compounding Effect",
        content: `
          <p>This system gets smarter over time, and that's the part most people miss when they think about this kind of work.</p>

          <p>Every ticket that gets routed and confirmed adds to the historical record. New patterns emerge. A technician who starts handling a new type of work builds that into their profile automatically. A new customer who gets assigned to the same technician three times establishes a preference the system will respect going forward.</p>

          <p>The dispatchers' role shifts from making every assignment decision to handling exceptions and validating the system's judgment on edge cases. Instead of spending their day triaging and assigning, they spend it on the 2% that actually needs human judgment: complex situations, escalations, and strategic decisions about workload distribution.</p>

          <p>The real value compounds. Month one saves dispatcher time. Month six starts producing insights about team capacity, skill gaps, and client coverage patterns that inform hiring and training decisions.</p>
        `,
      },
      {
        heading: "Why This Works When Rules-Based Routing Doesn't",
        content: "",
        subsections: [
          {
            subheading: "Rules Describe Theory. Patterns Describe Reality.",
            content: `
              <p>A rules-based system says: "WiFi tickets go to the network team." That's correct in theory but useless in practice when you have eight people on the network team with different skill levels, different geographic coverage, and different client relationships.</p>

              <p>A pattern-based system says: "WiFi ticket at this property, this technician has been there four times in the last month, knows the switch layout, and resolved the last three issues. He's checked in today and has two open tickets."</p>

              <p>That's the difference between routing and intelligent routing.</p>
            `,
          },
          {
            subheading: "The Data Already Exists",
            content: `
              <p>Most service businesses are sitting on years of routing intelligence and don't know it. Every ticket that's ever been assigned, worked, escalated, or reassigned is a decision record. Every technician note (even the incomplete ones) contains signal about what kind of work that person does.</p>

              <p>The system doesn't require perfect data. It requires enough structural data to find patterns, and most service management platforms have that by default: who was assigned, which customer, what category, what happened next.</p>

              <p>Your ticket history is a training set. Most companies just don't treat it like one.</p>
            `,
          },
        ],
      },
      {
        heading: "This Approach Works Across Service Industries",
        content: `
          <p>While this case study focused on a technology services company, the same approach applies to any business that routes work to field or remote teams:</p>

          <ul>
            <li><strong>HVAC and mechanical contractors</strong> where technician specialization (commercial vs. residential, equipment brands, refrigerant types) affects first-time fix rates</li>
            <li><strong>Property management companies</strong> where maintenance technicians develop expertise at specific properties over time</li>
            <li><strong>IT managed services providers</strong> where client environments vary significantly and institutional knowledge about each environment matters</li>
            <li><strong>Electrical contractors</strong> where job complexity ranges from outlet replacements to industrial panel work and the wrong assignment wastes a truck roll</li>
            <li><strong>Facilities management</strong> where multi-site portfolios require matching technicians to buildings they know</li>
          </ul>

          <p>If your business assigns work to people and the quality of that assignment affects outcomes, the same pattern-mining approach applies.</p>
        `,
      },
    ],

    keyTakeaways: [
      "Your ticket history contains routing intelligence that no rules-based system can replicate",
      "Start with urgency scoring (clean customer data) before tackling assignment routing (messier internal data)",
      "Technician capability profiles built from actual work history are more accurate than self-reported skill matrices",
      "The system compounds: every confirmed assignment makes the next one smarter",
      "You don't need perfect data. You need enough structural data to find patterns",
      "The dispatcher's role shifts from making every decision to handling the 2% that actually needs judgment",
    ],

    faqs: [
      {
        question: "How long does implementation take?",
        answer: "The historical data analysis takes 2-3 weeks. Building and calibrating the routing model takes another 2-3 weeks. Most implementations are producing accurate suggestions within 30-45 days of kickoff.",
      },
      {
        question: "What if our ticket data is messy?",
        answer: "Ours was too. Notes were inconsistent, time tracking was empty, and priorities were meaningless. The system doesn't rely on those fields. It works from structural data that exists on every ticket: who was assigned, which customer, what category, what happened next. If your service platform has been recording assignments, you have enough.",
      },
      {
        question: "Does this replace our dispatchers?",
        answer: "It changes their role, not replaces it. Dispatchers go from making 1,200 assignment decisions a month to handling 25-30 edge cases and validating the system's judgment. The strategic parts of dispatch (managing escalations, balancing workload across the team, handling VIP clients) still need a human.",
      },
      {
        question: "What service management platforms does this work with?",
        answer: "Any platform that tracks ticket assignments, customer information, and resolution history. We've worked with platforms across the industry. If your system has an API or data export capability, we can pull the historical data we need.",
      },
      {
        question: "What happens when a new technician joins the team?",
        answer: "New technicians start with a baseline profile based on their role and geography. As they handle tickets and their assignments are confirmed, their profile builds automatically. Within 2-3 weeks of active work, the system has enough data to route to them intelligently.",
      },
      {
        question: "How do you measure accuracy?",
        answer: "Accuracy is measured by dispatcher confirmation rate: how often the system's suggested assignment is accepted without override. We also track reassignment rate (how often a ticket gets moved after initial assignment) and first-time resolution rate as secondary indicators.",
      },
    ],
  },
];

export function getSEOCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return SEO_CASE_STUDIES.find((cs) => cs.slug === slug);
}
