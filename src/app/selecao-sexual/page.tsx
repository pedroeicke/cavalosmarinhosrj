import SubpageLayout from "@/components/SubpageLayout";
import Image from "next/image";

export const metadata = {
  title: "Seleção Sexual – Projeto Cavalos-Marinhos RJ",
  description: "Como a personalidade dos cavalos-marinhos influencia a escolha de parceiros reprodutivos.",
};

export default function SelecaoSexualPage() {
  return (
    <SubpageLayout
      heroTitle="Seleção Sexual"
      heroLead="A personalidade individual é uma característica importante na escolha de um parceiro"
      heroImage="/IMG-20220307-WA0005~2 - Gabriela Cabiró.jpg"
      depth="deep"
    >
      {/* Content paragraphs */}
      <section className="page-section">
        <div className="content-block page-animate">
          <p>
            A seleção sexual é a forma com que os animais escolhem seus parceiros reprodutivos.
            Alguns escolhem por serem maiores, outros por serem mais coloridos, mas será que a
            personalidade deles teria alguma influência? Hoje a ciência classifica as personalidades
            animais como tímidos e ousados. Os tímidos tendem a ser menos sociais, evitam novos
            ambientes e são menos agressivos, enquanto os ousados são mais sociais, exploram novos
            ambientes e podem ser mais agressivos, se necessário.
          </p>
          <p>
            Em 2018, Freret-Meurer et al. descobriram a existência de ambas as personalidades no
            cavalo-marinho-de-focinho-longo e agora a pergunta é: será que a personalidade
            influencia na escolha do parceiro reprodutivo? Qual seria a personalidade mais
            escolhida?
          </p>
          <p>
            Esse tipo de questão só consegue ser respondida através de experimentos. Inicialmente
            são avaliadas as personalidades dos animais para só então avaliar qual tipo de
            personalidade é mais escolhida. Mas se acha que isso é simples, não se engane, são dias
            e dias de observação!
          </p>
        </div>
      </section>

      {/* Personality cards: Tímido vs Ousado */}
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
          {/* Tímido card */}
          <div
            style={{
              background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
              borderRadius: "16px",
              padding: "32px 28px",
              border: "1px solid #7dd3fc",
              boxShadow: "0 8px 24px rgba(14, 116, 144, 0.10)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div style={{ fontSize: "2.2rem", marginBottom: "12px" }}>
              🐢
            </div>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 800,
                color: "#0c4a6e",
                marginBottom: "12px",
              }}
            >
              Tímido
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "#164e63",
                margin: 0,
              }}
            >
              Tendem a ser menos sociais, evitam novos ambientes e são menos agressivos. Preferem a
              segurança do conhecido.
            </p>
          </div>

          {/* Ousado card */}
          <div
            style={{
              background: "linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)",
              borderRadius: "16px",
              padding: "32px 28px",
              border: "1px solid #fdba74",
              boxShadow: "0 8px 24px rgba(194, 65, 12, 0.10)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div style={{ fontSize: "2.2rem", marginBottom: "12px" }}>
              🦁
            </div>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 800,
                color: "#7c2d12",
                marginBottom: "12px",
              }}
            >
              Ousado
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "#9a3412",
                margin: 0,
              }}
            >
              São mais sociais, exploram novos ambientes e podem ser mais agressivos, se necessário.
              Aventureiros por natureza.
            </p>
          </div>
        </div>
      </section>

      {/* Experiment image */}
      <section className="page-section">
        <div className="img-block page-animate">
          <Image
            src="/experimento-personalidade.jpg"
            alt="Experimento de identificação de personalidade"
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
          Gabriela Cabiró realizando experimento de identificação de personalidade
        </p>
      </section>

      {/* O que sabemos até agora? */}
      <div className="page-block page-block--light">
        <div className="container">
          <div className="content-block page-animate">
            <h2>O que sabemos até agora?</h2>
            <p>
              Os experimentos ainda estão sendo finalizados, mas foram reconhecidos cavalos-marinhos
              de ambas as personalidades e a escolha das fêmeas pelos machos está difícil! Assim que
              os experimentos finalizarem, contamos mais por aqui.
            </p>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
