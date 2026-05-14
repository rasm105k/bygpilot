const images = [
  {
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b3?w=600&q=80",
    label: "Telefon AI i aktion",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    label: "Besked AI – beskeder der skriver sig selv",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    label: "Billede AI – tag et foto, få et tilbud",
  },
];

export default function Demo() {
  return (
    <section className="section section-dark">
      <div className="container">
        <h2 className="section-title">Se BygAI i aktion</h2>
        <p className="section-subtitle">
            Se hvor nemt det er. Ingen teknikforst&aring;else p&aring;kr&aelig;vet.
        </p>

        <div className="video-wrapper">
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b3?w=720&q=80"
            alt="BygAI demo"
          />
          <div className="video-play-btn" />
        </div>
        <p className="video-caption">
          Kort video der viser hvordan BygAI virker (60 sekunder)
        </p>

        <div className="image-row">
          {images.map((img, i) => (
            <div key={i} className="image-card">
              <img src={img.src} alt={img.label} />
              <div className="image-card-label">{img.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
