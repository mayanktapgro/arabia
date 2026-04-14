import { featuredServiceSlugs, servicesData } from "@/data/servicesData";

export const heroSlides = [
  {
    id: "rejuvenation",
    eyebrow: "Noor Signature Ritual",
    title: "Transform your skin with elevated Arabic luxury care",
    description:
      "Science-led skin rejuvenation, warm hospitality, and luminous treatment journeys designed for guests who expect visible refinement.",
    primaryCta: "Book Appointment",
    secondaryCta: "Explore Treatments",
    backgroundImage: "/arviaData/reception5.jpeg",
    foregroundImage: "/images/hero1.jpeg",
  },
  {
    id: "laser",
    eyebrow: "Precision Laser Suites",
    title: "Advanced laser treatments in a calm, softly lit clinic setting",
    description:
      "From smoother skin to brighter tone correction, our laser programs combine performance, comfort, and premium attention at every step.",
    primaryCta: "Book Appointment",
    secondaryCta: "Explore Treatments",
    backgroundImage: "/arviaData/reception5.jpeg",
    foregroundImage: "/images/hair-removal.jpeg",
  },
  {
    id: "facial",
    eyebrow: "Facial Renewal",
    title: "Hydration, lifting, and glow-focused rituals for visible confidence",
    description:
      "Luxury facials, brightening protocols, and anti-aging care tailored for clients who want instant elegance and long-term skin quality.",
    primaryCta: "Book Appointment",
    secondaryCta: "Explore Treatments",
    backgroundImage: "/arviaData/reception5.jpeg",
    foregroundImage: "/images/hydrafacial.jpeg",
  },
];

export const topServices = featuredServiceSlugs.slice(0, 10).map((slug) =>
  servicesData.find((service) => service.slug === slug)
);

export const highDemandFeature = {
  title: "The clinic's most requested rituals, curated under one refined experience",
  description:
    "A blend of precision aesthetics and Arabic-inspired hospitality, designed for clients seeking confidence, comfort, and polished visible results.",
  image: "/images/hero2.jpeg",
};

export const highDemandCards = [
  {
    title: "Laser Hair Removal",
    description: "Comfort-first sessions for smooth skin and a cleaner routine.",
    image: "/images/hair-removal.jpeg",
  },
  {
    title: "Laser Photofacial",
    description: "Light-based tone correction for glow, clarity, and brightness.",
    image: "/images/hero1.jpeg",
  },
  {
    title: "Hydrafacial",
    description: "Deep cleansing and hydration with an immediate luminous finish.",
    image: "/images/hydrafacial.jpeg",
  },
  {
    title: "HIFU Skin Tightening",
    description: "Contour support and firmness in a calm, premium treatment flow.",
    image: "/images/hifu-treatment.jpeg",
  },
];

export const homeServiceContent = {
  title: "Home Services Available at Doorstep in Delhi NCR",
  description:
    "Select treatments can be arranged in the privacy of your home with the same premium care standards, planning, and client-first hospitality.",
  services: ["Laser Hair Removal", "Hydrafacial", "Skin Treatments"],
  cta: "Book Home Service",
};

export const testimonials = [
  {
    name: "Sarah K.",
    country: "United Kingdom",
    treatment: "Hydrafacial",
    rating: 5,
    quote:
      "After my hydrafacial, my skin felt brighter within 10 days and my makeup sat beautifully. The clinic felt calm, premium, and thoughtfully managed.",
  },
  {
    name: "Ahmed R.",
    country: "Qatar",
    treatment: "Laser Hair Removal",
    rating: 5,
    quote:
      "The laser sessions were comfortable, well explained, and noticeably effective. The whole environment felt discreet and polished.",
  },
  {
    name: "Elena M.",
    country: "Italy",
    treatment: "Chemical Peel & Brightening",
    rating: 5,
    quote:
      "My skin looked clearer and more even within a few visits. I appreciated how luxurious the treatment felt without losing medical credibility.",
  },
  {
    name: "Fatima S.",
    country: "Qatar",
    treatment: "HIFU Skin Tightening",
    rating: 5,
    quote:
      "I wanted lifting without surgery, and the results felt graceful and natural. The aftercare guidance was just as impressive as the session itself.",
  },
  {
    name: "Lina A.",
    country: "Kuwait",
    treatment: "Laser Photofacial",
    rating: 5,
    quote:
      "My complexion looked fresher and more balanced after the photofacial course. It genuinely elevated my confidence for work events.",
  },
  {
    name: "Nadia P.",
    country: "France",
    treatment: "Hydrafacial",
    rating: 5,
    quote:
      "The treatment gave me instant hydration and a refined glow that lasted well beyond the week. It felt like luxury with real skin intelligence behind it.",
  },
  {
    name: "Omar H.",
    country: "Bahrain",
    treatment: "Laser Hair Removal",
    rating: 5,
    quote:
      "I had expected discomfort, but the sessions were smooth and carefully handled. The visible reduction in regrowth was worth every visit.",
  },
  {
    name: "Maya T.",
    country: "Germany",
    treatment: "Collagen Lift Therapy",
    rating: 5,
    quote:
      "My skin looked more rested and refined after a short program. The team made the process feel personal rather than transactional.",
  },
  {
    name: "Yousef N.",
    country: "Saudi Arabia",
    treatment: "Hair Restoration Therapy",
    rating: 5,
    quote:
      "The scalp treatment plan was structured, premium, and surprisingly relaxing. I noticed a healthier scalp feel within the first month.",
  },
];
