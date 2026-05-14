const testimonials = [
  {
    text: "Jeg fangede 4 ekstra jobs sidste måned. Kunderne bliver overraskede over, hvor naturligt AI'en taler.",
    author: "Søren Jensen",
    role: "VVS-montør, Aarhus",
  },
];

export default function Testimonials() {
  return (
    <section className="section section-dark">
      <div className="container">
        <h2 className="section-title">Det siger vores brugere</h2>
        <p className="section-subtitle">
          Hør fra håndværkere, der allerede bruger BygAI.
        </p>
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">{t.author}</div>
            <div className="testimonial-role">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
