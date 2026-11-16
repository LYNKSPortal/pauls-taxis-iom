"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Plane, Ship, Accessibility, Users, LucideIcon } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/lib/constants";

const ICONS: Record<Service["icon"], LucideIcon> = {
  MapPin,
  Plane,
  Ship,
  Accessibility,
  Users,
};

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = ICONS[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-md shadow-charcoal/5 ring-1 ring-charcoal/5 transition-shadow duration-300 hover:shadow-2xl hover:shadow-charcoal/15"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
        <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-taxi-yellow text-charcoal shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
          <Icon className="h-6 w-6" strokeWidth={2.5} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-charcoal">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/60">
          {service.description}
        </p>
        <Link
          href="/booking"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-taxi-yellow-dark transition-colors group-hover:text-charcoal"
        >
          {service.buttonLabel}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
