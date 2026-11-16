"use client";

import { motion } from "framer-motion";
import { TIMELINE } from "@/lib/constants";

export default function Timeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-charcoal/10 sm:left-1/2 sm:-translate-x-1/2" />

      <div className="space-y-12">
        {TIMELINE.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={`relative flex flex-col gap-4 pl-12 sm:w-1/2 ${
              i % 2 === 1
                ? "sm:ml-auto sm:pl-12 sm:pr-0 sm:text-left"
                : "sm:pl-0 sm:pr-12 sm:text-right"
            }`}
          >
            <span
              className={`absolute left-4 top-1 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-taxi-yellow shadow ${
                i % 2 === 1
                  ? "sm:-left-2 sm:translate-x-0"
                  : "sm:left-auto sm:-right-2 sm:translate-x-0"
              }`}
            />
            <p className="text-sm font-bold uppercase tracking-wider text-taxi-yellow-dark">
              {item.year}
            </p>
            <h3 className="text-2xl font-bold text-charcoal">{item.title}</h3>
            <p className="leading-relaxed text-charcoal/60">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
