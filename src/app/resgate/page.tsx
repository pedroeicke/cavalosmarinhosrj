import SubpageLayout from "@/components/SubpageLayout";

export default function ResgatePage() {
  return (
    <SubpageLayout
      heroTitle="Achou um cavalo-marinho?"
      heroLead="Saiba o que fazer se encontrar um cavalo-marinho no litoral do Rio de Janeiro"
      depth="shallow"
    >
      <section className="page-section" style={{ textAlign: "center" }}>
        <h2 className="story-phrase page-animate">
          Encontrou um cavalo-marinho? <em>Veja o que fazer.</em>
        </h2>
      </section>

      <section className="page-section wide">
        <div className="two-cols">
          <div className="info-card page-animate" style={{ borderLeft: "4px solid var(--teal)", textAlign: "center", padding: "40px 28px" }}>
            <div style={{ fontSize: "3rem", marginBottom: 16 }}>🐴</div>
            <h3 style={{ color: "var(--teal)", fontSize: "1.2rem", marginBottom: 12 }}>Animal vivo e nadando?</h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, marginBottom: 16, color: "var(--body-text)" }}>
              <strong>Deixe na natureza!</strong> Cavalos-marinhos são animais selvagens protegidos por lei. Não os toque, não os retire da água e não os alimente.
            </p>
            <p style={{ fontSize: "0.88rem", color: "var(--gray)" }}>
              A observação deve ser feita à distância, sem perturbar o animal ou seu habitat.
            </p>
          </div>

          <div className="info-card page-animate" style={{ borderLeft: "4px solid #FF6B6B", textAlign: "center", padding: "40px 28px" }}>
            <div style={{ fontSize: "3rem", marginBottom: 16 }}>🆘</div>
            <h3 style={{ color: "#FF6B6B", fontSize: "1.2rem", marginBottom: 12 }}>Animal ferido, encalhado ou morto?</h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, marginBottom: 16, color: "var(--body-text)" }}>
              <strong>Entre em contato imediatamente!</strong> Ligue ou envie uma mensagem via WhatsApp para a equipe do projeto.
            </p>
            <a
              href="https://wa.me/5521999999999"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#25D366", color: "#fff", padding: "14px 32px",
                borderRadius: 9999, fontWeight: 700, fontSize: "0.95rem",
              }}
            >
              WhatsApp — Resgate
            </a>
          </div>
        </div>
      </section>

      <div className="page-block page-block--light">
        <div className="container">
          <div className="content-block page-animate">
            <h2>Orientações importantes</h2>
            <ul>
              <li><strong>Não toque</strong> no animal sem orientação especializada.</li>
              <li><strong>Não retire</strong> cavalos-marinhos da água.</li>
              <li><strong>Não alimente</strong> animais selvagens.</li>
              <li>Se possível, <strong>tire uma foto</strong> e envie junto com a localização pelo WhatsApp.</li>
              <li><strong>Denuncie</strong> a venda de cavalos-marinhos secos ou vivos ao IBAMA (0800 061 8080).</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="page-section">
        <div className="cta-block page-animate">
          <h3>Denuncie crimes ambientais</h3>
          <p>A captura e comercialização de cavalos-marinhos é crime ambiental previsto na Lei 9.605/98.</p>
          <a href="tel:08000618080" className="btn btn-gradient" style={{ border: "none" }}>
            IBAMA — 0800 061 8080
          </a>
        </div>
      </section>
    </SubpageLayout>
  );
}
