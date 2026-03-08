import SubpageLayout from "@/components/SubpageLayout";
import Link from "next/link";

export const metadata = {
  title: "Publicações – Projeto Cavalos-Marinhos RJ",
  description: "Artigos científicos, livros eletrônicos e publicações do Projeto Cavalos-Marinhos RJ.",
};

const articles = [
  {
    authors: "FRERET-MEURER, N.V.; FONSÊCA DE ALMEIDA, R.; SAINT'PIERRE, T.; HAUSER-DAVIS, R.A.",
    title: "Metal and metalloids in the longsnout seahorse Hippocampus reidi Ginsburg, 1933 across three coastal Brazilian bays.",
    journal: "Marine Pollution Bulletin, 221. 2025.",
    doi: "10.1016/j.marpolbul.2025.118433",
  },
  {
    authors: "FRERET-MEURER, N.V.",
    title: "Virtual threat: illegal e-commerce of seahorses in Brazil – Update.",
    journal: "Revista de Gestão Social e Ambiental, 19(5): e012257. 2025.",
    doi: "10.24857/rgsa.v19n5-102",
  },
  {
    authors: "FRERET-MEURER, N.V.; FERNÁNDEZ, T.C.; VACCANI, A.C.; CABIRÓ, G.S.",
    title: "Priority Conservation Areas for the Longsnout Seahorse Hippocampus reidi Ginsburg, 1933, on a Tropical Coast.",
    journal: "Aquatic Conservation: Marine and Freshwater Ecosystems, 35(7). 2025.",
    doi: "10.1002/aqc.70180",
  },
  {
    authors: "FERNÁNDEZ, T.C.; SOUTO-NETO, J.A.; FRERET-MEURER, N.V.; MACHADO, L.A.; VACCANI, A.C.; CABIRÓ, G.S.; SAINT'PIERRE, T.D.; HAUSER-DAVIS, R.A.",
    title: "First report on Technology-Critical Elements in seahorses from Rio de Janeiro, Southeastern Brazil.",
    journal: "Marine Pollution Bulletin, 218. 2025.",
    doi: "10.1016/j.marpolbul.2025.118042",
  },
  {
    authors: "MACCARI, J.M.; ADELIR-ALVES, J.; FRERET-MEURER, N.V.; PINHEIRO, P.C.",
    title: "The habitat use of longsnout seahorse Hippocampus reidi in a subtropical Brazilian estuary.",
    journal: "Neotropical Ichthyology, 22(4): e240041. 2024.",
    doi: "10.1590/1982-0224-2024-0041",
  },
  {
    authors: "TERNES, M.L.F.; FRERET-MEURER, N.V.; NASCIMENTO, R.L.; VIDAL, M.D.; GIARRIZZO, T.",
    title: "Local ecological knowledge provides important conservation guidelines for a threatened seahorse species in mangrove ecosystems.",
    journal: "Frontiers in Marine Science, 10. 2023.",
    doi: "10.3389/fmars.2023.1139368",
  },
  {
    authors: "FRERET-MEURER, N.V.; FERNÁNDEZ, T.C.; VACCANI, A.C.",
    title: "Baseline study of the seahorse Hippocampus reidi Ginsburg, 1933 population in a tropical hypersaline lagoon.",
    journal: "Aquatic Ecology. 2023.",
    doi: "",
  },
  {
    authors: "FRERET-MEURER, N.V.; FERNÁNDEZ, T.C.; VACCANI, A.C.; CABIRÓ, G.",
    title: "Range extension of the Patagonian seahorse in Brazil: a biological treasure hauled up by local fishermen.",
    journal: "Journal of Wild Life and Biodiversity, v. 6. 2022.",
    doi: "",
  },
  {
    authors: "FRERET-MEURER, N.V.; FERNÁNDEZ, T.C.; VACCANI, A.C.",
    title: "Influence of the Atlantic Ocean thermal anomaly on the Longsnout Seahorse Hippocampus reidi in a Brazilian estuary.",
    journal: "Journal of Fish Biology, v. 6, p. 1-12. 2022.",
    doi: "",
  },
  {
    authors: "FIALHO, E.; FERNÁNDEZ, T.C.; FRERET-MEURER, N.V.",
    title: "Treatment of a caseous infection caused by Enterobacter aerogenes in a captive longsnout seahorse.",
    journal: "Pan-American Journal of Aquatic Sciences, v. 17, p. 145-151. 2022.",
    doi: "",
  },
  {
    authors: "FERNANDEZ, T.C.; SANTOS, L.N.; BERTONCINI, Á.A.; FRERET-MEURER, N.V.",
    title: "Population structure of the seahorse Hippocampus reidi in two Brazilian estuaries.",
    journal: "Ocean and Coastal Research, v. 70, p. e22009. 2022.",
    doi: "",
  },
  {
    authors: "FRERET-MEURER, N.V.; VACCANI, A.C.; CABIRÓ, G.S.",
    title: "Evidence of feminization in seahorses from a tropical estuary.",
    journal: "Journal of Fish Biology, v. 00, p. jfb.14759. 2021.",
    doi: "",
  },
  {
    authors: "FRERET-MEURER, N.V.; ANDREATA, J.V.; ALVES, M.A.S.",
    title: "Agonistic behaviour in the long-snout seahorse: A gentlemanly challenge.",
    journal: "Ethology, v. 00, p. 1-9. 2021.",
    doi: "",
  },
  {
    authors: "VACCANI, A.C.; FERNÁNDEZ, T.C.; FRERET-MEURER, N.V.",
    title: "First record of the Patagonian seahorse Hippocampus patagonicus in Brazilian estuarine shallow waters.",
    journal: "Cybium, v. 45, p. 318-320. 2021.",
    doi: "",
  },
  {
    authors: "FRERET-MEURER, N.V.; FERNÁNDEZ, T.C.; CABIRÓ, G.",
    title: "Opercular beat: A non-invasive and rapid method to detect stress in seahorses.",
    journal: "Journal of Applied Aquaculture, v. 00, p. 1-9. 2020.",
    doi: "",
  },
  {
    authors: "VACCANI, A.C.; FRERET-MEURER, N.V.; BERTONCINI, Á.A.; SANTOS, L.N.",
    title: "Shining in the dark: First record of biofluorescence in the seahorse Hippocampus reidi.",
    journal: "PLoS One, v. 14, p. e0220561. 2019.",
    doi: "",
  },
  {
    authors: "FRERET-MEURER, N.V.; FERNÁNDEZ, T.C.; OKADA, N.B.; VACCANI, A.C.",
    title: "Population dynamics of the endangered seahorse Hippocampus reidi Ginsburg, 1933 in a tropical rocky reef habitat.",
    journal: "Animal Biodiversity and Conservation, v. 41, p. 345-356. 2018.",
    doi: "",
  },
  {
    authors: "FRERET-MEURER, N.V.; VACCANI, A.C.; OKADA, N.B.; FERNÁNDEZ, T.C.",
    title: "A snapshot of a high density seahorse population in a tropical rocky reef.",
    journal: "Journal of Natural History, v. 52, p. 1571-1580. 2018.",
    doi: "",
  },
  {
    authors: "FRERET-MEURER, N.V.; ALVES, M.A.S.",
    title: "Personality in the longsnout seahorse, Hippocampus reidi Ginsburg, 1933: Are males shyer than females?",
    journal: "Behavioural Processes, v. 157, p. 106-110. 2018.",
    doi: "",
  },
  {
    authors: "FRERET-MEURER, N.V.; FERNÁNDEZ, T.C.; LOPES, D.A.; VACCANI, A.C.; OKADA, N.B.",
    title: "Thanatosis in the Brazilian seahorse Hippocampus reidi (Teleostei: Syngnathidae).",
    journal: "Acta Ethologica, v. 20, p. 81-84. 2016.",
    doi: "",
  },
  {
    authors: "FRERET-MEURER, N.V.; ANDREATA, J.V.; ALVES, M.A.S.",
    title: "Seahorse fingerprints: a new individual identification technique.",
    journal: "Environmental Biology of Fishes, v. 94, p. 1-10. 2013.",
    doi: "",
  },
  {
    authors: "ARMESTO, L.; FRERET-MEURER, N.V.",
    title: "Testing for camouflage of the Brazilian seahorse Hippocampus reidi using the territorial damselfish Stegastes fuscus.",
    journal: "Aqua, v. 18, p. 165-170. 2012.",
    doi: "",
  },
  {
    authors: "OLIVEIRA, V.M.; FRERET-MEURER, N.V.",
    title: "Distribuição vertical do cavalo-marinho Hippocampus reidi na região de Arraial do Cabo, RJ, Brasil.",
    journal: "Biotemas (UFSC), v. 25, p. 59-66. 2012.",
    doi: "",
  },
  {
    authors: "FRERET-MEURER, N.V.; ANDREATA, J.V.; ALVES, M.A.S.",
    title: "Activity rate of the seahorse Hippocampus reidi Ginsburg, 1933.",
    journal: "Acta Ethologica, v. 7, p. 1. 2012.",
    doi: "",
  },
  {
    authors: "FRERET-MEURER, N.V.; ANDREATA, J.V.",
    title: "First record of Hippocampus erectus Perry, 1810 at 100 meters deep.",
    journal: "Revista Brasileira de Zoociências, v. 13, p. 109. 2011.",
    doi: "",
  },
  {
    authors: "FRERET-MEURER, N.V.; ANDREATA, J.V.; MEURER, B.C. et al.",
    title: "Spatial distribution of metals in sediments of the Ribeira Bay, Angra dos Reis, Rio de Janeiro, Brazil.",
    journal: "Marine Pollution Bulletin, 2010.",
    doi: "",
  },
  {
    authors: "FRERET-MEURER, N.V.; ANDREATA, J.V.; ALVES, M.A.S.",
    title: "Padrão de atividade diurna do cavalo-marinho Hippocampus reidi no estado do Rio de Janeiro.",
    journal: "Oecologia Brasiliensis, v. 13, p. 89-98. 2009.",
    doi: "",
  },
  {
    authors: "FRERET-MEURER, N.V.; ANDREATA, J.V.; ALVES, M.A.S.",
    title: "Field studies of a Brazilian seahorse population, Hippocampus reidi Ginsburg, 1933.",
    journal: "Brazilian Archives of Biology and Technology, v. 51, p. 543-551. 2008.",
    doi: "",
  },
];

const ebooks = [
  "Desvendando os Cavalos-Marinhos",
  "Percursos Educativos: Cavalos-Marinhos e a Cultura Oceânica",
  "Guia Educativo Jovens Educadores Marinhos",
];

export default function ProducaoCientificaPage() {
  return (
    <SubpageLayout
      heroTitle="Publicações"
      heroLead="Artigos científicos e livros eletrônicos produzidos pela equipe"
      heroImage="/DSCN6122.png"
      depth="deep"
    >
      {/* Artigos */}
      <section className="page-section wide">
        <div className="page-animate">
          <h2 style={{
            fontFamily: "var(--font)", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
            fontWeight: 700, textAlign: "center", marginBottom: 32
          }}>ARTIGOS CIENTÍFICOS</h2>
        </div>

        <div className="pub-cards">
          {articles.map((pub, i) => (
            <div key={i} className="pub-card page-animate">
              <div className="pub-authors" style={{ fontSize: "0.8rem", color: "var(--gray)", marginBottom: 6 }}>
                {pub.authors}
              </div>
              <div className="pub-title" style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: 6, lineHeight: 1.5 }}>
                {pub.title}
              </div>
              <div className="pub-journal" style={{ fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-muted)" }}>
                {pub.journal}
              </div>
              {pub.doi && (
                <div style={{ fontSize: "0.8rem", marginTop: 6 }}>
                  <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" style={{ color: "var(--teal)" }}>
                    DOI: {pub.doi}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* E-books */}
      <section className="page-section">
        <div className="page-animate">
          <h2 style={{
            fontFamily: "var(--font)", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
            fontWeight: 700, textAlign: "center", marginBottom: 32
          }}>LIVROS ELETRÔNICOS</h2>
        </div>

        <div className="info-cards">
          {ebooks.map((book) => (
            <div key={book} className="info-card page-animate" style={{ textAlign: "center" }}>
              <h3 style={{ fontSize: "1rem", marginBottom: 8 }}>{book}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--gray)" }}>
                Disponível para download no site do projeto
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section" style={{ textAlign: "center" }}>
        <div className="page-animate">
          <h2 style={{
            fontFamily: "var(--font)", fontSize: "1.3rem",
            fontWeight: 700, color: "var(--teal)"
          }}>PROTEJA OS CAVALOS-MARINHOS DO RIO DE JANEIRO</h2>
        </div>
      </section>
    </SubpageLayout>
  );
}
