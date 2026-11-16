"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Lightbox from "@/components/ui/Lightbox";
import { GALLERY_IMAGES } from "@/lib/constants";

const PREVIEW_IMAGES = GALLERY_IMAGES.slice(0, 6);

const SPANS = [
  "sm:row-span-2",
  "",
  "",
  "",
  "sm:row-span-2",
  "",
];

export default function GalleryPreview() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <section className="bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Life On The Road"
          description="A glimpse at our fleet, our island and our team."
          light
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:auto-rows-[160px] sm:grid-cols-3">
          {PREVIEW_IMAGES.map((image, i) => (
            <motion.button
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onClick={() => setIndex(i)}
              className={`group relative overflow-hidden rounded-2xl ${SPANS[i] ?? ""}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                <Expand className="h-6 w-6 text-white" />
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/gallery" variant="ghost" size="lg">
            View Full Gallery
          </Button>
        </div>
      </div>

      <Lightbox
        images={PREVIEW_IMAGES}
        index={index}
        onClose={() => setIndex(null)}
        onNavigate={setIndex}
      />
    </section>
  );
}
