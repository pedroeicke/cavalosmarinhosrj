import SubpageLayout from "@/components/SubpageLayout";
import Image from "next/image";

export const metadata = {
  title: "Comunicação – Projeto Cavalos-Marinhos RJ",
  description: "Estudo dos mecanismos de comunicação e biofluorescência dos cavalos-marinhos.",
};

const communicationCards = [
  {
    emoji: "🔊",
    title: "Som",
    description:
      "Os cavalos-marinhos produzem som através de estalos feitos com os ossos da cabeça, além de vibrações da bexiga gasosa. Esses sons são utilizados principalmente durante interações sociais e rituais de cortejo.",
    color: "#1aa9e8",
  },
  {
    emoji: "🎨",
    title: "Cores",
    description:
      "Capazes de mudar sua coloração, os cavalos-marinhos usam essa habilidade tanto para se camuflar no ambiente quanto para sinalizar ao parceiro que estão dispostos à reprodução.",
    color: "#3b8070",
  },
  {
    emoji: "✨",
    title: "Biofluorescência",
    description:
      "A biofluorescência é a capacidade de receber um espectro de luz, absorver parte dele e refletir a outra parte de maneira direcionada. O cavalo-marinho-do-focinho-longo brilha nas cores vermelha e verde!",
    color: "#7C3AED",
  },
];

export default function ComunicacaoPage() {
  return (
    <SubpageLayout
      heroTitle="Comunicação"
      heroLead="Nem tudo é o que parece ser: a biofluorescência nos mostra uma visão diferente de cores não tão evidentes"
      heroImage="/Fig 1 - Amanda Vaccani.png"
      depth="deep"
    >
      {/* Content paragraphs */}
      <section className="page-section">
        <div className="content-block page-animate">
          <p>
            Todos os animais apresentam mecanismos de comunicação e os cavalos-marinhos não são
            diferentes. Eles podem produzir som através de estalos feitos com os ossos da cabeça,
            assim como vibrações da bexiga gasosa. Além disso, esses animais conseguem mudar sua
            coloração para se camuflar e até mesmo para sinalizar ao parceiro que está disposto à
            reprodução. Nossos estudos iniciaram através de testes comportamentais para avaliar a
            capacidade dos cavalos-marinhos em distinguir cores.
          </p>
        </div>

        {/* Experiment image */}
        <div className="img-block page-animate">
          <Image
            src="/Picture3.png"
            alt="Experimento de diferenciação de coloração conduzido por Natalie Freret-Meurer"
            width={900}
            height={600}
            style={{ width: "100%", height: "auto" }}
          />
          <p className="img-caption">
            Experimento conduzido por Natalie Freret-Meurer para testar diferenciação de coloração
          </p>
        </div>

        <div className="content-block page-animate">
          <p>
            Além das cores usuais, o projeto vem estudando o processo de comunicação a partir da
            biofluorescência. Esse fenômeno é conhecido pela capacidade de um animal em receber um
            espectro de luz, absorver parte dele e refletir a outra parte de maneira direcionada.
            Até o momento, a comunidade científica sabe muito pouco ainda sobre as funções da
            biofluorescência para as espécies.
          </p>
        </div>

        {/* Lab photo — Amanda Vaccani with UV light */}
        <div className="img-block page-animate">
          <Image
            src="/biofluorescencia-lab.jpg"
            alt="Amanda Vaccani realizando experimento com luz UV para estudo de biofluorescência"
            width={900}
            height={600}
            style={{ width: "100%", height: "auto" }}
          />
          <p className="img-caption">
            Projeto de doutorado de Amanda Vaccani com biofluorescência
          </p>
        </div>

        <div className="content-block page-animate">
          <p>
            Atualmente, estão sendo estudadas as funções ecológicas da biofluorescência, sendo
            assim será que o cavalo-marinho brilha para assustar um predador? Ou será para atrair
            a presa? Será que machos e fêmeas brilham diferente?
          </p>
        </div>
      </section>

      {/* Communication mechanism cards */}
      <section className="page-section wide">
        <h2 className="story-phrase page-animate">
          Como eles se <em>comunicam</em>?
        </h2>
        <div className="info-cards">
          {communicationCards.map((card) => (
            <div
              key={card.title}
              className="info-card page-animate"
              style={{
                borderTop: `4px solid ${card.color}`,
              }}
            >
              <h3>
                <span style={{ marginRight: 8 }}>{card.emoji}</span>
                {card.title}
              </h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* O que sabemos até agora? */}
      <div className="page-block page-block--light">
        <div className="container">
          <div className="content-block page-animate">
            <h2>O que sabemos até agora?</h2>
            <p>
              Descobrimos que o cavalo-marinho-do-focinho-longo <em>Hippocampus reidi</em> consegue
              diferenciar o vermelho do verde e do azul, porém o confunde com amarelo. Já o trabalho
              publicado pela equipe do nosso projeto sobre biofluorescência, Vaccani et al. (2021),
              descobriu que essa mesma espécie fluoresce apenas as cores vermelha e verde, ou seja,
              ele brilha vermelho e verde! As demais perguntas sobre biofluorescência ainda estão
              sendo estudadas.
            </p>
          </div>

          {/* Scientific figure — biofluorescence */}
          <div className="img-block page-animate">
            <Image
              src="/Picture2.png"
              alt="Figura científica mostrando biofluorescência em cavalos-marinhos"
              width={900}
              height={600}
              style={{ width: "100%", height: "auto" }}
            />
            <p className="img-caption">Vaccani et al. 2021</p>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
