import { siteConfig } from "@/lib/config";

export default function Features() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Fordele ved BygAI</h2>
        <p className="section-subtitle">
          Flere jobs, mere ro og professionel service – uden at løfte en finger.
        </p>
        <div className="features-grid">
          {siteConfig.features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
