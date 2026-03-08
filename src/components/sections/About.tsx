import Image from "next/image";

export default function About() {
  return (
    <section className="section about-section" id="about" style={{ minHeight: "auto" }}>
      <div className="section-inner about-inner">
        <div className="floating-particles">
          <span className="particle p1" />
          <span className="particle p2" />
          <span className="particle p3" />
          <span className="particle p4" />
          <span className="particle p5" />
        </div>

        <p className="section-label" data-animate="fade-up">Sobre o Projeto</p>

        <div className="about-text-block">
          <p className="about-quote" data-animate="fade-up" data-delay="0.1">
            Pense globalmente, aja localmente
          </p>
          <p data-animate="fade-up" data-delay="0.15" style={{
            fontSize: "0.85rem", color: "rgba(255,255,255,0.35)", marginBottom: 40, textAlign: "center"
          }}>
            Patrick Geddes, 1915
          </p>

          <p className="big-text" data-animate="fade-up" data-delay="0.2">
            Nossos estudos indicam crescimento
          </p>
          <p className="big-text" data-animate="fade-up" data-delay="0.25">
            de algumas populações de cavalos-marinhos,
          </p>
          <p className="big-text highlight" data-animate="fade-up" data-delay="0.3">
            porém outras estão decrescendo.
          </p>
        </div>

        {/* Stats row */}
        <div className="stats-row" data-animate="fade-up" data-delay="0.45">
          <div className="stat-item">
            <span className="stat-number">6</span>
            <p className="stat-label">Regiões monitoradas</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">22+</span>
            <p className="stat-label">Anos de pesquisa</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <p className="stat-label">Espécies no RJ</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <p className="stat-label">Publicações científicas</p>
          </div>
        </div>

        {/* How we help */}
        <div data-animate="fade-up" data-delay="0.6" style={{
          maxWidth: 700, margin: "60px auto 0", textAlign: "center"
        }}>
          <span className="badge badge-teal" style={{ marginBottom: 20, display: "inline-flex" }}>Como estamos ajudando</span>
          <p style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.08rem)", lineHeight: 1.8, color: "var(--light-text)"
          }}>
            Nossa equipe de biólogos desenvolve pesquisas de análise genética e comportamental,
            monitoramento populacional dos cavalos-marinhos em todo o Estado do Rio de Janeiro e
            projetos de educação ambiental junto às comunidades.
          </p>
        </div>

        {/* Image */}
        <div data-animate="fade-up" data-delay="0.75" style={{
          margin: "48px auto 0", maxWidth: 560, borderRadius: 20, overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.06)"
        }}>
          <Image src="/Design sem nome (6).png" alt="Cavalos-marinhos do Rio de Janeiro" width={560} height={380} style={{ width: "100%", height: "auto" }} />
        </div>

        <div className="about-since" data-animate="fade-up" data-delay="0.85">
          <span className="since-line" />
          <span className="since-text">Desde 2002</span>
          <span className="since-line" />
        </div>
      </div>
    </section>
  );
}
