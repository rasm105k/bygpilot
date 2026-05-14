const problems = [
  {
    icon: "📉",
    title: "Du går glip af opkald mens du arbejder",
    desc: "Når du er ude på opgaver, ringer telefonen forgæves. Hvert misset opkald er en potentiel kunde, du aldrig får chancen for at tale med.",
  },
  {
    icon: "🏃",
    title: "Kunder ringer til konkurrenten der svarer",
    desc: "Hvis du ikke tager telefonen, googler kunden bare den næste håndværker. Dit tab er en konkurrents gevinst.",
  },
  {
    icon: "🔄",
    title: "Du bruger tid på at ringe tilbage",
    desc: "Tid brugt på at ringe tilbage til uinteresserede leads er tid, du kunne have brugt på at arbejde for betalende kunder.",
  },
];

export default function Problem() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Kender du problemet?</h2>
        <p className="section-subtitle">
          Små servicevirksomheder mister op til 70% af deres ubesvarede opkald.
        </p>
        <div className="problem-grid">
          {problems.map((p, i) => (
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
