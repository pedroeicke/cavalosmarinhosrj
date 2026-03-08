import SubpageLayout from "@/components/SubpageLayout";
import Image from "next/image";

export const metadata = {
  title: "Educação Ambiental – Projeto Cavalos-Marinhos RJ",
  description: "Ações de educação ambiental e divulgação científica sobre cavalos-marinhos.",
};

const games = [
  {
    image: "/ziggy-caca-palavras.png",
    title: "Caça-palavras do Ziggy",
    description: "Ajude o Ziggy a achar as palavras! Baixe o PDF e encontre termos como coral, mangue e algas.",
    href: "https://www.projetocavalosmarinhos.com.br/_files/ugd/cbab11_f0adc5d846864484b46f6365b997c9c2.pdf",
    color: "#3b8070",
  },
  {
    image: "/ziggy-encontre.png",
    title: "Encontre o Ziggy!",
    description: "Ziggy é um cavalo-marinho macho e pode ser encontrado em ambientes de água salgada. Você consegue achá-lo?",
    href: "https://www.projetocavalosmarinhos.com.br/_files/ugd/cbab11_880a06204d7c4d20ae568cc1fb406613.pdf",
    color: "#1aa9e8",
  },
  {
    image: "/ziggy-colorir.png",
    title: "Colorir o Ziggy",
    description: "Baixe o desenho do Ziggy e pinte com as cores que quiser! Uma atividade para toda a família.",
    href: "https://www.projetocavalosmarinhos.com.br/_files/ugd/cbab11_1fb3b48433a14cf3a82e6cc557b59935.pdf",
    color: "#E11D48",
  },
  {
    image: "/ziggy-memoria.png",
    title: "Jogo da Memória",
    description: "Teste sua memória encontrando os pares de cavalos-marinhos e seus amigos do mar!",
    href: "https://interacty.me/projects/bb55944a00b8bcfc",
    color: "#7C3AED",
  },
  {
    image: null,
    title: "Qual cavalo-marinho você é?",
    description: "No mundo, existem 46 espécies de cavalos-marinhos. Descubra com qual espécie você mais se parece!",
    href: "https://pt.quizur.com/quiz/com-qual-cavalo-marinho-voce-se-parece-mais-SfEF",
    color: "#F59E0B",
  },
];

export default function EducacaoPage() {
  return (
    <SubpageLayout
      heroTitle="Educação Ambiental"
      heroLead="Despertar o encantamento pelos cavalos-marinhos e engajamento na proteção ambiental"
      heroImage="/IMG_2949.JPG"
      depth="shallow"
    >
      {/* Featured block */}
      <div className="page-featured">
        <div className="page-featured-inner">
          <div className="page-featured-img page-animate">
            <Image src="/IMG_2949.JPG" alt="Stand de educação ambiental" width={600} height={400} style={{ width: "100%", height: "auto" }} />
          </div>
          <div className="page-featured-text page-animate">
            <h2><em>Educação</em> é a base da transformação</h2>
            <p>
              Desenvolver ações de sensibilização junto à sociedade para despertar o encantamento
              pelos cavalos-marinhos e engajamento na proteção ambiental, assim como realizar
              capacitações, possibilitando o desenvolvimento econômico sustentável.
            </p>
            <p>
              O projeto iniciou em 2012 ações de educação ambiental em escolas, assim como recebia
              alunos na Universidade Santa Úrsula. Aos poucos foi participando de ações na praia,
              stands em eventos científicos e comemorativos, como a semana do meio ambiente.
            </p>
          </div>
        </div>
      </div>

      {/* Atividades — cards */}
      <section className="page-section wide">
        <h2 className="story-phrase page-animate">
          Ações que <em>transformam</em> e <em>conectam</em>.
        </h2>
        <div className="info-cards">
          <div className="info-card page-animate">
            <h3>🏫 Visitas Escolares</h3>
            <p>
              Parcerias com escolas para palestras e atividades lúdicas adaptadas à faixa etária.
              Atividades interativas que ensinam sobre biologia marinha, ecossistemas costeiros e a
              importância da conservação dos cavalos-marinhos.
            </p>
          </div>
          <div className="info-card page-animate">
            <h3>🔬 Visitas ao Laboratório</h3>
            <p>
              Estudantes conhecem pesquisas e observam cavalos-marinhos vivos no Laboratório de
              Comportamento Animal e Conservação da Universidade Santa Úrsula.
            </p>
          </div>
          <div className="info-card page-animate">
            <h3>📢 Exposições &amp; Eventos</h3>
            <p>
              Stands em eventos científicos e comemorativos, incluindo a semana do meio ambiente.
              O projeto promove exposições em locais estratégicos como shoppings, escolas e centros
              culturais.
            </p>
          </div>
          <div className="info-card page-animate">
            <h3>🏖️ Ações na Praia</h3>
            <p>
              Atividades diretamente nas praias e comunidades costeiras, informando moradores e
              turistas sobre a presença dos cavalos-marinhos e a importância de preservar seus habitats.
            </p>
          </div>
          <div className="info-card page-animate">
            <h3>📱 Redes Sociais</h3>
            <p>
              Divulgação científica para o público geral através do Instagram e Facebook, alcançando
              milhares de pessoas com conteúdo acessível sobre a biologia e conservação dos
              cavalos-marinhos.
            </p>
          </div>
          <div className="info-card page-animate">
            <h3>🪧 Placas Educativas</h3>
            <p>
              Placas informativas instaladas em diversos pontos da Laguna de Araruama e outras
              localidades, com apoio das prefeituras de São Pedro da Aldeia, Iguaba Grande,
              Arraial do Cabo e Araruama.
            </p>
          </div>
        </div>
      </section>

      {/* Bloco alternado com fundo */}
      <div className="page-block page-block--light">
        <div className="container">
          <div className="content-block page-animate">
            <h2>Prioridade do projeto</h2>
            <p>
              Desde 2012, as ações de educação ambiental se tornaram prioridade, sendo uma
              responsabilidade social do projeto levar à sociedade as descobertas que vinha fazendo,
              assim como as que eram feitas por colegas em todo o mundo.
            </p>
            <p>
              A educação ambiental é uma ponte entre a pesquisa acadêmica e a comunidade. Através
              dela, transformamos conhecimento científico em consciência ambiental e ação cidadã.
            </p>
          </div>
        </div>
      </div>

      {/* Hora de descontrair! — Ziggy e jogos */}
      <div
        style={{
          background: "linear-gradient(135deg, #e0f7fa 0%, #e8f5e9 50%, #fff9c4 100%)",
          padding: "56px 24px",
          margin: "0",
        }}
      >
        <h2
          className="story-phrase page-animate"
          style={{ marginBottom: 12 }}
        >
          Hora de <em>descontrair</em>!
        </h2>
        <p
          className="page-animate"
          style={{
            textAlign: "center",
            color: "var(--slate-500)",
            fontSize: ".92rem",
            maxWidth: 520,
            margin: "0 auto 32px",
          }}
        >
          Você conhece o mascote do nosso projeto?
        </p>

        {/* Ziggy introduction */}
        <div
          className="page-animate"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            alignItems: "center",
            justifyContent: "center",
            maxWidth: 960,
            margin: "0 auto 48px",
          }}
        >
          {/* Ziggy comic strip */}
          <div style={{ flex: "1 1 280px", maxWidth: 340 }}>
            <Image
              src="/ziggy-quadrinho.png"
              alt="Tirinha do Ziggy, o mascote cavalo-marinho"
              width={485}
              height={728}
              style={{ width: "100%", height: "auto", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,.12)" }}
            />
          </div>

          {/* Ziggy mascot + text */}
          <div style={{ flex: "1 1 300px", maxWidth: 460, textAlign: "center" }}>
            <Image
              src="/ziggy-mascote.png"
              alt="Ziggy, o mascote do Projeto Cavalos-Marinhos"
              width={502}
              height={829}
              style={{ width: "100%", maxWidth: 280, height: "auto", margin: "0 auto", display: "block" }}
            />
            <div
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "24px 20px",
                marginTop: 16,
                boxShadow: "0 4px 16px rgba(0,0,0,.08)",
                border: "2px solid #22b8cf33",
              }}
            >
              <p
                style={{
                  fontSize: ".92rem",
                  lineHeight: 1.7,
                  color: "#334155",
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                &ldquo;Oi! Eu sou o <strong>Ziggy</strong>! Os pesquisadores me chamam de <em>Hippocampus reidi</em>,
                o cavalo-marinho-de-focinho-longo. Minha vida no mar é uma grande aventura! Você topa brincar e se
                aventurar comigo?&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Game cards */}
        <h3
          className="page-animate"
          style={{
            textAlign: "center",
            fontSize: "1.15rem",
            fontWeight: 700,
            color: "#1e3a5f",
            marginBottom: 28,
          }}
        >
          Bora brincar com o Ziggy!
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {games.map((game) => (
            <a
              key={game.title}
              href={game.href}
              target="_blank"
              rel="noopener noreferrer"
              className="page-animate"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                background: "#fff",
                borderRadius: "var(--radius-sm)",
                padding: "20px 16px 24px",
                boxShadow: "var(--shadow-md)",
                textDecoration: "none",
                color: "inherit",
                border: `3px solid ${game.color}22`,
                transition: "transform .35s ease, box-shadow .35s ease, border-color .35s ease",
              }}
            >
              {game.image ? (
                <Image
                  src={game.image}
                  alt={game.title}
                  width={200}
                  height={200}
                  style={{
                    width: "100%",
                    maxWidth: 160,
                    height: "auto",
                    borderRadius: 8,
                    marginBottom: 12,
                  }}
                />
              ) : (
                <span
                  style={{
                    fontSize: "3rem",
                    marginBottom: 12,
                    display: "block",
                    width: 80,
                    height: 80,
                    lineHeight: "80px",
                    borderRadius: "50%",
                    background: `${game.color}15`,
                  }}
                >
                  🧩
                </span>
              )}
              <h3
                style={{
                  fontSize: ".95rem",
                  fontWeight: 700,
                  color: game.color,
                  marginBottom: 8,
                }}
              >
                {game.title}
              </h3>
              <p
                style={{
                  fontSize: ".82rem",
                  lineHeight: 1.65,
                  color: "var(--slate-500)",
                  margin: 0,
                }}
              >
                {game.description}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="page-section">
        <div className="cta-block page-animate">
          <h3>Quer levar o projeto para sua escola?</h3>
          <p>Entre em contato conosco para agendar uma visita ou palestra.</p>
          <a href="/contato" className="btn btn-gradient" style={{ border: "none" }}>Fale conosco</a>
        </div>
      </section>
    </SubpageLayout>
  );
}
