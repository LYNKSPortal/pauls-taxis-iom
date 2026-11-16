"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-taxi-yellow py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-5 text-center sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-balance text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl"
        >
          Need a Taxi Today?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl text-lg text-charcoal/80"
        >
          Our friendly drivers are ready and waiting, island-wide, 24/7.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button href="/booking" variant="secondary" size="lg">
            Book Now
          </Button>
          <Button
            href={`tel:${SITE.phone}`}
            variant="outline"
            size="lg"
            className="border-charcoal/30 text-charcoal hover:border-charcoal hover:text-charcoal"
            icon={<Phone className="h-5 w-5" />}
          >
            Call Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
