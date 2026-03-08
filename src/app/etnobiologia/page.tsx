import SubpageLayout from "@/components/SubpageLayout";
import Image from "next/image";

export const metadata = {
  title: "Etnobiologia – Projeto Cavalos-Marinhos RJ",
  description: "A relação entre ciência e conhecimento tradicional na conservação dos cavalos-marinhos.",
};

export default function EtnobiologiaPage() {
  return (
    <SubpageLayout
      heroTitle="Etnobiologia"
      heroLead="A sabedoria caiçara, muitas vezes, revela dados que a ciência pode demorar anos para descobrir"
      heroImage="/Roda de Conversa Z13.jfif.jpg"
      depth="abyss"
    >
      <div className="page-featured">
        <div className="page-featured-inner">
          <div className="page-featured-img page-animate">
            <Image src="/Roda de Conversa Z13.jfif.jpg" alt="Roda de conversa na colônia Z13" width={600} height={400} style={{ width: "100%", height: "auto" }} />
          </div>
          <div className="page-featured-text page-animate">
            <h2>O <em>conhecimento tradicional</em> revela o que a ciência ainda não viu</h2>
            <p>
              A etnobiologia é uma ciência baseada no conhecimento tradicional de um determinado povo
              ou grupo de pessoas sobre plantas ou animais. Esse conhecimento pode estar associado à
              relação do organismo com o meio ou à interação humana com ele. As comunidades tradicionais,
              como caiçaras e quilombolas, possuem uma rica cultura, vivência e conhecimento sobre a
              natureza, muitas vezes contribuindo imensamente na ampliação das informações sobre
              determinadas espécies e dando direcionamento às pesquisas conduzidas por cientistas.
            </p>
          </div>
        </div>
      </div>

      <section className="page-section">
        <div className="content-block page-animate">
          <p>
            O projeto vem trabalhando desde 2021 com a colônia de pesca Z13, coletando informações de
            captura acidental de cavalos-marinhos na pesca artesanal, além de dados sobre a biologia
            desses animais como percepção do período de ocorrência, sexo, cor, ambiente em que vive,
            locais de maior captura, profundidade, dentre outros dados. Os pescadores da Z13 são
            excelentes parceiros e contribuem com dados para ampliar o entendimento sobre a dinâmica
            dos cavalos-marinhos na Baía de Guanabara.
          </p>
        </div>

        <div className="img-block page-animate">
          <Image src="/cavalo-marinho-pesca.jpg" alt="Animal capturado acidentalmente na rede de pesca e cedido ao projeto" width={800} height={500} style={{ width: "100%", height: "auto" }} />
        </div>
        <p className="img-caption">Animal capturado acidentalmente na rede de pesca e cedido ao projeto</p>
      </section>

      <section className="page-section wide">
        <h2 className="story-phrase page-animate">Fontes de <em>conhecimento</em></h2>
        <div className="info-cards">
          <div className="info-card page-animate">
            <h3>🎣 Pescadores</h3>
            <p>
              Os pescadores da colônia Z13 compartilham dados sobre captura acidental, biologia e dinâmica dos cavalos-marinhos na Baía de Guanabara.
            </p>
          </div>
          <div className="info-card page-animate">
            <h3>👥 Cientistas Cidadãos</h3>
            <p>
              Moradores capacitados que coletam dados sistemáticos sobre avistamentos de cavalos-marinhos em toda a Região dos Lagos.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-block page-animate">
          <h2>Ciência Cidadã</h2>
          <p>
            A ciência cidadã é uma parceria estabelecida entre pesquisadores e cidadãos, para que esses
            possam contribuir com dados sobre uma temática através de métodos participativos. Nosso
            projeto fez em 2022 a primeira capacitação de cientistas cidadãos com moradores da Região
            dos Lagos. Essa capacitação ocorreu na sede do INEA da APA da Massambaba, em que os
            participantes aprenderam como coletar dados sistemáticos e quais informações deveriam ser
            registradas.
          </p>
        </div>

        <div className="img-block page-animate">
          <Image src="/cientistas-cidadaos.jpg" alt="Primeira turma de cientistas cidadãos da Região dos Lagos" width={800} height={500} style={{ width: "100%", height: "auto" }} />
        </div>
        <p className="img-caption">Primeira turma de cientistas cidadãos da Região dos Lagos</p>
      </section>

      <div className="page-block page-block--light">
        <div className="container">
          <div className="content-block page-animate">
            <h2>O que sabemos até agora?</h2>
            <p>
              Com a ajuda dos pescadores da colônia de pesca Z13, foi publicado o <strong>primeiro
              registro do cavalo-marinho patagônico na Baía de Guanabara</strong>, ampliando a latitude
              de ocorrência da espécie. Os cientistas cidadãos colaboraram para o registro de
              cavalos-marinhos em todo entorno da Laguna de Araruama, contemplando os cinco municípios
              (Araruama, Iguaba Grande, São Pedro da Aldeia, Cabo Frio e Arraial do Cabo).
            </p>
          </div>
        </div>
      </div>

      <section className="page-section">
        <div className="img-block page-animate">
          <Image src="/capacitacao-inea.jpg" alt="Capacitação de cientistas cidadãos na sede do INEA em Praia Seca" width={800} height={500} style={{ width: "100%", height: "auto" }} />
        </div>
        <p className="img-caption">Capacitação de cientistas cidadãos na sede do INEA em Praia Seca</p>
      </section>

      <section className="page-section">
        <div className="cta-block page-animate">
          <h3>Quer participar?</h3>
          <p>Envie seus relatos de avistamentos de cavalos-marinhos com data, local e foto.</p>
          <a href="mailto:projetocavalosmarinhos@gmail.com" className="btn btn-gradient" style={{ border: "none" }}>Enviar relato</a>
        </div>
      </section>
    </SubpageLayout>
  );
}
