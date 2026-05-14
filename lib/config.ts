export const siteConfig = {
  name: "BygAI",
  tagline: "AI-værktøjer til den lille danske virksomhed",
  email: "hej@bygai.dk",
  phone: "+45 00 00 00 00",

  heroTitle: "AI-værktøjer der giver dig mere tid til det, du er bedst til",
  heroSubtitle:
    "BygAI hjælper med opkald, beskeder og tilbud – så du kan fokusere på dit håndværk. Ingen teknikforståelse nødvendig.",
  primaryCta: "Prøv gratis i 14 dage",
  secondaryCta: "Se hvad vi kan hjælpe med",

  trustCount: "250+",
  trustLabel: "håndværkere bruger BygAI",

  navLinks: [
    { label: "Vores værktøjer", href: "#tools" },
    { label: "Priser", href: "#pricing" },
    { label: "Kontakt", href: "#contact" },
  ],

  tools: [
    {
      icon: "📞",
      title: "Telefon AI",
      desc: "Tager automatisk telefonen, når du ikke kan svare. Taler naturligt med kunder på dansk, finder ud af hvad de vil, og sender dig en kort besked.",
      tag: "Taler med kunder",
    },
    {
      icon: "💬",
      title: "Besked AI",
      desc: "Læser dine beskeder og e-mails højt, mens du arbejder. Du kan svare med talen – AI'en skriver et ordentligt svar for dig.",
      tag: "Læser og skriver",
    },
    {
      icon: "📷",
      title: "Billede AI",
      desc: "Tag et billede, og AI'en laver et tilbud. Perfekt til vinduesvask, skadesyn eller hurtige pristjek uden at skulle ringe frem og tilbage.",
      tag: "Laver tilbud",
    },
    {
      icon: "🔧",
      title: "Flere værktøjer på vej",
      desc: "Vi udvikler løbende nye AI-værktøjer, der gør hverdagen lettere for små danske virksomheder.",
      tag: "Kommer snart",
    },
  ],

  problems: [
    {
      icon: "📉",
      title: "Administration spiser din tid",
      desc: "Opkald, beskeder, mails og tilbud – det tager timer hver uge, som du hellere vil bruge på dine kunder.",
    },
    {
      icon: "🏃",
      title: "Kunder ryger til konkurrenten",
      desc: "Når du ikke svarer eller først vender tilbage dagen efter, ringer de bare videre til næste på listen.",
    },
    {
      icon: "😤",
      title: "Rod og bøvl koster overskud",
      desc: "Noter på servietter, glemte tilbageringninger og forvirring om hvem der sagde hvad. Det skal ikke være så svært.",
    },
  ],

  features: [
    {
      icon: "📈",
      title: "Mere omsætning",
      desc: "Fang flere kunder uden at løfte en finger. Opkald, beskeder og tilbud bliver håndteret automatisk.",
    },
    {
      icon: "🧘",
      title: "Mere ro i hverdagen",
      desc: "Ingen konstante afbrydelser. Arbejd uforstyrret og få samlet overblikket, når det passer dig.",
    },
    {
      icon: "🕐",
      title: "Altid klar",
      desc: "Dine AI-værktøjer arbejder 24/7 – også når du holder fri, har ferie eller er på opgave.",
    },
    {
      icon: "📱",
      title: "Virker med det du har",
      desc: "Ingen apps, ingen ny telefon. Det hele kører over dit eksisterende nummer og din mobil.",
    },
    {
      icon: "🇩🇰",
      title: "Dansk og GDPR",
      desc: "100% dansk tale. Alle data i EU. Ingen amerikanske servere. Bygget til danske virksomheder.",
    },
    {
      icon: "💳",
      title: "Ingen binding",
      desc: "Betal månedligt. Opsig når som helst. Ingen skjulte gebyrer eller lange kontrakter.",
    },
  ],

  pricingPlans: [
    {
      name: "Starter",
      price: "299",
      desc: "Et AI-værktøj efter eget valg",
      popular: false,
      features: [
        "Vælg ét værktøj (Telefon, Besked eller Billede)",
        "Løbende opdateringer",
        "Support på dansk",
        "14 dages gratis prøve",
      ],
    },
    {
      name: "Pro",
      price: "599",
      desc: "Alle nuværende AI-værktøjer",
      popular: true,
      features: [
        "Alle AI-værktøjer",
        "Nye værktøjer inkluderet",
        "Prioriteret support",
        "14 dages gratis prøve",
      ],
    },
    {
      name: "Premium",
      price: "999",
      desc: "Til virksomheder med flere medarbejdere",
      popular: false,
      features: [
        "Alt i Pro",
        "Op til 3 brugere",
        "API-adgang",
        "VIP-support",
      ],
    },
  ],
}
