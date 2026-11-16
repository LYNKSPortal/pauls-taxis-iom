import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using Paul's Taxis services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        breadcrumb="Terms & Conditions"
        image="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-5 text-charcoal/70 sm:px-8">
          <p>
            These terms and conditions govern your use of Paul&apos;s Taxis
            services. By booking a journey with us, you agree to abide by our
            Zero Tolerance Policy and all applicable local transport
            regulations of the Isle of Man. Full terms available on request.
          </p>
        </div>
      </section>
    </>
  );
}
