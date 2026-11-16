"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const testimonial = TESTIMONIALS[index];

  return (
    <section className="bg-light-grey py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Passengers Say"
          description="Real feedback from islanders who trust Paul's Taxis every day."
        />

        <div className="relative mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass relative overflow-hidden rounded-3xl bg-white/70 p-8 shadow-xl shadow-charcoal/5 ring-1 ring-charcoal/5 sm:p-12"
            >
              <Quote className="h-10 w-10 text-taxi-yellow/40" />
              <p className="mt-4 text-balance text-xl font-medium leading-relaxed text-charcoal sm:text-2xl">
                &ldquo;{testimonial.review}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-taxi-yellow text-taxi-yellow" />
                ))}
              </div>
              <div className="mt-4">
                <p className="font-bold text-charcoal">{testimonial.name}</p>
                <p className="text-sm text-charcoal/50">{testimonial.location}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              aria-label="Previous testimonial"
              onClick={() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-charcoal shadow-md transition-colors hover:bg-taxi-yellow"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-taxi-yellow-dark" : "w-2 bg-charcoal/20"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-charcoal shadow-md transition-colors hover:bg-taxi-yellow"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
