import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos of Paul's Taxis vehicles, team and the beautiful Isle of Man.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        description="A look at our fleet, our team and the island we love."
        breadcrumb="Gallery"
        image="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <GalleryGrid />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
