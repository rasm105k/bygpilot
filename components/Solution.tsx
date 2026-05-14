export default function Solution() {
  return (
    <section id="how-it-works" className="section section-dark">
      <div className="container">
        <div className="solution-headline">
          <span className="solution-badge">Sådan virker det</span>
          <h2 className="section-title">BygAI løser det hele – automatisk</h2>
          <p className="section-subtitle">
            Dit eksisterende nummer viderestilles. Når du ikke kan tage telefonen, træder BygAI til.
          </p>
        </div>

        <div className="call-flow">
          <div className="call-flow-step">
            <span className="call-flow-number">1</span>
            <span className="call-flow-text">Kunde ringer til dit nummer</span>
            <span className="call-flow-arrow">↓</span>
          </div>
          <div className="call-flow-step">
            <span className="call-flow-number">2</span>
            <span className="call-flow-text">Du får chancen først (normal ringning)</span>
            <span className="call-flow-arrow">↓</span>
          </div>
          <div className="call-flow-step highlight">
            <span className="call-flow-number">3</span>
            <span className="call-flow-text">Ingen svar / du afviser → BygAI tager over</span>
            <span className="call-flow-arrow">↓</span>
          </div>
          <div className="call-flow-step ai-step">
            <span className="call-flow-number" style={{ background: 'rgba(255,255,255,0.25)' }}>4</span>
            <span className="call-flow-text">AI taler naturligt på dansk med kunden</span>
            <span className="call-flow-arrow" style={{ color: 'rgba(255,255,255,0.7)' }}>↓</span>
          </div>
          <div className="call-flow-step ai-step">
            <span className="call-flow-number" style={{ background: 'rgba(255,255,255,0.25)' }}>5</span>
            <span className="call-flow-text">Vurderer akuthed og kvalificerer henvendelsen</span>
            <span className="call-flow-arrow" style={{ color: 'rgba(255,255,255,0.7)' }}>↓</span>
          </div>
          <div className="call-flow-step ai-step">
            <span className="call-flow-number" style={{ background: 'rgba(255,255,255,0.25)' }}>6</span>
            <span className="call-flow-text">Sender dig en SMS med navn, ønske og anbefaling</span>
          </div>
        </div>
      </div>
    </section>
  );
}
