export default function TryIt() {
  return (
    <section className="section section-dark">
      <div className="container">
        <div className="solution-headline">
          <span className="solution-badge">Prøv selv</span>
          <h2 className="section-title">Ring og hør forskellen</h2>
          <p className="section-subtitle">
            Ring til nummeret og tal med BygAI. En naturlig samtale på dansk – helt uden knapmanøvre eller telefonsvarer.
          </p>
        </div>

        <div className="tryit-phone">
          <div className="tryit-ring">
            <div className="tryit-ring-dot" />
            <div className="tryit-ring-dot" />
            <div className="tryit-ring-dot" />
          </div>

          <div className="tryit-number">+45 XX XX XX XX</div>

          <div className="tryit-badges">
            <span className="tryit-badge">AI-svaret</span>
            <span className="tryit-badge">Dansk tale</span>
            <span className="tryit-badge">Øjeblikkeligt svar</span>
          </div>
        </div>

        <div className="tryit-note">
          Ingen telefonsvarer. Ingen tryk på 1 eller 2. Bare ring – så svarer BygAI.
        </div>

        <div className="tryit-cta">
          <a href="#contact" className="btn btn-primary btn-large">
            Prøv gratis i 14 dage
          </a>
        </div>
      </div>
    </section>
  );
}
