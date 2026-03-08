import SubpageLayout from "@/components/SubpageLayout";
import Image from "next/image";

export const metadata = {
  title: "Nossos Princípios – Projeto Cavalos-Marinhos RJ",
  description: "Princípios, missão e valores que guiam o Projeto Cavalos-Marinhos RJ.",
};

const principles = [
  "O Projeto Cavalos-Marinhos é uma associação sem fins lucrativos que está comprometido com a conservação dos cavalos-marinhos e os ecossistemas em que habitam, buscando fomentar o desenvolvimento econômico sustentável local, respeitando o contexto social de cada região;",
  "O Projeto Cavalos-Marinhos se baseia em conhecimento técnico-científico;",
  "O Projeto Cavalos-Marinhos age localmente, conforme o cenário global, tendo em vista os Objetivos de Desenvolvimento Sustentável (ODS) das Organizações das Nações Unidas (ONU);",
  "O Projeto Cavalos-Marinhos utiliza dados técnico-científicos e a realidade social local para fomentar e articular políticas públicas;",
  "O Projeto Cavalos-Marinhos trabalha em parceria com instituições públicas e privadas, de maneira transparente, a fim de identificar, discutir e propor soluções para problemas;",
  "O Projeto Cavalos-Marinhos atua respeitando e buscando a equidade de todos gêneros, raças, etnias, idades, deficiências, orientações sexuais, identidades de gênero, territorialidades, culturas, religiões e nacionalidades.",
];

export default function PrincipiosPage() {
  return (
    <SubpageLayout
      heroTitle="Nossos Princípios"
      heroLead="As bases que sustentam nosso compromisso com a conservação"
      heroImage="/DSC04039.JPG"
      depth="mid"
    >
      <div className="page-featured">
        <div className="page-featured-inner">
          <div className="page-featured-img page-animate">
            <Image src="/DSC04039.JPG" alt="Cavalo-marinho subaquático" width={600} height={400} style={{ width: "100%", height: "auto" }} />
          </div>
          <div className="page-featured-text page-animate">
            <h2>Guiados pela <em>ciência</em> e pela <em>ética</em></h2>
            <p>
              Nossos princípios refletem nosso compromisso com a conservação marinha baseada em
              evidências científicas, respeitando comunidades locais e promovendo o desenvolvimento
              sustentável.
            </p>
          </div>
        </div>
      </div>

      <section className="page-section">
        <div className="content-block page-animate">
          <h2>Nossos Princípios</h2>
          <ol style={{ listStyle: "decimal", paddingLeft: 24, lineHeight: 2, fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)" }}>
            {principles.map((p, i) => (
              <li key={i} style={{ marginBottom: 16, color: "var(--body-text)" }}>{p}</li>
            ))}
          </ol>
        </div>
      </section>

      <div className="page-block page-block--light">
        <div className="container">
          <div className="content-block page-animate" style={{ textAlign: "center" }}>
            <h2>Missão</h2>
            <p style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 300, lineHeight: 1.6, maxWidth: 600, margin: "0 auto" }}>
              O Projeto Cavalos-Marinhos tem como missão a <em style={{ color: "var(--teal)" }}>conservação dos cavalos-marinhos</em>.
            </p>
          </div>
        </div>
      </div>

      <section className="page-section">
        <div className="content-block page-animate" style={{ textAlign: "center" }}>
          <h2>Valores</h2>
          <p style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", lineHeight: 1.8, maxWidth: 700, margin: "0 auto", color: "var(--body-text)" }}>
            O Projeto Cavalos-Marinhos atua sempre em busca da integração e diálogo, visando o
            desenvolvimento sustentável e entendendo que através da ética e da transparência, podemos
            alcançar nossas metas. Desenvolvemos nossas atividades com inovação, respeitando a vida
            como eixo transversal de qualquer ação.
          </p>
        </div>
      </section>
    </SubpageLayout>
  );
}
