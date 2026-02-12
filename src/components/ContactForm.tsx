"use client";

import { useState, useRef } from "react";
import TimeSlotPicker from "./TimeSlotPicker";

interface FormData {
  name: string;
  email: string;
  company: string;
  companySize: string;
  message: string;
}

interface TimeSlot {
  date: string;
  time: string;
  datetime: string;
}

type Step = "form" | "time" | "success";

export default function ContactForm() {
  const [step, setStep] = useState<Step>("form");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    companySize: "",
    message: "",
  });
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const submittedName = useRef("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    submittedName.current = formData.name;

    try {
      // Save form data first
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStep("time");
      } else {
        throw new Error("Failed to submit");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTimeSelect = async (slot: TimeSlot) => {
    setSelectedSlot(slot);
    setIsSubmitting(true);
    setError("");

    try {
      // TODO: Replace with actual booking API call
      // For now, simulate success
      await new Promise((resolve) => setTimeout(resolve, 500));
      setStep("success");
    } catch {
      setError("Failed to book. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles =
    "w-full rounded-lg border border-border bg-white px-4 py-3 text-text transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";
  const labelStyles = "mb-2 block text-sm font-medium text-text";

  // Success state
  if (step === "success" && selectedSlot) {
    const slotDate = new Date(selectedSlot.datetime);
    return (
      <div className="text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <svg
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="mb-2 text-2xl font-semibold text-dark">
          You&apos;re booked{submittedName.current ? `, ${submittedName.current}` : ""}!
        </h3>

        <div className="mb-6 rounded-lg border border-border bg-cream/50 p-4">
          <p className="text-lg font-medium text-dark">
            {slotDate.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <p className="text-2xl font-semibold text-primary">
            {selectedSlot.time}
          </p>
          <p className="mt-1 text-sm text-text-light">
            60 minute Discovery Call
          </p>
        </div>

        <p className="text-text-light">
          A calendar invite has been sent to <span className="font-medium text-dark">{formData.email}</span>
        </p>
      </div>
    );
  }

  // Time picker step
  if (step === "time") {
    return (
      <div>
        {isSubmitting && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        )}
        <TimeSlotPicker
          onSelect={handleTimeSelect}
          onBack={() => setStep("form")}
        />
        {error && (
          <div className="mt-4 rounded-lg bg-red-50 p-4 text-red-800">
            {error}
          </div>
        )}
      </div>
    );
  }

  // Form step
  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className={labelStyles}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputStyles}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className={labelStyles}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputStyles}
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className={labelStyles}>
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          className={inputStyles}
          placeholder="Your company name"
        />
      </div>

      <div>
        <label htmlFor="companySize" className={labelStyles}>
          Company Size
        </label>
        <select
          id="companySize"
          name="companySize"
          value={formData.companySize}
          onChange={handleChange}
          required
          className={inputStyles}
        >
          <option value="">Select company size</option>
          <option value="<10">Less than 10 employees</option>
          <option value="10-50">10-50 employees</option>
          <option value="50-200">50-200 employees</option>
          <option value="200+">200+ employees</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelStyles}>
          What challenges are you facing?
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className={inputStyles}
          placeholder="Tell us about your current situation and what you'd like to improve..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Next: Pick a Time"}
      </button>

      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-red-800">
          {error}
        </div>
      )}
    </form>
  );
}
