import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Ciência Cidadã – Projeto Cavalos-Marinhos RJ",
  description: "Programa de ciência cidadã para registro e monitoramento de cavalos-marinhos.",
};

export default function CienciaCidadaPage() {
  return (
    <SubpageLayout
      heroTitle="Ciência Cidadã"
      heroLead="Quando a comunidade se torna parte da ciência"
      depth="abyss"
    >
      <div className="page-featured">
        <div className="page-featured-inner">
          <div className="page-featured-img page-animate" style={{ background: "var(--off-white)", borderRadius: "var(--radius-lg)", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 200, fontSize: "4rem" }}>
            🔬
          </div>
          <div className="page-featured-text page-animate">
            <h2><em>Todos</em> podem contribuir para a conservação</h2>
            <p>
              A ciência cidadã é uma parceria estabelecida entre pesquisadores e cidadãos, para que esses
              possam contribuir com dados sobre uma temática através de métodos participativos. Nosso
              projeto fez em 2022 a primeira capacitação de cientistas cidadãos com moradores da Região
              dos Lagos.
            </p>
          </div>
        </div>
      </div>

      <section className="page-section wide">
        <h2 className="story-phrase page-animate">Iniciativas que <em>transformam</em></h2>
        <div className="info-cards">
          <div className="info-card page-animate">
            <h3>📋 Capacitação</h3>
            <p>
              Primeira turma de cientistas cidadãos da Região dos Lagos formada em 2022 na sede do
              INEA em Praia Seca. Participantes aprenderam metodologia de coleta e registro de dados.
            </p>
          </div>
          <div className="info-card page-animate">
            <h3>📊 Resultados</h3>
            <p>
              Os cientistas cidadãos colaboraram para o registro de cavalos-marinhos em todo entorno da
              Laguna de Araruama, contemplando os cinco municípios: Araruama, Iguaba Grande, São Pedro
              da Aldeia, Cabo Frio e Arraial do Cabo.
            </p>
          </div>
          <div className="info-card page-animate">
            <h3>🛡️ Guardiões dos Cavalos-Marinhos</h3>
            <p>
              Em 2025, o projeto lançou o programa &ldquo;Guardiões dos Cavalos-Marinhos&rdquo; em Iguaba
              Grande, envolvendo crianças de 10 a 14 anos em aulas teóricas e práticas, incluindo
              visitas ao laboratório e mergulhos de monitoramento. A primeira turma formou 31 jovens
              guardiões.
            </p>
          </div>
          <div className="info-card page-animate">
            <h3>🤝 Como Participar</h3>
            <p>
              Se encontrou um cavalo-marinho, registre: data, local, profundidade aproximada e, se
              possível, tire uma foto. Envie para nossa equipe!
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="cta-block page-animate">
          <h3>Faça parte da rede</h3>
          <p>Cada observação conta. Seu relato pode revelar novas áreas de ocorrência.</p>
          <a href="mailto:projetocavalosmarinhos@gmail.com" className="btn btn-gradient" style={{ border: "none" }}>Enviar relato</a>
        </div>
      </section>
    </SubpageLayout>
  );
}
