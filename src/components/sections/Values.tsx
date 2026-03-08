const values = [
  { name: "Integração", icon: "🤝" },
  { name: "Diálogo", icon: "💬" },
  { name: "Sustentabilidade", icon: "🌿" },
  { name: "Ética", icon: "⚖️" },
  { name: "Transparência", icon: "🔍" },
  { name: "Inovação", icon: "💡" },
  { name: "Respeito à Vida", icon: "🌊" },
];

export default function Values() {
  return (
    <section className="section values-section" id="values" style={{ minHeight: "auto" }}>
      <div className="section-inner values-inner">
        <div className="values-glow" />

        <p className="section-label" data-animate="fade-up">Missão & Valores</p>

        <p className="values-tagline" data-animate="fade-up" data-delay="0.1">
          A <em>conservação</em> dos cavalos-marinhos<br />é a nossa missão
        </p>

        <div className="values-description" data-animate="fade-up" data-delay="0.25">
          <p>
            Atuamos em busca da integração e diálogo, visando o
            desenvolvimento sustentável. Através da ética e da transparência,
            desenvolvemos nossas atividades com inovação, respeitando a vida
            como eixo transversal de qualquer ação.
          </p>
        </div>

        <div className="values-grid" data-animate="fade-up" data-delay="0.4">
          {values.map((v) => (
            <div key={v.name} className="value-item">
              <div className="value-icon">{v.icon}</div>
              <span className="value-name">{v.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
