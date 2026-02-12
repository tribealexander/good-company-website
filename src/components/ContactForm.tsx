"use client";

import { useState, useRef } from "react";

interface FormData {
  name: string;
  email: string;
  company: string;
  companySize: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    companySize: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const submittedName = useRef("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "" });
    submittedName.current = formData.name;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thanks for reaching out!",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          companySize: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or email us directly.",
      });
    }
  };

  const inputStyles =
    "w-full rounded-lg border border-border bg-white px-4 py-3 text-text transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";
  const labelStyles = "mb-2 block text-sm font-medium text-text";

  // Success state - show calendar booking
  if (status.type === "success") {
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
          Thanks{submittedName.current ? `, ${submittedName.current}` : ""}!
        </h3>
        <p className="mb-8 text-text-light">
          We&apos;ve got your info. Now pick a time that works for you.
        </p>
        <a
          href="https://calendar.app.google/gi1oCV2S8mcjTqRx7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Book a Time
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
        disabled={status.type === "loading"}
        className="w-full rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status.type === "loading" ? "Sending..." : "Submit & Book a Call"}
      </button>

      {status.type === "error" && (
        <div className="rounded-lg bg-red-50 p-4 text-red-800">
          {status.message}
        </div>
      )}
    </form>
  );
}
