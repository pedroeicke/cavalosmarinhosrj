import SubpageLayout from "@/components/SubpageLayout";
import Image from "next/image";

export const metadata = {
  title: "Espécies Invasoras – Projeto Cavalos-Marinhos RJ",
  description: "Pesquisa sobre impactos de espécies invasoras sobre os cavalos-marinhos do Rio de Janeiro.",
};

export default function EspeciesInvasorasPage() {
  return (
    <SubpageLayout
      heroTitle="Espécies Invasoras"
      heroLead="Estudar a relação entre as espécies proporciona um maior entendimento da interação entre elas e o meio em que vivem"
      heroImage="/Experimento Hreidi Tubastraea Ago 18 (8).JPG"
      depth="deep"
    >
      {/* Content paragraphs */}
      <section className="page-section">
        <div className="content-block page-animate">
          <p>
            As espécies invasoras são conhecidas como sendo espécies que vêm de outra localidade e
            se adaptam tão bem ao novo local, que acabam competindo com espécies nativas e as
            suprimindo. Uma das espécies invasoras marinhas mais conhecidas no litoral brasileiro é
            o coral-sol <em>Tubastraea</em> spp..
          </p>
          <p>
            Poucas vezes já registramos o cavalo-marinho preso no coral-sol em ambiente natural,
            porém não existiam estudos sobre possível impacto direto desse coral sobre o
            cavalo-marinho. A pedido do ICMBio, conduzimos experimentos avaliando a influência
            direta do coral-sol sobre o cavalo-marinho-do-focinho-longo <em>Hippocampus reidi</em>.
          </p>
          <p>
            Os experimentos foram conduzidos em confinamento no próprio campo, avaliando a
            preferência de habitat, comparando se cavalos-marinhos preferem ficar em algas ou no
            coral-sol. Nesses testes, também avaliamos o estado geral do animal, o comportamento e
            possíveis machucados na pele do cavalo-marinho, causados pelo contato com o coral-sol.
          </p>
        </div>
      </section>

      {/* Experiment image */}
      <section className="page-section">
        <div className="img-block page-animate">
          <Image
            src="/Experimento Hreidi Tubastraea Jul_18 (53).JPG"
            alt="Experimentos conduzidos por Gabriela Cabiró"
            width={800}
            height={500}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <p
          className="page-animate"
          style={{
            textAlign: "center",
            fontSize: "0.82rem",
            color: "#64748b",
            marginTop: "12px",
            fontStyle: "italic",
          }}
        >
          Experimentos conduzidos por Gabriela Cabiró
        </p>
      </section>

      {/* Comparison cards: Algas vs Coral-sol */}
      <section className="page-section">
        <div
          className="page-animate"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "36px",
          }}
        >
          {/* Algas card */}
          <div
            style={{
              background: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
              borderRadius: "16px",
              padding: "32px 28px",
              border: "1px solid #86efac",
              boxShadow: "0 8px 24px rgba(22, 101, 52, 0.10)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div style={{ fontSize: "2.2rem", marginBottom: "12px" }}>
              🌿
            </div>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 800,
                color: "#14532d",
                marginBottom: "12px",
              }}
            >
              Algas
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "#166534",
                margin: 0,
              }}
            >
              Os cavalos-marinhos mostraram clara preferência pelas algas como substrato de
              ancoragem, demonstrando conforto e comportamento natural.
            </p>
          </div>

          {/* Coral-sol card */}
          <div
            style={{
              background: "linear-gradient(135deg, #fff7ed 0%, #fecaca 100%)",
              borderRadius: "16px",
              padding: "32px 28px",
              border: "1px solid #f87171",
              boxShadow: "0 8px 24px rgba(153, 27, 27, 0.10)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div style={{ fontSize: "2.2rem", marginBottom: "12px" }}>
              🪸
            </div>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 800,
                color: "#7f1d1d",
                marginBottom: "12px",
              }}
            >
              Coral-sol
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "#991b1b",
                margin: 0,
              }}
            >
              Mesmo sem sofrer danos físicos, os cavalos-marinhos evitaram o coral-sol e
              demonstraram comportamento de estresse ao ficarem próximos.
            </p>
          </div>
        </div>
      </section>

      {/* O que sabemos até agora? */}
      <div className="page-block page-block--light">
        <div className="container">
          <div className="content-block page-animate">
            <h2>O que sabemos até agora?</h2>
            <p>
              Nenhum dos cavalos-marinhos sofreu danos em qualquer um dos experimentos por causa do
              coral-sol, mas ainda assim, eles preferiram as algas ou, até mesmo, ficarem soltos, a
              se prenderem nos corais. O comportamento de estresse dos cavalos-marinhos também
              indicou desconforto em ficar perto dos corais. E como em toda boa ciência, nos resta
              fazer novas perguntas: por que será que o cavalo-marinho se mostrou tão estressado na
              presença desses corais?
            </p>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
