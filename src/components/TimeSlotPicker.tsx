"use client";

import { useState } from "react";

interface TimeSlot {
  date: string; // ISO date string
  time: string; // Display time like "9:00 AM"
  datetime: string; // Full ISO datetime
}

interface TimeSlotPickerProps {
  onSelect: (slot: TimeSlot) => void;
  onBack: () => void;
}

// Mock data - will be replaced with API call
function generateMockSlots(): Record<string, TimeSlot[]> {
  const slots: Record<string, TimeSlot[]> = {};
  const today = new Date();

  // Generate slots for next 10 weekdays
  let daysAdded = 0;
  let currentDate = new Date(today);

  while (daysAdded < 10) {
    currentDate.setDate(currentDate.getDate() + 1);
    const dayOfWeek = currentDate.getDay();

    // Skip weekends
    if (dayOfWeek === 0 || dayOfWeek === 6) continue;

    const dateKey = currentDate.toISOString().split('T')[0];
    const daySlots: TimeSlot[] = [];

    // Generate slots from 9am to 4pm (last slot at 4pm for 60min call ending at 5pm)
    const hours = [9, 10, 11, 12, 14, 15, 16]; // Skip 1pm for lunch

    for (const hour of hours) {
      // Randomly skip some slots to simulate busy calendar
      if (Math.random() > 0.7) continue;

      const slotDate = new Date(currentDate);
      slotDate.setHours(hour, 0, 0, 0);

      const timeString = slotDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });

      daySlots.push({
        date: dateKey,
        time: timeString,
        datetime: slotDate.toISOString(),
      });
    }

    if (daySlots.length > 0) {
      slots[dateKey] = daySlots;
    }

    daysAdded++;
  }

  return slots;
}

function formatDateHeading(dateString: string): string {
  const date = new Date(dateString + 'T12:00:00');
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (date.toDateString() === today.toDateString()) {
    return 'Today';
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return 'Tomorrow';
  }

  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });
}

export default function TimeSlotPicker({ onSelect, onBack }: TimeSlotPickerProps) {
  const [slots] = useState(() => generateMockSlots());
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [confirming, setConfirming] = useState(false);

  const dateKeys = Object.keys(slots).sort();

  const handleSlotClick = (slot: TimeSlot) => {
    setSelectedSlot(slot);
    setConfirming(true);
  };

  const handleConfirm = () => {
    if (selectedSlot) {
      onSelect(selectedSlot);
    }
  };

  const handleCancelConfirm = () => {
    setConfirming(false);
    setSelectedSlot(null);
  };

  if (confirming && selectedSlot) {
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        <h3 className="mb-2 text-xl font-semibold text-dark">Confirm Your Time</h3>

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

        <div className="flex gap-3">
          <button
            onClick={handleCancelConfirm}
            className="flex-1 rounded-lg border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:bg-cream"
          >
            Pick Different Time
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-light"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1 text-sm text-text-light transition-colors hover:text-primary"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <p className="text-sm text-text-light">Eastern Time (ET)</p>
      </div>

      <h3 className="mb-6 text-center text-xl font-semibold text-dark">
        Pick a Time
      </h3>

      <div className="max-h-[400px] space-y-6 overflow-y-auto pr-2">
        {dateKeys.map((dateKey) => (
          <div key={dateKey}>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-light">
              {formatDateHeading(dateKey)}
            </h4>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {slots[dateKey].map((slot) => (
                <button
                  key={slot.datetime}
                  onClick={() => handleSlotClick(slot)}
                  className="rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-dark transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-text-light">
        60 minute Discovery Call via Google Meet
      </p>
    </div>
  );
}
