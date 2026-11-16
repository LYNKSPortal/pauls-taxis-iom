import { Phone, Mail, Clock, MapPin, AlertTriangle } from "lucide-react";
import { BUSINESS_HOURS, SITE } from "@/lib/constants";

export default function ContactSidebar() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-charcoal p-8 text-white">
        <h3 className="text-lg font-bold">Contact Information</h3>
        <ul className="mt-6 space-y-4 text-sm">
          <li className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-taxi-yellow" />
            <div>
              <p className="text-white/50">Phone</p>
              <a href={`tel:${SITE.phone}`} className="font-semibold hover:text-taxi-yellow">
                {SITE.phoneDisplay}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-taxi-yellow" />
            <div>
              <p className="text-white/50">Email</p>
              <a href={`mailto:${SITE.email}`} className="font-semibold hover:text-taxi-yellow">
                {SITE.email}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-taxi-yellow" />
            <div>
              <p className="text-white/50">Service Area</p>
              <p className="font-semibold">Island Wide, Isle of Man</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="rounded-3xl bg-light-grey p-8">
        <h3 className="flex items-center gap-2 text-lg font-bold text-charcoal">
          <Clock className="h-5 w-5 text-taxi-yellow-dark" />
          Operating Hours
        </h3>
        <ul className="mt-5 space-y-2 text-sm">
          {BUSINESS_HOURS.map((item) => (
            <li key={item.day} className="flex justify-between text-charcoal/70">
              <span>{item.day}</span>
              <span className="font-semibold text-charcoal">{item.hours}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl bg-taxi-yellow/15 p-6">
        <div className="flex items-center gap-3">
          <AlertTriangle className="h-6 w-6 text-taxi-yellow-dark" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">
              Need us urgently?
            </p>
            <a href={`tel:${SITE.phone}`} className="text-lg font-extrabold text-charcoal">
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-light-grey">
        <div className="flex h-full w-full items-center justify-center text-charcoal/40">
          <div className="text-center">
            <MapPin className="mx-auto h-8 w-8" />
            <p className="mt-2 text-sm font-medium">Google Map Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
