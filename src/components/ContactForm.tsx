"use client";

import { useState } from "react";

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
          message:
            "Thanks for reaching out! We'll get back to you within 24 hours.",
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
        {status.type === "loading" ? "Sending..." : "Book a Discovery Call"}
      </button>

      {status.type === "success" && (
        <div className="rounded-lg bg-green-50 p-4 text-green-800">
          {status.message}
        </div>
      )}

      {status.type === "error" && (
        <div className="rounded-lg bg-red-50 p-4 text-red-800">
          {status.message}
        </div>
      )}
    </form>
  );
}
