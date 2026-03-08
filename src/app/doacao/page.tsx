import SubpageLayout from "@/components/SubpageLayout";
import Image from "next/image";

export const metadata = {
  title: "Doação – Projeto Cavalos-Marinhos RJ",
  description:
    "Faça uma doação para o Projeto Cavalos-Marinhos do Rio de Janeiro e contribua com a pesquisa e conservação.",
};

export default function DoacaoPage() {
  return (
    <SubpageLayout
      heroTitle="Faça uma doação"
      heroLead="Colabore com nosso projeto"
      heroImage="/pesquisa-doacao.jpg"
      depth="abyss"
    >
      {/* PIX + descrição */}
      <section className="page-section">
        <div
          className="content-block page-animate"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* QR Code */}
          <div style={{ textAlign: "center" }}>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: 16,
                color: "var(--teal)",
              }}
            >
              PIX
            </h3>
            <div
              style={{
                background: "#fff",
                borderRadius: "var(--radius)",
                padding: 16,
                boxShadow: "0 4px 24px rgba(0,0,0,.08)",
                display: "inline-block",
              }}
            >
              <Image
                src="/qrcode-pix.jpeg"
                alt="QR Code PIX para doação"
                width={240}
                height={240}
                style={{ display: "block" }}
              />
            </div>
          </div>

          {/* Texto */}
          <div style={{ flex: 1, minWidth: 260, maxWidth: 480 }}>
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.8,
                color: "var(--body-text)",
              }}
            >
              Sua doação irá contribuir para nossas atividades de campo, de
              laboratório, compra de insumos e equipamentos.
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "var(--text-muted)",
                marginTop: 16,
              }}
            >
              Escaneie o QR Code acima com o aplicativo do seu banco para
              realizar a doação via PIX. Qualquer valor é muito bem-vindo e faz
              a diferença na conservação dos cavalos-marinhos do Rio de Janeiro.
            </p>
          </div>
        </div>
      </section>

      {/* Como sua doação ajuda */}
      <section className="page-section">
        <div className="page-animate">
          <h2
            className="story-phrase"
            style={{ textAlign: "center", marginBottom: 40 }}
          >
            Como sua doação <em>ajuda</em>
          </h2>
        </div>

        <div className="info-cards">
          <div className="info-card page-animate" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>🔬</div>
            <h3>Atividades de Campo</h3>
            <p>
              Monitoramento das populações de cavalos-marinhos ao longo da costa
              do Rio de Janeiro, incluindo mergulhos, coleta de dados e
              marcação de indivíduos.
            </p>
          </div>
          <div className="info-card page-animate" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>🧪</div>
            <h3>Laboratório</h3>
            <p>
              Análises genéticas, estudos comportamentais e pesquisas sobre
              saúde e reprodução dos cavalos-marinhos em ambiente controlado.
            </p>
          </div>
          <div className="info-card page-animate" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>📦</div>
            <h3>Insumos e Equipamentos</h3>
            <p>
              Equipamentos de mergulho, câmeras subaquáticas, materiais de
              laboratório e outros recursos essenciais para a pesquisa.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section" style={{ textAlign: "center" }}>
        <div className="cta-block page-animate">
          <h3>Proteja os cavalos-marinhos do Rio de Janeiro</h3>
          <p>
            Cada doação contribui diretamente para a pesquisa e conservação.
            Juntos, podemos garantir um futuro para essas espécies.
          </p>
        </div>
      </section>
    </SubpageLayout>
  );
}
