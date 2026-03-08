import SubpageLayout from "@/components/SubpageLayout";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Cavalos-Marinhos – Projeto Cavalos-Marinhos RJ",
  description: "Conheça a biologia, comportamento, espécies e ameaças aos cavalos-marinhos encontrados na costa do Rio de Janeiro.",
};

export default function CavalosMarinhosPage() {
  return (
    <SubpageLayout
      heroTitle="Conheça os Cavalos-Marinhos"
      heroLead="Peixes fascinantes que nadam na vertical e são mestres da camuflagem"
      heroImage="/Búzios (1).JPG"
      depth="shallow"
    >
      {/* Featured intro */}
      <div className="page-featured">
        <div className="page-featured-inner">
          <div className="page-featured-img page-animate">
            <Image src="/Búzios (1).JPG" alt="Cavalo-marinho na Armação de Búzios" width={600} height={400} style={{ width: "100%", height: "auto" }} />
          </div>
          <div className="page-featured-text page-animate">
            <h2>Peixes que nadam <em>em pé</em></h2>
            <p>
              Cavalos-marinhos são peixes ósseos, com brânquias, nadadeiras e bexiga natatória. Mas são
              peixes bem diferentes — nadam na vertical, usando a nadadeira dorsal como principal
              propulsão e as nadadeiras peitorais para estabilizar e direcionar seu caminho.
            </p>
            <p>
              Sua cauda é preênsil — no lugar de uma nadadeira caudal, eles se prendem ao substrato
              enrolando-a em algas, corais, esponjas ou qualquer estrutura.
            </p>
          </div>
        </div>
      </div>

      {/* Classificação */}
      <section className="page-section">
        <div className="content-block page-animate">
          <h2>Família Syngnathidae</h2>
          <p>
            São peixes que pertencem à família Syngnathidae. A origem do nome vem do grego, em que
            &ldquo;syn&rdquo; quer dizer junto ou fusionado, e &ldquo;gnathus&rdquo;, quer dizer mandíbula ou
            boca. Esse termo se refere aos peixes que têm um focinho tubular com a boca na ponta dele,
            ou seja, os cavalos-marinhos e seus parentes, como os peixes-cachimbo e dragões-do-mar.
          </p>
        </div>
      </section>

      {/* Alimentação */}
      <section className="page-section">
        <h2 className="story-phrase page-animate">
          Eles comem através de <em>sucção</em> e não têm dentes!
        </h2>
        <div className="content-block page-animate">
          <h2>Alimentação</h2>
          <p>
            Esse focinho funciona como um canudo, por onde eles se alimentam sugando pequenos animais.
            Os cavalos-marinhos são predadores de emboscada, usufruindo de sua habilidade de camuflagem
            para deixar que suas presas cheguem bem perto de seu focinho. Sim, cavalos-marinhos são
            carnívoros! E esse é um papel importante no equilíbrio do ecossistema: eles contribuem para
            o controle das populações de pequenos crustáceos, peixes, vermes marinhos dentre outras
            espécies.
          </p>
          <p>
            E também não têm estômago! O alimento passa por seu trato digestório e o que não for
            absorvido é eliminado como fezes. Infelizmente, nem tudo consegue ser eliminado: estudos
            recentes mostraram que se um organismo ingerido estiver contaminado com microplástico, o
            cavalo-marinho não consegue digerir esse resíduo e pode ficar obstruído, levando-o à morte.
          </p>
        </div>
      </section>

      {/* Gênero Hippocampus */}
      <section className="page-section">
        <h2 className="story-phrase page-animate">
          São seres mitológicos, mas <em>reais</em>...
        </h2>
        <div className="content-block page-animate">
          <h2>Gênero Hippocampus</h2>
          <p>
            Todos os cavalos-marinhos pertencem ao gênero <em>Hippocampus</em>, nome que também vem do
            grego — &ldquo;hippos&rdquo;, cavalo e &ldquo;campus&rdquo;, monstro marinho. Esse nome tem relação
            com a mitologia grega, em que os cavalos-marinhos eram animais que puxavam a carruagem de
            Poseidon, o Deus dos Mares.
          </p>
          <p>
            Apesar de pequenas diferenças morfológicas entre as 46 espécies existentes, os cavalos-marinhos
            são facilmente distinguidos dos outros peixes, por possuírem um corpo verticalmente direcionado,
            formando um ângulo com a cabeça, um focinho tubular, uma longa cauda preênsil e um corpo como
            uma armadura, formada por seus anéis ósseos.
          </p>
        </div>
      </section>

      {/* Reprodução */}
      <section className="page-section">
        <h2 className="story-phrase page-animate">
          O <em>macho</em> é quem engravida!
        </h2>
        <div className="content-block page-animate">
          <h2>Reprodução</h2>
          <p>
            Algumas das características mais fascinantes dos cavalos-marinhos estão relacionadas à sua
            reprodução: os machos é que engravidam! Mas antes de acasalar, há um cortejo que pode
            demorar dias, em que eles mudam de cor um para o outro, sinalizando o interesse no namoro,
            entrelaçam suas caudas e nadam de maneira sincronizada, até que o macho começa a ter
            contrações, que vão fazendo com que a água do mar seja bombeada para dentro de sua bolsa
            incubadora.
          </p>
          <p>
            Essa bolsa fica na parte de baixo da barriga dele e é onde os filhotes se desenvolvem. E o
            que acontece enchendo a bolsa incubadora de água? Ela se dilata e fica pronta para receber
            os ovócitos da fêmea! Depois de dias de cortejo, a fêmea transfere seus ovócitos, grandes e
            ricos em nutrientes, para a bolsa incubadora do macho e lá dentro ocorre a fecundação pelos
            espermatozóides que ele produziu, bem menores e móveis.
          </p>
          <p>
            Ali dentro, os embriões crescem utilizando principalmente nutrientes fornecidos pela mãe,
            enquanto o pai fornece cálcio, oxigênio, controle de sais e o ambiente adequado ao
            desenvolvimento deles, que vai sendo alterado ao longo da gestação.
          </p>
          <p>
            Poucas semanas depois, os machos começam a ter contrações e nascem jovens cavalos-marinhos —
            podem ser mais de 1000 em uma só ninhada, dependendo da espécie! Com tamanho variável, da
            ordem de poucos milímetros, esses mini cavalos-marinhos são levados pelas correntes para
            longe dos pais, já sendo independentes para se alimentar e sobreviver.
          </p>
        </div>
      </section>

      {/* Distribuição */}
      <section className="page-section">
        <div className="content-block page-animate">
          <h2>Distribuição Geográfica</h2>
          <p>
            Cavalos-marinhos são encontrados ao redor do mundo, geralmente nas regiões tropicais e
            temperadas, em águas rasas e ambientes costeiros. Podem ser encontrados em recifes de coral
            e rochosos, bancos de grama marinha e manguezais.
          </p>
          <p>
            O maior número de espécies é encontrado do outro lado do mundo, na região do Indo-Pacífico,
            mas aqui no Brasil existem 3 espécies diferentes.
          </p>
        </div>
        <div className="img-block page-animate">
          <Image src="/Li et al. 2021.png" alt="Mapa da diversidade genética de cavalos-marinhos" width={800} height={500} style={{ width: "100%", height: "auto" }} />
        </div>
        <p className="img-caption">Mapa da diversidade genética de algumas espécies de cavalos-marinhos pelo mundo. Fonte: Li et al. (2021).</p>
      </section>

      {/* Espécies brasileiras */}
      <section className="page-section wide">
        <h2 className="story-phrase page-animate">As <em>três espécies</em> brasileiras</h2>

        <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", margin: "24px 0 32px" }}>
          <div className="page-animate" style={{ textAlign: "center", maxWidth: 220 }}>
            <div className="img-block">
              <Image src="/reidi.png" alt="Hippocampus reidi" width={220} height={280} style={{ width: "100%", height: "auto" }} />
            </div>
            <p className="img-caption">H. reidi. Imagem: Natalie Freret-Meurer</p>
          </div>
          <div className="page-animate" style={{ textAlign: "center", maxWidth: 220 }}>
            <div className="img-block">
              <Image src="/erectus.png" alt="Hippocampus erectus" width={220} height={280} style={{ width: "100%", height: "auto" }} />
            </div>
            <p className="img-caption">H. erectus. Imagem: Jesse Bissette</p>
          </div>
          <div className="page-animate" style={{ textAlign: "center", maxWidth: 220 }}>
            <div className="img-block">
              <Image src="/patagonicus.jfif.jpg" alt="Hippocampus patagonicus" width={220} height={280} style={{ width: "100%", height: "auto" }} />
            </div>
            <p className="img-caption">H. patagonicus. Imagem: Natalie Freret-Meurer</p>
          </div>
        </div>

        <div className="species-grid">
          <div className="species-card page-animate">
            <div className="species-card-inner">
              <div className="species-front">
                <h3>Focinho-longo</h3>
                <p className="sci-name">Hippocampus reidi</p>
                <p style={{ fontSize: "0.85rem", color: "var(--gray)" }}>Passe o mouse para saber mais</p>
              </div>
              <div className="species-back">
                <p>
                  Espécie mais comum, registrada em todo o litoral brasileiro, incluindo a costa do
                  Estado do Rio de Janeiro. Caracteriza-se pelo focinho mais comprido e pela ocorrência
                  frequente em áreas bastante rasas (15 cm). O maior exemplar encontrado no Estado do
                  Rio de Janeiro mediu 22 cm, contudo a média dos adultos fica em torno de 14 cm.
                </p>
              </div>
            </div>
          </div>
          <div className="species-card page-animate">
            <div className="species-card-inner">
              <div className="species-front">
                <h3>Focinho-curto</h3>
                <p className="sci-name">Hippocampus erectus</p>
                <p style={{ fontSize: "0.85rem", color: "var(--gray)" }}>Passe o mouse para saber mais</p>
              </div>
              <div className="species-back">
                <p>
                  Existem registros no litoral fluminense, contudo é uma espécie menos comum e que
                  ocorre em locais de profundidade maior que 15 metros.
                </p>
              </div>
            </div>
          </div>
          <div className="species-card page-animate">
            <div className="species-card-inner">
              <div className="species-front">
                <h3>Patagônico</h3>
                <p className="sci-name">Hippocampus patagonicus</p>
                <p style={{ fontSize: "0.85rem", color: "var(--gray)" }}>Passe o mouse para saber mais</p>
              </div>
              <div className="species-back">
                <p>
                  Espécie muito rara, são animais comuns na Argentina que fazem migração para o norte
                  durante períodos de inverno. Vivem em maiores profundidades, chegando a até 40 metros.
                  Registro feito pela equipe na Baía de Sepetiba.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Camuflagem */}
      <section className="page-section">
        <h2 className="story-phrase page-animate">Mestres da <em>camuflagem</em>.</h2>
        <div className="content-block page-animate">
          <h2>Camuflagem e Defesas</h2>
          <p>
            Mesmo sabendo onde vivem, é um desafio observar cavalos-marinhos em seu ambiente natural,
            pois esses animais são mestres da camuflagem! Ao longo da evolução, muitas espécies
            desenvolveram padrões de coloração e manchas que dificultam sua localização no ambiente, e
            sua superfície pode ser colonizada por pequenos organismos como algas e briozoários,
            tornando-os mais parecidos com seu meio.
          </p>
          <p>
            Além disso, conseguem desenvolver prolongamentos na pele, imitando filamentos de algas e
            outros organismos em que se prendem. E são ainda capazes de mudar de cor em segundos!
          </p>
          <p>
            Devido a essa habilidade de camuflagem, somada a um corpo que é praticamente uma armadura,
            formada por seus anéis ósseos e espinhos e que tornam esses animais bem difíceis de digerir,
            poucos animais são predadores naturais dos cavalos-marinhos. Mas, eventualmente, são
            ingeridos por caranguejos, polvos e até aves marinhas. Sua principal ameaça, no entanto,
            é a espécie humana.
          </p>
        </div>
        <div className="img-block page-animate">
          <Image src="/cavmar fernandes.JPG" alt="Cavalo-marinho camuflado na Baía de Guanabara" width={800} height={500} style={{ width: "100%", height: "auto" }} />
        </div>
        <p className="img-caption">Cavalo-marinho camuflado na Baía de Guanabara, RJ. Imagem: Tatiane Fernández.</p>
      </section>

      {/* Ameaças */}
      <div className="page-block page-block--light">
        <div className="container">
          <h2 className="story-phrase page-animate">Precisamos agir <em>agora</em>.</h2>
          <div className="content-block page-animate">
            <h2>Ameaças</h2>
            <p>
              A maioria das espécies de cavalos-marinhos está listada como Vulnerável na Lista Vermelha
              de Espécies Ameaçadas da União Internacional para Conservação da Natureza (IUCN&apos;s Red List
              of Threatened Species). Além da supressão de habitat, a pesca predatória com rede-de-arrasto 
              é uma das principais ameaças.
            </p>
            <p>
              Os cavalos-marinhos são capturados como fauna acompanhante e
              vendidos secos para uso na medicina tradicional, principalmente na Ásia, ou para confecção
              de souvenirs e artesanatos. Eles também são capturados de forma intencional e vendidos vivos 
              para o comércio de aquariofilia.
            </p>
            <p>
              Outra prática bem comum no nordeste do Brasil é o turismo com foco no cavalo-marinho, em
              que os animais são retirados do ambiente, inseridos em potes para que os turistas possam
              contemplá-los.
              <strong> Esses animais não respiram fora da água, lugar de peixe é dentro d&apos;água!</strong>
            </p>
          </div>
        </div>
      </div>

      <section className="page-section">
        <div className="img-block page-animate">
          <Image src="/cavmar seco.JPG" alt="Cavalo-marinho seco vendido como souvenir" width={800} height={500} style={{ width: "100%", height: "auto" }} />
        </div>
        <p className="img-caption">Cavalo-marinho seco registrado como souvenir. Imagem: Natalie Freret-Meurer.</p>
      </section>

      {/* Legislação */}
      <section className="page-section">
        <div className="content-block page-animate">
          <h2>Proteção Legal</h2>
          <p>
            Frente a essas ameaças, todas as espécies de cavalos-marinhos foram incluídas no apêndice II
            da CITES em 2002 e implementada em 2004. O Brasil é signatário da CITES e, atualmente, as 
            <strong> Portarias 445/2014 e 148/2022</strong> do Ministério do Meio Ambiente protegem as 
            populações selvagens de cavalos-marinhos.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section">
        <div className="content-block page-animate" style={{ textAlign: "center" }}>
          <p style={{
            fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
            fontWeight: 300, lineHeight: 1.7, marginBottom: 24
          }}>
            Cavalos-marinhos são animais com características únicas, mas por serem tão extraordinários
            estão ameaçados! <strong>Juntos, podemos reverter essa situação!</strong>
          </p>
        </div>
        <div className="cta-block page-animate">
          <h3>Visite nosso laboratório</h3>
          <p>
            Agende uma visita e conheça mais sobre os cavalos-marinhos e nossos esforços de conservação!
          </p>
          <a href="mailto:projetocavalosmarinhos@gmail.com" className="btn btn-gradient" style={{ border: "none" }}>Entre em contato</a>
        </div>
      </section>
    </SubpageLayout>
  );
}
