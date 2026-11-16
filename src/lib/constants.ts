export const SITE = {
  name: "Paul's Taxis",
  tagline: "Reliable Taxi Services Across the Isle of Man",
  phone: "+44 7624 266000",
  phoneDisplay: "07624 266 000",
  email: "info@paulstaxis.im",
  url: "https://www.paulstaxis.im",
  address: "Isle of Man",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pre-Book Taxi", href: "/booking" },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: "MapPin" | "Plane" | "Ship" | "Accessibility" | "Users";
  buttonLabel: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "local-pickups",
    title: "Local Pickups",
    description:
      "Reliable everyday transport around the Isle of Man for work, shopping, nights out and appointments.",
    longDescription:
      "Whether it's the daily commute, a shopping trip into town, a night out with friends, or getting to an important appointment, Paul's Taxis is on hand day and night. Our local drivers know every corner of the Isle of Man and pride themselves on punctual, friendly, and safe journeys.",
    icon: "MapPin",
    buttonLabel: "Book Local Journey",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "airport-transfers",
    title: "Airport Transfers",
    description:
      "Stress-free airport journeys with punctual pickups and flight monitoring.",
    longDescription:
      "Catching a flight from Ronaldsway Airport has never been easier. We monitor flight times to adjust for delays, ensuring you're always picked up on time — whether you're heading out or just landed home. Sit back and relax while we handle the driving.",
    icon: "Plane",
    buttonLabel: "Airport Transfer",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "ferry-transfers",
    title: "Ferry Transfers",
    description: "Reliable transfers to and from ferry terminals.",
    longDescription:
      "Travelling by sea? Our ferry transfer service ensures you arrive at the terminal with plenty of time to spare, or get you home quickly and comfortably after your crossing. Available for all sailing times, including early mornings and late nights.",
    icon: "Ship",
    buttonLabel: "Book Ferry Taxi",
    image: "/Steampacket.jpg",
  },
  {
    slug: "wheelchair-accessible-taxi",
    title: "Wheelchair Accessible Taxi",
    description:
      "Accessible transport with ramps, secure wheelchair fittings and experienced drivers.",
    longDescription:
      "Paul's Wheelchair Taxi provides safe, dignified, and comfortable transport for passengers with mobility needs. Our vehicles are fitted with secure ramps and wheelchair restraints, and our drivers are experienced and patient, ensuring every journey is stress-free.",
    icon: "Accessibility",
    buttonLabel: "Accessible Taxi",
    image: "/Wheelchair-Taxi.jpg",
  },
  {
    slug: "group-travel",
    title: "Group Travel",
    description: "Larger vehicles for families, groups and business travel.",
    longDescription:
      "Travelling as a family, group, or for business? We offer larger vehicles to keep everyone together, making group travel simple, comfortable and affordable — perfect for airport runs, nights out, or corporate transport.",
    icon: "Users",
    buttonLabel: "Group Booking",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1600&auto=format&fit=crop",
  },
];

export const WHY_CHOOSE_US = [
  { title: "Friendly Local Drivers", icon: "Smile" },
  { title: "Always On Time", icon: "Clock" },
  { title: "Clean Vehicles", icon: "Sparkles" },
  { title: "Airport Specialists", icon: "Plane" },
  { title: "Wheelchair Accessible", icon: "Accessibility" },
  { title: "Family Business", icon: "Home" },
  { title: "Island Wide Coverage", icon: "MapPinned" },
  { title: "Affordable Prices", icon: "Wallet" },
  { title: "Modern Booking", icon: "Smartphone" },
  { title: "Safe Travel", icon: "ShieldCheck" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah Kelly",
    location: "Douglas",
    review:
      "Absolutely brilliant service. The driver was on time, friendly, and got me to the airport with time to spare. Highly recommend Paul's Taxis!",
    rating: 5,
  },
  {
    name: "Michael Quirk",
    location: "Castletown",
    review:
      "Been using Paul's Taxis for years, even before the relaunch. Always reliable, always friendly. Feels like a proper local family business.",
    rating: 5,
  },
  {
    name: "Elaine Corkill",
    location: "Ramsey",
    review:
      "The wheelchair accessible taxi made such a difference for my mother. The driver was so patient and careful. Thank you!",
    rating: 5,
  },
  {
    name: "Jack Cottier",
    location: "Peel",
    review:
      "Booked a group taxi for a night out, driver was great craic and got us home safe. Will definitely use again.",
    rating: 5,
  },
  {
    name: "Fiona Teare",
    location: "Onchan",
    review:
      "Ferry transfer was seamless, driver waited for us even though we were delayed. Excellent, professional service.",
    rating: 5,
  },
];

export const STATS = [
  { label: "Years Combined Experience", value: 20, suffix: "+" },
  { label: "Journeys Completed", value: 15000, suffix: "+" },
  { label: "5 Star Reviews", value: 500, suffix: "+" },
  { label: "Regions Covered", value: 4, suffix: "" },
];

export const ZERO_TOLERANCE_RULES = [
  "No abuse towards our drivers.",
  "No damage to our vehicles.",
  "Treat our staff with respect.",
];

export const BUSINESS_HOURS = [
  { day: "Monday", hours: "9am–10pm" },
  { day: "Tuesday", hours: "9am–10pm" },
  { day: "Wednesday", hours: "9am–10pm" },
  { day: "Thursday", hours: "9am–10pm" },
  { day: "Friday", hours: "9am–10pm" },
  { day: "Saturday", hours: "9am–10pm" },
  { day: "Sunday", hours: "9am–10pm" },
];

export const TIMELINE = [
  {
    year: "Many Years Ago",
    title: "The Beginning in Castletown",
    description:
      "Paul's Taxis first operated in the south of the Isle of Man in Castletown, building a loyal base of local customers.",
  },
  {
    year: "Career Break",
    title: "Family First",
    description:
      "As family life became the priority, Paul stepped away from the taxi industry to raise his children.",
  },
  {
    year: "November 2022",
    title: "The Relaunch",
    description:
      "Once the children had grown up, Paul returned to doing what he loved. Paul's Taxis relaunched in the north of the Isle of Man.",
  },
  {
    year: "Today",
    title: "Island-Wide Growth",
    description:
      "Thanks to incredible customer support, the business has expanded into multiple regions including Paul's Taxis North, Paul's Taxis West, Paul's Taxis South and Paul's Wheelchair Taxi. Paul's son Barry (Paul Junior) now operates Paul's Taxis West, continuing the family tradition.",
  },
];
