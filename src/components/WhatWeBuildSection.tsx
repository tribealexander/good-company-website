"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

interface ServiceCardData {
  id: number;
  title: string;
  description: string;
  example: string;
  impact: string;
  supportingText: string;
  color: string;
}

const services: ServiceCardData[] = [
  {
    id: 1,
    title: "Automate Manual Work",
    description:
      "We identify what should never touch a human and build systems to handle it. Whether that's repetitive coordination or one-off handoffs, across any department, the process is the same.",
    example: "Intake → triage → assignment → follow-ups, fully automated",
    impact: "5-10 hours per person per week reclaimed",
    supportingText:
      "Eliminate the busywork that drains your team's time and energy. We identify repetitive work and build automated systems that handle it consistently and accurately.",
    color: "#E8EDE9", // light sage
  },
  {
    id: 2,
    title: "Create Better Visibility",
    description:
      "Most leaders either micromanage or fly blind. We build systems that give you visibility into what's actually happening without hiring someone just to track it or digging through spreadsheets.",
    example: "Automated ops dashboard with early warning alerts and trend analysis",
    impact: "10+ hours/week saved on reporting",
    supportingText:
      "Stop managing blind. See what's actually happening in your business through automated reporting that tells you when to act, not after it's too late.",
    color: "#E5E9E6", // soft green-gray
  },
  {
    id: 3,
    title: "Improve Employee Performance",
    description:
      "Data alone doesn't change behavior. We build systems where performance is tracked automatically and tied to real incentives, so people have a reason to do better work and you're not the one enforcing it.",
    example: "QA scoring + escalation rules + coaching dashboard",
    impact: "10-20% productivity improvement",
    supportingText:
      "Enable evidence-based management. Hold people accountable with clear, measurable data on performance tied directly to outcomes.",
    color: "#F5F2EA", // light gold tint
  },
];

export default function WhatWeBuildSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const backgroundColor = activeId
    ? services.find((s) => s.id === activeId)?.color || "#FAF9F7"
    : "#FAF9F7"; // warm white default

  return (
    <section
      id="solutions"
      className="py-12 transition-colors duration-400 ease-in-out lg:py-16"
      style={{ backgroundColor }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading className="mb-6">What We Build</SectionHeading>
          <p className="mb-12 text-xl text-text-light">
            Everything we build serves one of three goals:
          </p>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <div
                className={`flex h-full cursor-pointer flex-col rounded-xl border bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] ${
                  activeId === service.id
                    ? "border-primary shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                    : "border-border hover:border-primary"
                }`}
                onMouseEnter={() => setActiveId(service.id)}
                onMouseLeave={() => setActiveId(null)}
                onClick={() =>
                  setActiveId(activeId === service.id ? null : service.id)
                }
              >
                <h3 className="mb-3 text-xl font-semibold text-dark">
                  {service.title}
                </h3>
                <p className="mb-4 text-text-light">{service.description}</p>
                <div className="mt-auto space-y-3 border-t border-border pt-4">
                  <p className="font-mono text-sm text-text-light">
                    <span className="font-semibold text-primary">Example:</span>{" "}
                    {service.example}
                  </p>
                  <p className="font-mono text-sm">
                    <span className="font-semibold text-gold">Impact:</span>{" "}
                    {service.impact}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
