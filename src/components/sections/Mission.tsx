const words = [
  { cls: "fw-1", text: "conservar", tooltip: "Proteger populações de cavalos-marinhos e seus habitats ao longo da costa fluminense." },
  { cls: "fw-2", text: "pesquisar", tooltip: "Gerar conhecimento científico sobre biologia, comportamento e genética dos cavalos-marinhos." },
  { cls: "fw-3", text: "educar", tooltip: "Promover educação ambiental e engajamento comunitário para a conservação marinha." },
  { cls: "fw-4", text: "proteger", tooltip: "Defender ecossistemas costeiros contra ameaças como poluição, pesca predatória e destruição de habitat." },
  { cls: "fw-5", text: "colaborar", tooltip: "Trabalhar em parceria com comunidades, universidades e órgãos públicos para resultados duradouros." },
];

export default function Mission() {
  return (
    <section className="section mission-section" id="mission">
      <div className="section-inner mission-inner">
        <h2 className="section-label" data-animate="fade-up">Nossa Missão</h2>
        <div className="floating-words-container">
          {words.map((w, i) => (
            <div
              key={w.cls}
              className={`floating-word ${w.cls}`}
              data-animate="float-in"
              data-delay={String(0.1 + i * 0.15)}
              data-tooltip={w.tooltip}
            >
              <span className="fw-text">{w.text}</span>
            </div>
          ))}
        </div>
        <svg className="mission-curves" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
          <path className="curve-line cl-1" d="M100,100 Q400,50 700,150" fill="none" stroke="rgba(164,218,242,0.2)" strokeWidth="1" />
          <path className="curve-line cl-2" d="M50,300 Q400,200 750,350" fill="none" stroke="rgba(164,218,242,0.15)" strokeWidth="1" />
          <path className="curve-line cl-3" d="M150,500 Q400,400 650,500" fill="none" stroke="rgba(164,218,242,0.1)" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}
