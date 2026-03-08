import SubpageLayout from "@/components/SubpageLayout";
import Image from "next/image";

export const metadata = {
  title: "Nossa História – Projeto Cavalos-Marinhos RJ",
  description: "A trajetória do Projeto Cavalos-Marinhos RJ desde 2002.",
};

export default function HistoriaPage() {
  return (
    <SubpageLayout
      heroTitle="Nossa História"
      heroLead="Mais de duas décadas dedicadas à conservação marinha"
      heroImage="/Ilha grande FLK.jpg"
      depth="deep"
    >
      {/* Featured */}
      <div className="page-featured">
        <div className="page-featured-inner">
          <div className="page-featured-img page-animate">
            <Image src="/Ilha grande FLK.jpg" alt="Ilha Grande" width={600} height={400} style={{ width: "100%", height: "auto" }} />
          </div>
          <div className="page-featured-text page-animate">
            <h2>Uma jornada que começou com <em>uma paixão</em></h2>
            <p>
              Em novembro de 2002, na Ilha Grande, nasceu o Projeto Cavalos-Marinhos/RJ.
              De um trabalho acadêmico apaixonado, evoluiu para uma das referências nacionais
              em pesquisa e conservação de cavalos-marinhos.
            </p>
          </div>
        </div>
      </div>

      {/* Narrative content */}
      <section className="page-section">
        <h2 className="story-phrase page-animate">
          A trajetória do projeto <em>ano a ano</em>.
        </h2>

        <div className="content-block page-animate">
          <p>
            O Projeto Cavalos-Marinhos do Rio de Janeiro surgiu em 1 de novembro de 2002 na Ilha Grande, RJ. Sua fundadora, Natalie Villar Freret Meurer, finalizando sua graduação na Universidade Santa Úrsula e apaixonada pelos cavalos-marinhos, decidiu criar um projeto que pudesse gerar mais informações sobre as populações naturais do Estado.
          </p>
        </div>

        <div className="content-block page-animate">
          <p>
            De 2004 a 2005, o projeto foi contemplado por dois anos seguidos pelo prêmio da PADI PROJECT AWARE FOUNDATION, possibilitando um levantamento amplo dos cavalos-marinhos no entorno da Ilha Grande e a realização de um diagnóstico socioeconômico de moradores e turistas.
          </p>
        </div>

        <div className="content-block page-animate" style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "center" }}>
          <div style={{ flex: "1 1 300px" }}>
            <Image src="/imagem 101.JPG" alt="Entrevista com moradores da Ilha Grande em 2005" width={500} height={350} style={{ width: "100%", height: "auto", borderRadius: 12 }} />
            <p style={{ fontSize: "0.85rem", color: "var(--body-text)", marginTop: 8, textAlign: "center", fontStyle: "italic" }}>
              Entrevista com moradores da Ilha Grande em 2005
            </p>
          </div>
        </div>

        <div className="content-block page-animate">
          <p>
            Em 2006 foi realizado um estudo de levantamento populacional que contemplou áreas desde a Armação dos Búzios até Angra dos Reis, identificando áreas prioritárias para pesquisa. A partir de 2010, foram iniciados monitoramentos na Baía de Guanabara, Arraial do Cabo e Armação dos Búzios, além da Ilha Grande, região monitorada desde 2004.
          </p>
        </div>

        <div className="content-block page-animate" style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "center" }}>
          <div style={{ flex: "1 1 300px" }}>
            <Image src="/Medindo camar.jpg" alt="Registro do comprimento do cavalo-marinho no monitoramento da Ilha Grande em 2007" width={500} height={350} style={{ width: "100%", height: "auto", borderRadius: 12 }} />
            <p style={{ fontSize: "0.85rem", color: "var(--body-text)", marginTop: 8, textAlign: "center", fontStyle: "italic" }}>
              Registro do comprimento do cavalo-marinho no monitoramento da Ilha Grande em 2007
            </p>
          </div>
        </div>

        <div className="content-block page-animate">
          <p>
            O projeto iniciou em 2012 ações de educação ambiental em escolas, assim como recebia alunos na Universidade Santa Úrsula. Aos poucos foi participando de ações na praia, stands em eventos científicos e comemorativos, como a semana do meio ambiente. Desde então, as ações de educação ambiental se tornaram prioridade, sendo uma responsabilidade social do projeto, levar à sociedade as descobertas que vinha fazendo, assim como as que eram feitas por colegas em todo o mundo.
          </p>
        </div>

        <div className="content-block page-animate">
          <p>
            Em 2014, houve a ampliação do monitoramento para a Baía de Sepetiba. Nesse mesmo ano, a Universidade Santa Úrsula disponibilizou o Laboratório de Comportamento Animal e Conservação, para que Natalie, agora professora da instituição, pudesse estudar o comportamento dos cavalos-marinhos. Junto a ela, se agregaram algumas alunas como estagiárias, as quais tiveram um papel muito importante para o crescimento do projeto. Nesse período, o projeto já havia publicado algumas das suas pesquisas e desenvolvia outras sobre comunicação.
          </p>
        </div>

        <div className="content-block page-animate" style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "center" }}>
          <div style={{ flex: "1 1 300px" }}>
            <Image src="/IMG_2949.JPG" alt="Stand montado na Armação dos Búzios em 2015" width={500} height={350} style={{ width: "100%", height: "auto", borderRadius: 12 }} />
            <p style={{ fontSize: "0.85rem", color: "var(--body-text)", marginTop: 8, textAlign: "center", fontStyle: "italic" }}>
              Stand montado na Armação dos Búzios em 2015
            </p>
          </div>
        </div>

        <div className="content-block page-animate">
          <p>
            Através do Laboratório de Comportamento Animal e Conservação, o projeto publicou diversas pesquisas em revistas científicas nacionais e internacionais, contribuindo significativamente para o conhecimento sobre os cavalos-marinhos no Brasil.
          </p>
        </div>

        <div className="content-block page-animate">
          <p>
            Em 2021, o projeto recebeu diversas mensagens em suas redes sociais, informando a avistagem de cavalos-marinhos na laguna de Araruama. A equipe foi investigar esses relatos e encontrou uma população enorme de cavalos-marinhos na área. A partir de então, mantiveram o monitoramento também nesse local e implantaram diversas placas no entorno da laguna com apoio das prefeituras de São Pedro da Aldeia, Iguaba Grande, Arraial do Cabo e Araruama, sinalizando as melhores práticas com os cavalos-marinhos em caso de encontro.
          </p>
        </div>

        <div className="content-block page-animate" style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "center" }}>
          <div style={{ flex: "1 1 300px" }}>
            <Image src="/Araruama.JPG" alt="Cavalo-marinho registrado pelo projeto em São Pedro da Aldeia" width={500} height={350} style={{ width: "100%", height: "auto", borderRadius: 12 }} />
            <p style={{ fontSize: "0.85rem", color: "var(--body-text)", marginTop: 8, textAlign: "center", fontStyle: "italic" }}>
              Cavalo-marinho registrado pelo projeto em São Pedro da Aldeia
            </p>
          </div>
        </div>

        <div className="content-block page-animate">
          <p>
            Em 2022, o projeto organizou o primeiro Workshop Cavalos-Marinhos: passado, presente e futuro da conservação. Participaram pesquisadores de todo Brasil, no qual foram discutidos diversos aspectos da conservação dos cavalos-marinhos brasileiros. Nesse mesmo ano, com apoio do deputado Luiz Lima e seu assessor Pedro Alqueres, o projeto forneceu subsídios para a criação de um projeto de lei federal de proteção aos cavalos-marinhos, o qual ainda está tramitando. No ano seguinte, o projeto teve a iniciativa de fundar a Rede de Pesquisa Brasileira de Cavalos-Marinhos (RPBCM), reunindo diversos pesquisadores de múltiplas especialidades para discutir estratégias para futuras pesquisas que possam subsidiar políticas públicas de conservação.
          </p>
        </div>

        <div className="content-block page-animate">
          <p>
            Atualmente, o projeto busca reunir iniciativas que queiram atuar na conservação do cavalo-marinho de maneira que, unidos, seja possível atingir a sua missão.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section">
        <div className="cta-block page-animate">
          <h3>Conheça quem faz o projeto acontecer</h3>
          <p>Descubra os pesquisadores e colaboradores por trás do projeto.</p>
          <a href="/equipe" className="btn btn-gradient" style={{ border: "none" }}>Ver equipe</a>
        </div>
      </section>
    </SubpageLayout>
  );
}
