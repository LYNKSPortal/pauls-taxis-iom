"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Phone, ChevronDown, Users, MapPinned, Plane, Accessibility } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const QUICK_STATS = [
  { icon: Users, label: "Family Business" },
  { icon: MapPinned, label: "Island Wide" },
  { icon: Plane, label: "Airport Transfers" },
  { icon: Accessibility, label: "Wheelchair Accessible" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden bg-charcoal">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2400&auto=format&fit=crop"
          alt="Premium taxi driving through the Isle of Man"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/40 to-transparent" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 pt-28 pb-16 sm:px-8"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-taxi-yellow/15 px-4 py-2 text-sm font-semibold text-taxi-yellow"
        >
          Family Run &middot; Trusted Since Return in 2022
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Reliable Taxi Services Across the{" "}
          <span className="text-taxi-yellow">Isle of Man</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl"
        >
          Friendly, professional and dependable taxi services covering local
          journeys, airport transfers, ferry transfers and wheelchair
          accessible transport.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="/booking" size="lg">
            Book a Taxi
          </Button>
          <Button
            href={`tel:${SITE.phone}`}
            variant="outline"
            size="lg"
            icon={<Phone className="h-5 w-5" />}
          >
            Call Now
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-8"
        >
          {QUICK_STATS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-white/85">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <Icon className="h-4.5 w-4.5 text-taxi-yellow" />
              </span>
              <span className="text-sm font-semibold">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/60"
      >
        <ChevronDown className="h-7 w-7" />
      </motion.div>
    </section>
  );
}
