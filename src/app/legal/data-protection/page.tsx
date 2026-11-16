import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Manx Data Protection",
  description: "Paul's Taxis compliance with Isle of Man data protection law.",
};

export default function DataProtectionPage() {
  return (
    <>
      <PageHero
        title="Manx Data Protection"
        breadcrumb="Manx Data Protection"
        image="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-5 text-charcoal/70 sm:px-8">
          <p>
            Paul&apos;s Taxis complies with the Data Protection Act 2018 (an
            Act of Tynwald) and processes personal data in line with Isle of
            Man data protection requirements. Any personal information
            provided during booking is used solely for arranging and
            delivering your journey.
          </p>
        </div>
      </section>
    </>
  );
}
