import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import BookingForm from "@/components/booking/BookingForm";
import ContactSidebar from "@/components/booking/ContactSidebar";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Pre-Book Taxi",
  description:
    "Pre-book your Paul's Taxis journey online. Local pickups, airport transfers, ferry transfers and wheelchair accessible taxis across the Isle of Man.",
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        title="Pre-Book Your Taxi"
        description="Fill in your journey details and we'll take care of the rest."
        breadcrumb="Pre-Book Taxi"
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Booking"
            title="Request Your Journey"
            description="Provide as much detail as possible so we can arrange the perfect vehicle for you."
            align="left"
            className="mb-12"
          />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <BookingForm />
            </div>
            <div>
              <ContactSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
