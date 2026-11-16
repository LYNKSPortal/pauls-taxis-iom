"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Ban, HandHeart, Car } from "lucide-react";
import { ZERO_TOLERANCE_RULES } from "@/lib/constants";

const ICONS = [Ban, Car, HandHeart];

export default function ZeroTolerance() {
  return (
    <section className="bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-taxi-yellow/15 text-taxi-yellow"
        >
          <ShieldAlert className="h-8 w-8" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Our Zero Tolerance Policy
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/60"
        >
          We are committed to providing a safe and respectful environment for
          both passengers and drivers.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {ZERO_TOLERANCE_RULES.map((rule, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={rule}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 text-left"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-taxi-yellow">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-5 font-semibold text-white">{rule}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-sm text-white/40"
        >
          Failure to follow these rules may result in refusal of future service.
        </motion.p>
      </div>
    </section>
  );
}
