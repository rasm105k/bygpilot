import { siteConfig } from "@/lib/config";

export default function Problem() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Lyder det bekendt?</h2>
        <p className="section-subtitle">
          Små virksomheder bruger alt for meget tid på administrative opgaver. Det koster både kunder og overskud.
        </p>
        <div className="problem-grid">
          {siteConfig.problems.map((p, i) => (
            <div key={i} className="problem-card">
              <div className="problem-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
