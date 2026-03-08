import SubpageLayout from "@/components/SubpageLayout";
import Image from "next/image";

export const metadata = {
  title: "Genética – Projeto Cavalos-Marinhos RJ",
  description: "Uso de marcadores genéticos para conservação dos cavalos-marinhos no Rio de Janeiro.",
};

export default function GeneticaPage() {
  return (
    <SubpageLayout
      heroTitle="Genética"
      heroLead="Genética é uma ferramenta incrível para ajudar a entender a ecologia das espécies"
      heroImage="/Gel_DNA_Hippocampus reidi - Denise Dias.jpeg"
      depth="deep"
    >
      <div className="page-featured">
        <div className="page-featured-inner">
          <div className="page-featured-img page-animate">
            <Image src="/Gel_DNA_Hippocampus reidi - Denise Dias.jpeg" alt="Protocolo de extração de DNA" width={600} height={400} style={{ width: "100%", height: "auto" }} />
          </div>
          <div className="page-featured-text page-animate">
            <h2>O DNA conta a <em>história</em> de cada população</h2>
            <p>
              A genética surgiu como uma ferramenta inovadora contribuindo para compreensão das espécies.
              Identificação, paternidade, diversidade, esses são alguns aspectos que podem ser melhor
              compreendidos com a utilização das informações contidas no DNA das espécies.
            </p>
          </div>
        </div>
      </div>

      <section className="page-section">
        <div className="img-block page-animate">
          <Image src="/analise-genetica.png" alt="Protocolo de extração de DNA dos cavalos-marinhos" width={800} height={500} style={{ width: "100%", height: "auto" }} />
        </div>
        <p className="img-caption">Protocolo de extração de DNA dos cavalos-marinhos</p>
      </section>

      <section className="page-section">
        <div className="content-block page-animate">
          <p>
            Em nosso projeto, utilizamos a genética para confirmação das espécies de alguns indivíduos
            que, morfologicamente, têm características compartilhadas de duas espécies, gerando confusão
            no momento da identificação. Além disso, foi possível mapear a variabilidade genética das
            populações do Estado do Rio de Janeiro.
          </p>
        </div>

        <div className="content-block page-animate">
          <p>
            A análise de variabilidade genética nos diz o quanto os indivíduos da mesma espécie que
            vivem em diversas regiões são diferentes geneticamente. E com isso, temos uma base para
            a formação de um banco genético de cavalos-marinhos vivos.
          </p>
        </div>

        <div className="content-block page-animate">
          <p>
            O banco genético é como um armazenamento de características genéticas contidas em animais
            vivos, que representam o que encontramos na natureza naquele determinado momento.
          </p>
        </div>

        <div className="content-block page-animate">
          <p>
            Ter bancos genéticos de espécies ameaçadas é extremamente importante, considerando a
            intensidade dos impactos provocados pelos seres humanos no mundo atual. Isso representa
            que, se uma população natural de um determinado local se extinguir, seremos capazes de
            recompô-la através da introdução de animais com mesma diversidade genética que os anteriores.
          </p>
        </div>
      </section>

      <section className="page-section wide">
        <h2 className="story-phrase page-animate">Como usamos a <em>genética</em></h2>
        <div className="info-cards">
          <div className="info-card page-animate">
            <h3>🔍 Identificação</h3>
            <p>
              Confirmação das espécies quando indivíduos apresentam características morfológicas compartilhadas entre duas espécies.
            </p>
          </div>
          <div className="info-card page-animate">
            <h3>👨‍👩‍👧 Paternidade</h3>
            <p>
              Determinação de relações de parentesco entre indivíduos, essencial para entender a dinâmica reprodutiva.
            </p>
          </div>
          <div className="info-card page-animate">
            <h3>🧬 Diversidade</h3>
            <p>
              Mapeamento da variabilidade genética das populações, base para formação de bancos genéticos vivos.
            </p>
          </div>
        </div>
      </section>

      <div className="page-block page-block--light">
        <div className="container">
          <div className="content-block page-animate">
            <h2>O que sabemos até agora?</h2>
            <p>
              A população de cavalos-marinhos do Estado do Rio de Janeiro é geneticamente distinta da
              do nordeste do Brasil. Apesar da população fluminense de cavalos-marinhos ser bastante
              coesa e indicar ser uma única população, os animais da Armação de Búzios se mostraram
              uma população com uma composição genética mais distinta das demais, indicando que essa
              população se reproduz menos com as outras mais ao sul do Estado.
            </p>
          </div>
        </div>
      </div>

      <section className="page-section">
        <div className="cta-block page-animate">
          <h3>Conheça nossas publicações</h3>
          <p>Veja os artigos científicos sobre genética e conservação.</p>
          <a href="/producao-cientifica" className="btn btn-gradient" style={{ border: "none" }}>Ver publicações</a>
        </div>
      </section>
    </SubpageLayout>
  );
}
