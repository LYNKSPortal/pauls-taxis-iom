"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

const REGIONS = [
  "Paul's Taxis North",
  "Paul's Taxis West",
  "Paul's Taxis South",
  "Paul's Wheelchair Taxi",
];

export default function AboutPreview() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl shadow-charcoal/20">
            <Image
              src="/Paul.jpg"
              alt="Paul, founder of Paul's Taxis"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 rounded-2xl bg-charcoal p-6 text-white shadow-xl sm:-right-8 sm:p-8">
            <p className="text-3xl font-extrabold text-taxi-yellow sm:text-4xl">
              <AnimatedCounter value={STATS[0].value} suffix={STATS[0].suffix} />
            </p>
            <p className="mt-1 text-sm text-white/70">{STATS[0].label}</p>
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 inline-flex items-center gap-2 rounded-full bg-taxi-yellow/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-taxi-yellow-dark"
          >
            About Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-balance text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl md:text-5xl"
          >
            About Paul&apos;s Taxis
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 space-y-4 text-lg leading-relaxed text-charcoal/65"
          >
            <p>
              Paul&apos;s Taxis is a trusted family-run taxi company serving
              communities across the Isle of Man.
            </p>
            <p>
              Originally operating in Castletown many years ago, Paul stepped
              away from the business while raising his family. In November
              2022, he returned to the taxi industry and rebuilt Paul&apos;s
              Taxis from the ground up.
            </p>
            <p>
              Today the business has expanded across multiple regions, while
              continuing to grow and maintain friendly, local customer
              service.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {REGIONS.map((region) => (
              <li
                key={region}
                className="flex items-center gap-2.5 rounded-xl bg-light-grey px-4 py-3 text-sm font-semibold text-charcoal"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-taxi-yellow-dark" />
                {region}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <Button href="/about" variant="secondary" size="lg">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
