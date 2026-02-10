"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What do we get in the Automation Roadmap?",
    answer:
      "You'll walk away with a prioritized list of automation opportunities, ROI estimates for each, implementation recommendations (exactly how we'd build it), and a 90-day action plan you can execute yourself or with us. The roadmap is designed to be valuable whether or not you continue working with us. Most clients find the 'aha' moment isn't just what to automate—it's discovering where their data actually lives and how to consolidate it first.",
  },
  {
    question: "How much time does this take from our team?",
    answer:
      "We work primarily with leadership to set strategy and sit in on existing meetings—no extra time required there. We'll occasionally pull employees for 15-30 minute check-ins to understand ground-level realities. You don't need to assign a dedicated technical person. We embed in your world; you don't have to change how you operate.",
  },
  {
    question: "We tried automation before and it failed. Why is this different?",
    answer:
      "Most implementations fail because someone designs a system for the tool's sake, not for how humans actually work. We approach from the behavior side first: what do people actually do, what will they realistically adopt, and how do we make the system enforce accountability? We also stay engaged—iterating, tuning, and adapting—instead of handing it off and hoping it sticks.",
  },
  {
    question: "What if our data is scattered or messy?",
    answer:
      "That's extremely common and usually the first problem we solve. Before automation, we consolidate where information lives—creating single sources of truth instead of hunting through emails, texts, and spreadsheets. Clean data foundations enable everything else.",
  },
  {
    question: "Can you work within our existing tech stack?",
    answer:
      "Absolutely. We're tool-agnostic and work with whatever you already have—Slack, Teams, your CRM, project management tools, etc. We're not here to rip out and replace. If something needs upgrading, we'll recommend it, but we build on your existing foundation.",
  },
  {
    question: "What happens after the 4-month commitment?",
    answer:
      "You own everything we build. The automations keep running even if you stop working with us—though they won't be maintained or evolved. Most clients continue because we keep finding new problems to solve as the business grows. You can shift to a lighter maintenance partnership or pause entirely. It's flexible.",
  },
  {
    question: "How do we know if this is worth the investment?",
    answer:
      "Think about it as the cost of a new middle-management hire ($50K-$80K) versus reclaiming capacity across your entire team. If we save 5-10 hours per person per week across 10 people, that's 50-100 hours reclaimed—equivalent to 1-2 full-time employees. Add in the revenue protected by catching at-risk clients early, and most engagements pay for themselves within months.",
  },
  {
    question: "Do we need technical people on our side?",
    answer:
      "No. We work with non-technical operations managers, founders, and executives all the time. If you have technical people who want to be involved, great—but it's not required. We handle the technical complexity; you provide the business context.",
  },
  {
    question: "What makes your approach different from other automation consultants?",
    answer:
      "Most automation and change management fails because it's just tools and dashboards that nobody checks after the first week. We build systems with three things baked in: visibility, accountability, and consequence. Visibility means leadership can see what's happening without micromanaging or chasing updates. Accountability means that information gets used to hold people to clear standards. And consequence means the system actually does something (flags, escalations, incentives) rather than just displaying data and hoping someone acts on it. That's the difference between installing a tool and building a system that drives behavior.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(-1); // All closed by default

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="mx-auto max-w-[900px]">
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-[#E0DBD3]">
            <button
              onClick={() => toggleQuestion(index)}
              className={`relative w-full cursor-pointer pr-16 text-left transition-colors duration-200 ease-out ${
                isOpen
                  ? "bg-[#F9F9F7] text-primary"
                  : "bg-transparent text-dark hover:bg-[#F9F9F9]"
              }`}
              style={{ padding: "24px 60px 24px 0" }}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="block pl-6 text-lg font-semibold md:text-xl">
                {item.question}
              </span>
              <span
                className={`absolute right-6 top-6 flex h-6 w-6 items-center justify-center text-2xl font-light text-dark transition-transform duration-200 ease-out md:h-6 md:w-6 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p
                className={`px-6 pb-6 text-base leading-relaxed text-text-light md:text-lg ${
                  isOpen ? "bg-[#F9F9F7]" : ""
                }`}
                style={{ lineHeight: 1.7 }}
              >
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
