"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 sm:right-8">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            whileHover={{ y: -3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal text-white shadow-lg shadow-black/20"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href={`tel:${SITE.phone}`}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        animate={{ boxShadow: ["0 0 0 0 rgba(255,193,7,0.5)", "0 0 0 14px rgba(255,193,7,0)"] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Call Paul's Taxis"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-taxi-yellow text-charcoal shadow-xl"
      >
        <Phone className="h-6 w-6" strokeWidth={2.5} />
      </motion.a>
    </div>
  );
}
