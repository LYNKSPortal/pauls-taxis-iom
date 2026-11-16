import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

type PageHeroProps = {
  title: string;
  description?: string;
  image: string;
  breadcrumb: string;
};

export default function PageHero({ title, description, image, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-charcoal pt-28">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
        <nav className="mb-4 flex items-center gap-1.5 text-sm font-medium text-white/60">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-taxi-yellow">{breadcrumb}</span>
        </nav>
        <h1 className="text-balance max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-white/70">{description}</p>
        )}
      </div>
    </section>
  );
}
