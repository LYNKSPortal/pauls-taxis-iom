import Link from "next/link";
import { Car, Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS_HOURS, NAV_LINKS, SITE } from "@/lib/constants";
import { FacebookIcon, XIcon, YouTubeIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-taxi-yellow text-charcoal">
                <Car className="h-6 w-6" strokeWidth={2.5} />
              </span>
              <span className="text-lg font-extrabold tracking-tight">
                Paul&apos;s Taxis
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              Paul&apos;s Taxis provides friendly and reliable transport
              throughout the Isle of Man including airport transfers, ferry
              transfers, local journeys and wheelchair accessible taxis.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: FacebookIcon, label: "Facebook" },
                { icon: XIcon, label: "Twitter" },
                { icon: YouTubeIcon, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-taxi-yellow hover:text-charcoal"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-taxi-yellow">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={`tel:${SITE.phone}`} className="transition-colors hover:text-white">
                  Call Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-taxi-yellow">
              Legal
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/legal/terms" className="transition-colors hover:text-white">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/data-protection" className="transition-colors hover:text-white">
                  Manx Data Protection
                </Link>
              </li>
              <li className="text-white/50">Company Number: 029565B</li>
              <li className="text-white/50">
                Registered Office: 16 Ballacrosha, Ballaugh, IM7 5AG, Isle of
                Man
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-taxi-yellow">
              Business Hours
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              {BUSINESS_HOURS.map((item) => (
                <li key={item.day} className="flex justify-between gap-4">
                  <span>{item.day}</span>
                  <span className="text-white/50">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 text-sm text-white/60 sm:grid-cols-3">
          <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 hover:text-white">
            <Phone className="h-4 w-4 text-taxi-yellow" /> {SITE.phoneDisplay}
          </a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4 text-taxi-yellow" /> {SITE.email}
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-taxi-yellow" /> Island Wide, Isle of Man
          </span>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Paul&apos;s Taxis. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
