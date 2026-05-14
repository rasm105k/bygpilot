import { siteConfig } from "@/lib/config";

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2 className="section-title">Enkle priser</h2>
        <p className="section-subtitle">
          Vælg den plan der passer til din virksomhed. Ingen binding – opsig når som helst.
        </p>
        <div className="pricing-grid">
          {siteConfig.pricingPlans.map((plan, i) => (
            <div key={i} className={`pricing-card${plan.popular ? " popular" : ""}`}>
              {plan.popular && <span className="pricing-badge">Anbefalet</span>}
              <div className="pricing-name">{plan.name}</div>
              <div className="pricing-desc">{plan.desc}</div>
              <div className="pricing-price">
                {plan.price} <span>kr</span>
              </div>
              <div className="pricing-period">/ måned</div>
              <ul className="pricing-features">
                {plan.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className="pricing-cta">
                {plan.popular ? "Prøv gratis" : "Vælg Starter"}
              </a>
            </div>
          ))}
        </div>
        <p className="pricing-note">14 dages gratis prøve – intet kort påkrævet</p>
      </div>
    </section>
  );
}
