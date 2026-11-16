import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Paul's Taxis collects, uses and protects your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        breadcrumb="Privacy Policy"
        image="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-5 text-charcoal/70 sm:px-8">
          <p>
            Paul&apos;s Taxis respects your privacy. We only collect personal
            information necessary to fulfil your booking, such as your name,
            phone number and journey details. We never sell your data to
            third parties. For questions, contact us directly.
          </p>
        </div>
      </section>
    </>
  );
}
