"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Expand } from "lucide-react";
import Lightbox from "@/components/ui/Lightbox";
import { cn } from "@/lib/utils";
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from "@/lib/constants";

export default function GalleryGrid() {
  const [category, setCategory] = useState<(typeof GALLERY_CATEGORIES)[number]>("All");
  const [index, setIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      category === "All"
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter((img) => img.category === category),
    [category]
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
              category === cat
                ? "bg-taxi-yellow text-charcoal shadow-md"
                : "bg-light-grey text-charcoal/60 hover:bg-charcoal/10"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((img, i) => (
            <motion.button
              layout
              key={img.src + img.category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIndex(i)}
              className="group relative mb-4 block w-full overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={i % 3 === 0 ? 750 : 450}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                <Expand className="h-6 w-6 text-white" />
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <Lightbox images={filtered} index={index} onClose={() => setIndex(null)} onNavigate={setIndex} />
    </div>
  );
}
