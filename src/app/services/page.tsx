import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ServiceDetail from "@/components/services/ServiceDetail";
import CtaBanner from "@/components/home/CtaBanner";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Paul's Taxis services across the Isle of Man: local pickups, airport transfers, ferry transfers, wheelchair accessible taxis and group travel.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Whatever the journey, we've got the Isle of Man covered."
        breadcrumb="Services"
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop"
      />

      <div className="divide-y divide-charcoal/5 bg-white">
        {SERVICES.map((service, i) => (
          <ServiceDetail key={service.slug} service={service} reverse={i % 2 === 1} />
        ))}
      </div>

      <CtaBanner />
    </>
  );
}
