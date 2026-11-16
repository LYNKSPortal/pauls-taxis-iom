"use client";

import { motion } from "framer-motion";
import {
  Smile,
  Clock,
  Sparkles,
  Plane,
  Accessibility,
  Home,
  MapPinned,
  Wallet,
  Smartphone,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_US } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  Smile,
  Clock,
  Sparkles,
  Plane,
  Accessibility,
  Home,
  MapPinned,
  Wallet,
  Smartphone,
  ShieldCheck,
};

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Paul's Taxis Difference"
          description="Ten reasons why islanders trust Paul's Taxis for every journey."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 5) * 0.06 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center gap-4 rounded-2xl border border-charcoal/5 bg-light-grey/60 p-6 text-center transition-colors duration-300 hover:bg-charcoal hover:text-white"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-taxi-yellow text-charcoal">
                  <Icon className="h-6 w-6" strokeWidth={2.5} />
                </span>
                <p className="text-sm font-bold leading-snug">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
