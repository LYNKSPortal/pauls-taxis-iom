"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

const FIELD_CLASSES =
  "w-full rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/40 transition-colors focus:border-taxi-yellow focus:outline-none focus:ring-2 focus:ring-taxi-yellow/30";

const LABEL_CLASSES = "mb-2 block text-sm font-semibold text-charcoal";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-3xl bg-light-grey p-12 text-center"
      >
        <CheckCircle2 className="h-14 w-14 text-taxi-yellow-dark" />
        <h3 className="mt-6 text-2xl font-bold text-charcoal">
          Booking Request Received
        </h3>
        <p className="mt-3 max-w-md text-charcoal/60">
          Thank you! A member of the Paul&apos;s Taxis team will confirm your
          journey shortly. For urgent bookings please call us directly.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-3xl bg-light-grey p-6 shadow-sm sm:p-10"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className={LABEL_CLASSES} htmlFor="name">
            Name
          </label>
          <input required id="name" name="name" type="text" placeholder="Your full name" className={FIELD_CLASSES} />
        </div>
        <div>
          <label className={LABEL_CLASSES} htmlFor="phone">
            Phone
          </label>
          <input required id="phone" name="phone" type="tel" placeholder="07624 000 000" className={FIELD_CLASSES} />
        </div>
        <div className="sm:col-span-2">
          <label className={LABEL_CLASSES} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" placeholder="you@example.com" className={FIELD_CLASSES} />
        </div>
        <div className="sm:col-span-2">
          <label className={LABEL_CLASSES} htmlFor="pickup">
            Pickup Address
          </label>
          <input required id="pickup" name="pickup" type="text" placeholder="e.g. 12 Main Street, Douglas" className={FIELD_CLASSES} />
        </div>
        <div className="sm:col-span-2">
          <label className={LABEL_CLASSES} htmlFor="destination">
            Destination
          </label>
          <input required id="destination" name="destination" type="text" placeholder="e.g. Isle of Man Airport" className={FIELD_CLASSES} />
        </div>
        <div>
          <label className={LABEL_CLASSES} htmlFor="date">
            Pickup Date
          </label>
          <input required id="date" name="date" type="date" className={FIELD_CLASSES} />
        </div>
        <div>
          <label className={LABEL_CLASSES} htmlFor="time">
            Pickup Time
          </label>
          <input required id="time" name="time" type="time" className={FIELD_CLASSES} />
        </div>
        <div>
          <label className={LABEL_CLASSES} htmlFor="passengers">
            Passengers
          </label>
          <input id="passengers" name="passengers" type="number" min={1} defaultValue={1} className={FIELD_CLASSES} />
        </div>
        <div>
          <label className={LABEL_CLASSES} htmlFor="luggage">
            Luggage
          </label>
          <input id="luggage" name="luggage" type="number" min={0} defaultValue={0} className={FIELD_CLASSES} />
        </div>
        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-charcoal/10 bg-white px-4 py-3">
            <input id="wheelchair" name="wheelchair" type="checkbox" className="h-5 w-5 rounded accent-taxi-yellow" />
            <span className="text-sm font-semibold text-charcoal">
              Wheelchair Accessible Vehicle Required
            </span>
          </label>
        </div>
        <div className="sm:col-span-2">
          <label className={LABEL_CLASSES} htmlFor="notes">
            Journey Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Any additional information about your journey..."
            className={FIELD_CLASSES}
          />
        </div>
      </div>

      <div className="mt-8">
        <Button type="submit" size="lg" className="w-full sm:w-auto" icon={<Send className="h-5 w-5" />}>
          Submit Booking Request
        </Button>
      </div>
    </form>
  );
}
