import SubpageLayout from "@/components/SubpageLayout";
import Image from "next/image";

export const metadata = {
  title: "RPBCM – Rede de Pesquisa Brasileira de Cavalos-Marinhos",
  description: "Rede de Pesquisa Brasileira de Cavalos-Marinhos: pesquisadores de todo o Brasil unidos pela conservação.",
};

const pesquisadores: { name: string; institution: string; email: string; lattes: string; research: string; photo?: string }[] = [
  {
    name: "Amanda Vaccani do Carmo",
    institution: "Projeto Cavalos-Marinhos/RJ e Universidade do Estado do Rio de Janeiro",
    email: "amandavaccani@cavalosmarinhosrj.com",
    lattes: "http://lattes.cnpq.br/4202399450460323",
    research: "Pesquisadora do Projeto Cavalos-Marinhos/RJ, desenvolve pesquisa com monitoramento das populações ao longo da costa do Rio de Janeiro. Realiza estudos comportamentais, tendo a biofluorescência em Hippocampus reidi como foco principal.",
    photo: "/AMANDA.png",
  },
  {
    name: "Anderson Vilasboa de Vasconcellos",
    institution: "Universidade do Estado do Rio de Janeiro",
    email: "andersonvilasboa@gmail.com",
    lattes: "http://lattes.cnpq.br/2627503801412287",
    research: "Diversidade genética em banco genético vivo; sistema diagnóstico molecular para identificação espécie-específica de cavalos-marinhos no Brasil.",
    photo: "/6.png",
  },
  {
    name: "Bruna Larissa Maganhe",
    institution: "Aquário de Ubatuba",
    email: "brunamaganhe@live.com",
    lattes: "http://lattes.cnpq.br/1685437264421067",
    research: "Desenvolvimento de escalas de avaliação qualitativa de reservas corporais para Hippocampus reidi, visando o uso de técnicas não invasivas na avaliação de populações de vida livre e cultivadas; e o uso de itens alimentares alternativos, de baixo custo e alto potencial nutricional.",
    photo: "/Screenshot_2022-12-10-09-22-05-882_com.instagram.android - Bruna Maganhe.jpg",
  },
  {
    name: "Denise Borges dos Santos Dias",
    institution: "Universidade do Estado do Rio de Janeiro",
    email: "denise.dias@uerj.br",
    lattes: "http://lattes.cnpq.br/5198541753716644",
    research: "Construção de um banco genético de Hippocampus reidi, utilizando marcadores moleculares.",
  },
  {
    name: "Elen Monique de Oliveira Sousa",
    institution: "Universidade Federal de Santa Catarina",
    email: "monique.olis@hotmail.com",
    lattes: "http://lattes.cnpq.br/3061217696241262",
    research: "Utilizar o setor da aquicultura como ferramenta legal e sustentável para aperfeiçoamento dos estudos sobre desenvolvimento embrionário e larval de Hippocampus reidi, assim como a nutrição, fisiologia e biologia animal.",
  },
  {
    name: "Fernanda Luise Kistler",
    institution: "Projeto Cavalos-Marinhos/RJ",
    email: "fernandaluise@cavalosmarinhosrj.com",
    lattes: "http://lattes.cnpq.br/4161448167557353",
    research: "Planejamento e execução de atividades de Educação Ambiental e Divulgação Científica em ações e eventos em diferentes espaços não formais de educação, bem como em visitas escolares e em mídias sociais.",
    photo: "/IMG_3242 - Fernanda Luise Kistler.jpeg",
  },
  {
    name: "Flávia Regina Spago de Camargo Gonçalves",
    institution: "Ifes campus Piúma",
    email: "flavia.goncalves@ifes.edu.br",
    lattes: "http://lattes.cnpq.br/8366003861921452",
    research: "Atua na área de Ecologia microbiana e Biotecnologia, procurando conhecer o microbioma associado aos cavalos-marinhos para desenvolvimento de tecnologias de alimentação, especialmente probióticos.",
    photo: "/Foto Flávia.jpg",
  },
  {
    name: "Gabriela Alves Valentim",
    institution: "Universidade Federal do Ceará",
    email: "valentim.gabriela@gmail.com",
    lattes: "http://lattes.cnpq.br/2120202931723479",
    research: "Monitoramento da população de cavalos-marinhos do estuário do rio Pacoti, na costa semiárida brasileira, com o objetivo de entender como a estrutura populacional de Hippocampus reidi pode ser influenciada pela hipersalinidade. Análise do histórico da exportação de espécies nativas e a legislação ambiental brasileira.",
  },
  {
    name: "Gabriela dos Santos Cabiró",
    institution: "Projeto Cavalos-Marinhos/RJ e Universidade Federal do Rio de Janeiro",
    email: "gabriela.cabiro@cavalosmarinhosrj.com",
    lattes: "http://lattes.cnpq.br/5853281727677631",
    research: "Desenvolvimento de pesquisas e monitoramentos das populações de cavalos-marinhos Hippocampus reidi pelo estado do Rio de Janeiro. Linha de pesquisa comportamental, investigando o papel da personalidade na seleção sexual e escolha de parceiros reprodutivos.",
    photo: "/IMG_7153.PNG.jpg",
  },
  {
    name: "Ianka Agra da Silva",
    institution: "Universidade Federal de Santa Catarina",
    email: "ianka96_agra@hotmail.com",
    lattes: "http://lattes.cnpq.br/3798172837582864",
    research: "Pesquisa sobre o cultivo do cavalo-marinho (Hippocampus reidi): utilização da técnica de água verde para larvicultura, efeito de alimentos naturais sobre reprodutores e prole, e monitoramento populacional na ilha de Florianópolis.",
    photo: "/20220729_144106 - Ianka Agra.jpg",
  },
  {
    name: "Jose Araújo Souto Neto",
    institution: "Universidade Federal do Rio de Janeiro",
    email: "soutoneto_16@hotmail.com",
    lattes: "http://lattes.cnpq.br/1901430132626736",
    research: "Pesquisas relacionadas ao cultivo como estratégia de conservação, com ênfase em aspectos nutricionais e identificação de doenças em cativeiro. Atualmente trabalha com a influência do espectro de luz visível no sistema sensorial de H. reidi.",
    photo: "/Screenshot_20221214_095424_Photos - José Araújo Souto Neto.jpg",
  },
  {
    name: "Julia Maria Maccari",
    photo: "/F80B8BE3-C68C-4888-B39A-D622A6CE6DDA - Julia Maccari.jpeg",
    institution: "Universidade da Região de Joinville",
    email: "maccarijulia@gmail.com",
    lattes: "http://lattes.cnpq.br/4167336258099698",
    research: "Densidade populacional de H. reidi em duas áreas no Canal do Linguado, caracterização das áreas de ocorrência e utilização de substrato para ancoragem da espécie.",
  },
  {
    name: "Lilia Pereira de Souza Santos",
    photo: "/SORRINDO - Lélia Pereira de Souza Santos.png",
    institution: "Universidade Federal do Rio de Janeiro",
    email: "liliapssantos@gmail.com",
    lattes: "http://lattes.cnpq.br/1479073413187258",
    research: "Pesquisadora na área de cavalos-marinhos.",
  },
  {
    name: "Johnatas Adelir-Alves",
    institution: "Instituto COMAR",
    email: "johnatas_alves@yahoo.com",
    lattes: "http://lattes.cnpq.br/6542231625183233",
    research: "Monitoramento na região da Babitonga, Santa Catarina.",
    photo: "/image - Johnatas Alves.jpg",
  },
  {
    name: "Mario Davi Dias Carneiro",
    institution: "Aquário Marinho do Rio",
    email: "marioiddc@gmail.com",
    lattes: "http://lattes.cnpq.br/7839384987675110",
    research: "Compreender os efeitos do pH ácido avaliando o efeito da acidificação em salinidade marinha e estuarina nos sistemas de criação ex-situ e para a aquicultura. Usa ferramentas bioquímicas e fisiológicas, além de experiências com nutrição e isótopos estáveis.",
    photo: "/IMG_20190526_215521 - Mário Davi Dias Carneiro_edited.jpg",
  },
  {
    name: "Maik dos Santos Cividanes da Hora",
    institution: "Hippocampus - Aquicultura, Pesquisa e Conservação Marinha Ltda",
    email: "maik_oceano@yahoo.com.br",
    lattes: "http://lattes.cnpq.br/6623286708157315",
    research: "Desenvolvimento de tecnologia para produção de cavalos-marinhos em cativeiro.",
    photo: "/DSCN2718 - Maik da Hora.JPG",
  },
  {
    name: "Mônica Yumi Tsuzuki",
    institution: "Universidade Federal de Santa Catarina",
    email: "monica.tsuzuki@ufsc.br",
    lattes: "http://lattes.cnpq.br/8686019355597417",
    research: "Professora titular do Departamento de Aquicultura, UFSC. Coordena projetos de pesquisa e extensão no desenvolvimento de tecnologia para a produção de peixes ornamentais marinhos com ênfase nos nativos e ameaçados. Linhas de pesquisa: reprodução, produção de alimento vivo, primeira alimentação de larvas de Hippocampus reidi.",
    photo: "/IMG_1742 - MYT UFSC.jpg",
  },
  {
    name: "Natalie Villar Freret Meurer",
    institution: "Projeto Cavalos-Marinhos/RJ e Universidade Santa Úrsula",
    email: "nataliefreret@cavalosmarinhosrj.com",
    lattes: "http://lattes.cnpq.br/7107327491707135",
    photo: "/natalie.jfif.jpg",
    research: "Coordena o Projeto Cavalos-Marinhos/RJ que desenvolve pesquisa e educação ambiental para conservação. Monitoramento em todo estado do RJ, estudos comportamentais (comunicação, personalidade), etnoecológicos e educacionais. Atua com educação ambiental e articulação interinstitucional para construção de políticas públicas.",
  },
  {
    name: "Nayara Yoshimini de Oliveira",
    photo: "/WhatsApp Image 2022-12-12 at 5.35.05 PM - Nayara Yoshimini.jpeg",
    institution: "Universidade Federal de Santa Catarina",
    email: "nayarayoshimini@gmail.com",
    lattes: "http://lattes.cnpq.br/1381334310147452",
    research: "Trabalha com comportamento dos cavalos-marinhos em sistemas de cultivo na Aquicultura, incluindo comportamento social e fidelidade dos casais.",
  },
  {
    name: "Pedro Pinheiro",
    institution: "Universidade da Região de Joinville",
    email: "pinheiro.pc@terra.com.br",
    lattes: "http://lattes.cnpq.br/5925770020667792",
    research: "Alimentação e dinâmica populacional.",
  },
  {
    name: "Tatiane Fernandez do Carmo",
    institution: "Projeto Cavalos-Marinhos/RJ e Universidade do Estado do Rio de Janeiro",
    email: "tatianefernandez@cavalosmarinhosrj.com",
    lattes: "http://lattes.cnpq.br/7107327491707135",
    research: "Trabalha com a estrutura populacional dos cavalos-marinhos em diversas áreas do estado do Rio de Janeiro, buscando entender as diferentes populações, seu uso de habitats, de ecossistemas e sua dinâmica populacional.",
    photo: "/tatiana.png",
  },
  {
    name: "Tacyana Pereira Ribeiro de Oliveira",
    photo: "/tacyana_sps.jpg",
    institution: "Universidade Estadual da Paraíba",
    email: "tproliveira@yahoo.com.br",
    lattes: "http://lattes.cnpq.br/1852062944465422",
    research: "Zoóloga, coordena o Laboratório de Peixes e Conservação Marinha (LAPEC) na UEPB. Desenvolve pesquisas e ações aplicadas à conservação de cavalos-marinhos e seus habitats: estudos ecológicos no nordeste brasileiro, comportamento e bioacústica, usos, comércio, conhecimento tradicional e etnozoologia. Ponto focal da América do Sul e da espécie Hippocampus reidi no IUCN SSC Seahorse, Pipefish and Seadragon Specialist Group (SPS SG).",
  },
];

export default function RpbcmPage() {
  return (
    <SubpageLayout
      heroTitle="RPBCM"
      heroLead="Rede de Pesquisa Brasileira de Cavalos-Marinhos"
      heroImage="/equipe.jpg"
      depth="deep"
    >
      <div className="page-featured">
        <div className="page-featured-inner">
          <div className="page-featured-img page-animate" style={{ background: "var(--off-white)", borderRadius: "var(--radius-lg)", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 200, fontSize: "4rem" }}>
            🔬
          </div>
          <div className="page-featured-text page-animate">
            <h2>Pesquisadores <em>unidos</em> pela conservação</h2>
            <p>
              Essa rede tem como objetivo aproximar os pesquisadores que atuam na área, compartilhando
              estudos científicos, fazendo parcerias para desenvolvimento de pesquisas, discutindo
              estratégias prioritárias para conservação dos cavalos-marinhos.
            </p>
          </div>
        </div>
      </div>

      <section className="page-section wide">
        <h2 className="story-phrase page-animate">Áreas de <em>atuação</em></h2>
        <div className="info-cards" style={{ marginTop: 40 }}>
          <div className="info-card page-animate">
            <h3>Regiões brasileiras estudadas</h3>
            <p>Pesquisadores de norte a sul do Brasil contribuem para o conhecimento sobre cavalos-marinhos em seus ecossistemas regionais.</p>
          </div>
          <div className="info-card page-animate">
            <h3>Estudos em unidades de conservação</h3>
            <p>Diversas pesquisas são conduzidas dentro de áreas protegidas, gerando dados para subsidiar a gestão ambiental.</p>
          </div>
          <div className="info-card page-animate">
            <h3>Ecossistemas brasileiros estudados</h3>
            <p>Costões rochosos, estuários, manguezais, recifes de coral e lagoas costeiras são os principais ambientes pesquisados.</p>
          </div>
          <div className="info-card page-animate">
            <h3>Linhas de pesquisa</h3>
            <p>Monitoramento, genética, comportamento, biofluorescência, aquicultura, nutrição, ecologia microbiana, etnobiologia, educação ambiental e políticas públicas.</p>
          </div>
        </div>
      </section>

      <section className="page-section wide">
        <div className="page-animate">
          <h2 style={{
            fontFamily: "var(--font)", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
            fontWeight: 700, textAlign: "center", marginBottom: 32
          }}>Pesquisadores da Rede</h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 20,
        }}>
          {pesquisadores.map((p) => (
            <div key={p.name} className="info-card page-animate" style={{ padding: "24px", display: "flex", gap: 16, alignItems: "flex-start" }}>
              {p.photo ? (
                <div style={{ width: 64, height: 64, minWidth: 64, borderRadius: "50%", overflow: "hidden", border: "2px solid var(--gray-light)" }}>
                  <Image src={p.photo} alt={p.name} width={64} height={64} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </div>
              ) : (
                <div style={{ width: 64, height: 64, minWidth: 64, borderRadius: "50%", background: "var(--off-white)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", color: "var(--teal)", fontWeight: 700 }}>
                  {p.name.charAt(0)}
                </div>
              )}
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1rem", marginBottom: 4 }}>{p.name}</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--teal)", fontWeight: 600, marginBottom: 8 }}>
                  {p.institution}
                </p>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "var(--body-text)", marginBottom: 12 }}>
                  {p.research}
                </p>
                <div style={{ fontSize: "0.8rem", display: "flex", flexDirection: "column", gap: 4 }}>
                  <a href={`mailto:${p.email}`} style={{ color: "var(--teal)" }}>{p.email}</a>
                  <a href={p.lattes} target="_blank" rel="noopener noreferrer" style={{ color: "var(--teal)" }}>
                    Currículo Lattes →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SubpageLayout>
  );
}
