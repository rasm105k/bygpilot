import { siteConfig } from "@/lib/config";

export default function Tools() {
  return (
    <section id="tools" className="section section-dark">
      <div className="container">
        <div className="solution-headline">
          <span className="solution-badge">Vores værktøjer</span>
          <h2 className="section-title">AI der løser de kedelige opgaver</h2>
          <p className="section-subtitle">
            Vælg det værktøj du har brug for. Du behøver ikke forstå teknikken – det virker bare.
          </p>
        </div>

        <div className="features-grid">
          {siteConfig.tools.map((tool, i) => (
            <div key={i} className="feature-card" style={tool.tag === "Kommer snart" ? { opacity: 0.7 } : {}}>
              <div className="feature-icon">{tool.icon}</div>
              <div style={{
                display: 'inline-block',
                background: tool.tag === "Kommer snart" ? 'var(--color-wood-light)' : 'var(--color-accent)',
                color: tool.tag === "Kommer snart" ? 'var(--color-text)' : 'white',
                padding: '0.2rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 600,
                marginBottom: '0.5rem',
              }}>
                {tool.tag}
              </div>
              <h3>{tool.title}</h3>
              <p>{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
