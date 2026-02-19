"use client";

import { useState, useMemo } from "react";

interface BookingInterfaceProps {
  name: string;
  email: string;
  company?: string;
  message?: string;
}

interface TimeSlot {
  time: string;
  display: string;
}

const AVAILABLE_SLOTS: TimeSlot[] = [
  { time: "09:00", display: "9:00 AM" },
  { time: "10:00", display: "10:00 AM" },
  { time: "11:00", display: "11:00 AM" },
  { time: "12:00", display: "12:00 PM" },
  { time: "13:00", display: "1:00 PM" },
  { time: "14:00", display: "2:00 PM" },
  { time: "15:00", display: "3:00 PM" },
  { time: "16:00", display: "4:00 PM" },
];

export default function BookingInterface({ name, email, company, message }: BookingInterfaceProps) {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isBooked, setIsBooked] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  // Find first available date (today or next weekday)
  const firstAvailableDate = useMemo(() => {
    const d = new Date(today);
    while (d.getDay() === 0 || d.getDay() === 6) {
      d.setDate(d.getDate() + 1);
    }
    return d;
  }, [today]);

  const [selectedDate, setSelectedDate] = useState<Date | null>(firstAvailableDate);

  const daysInMonth = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: (Date | null)[] = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  }, [currentMonth]);

  const monthYear = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const isDateSelectable = (date: Date | null) => {
    if (!date) return false;
    const day = date.getDay();
    return day !== 0 && day !== 6 && date >= today;
  };

  const isDateSelected = (date: Date | null) => {
    if (!date || !selectedDate) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  const isToday = (date: Date | null) => {
    if (!date) return false;
    return date.toDateString() === today.toDateString();
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const canGoPrev = currentMonth.getMonth() > today.getMonth() ||
                    currentMonth.getFullYear() > today.getFullYear();

  const formatSelectedDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  const handleConfirm = async () => {
    if (!selectedDate || !selectedTime) return;

    setIsBooking(true);
    setBookingError(null);

    try {
      const timeDisplay = AVAILABLE_SLOTS.find(s => s.time === selectedTime)?.display;

      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          message,
          selectedDate: formatSelectedDate(selectedDate),
          selectedTime: timeDisplay,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create booking");
      }

      setIsBooked(true);
    } catch (error) {
      console.error("Booking error:", error);
      setBookingError("Something went wrong. Please try again or email us directly at alex@yourgoodcompany.com");
    } finally {
      setIsBooking(false);
    }
  };

  // Confirmation screen after booking
  if (isBooked && selectedDate && selectedTime) {
    const timeDisplay = AVAILABLE_SLOTS.find(s => s.time === selectedTime)?.display;
    return (
      <div className="mx-auto max-w-2xl text-center">
        <div className="rounded-2xl border border-border bg-white p-12 shadow-lg">
          {/* Success icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="mb-2 font-serif text-3xl font-bold text-dark">
            You're all set, {name}!
          </h2>
          <p className="mb-8 text-lg text-muted">
            We're looking forward to speaking with you.
          </p>

          {/* Booking details */}
          <div className="mb-8 rounded-xl bg-light p-6">
            <p className="mb-1 text-sm font-medium text-muted">Your discovery call</p>
            <p className="text-lg font-semibold text-dark">
              {formatSelectedDate(selectedDate)} at {timeDisplay}
            </p>
            <p className="mt-2 text-sm text-muted">60 minutes via Google Meet</p>
          </div>

          <p className="text-sm text-muted">
            You&apos;ll receive a calendar invite at your email shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl">
      {/* Success header */}
      <div className="mb-8 flex items-center justify-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="text-xl font-medium text-dark">
            Thanks, {name}!
          </p>
          <p className="text-muted">Now pick a time for your discovery call.</p>
        </div>
      </div>

      {/* Booking card - Calendly style */}
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-lg">
        <div className="flex flex-col lg:flex-row">
          {/* Left sidebar - Branded info */}
          <div className="border-b border-border bg-[#004D36] p-8 lg:w-72 lg:border-b-0 lg:border-r">
            <div className="mb-6">
              <span className="font-serif text-2xl font-bold text-white">Good Company</span>
            </div>

            <h2 className="mb-4 text-xl font-semibold text-white">
              Discovery Call
            </h2>

            <div className="space-y-4 text-[#A8D5C2]">
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>60 minutes</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Google Meet</span>
              </div>

              {selectedDate && (
                <div className="flex items-start gap-3 pt-2 border-t border-white/20 mt-4">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  <div>
                    <p className="text-white font-medium">{formatSelectedDate(selectedDate)}</p>
                    {selectedTime && (
                      <p>{AVAILABLE_SLOTS.find(s => s.time === selectedTime)?.display}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main content - Calendar & Times */}
          <div className="flex-1 p-8">
            {/* Calendar header */}
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-dark">{monthYear}</h3>
              <div className="flex gap-2">
                <button
                  onClick={prevMonth}
                  disabled={!canGoPrev}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-light disabled:opacity-30"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextMonth}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-light"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Day headers */}
            <div className="mb-3 grid grid-cols-7 text-center text-sm font-medium text-muted">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>

            {/* Calendar grid */}
            <div className="mb-8 grid grid-cols-7 gap-1">
              {daysInMonth.map((date, i) => (
                <button
                  key={i}
                  disabled={!isDateSelectable(date)}
                  onClick={() => date && setSelectedDate(date)}
                  className={`
                    flex h-10 w-10 items-center justify-center rounded-full text-sm transition-all
                    ${!date ? "invisible" : ""}
                    ${isDateSelected(date)
                      ? "bg-primary text-white font-semibold"
                      : isToday(date)
                        ? "bg-primary/10 text-primary font-semibold"
                        : isDateSelectable(date)
                          ? "text-dark hover:bg-light"
                          : "text-muted/40 cursor-not-allowed"
                    }
                  `}
                >
                  {date?.getDate()}
                </button>
              ))}
            </div>

            {/* Time slots */}
            {selectedDate && (
              <div className="border-t border-border pt-6">
                <p className="mb-4 text-sm font-medium text-muted">Available times</p>
                <div className="grid grid-cols-4 gap-2">
                  {AVAILABLE_SLOTS.map((slot) => (
                    <button
                      key={slot.time}
                      onClick={() => setSelectedTime(slot.time)}
                      className={`
                        rounded-lg border px-3 py-2.5 text-sm font-medium transition-all
                        ${selectedTime === slot.time
                          ? "border-primary bg-primary text-white"
                          : "border-border text-dark hover:border-primary hover:bg-primary/5"
                        }
                      `}
                    >
                      {slot.display}
                    </button>
                  ))}
                </div>

                {selectedTime && (
                  <>
                    <button
                      onClick={handleConfirm}
                      disabled={isBooking}
                      className="mt-6 w-full rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isBooking ? "Booking..." : "Confirm Booking"}
                    </button>
                    {bookingError && (
                      <p className="mt-3 text-sm text-red-600">{bookingError}</p>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
