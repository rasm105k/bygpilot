import { siteConfig } from "@/lib/config";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{siteConfig.heroTitle}</h1>
        <p>{siteConfig.heroSubtitle}</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary btn-large">{siteConfig.primaryCta}</a>
          <a href="#how-it-works" className="btn btn-outline btn-large" style={{ borderColor: 'white', color: 'white' }}>
            {siteConfig.secondaryCta}
          </a>
        </div>
        <div className="trust-badges">
          <span className="trust-badge">
            <span className="trust-count">{siteConfig.trustCount}</span>
            <span>{siteConfig.trustLabel}</span>
          </span>
          <span className="trust-divider" />
          <span className="trust-badge">GDPR-kompatibel</span>
          <span className="trust-divider" />
          <span className="trust-badge">Dansk udviklet</span>
          <span className="trust-divider" />
          <span className="trust-badge">Data i EU</span>
        </div>
      </div>
    </section>
  );
}
