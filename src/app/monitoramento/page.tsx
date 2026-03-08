import SubpageLayout from "@/components/SubpageLayout";
import Image from "next/image";

export const metadata = {
  title: "Monitoramento – Projeto Cavalos-Marinhos RJ",
  description: "Monitoramento das populações naturais de cavalos-marinhos no litoral do Estado do Rio de Janeiro.",
};

export default function MonitoramentoPage() {
  return (
    <SubpageLayout
      heroTitle="Monitoramento"
      heroLead="Apenas com dados científicos podemos traçar estratégias para conservação"
      heroImage="/DSCN6122.png"
      depth="mid"
    >
      {/* Featured block */}
      <div className="page-featured">
        <div className="page-featured-inner">
          <div className="page-featured-text page-animate">
            <p>
              As populações naturais de cavalos-marinhos do Estado do Rio de Janeiro são acompanhadas
              através de monitoramentos. Esses monitoramentos seguem um protocolo científico sugerido
              pelo Project Seahorse (projeto mundial de conservação dos cavalos-marinhos) e adaptado
              pelo nosso projeto ao ecossistema de costão rochoso. Esses monitoramentos abrangem as
              três baías do Estado, Baía de Guanabara, Baía de Sepetiba e Baía de Ilha Grande, além
              da laguna de Araruama, Armação dos Búzios e Arraial do Cabo.
            </p>
          </div>
        </div>
      </div>

      {/* Map image */}
      <section className="page-section">
        <div className="img-block page-animate">
          <Image src="/mapa.png" alt="Mapa de monitoramento" width={800} height={500} style={{ width: "100%", height: "auto" }} />
        </div>
      </section>

      {/* O que sabemos até agora? */}
      <div className="page-block page-block--light">
        <div className="container">
          <div className="content-block page-animate">
            <h2>O que sabemos até agora?</h2>
            <p>
              Algumas regiões do Estado tiveram aumento de população, como Ilha Grande e Baía de
              Guanabara, porém outras merecem atenção, como Baía de Sepetiba e Armação dos Búzios,
              por causa da redução das populações de cavalos-marinhos.
            </p>
          </div>
        </div>
      </div>

      {/* Bar chart – population abundance */}
      <section className="page-section">
        <div className="img-block page-animate" style={{ maxWidth: 900, margin: "0 auto" }}>
          <Image
            src="/abund. Popos 2021.png"
            alt="Gráfico de abundância populacional de cavalos-marinhos por região"
            width={900}
            height={500}
            style={{ width: "100%", height: "auto", borderRadius: 12 }}
          />
          <p style={{ fontSize: "0.85rem", color: "var(--body-text)", marginTop: 8, textAlign: "center", fontStyle: "italic" }}>
            Abundância populacional de cavalos-marinhos por região monitorada
          </p>
        </div>
      </section>

      {/* Location cards */}
      <section className="page-section wide">
        <h2 className="story-phrase page-animate">Áreas de <em>monitoramento</em></h2>
        <div className="info-cards" style={{ marginTop: 40 }}>
          {/* Baía da Ilha Grande – green */}
          <div
            className="info-card page-animate"
            style={{
              borderLeft: "5px solid #16a34a",
              background: "linear-gradient(135deg, #f0fdf4 0%, #fff 100%)",
            }}
          >
            <h3>📍 Baía da Ilha Grande</h3>
            <p>Monitorada desde 2004. Aumento populacional registrado.</p>
            <span style={{
              display: "inline-block",
              marginTop: 10,
              padding: "3px 12px",
              borderRadius: 999,
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#15803d",
              background: "#dcfce7",
            }}>
              Aumento
            </span>
          </div>

          {/* Baía de Sepetiba – red/warning */}
          <div
            className="info-card page-animate"
            style={{
              borderLeft: "5px solid #ef4444",
              background: "linear-gradient(135deg, #fef2f2 0%, #fff 100%)",
            }}
          >
            <h3>📍 Baía de Sepetiba</h3>
            <p>Monitorada desde 2014. Redução populacional preocupante.</p>
            <span style={{
              display: "inline-block",
              marginTop: 10,
              padding: "3px 12px",
              borderRadius: 999,
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#b91c1c",
              background: "#fee2e2",
            }}>
              Redução
            </span>
          </div>

          {/* Baía de Guanabara – green */}
          <div
            className="info-card page-animate"
            style={{
              borderLeft: "5px solid #16a34a",
              background: "linear-gradient(135deg, #f0fdf4 0%, #fff 100%)",
            }}
          >
            <h3>📍 Baía de Guanabara</h3>
            <p>Monitorada desde 2010. Aumento populacional registrado.</p>
            <span style={{
              display: "inline-block",
              marginTop: 10,
              padding: "3px 12px",
              borderRadius: 999,
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#15803d",
              background: "#dcfce7",
            }}>
              Aumento
            </span>
          </div>

          {/* Laguna de Araruama – green */}
          <div
            className="info-card page-animate"
            style={{
              borderLeft: "5px solid #16a34a",
              background: "linear-gradient(135deg, #f0fdf4 0%, #fff 100%)",
            }}
          >
            <h3>📍 Laguna de Araruama</h3>
            <p>Monitorada desde 2021. População descoberta recentemente.</p>
            <span style={{
              display: "inline-block",
              marginTop: 10,
              padding: "3px 12px",
              borderRadius: 999,
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#15803d",
              background: "#dcfce7",
            }}>
              Aumento
            </span>
          </div>

          {/* Arraial do Cabo – green */}
          <div
            className="info-card page-animate"
            style={{
              borderLeft: "5px solid #16a34a",
              background: "linear-gradient(135deg, #f0fdf4 0%, #fff 100%)",
            }}
          >
            <h3>📍 Arraial do Cabo</h3>
            <p>Monitorada desde 2010. Aumento populacional registrado.</p>
            <span style={{
              display: "inline-block",
              marginTop: 10,
              padding: "3px 12px",
              borderRadius: 999,
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#15803d",
              background: "#dcfce7",
            }}>
              Aumento
            </span>
          </div>

          {/* Armação dos Búzios – red/warning */}
          <div
            className="info-card page-animate"
            style={{
              borderLeft: "5px solid #ef4444",
              background: "linear-gradient(135deg, #fef2f2 0%, #fff 100%)",
            }}
          >
            <h3>📍 Armação dos Búzios</h3>
            <p>Monitorada desde 2010. Redução populacional preocupante.</p>
            <span style={{
              display: "inline-block",
              marginTop: 10,
              padding: "3px 12px",
              borderRadius: 999,
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#b91c1c",
              background: "#fee2e2",
            }}>
              Redução
            </span>
          </div>
        </div>
      </section>

      {/* Bottom quote */}
      <section className="page-section">
        <div className="content-block page-animate">
          <blockquote>
            <p>
              &ldquo;As águas claras de Arraial do Cabo nos proporcionam encontrar os cavalos-marinhos
              com maior facilidade, que adoram se camuflar.&rdquo;
            </p>
            <footer>&mdash; Tatiane Fernandez</footer>
          </blockquote>
          <p style={{ fontSize: "0.8rem", color: "var(--slate-400)", marginTop: 16, textAlign: "right" }}>
            &mdash; Natalie Freret-Meurer
          </p>
        </div>
      </section>
    </SubpageLayout>
  );
}
