import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/about/Timeline";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Paul's Taxis is a trusted family-run taxi company serving communities across the Isle of Man. Read our story from Castletown to today's island-wide service.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Family Story"
        description="From Castletown to island-wide, three generations of trusted, friendly service."
        breadcrumb="About"
        image="/Paul.jpg"
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Story"
            title="A Family Business, Rebuilt With Love"
          />
          <div className="mx-auto mt-8 max-w-2xl space-y-6 text-lg leading-relaxed text-charcoal/65">
            <p>
              Back in the day, Paul&apos;s Taxis operated in the south of the
              Isle of Man in Castletown.
            </p>
            <p>
              As family life became the priority, Paul stepped away from the
              taxi industry to raise his children.
            </p>
            <p>
              Once the children had grown up, he returned to doing what he
              loved. In November 2022 Paul&apos;s Taxis relaunched in the
              north of the Isle of Man.
            </p>
            <p>
              Thanks to incredible customer support, the business has
              expanded into multiple regions including Paul&apos;s Taxis
              North, Paul&apos;s Taxis West, Paul&apos;s Taxis South and
              Paul&apos;s Wheelchair Taxi.
            </p>
            <p>
              Paul&apos;s son Barry (Paul Junior) now operates Paul&apos;s
              Taxis West, continuing the family tradition.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light-grey py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Our Journey" title="Timeline" className="mb-16" />
          <Timeline />
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
          {[
            "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop",
          ].map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-3xl shadow-lg ${
                i === 0 ? "sm:col-span-2 lg:col-span-1 aspect-[4/5]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={src}
                alt="Paul's Taxis family photo"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
