export const siteConfig = {
  name: "BygAI",
  tagline: "AI-værktøjer til den lille danske virksomhed",
  email: "hej@bygai.dk",
  phone: "+45 00 00 00 00",

  heroTitle: "Få din egen AI-assistent der tager telefonen, når du ikke kan",
  heroSubtitle:
    "BygAI svarer på dansk, kvalificerer kunder og sender dig kun det vigtige via SMS. Så du kan fokusere på arbejdet.",
  primaryCta: "Prøv gratis i 14 dage",
  secondaryCta: "Se hvordan det virker",

  trustCount: "250+",
  trustLabel: "håndværkere bruger BygAI",

  navLinks: [
    { label: "Hvordan det virker", href: "#how-it-works" },
    { label: "Priser", href: "#pricing" },
    { label: "Kontakt", href: "#contact" },
  ],

  features: [
    {
      icon: "📈",
      title: "Mere omsætning",
      desc: "Ingen mistede leads. Hver eneste kundehenvendelse bliver fanget og kvalificeret.",
    },
    {
      icon: "🧘",
      title: "Mere ro på jobbet",
      desc: "Arbejd uforstyrret uden konstant at skulle tjekke telefonen.",
    },
    {
      icon: "🕐",
      title: "Professionel service 24/7",
      desc: "Din AI-assistent svarer altid – også efter arbejdstid og i weekender.",
    },
    {
      icon: "📱",
      title: "Ingen installation",
      desc: "Viderestil blot dit nummer. Ingen apps, ingen ny hardware.",
    },
    {
      icon: "💳",
      title: "Betal månedligt",
      desc: "Ingen binding. Du kan opsige når som helst.",
    },
    {
      icon: "🇩🇰",
      title: "Dansk udviklet",
      desc: "100% dansk tale. Data i EU. GDPR-kompatibel.",
    },
  ],

  pricingPlans: [
    {
      name: "Starter",
      price: "299",
      desc: "Grundlæggende lead capture",
      popular: false,
      features: [
        "AI-telefonassistent",
        "SMS-notifikationer",
        "Simpelt call flow",
        "14 dages gratis prøve",
      ],
    },
    {
      name: "Pro",
      price: "599",
      desc: "Fuld AI + booking-hints",
      popular: true,
      features: [
        "Alt i Starter",
        "Booking-assistance",
        "Akuthedsvurdering",
        "Prioriteret support",
      ],
    },
    {
      name: "Premium",
      price: "999",
      desc: "Flere numre & integrationer",
      popular: false,
      features: [
        "Alt i Pro",
        "Op til 3 telefonnumre",
        "API-integration",
        "VIP-support",
      ],
    },
  ],
}
