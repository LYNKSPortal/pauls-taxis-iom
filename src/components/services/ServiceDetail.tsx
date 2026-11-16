"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Plane, Ship, Accessibility, Users, LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import type { Service } from "@/lib/constants";

const ICONS: Record<Service["icon"], LucideIcon> = {
  MapPin,
  Plane,
  Ship,
  Accessibility,
  Users,
};

export default function ServiceDetail({
  service,
  reverse,
}: {
  service: Service;
  reverse: boolean;
}) {
  const Icon = ICONS[service.icon];

  return (
    <div
      className={`mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 ${
        reverse ? "" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: reverse ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={`relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={reverse ? "lg:order-1" : ""}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-taxi-yellow text-charcoal">
          <Icon className="h-7 w-7" strokeWidth={2.5} />
        </span>
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
          {service.title}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-charcoal/65">
          {service.longDescription}
        </p>
        <div className="mt-8">
          <Button href="/booking" size="lg">
            {service.buttonLabel}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
