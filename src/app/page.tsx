"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollAnimator from "@/components/ScrollAnimator";
import Hero from "@/components/Hero/Hero";
import Link from "next/link";
import Image from "next/image";
import ScrollGallery from "@/components/ScrollGallery";
import Footer from "@/components/Footer";

/* ─── Data ─── */
const cards = [
  {
    title: "Monitoramento",
    text: "São feitos monitoramentos das populações naturais de cavalos-marinhos em diversas áreas do litoral do Estado do Rio de Janeiro, como Baía da Ilha Grande, Baía de Sepetiba, Baía de Guanabara, Lagoa de Araruama, Arraial do Cabo e Búzios.",
    href: "/monitoramento",
    img: "/DSCN6122.png",
  },
  {
    title: "Comunicação Visual",
    text: "Essa pesquisa visa compreender os mecanismos visuais utilizados pelo cavalo-marinho para se comunicar com outros indivíduos da sua espécie, incluindo as mudanças de coloração, displays comportamentais e biofluorescência.",
    href: "/comunicacao",
    img: "/Fig 1 - Amanda Vaccani.png",
  },
  {
    title: "Seleção Sexual",
    text: "O estudo com seleção sexual busca compreender quais fatores são relevantes na escolha de um parceiro reprodutivo.",
    href: "/selecao-sexual",
    img: "/IMG-20220307-WA0005~2 - Gabriela Cabiró.jpg",
  },
  {
    title: "Influência de Espécies Invasoras sobre os Cavalos-Marinhos",
    text: "O objetivo deste projeto é identificar os efeitos diretos e indiretos de espécies invasoras sobre os cavalos-marinhos do Rio de Janeiro.",
    href: "/especies-invasoras",
    img: "/Experimento Hreidi Tubastraea Ago 18 (8).JPG",
  },
  {
    title: "Análise Genética dos Cavalos-Marinhos",
    text: "Identificar as diferentes composições genéticas das populações de cavalos-marinhos do Estado do Rio de Janeiro e manter um banco genético vivo desses animais para possível repovoamento em caso de desastre ambiental.",
    href: "/genetica",
    img: "/Gel_DNA_Hippocampus reidi - Denise Dias.jpeg",
  },
  {
    title: "Educação Ambiental",
    text: "Desenvolver ações de sensibilização junto à sociedade para despertar o encantamento pelos cavalos-marinhos e engajamento na proteção ambiental, assim como realizar capacitações, possibilitando o desenvolvimento econômico sustentável.",
    href: "/educacao",
    img: "/IMG_2949.JPG",
  },
];

const contribuir = [
  {
    title: "Siga nossas redes sociais",
    content: "Siga as nossas redes sociais e compartilhe as informações com seus seguidores.",
  },
  {
    title: "Seja um voluntário",
    content: "Informamos sempre em nossas redes sociais a abertura de novas vagas.",
  },
  {
    title: "Denuncie crimes ambientais",
    content: `Os cavalos-marinhos são protegidos pela portaria 148/2022, em que é proibida a captura, transporte, armazenamento, guarda, manejo, beneficiamento e comercialização dos cavalos-marinhos. Entre em contato com:\n\n• Linha Verde do Ibama através do telefone 0800 61 8080 (ligação gratuita para todo o Brasil) ou por e-mail: linhaverde.sede@ibama.gov.br\n\n• Secretaria do Meio Ambiente local onde ocorreu o crime pela ouvidoria ou pelo canal de denúncia, caso haja.`,
  },
  {
    title: "Encontrou um cavalo-marinho machucado?",
    content: "Se achar um cavalo-marinho machucado, com dificuldade de nadar ou morto, nos acione pelo canal de emergência.",
    link: { label: "Canal de Emergência", href: "/contato" },
  },
  {
    title: "Encontrou um cavalo-marinho vivo?",
    content: "Venha fazer parte de nossa rede de ciência cidadã e nos informe o dia e local onde encontrou.",
    link: { label: "Entre em Contato", href: "/contato" },
  },
  {
    title: "Apoie financeiramente nosso projeto",
    content: "Sua doação vai ajudar no desenvolvimento das ações, que priorizam a construção de conhecimentos novos e a conservação dos cavalos-marinhos.",
  },
];

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ChevronDown = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="accordion-chevron">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <ScrollAnimator />

      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <Hero />

      {/* ══════════════════════════════════════
          SECTION 1 — Immersive Scroll Gallery
          ══════════════════════════════════════ */}
      <ScrollGallery />

      {/* ══════════════════════════════════════
          SECTION 2 — Baía de Guanabara + Quote
          ══════════════════════════════════════ */}
      <section className="sec-baia">
        <div className="sec-baia__bg">
          <Image src="/FOTO_FUNDO.png" alt="Rio de Janeiro" fill style={{ objectFit: "cover" }} />
        </div>
        <div className="sec-baia__overlay" />
        <div className="sec-baia__content">
          <h2 data-animate="fade-up">Baía de Guanabara</h2>

          {/* Timeline — line through circles, data on the side */}
          <div className="sec-baia__timeline" data-animate="fade-up" data-delay="0.2">
            <div className="sec-baia__line" />

            <div className="sec-baia__points">
              <div className="sec-baia__point">
                <div className="sec-baia__circle">
                  <Image src="/DSC09607.JPG" alt="Cavalo-marinho 2011" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="sec-baia__data">
                  <span className="sec-baia__year">2011</span>
                  <span className="sec-baia__count">06</span>
                  <span className="sec-baia__unit">indivíduos/km²</span>
                </div>
              </div>

              <div className="sec-baia__point">
                <div className="sec-baia__circle">
                  <Image src="/foto.jpg" alt="Cavalo-marinho 2014" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="sec-baia__data">
                  <span className="sec-baia__year">2014</span>
                  <span className="sec-baia__count">03</span>
                  <span className="sec-baia__unit">indivíduos/km²</span>
                </div>
              </div>

              <div className="sec-baia__point">
                <div className="sec-baia__circle">
                  <Image src="/Búzios (2).JPG" alt="Cavalo-marinho 2018" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="sec-baia__data">
                  <span className="sec-baia__year">2018</span>
                  <span className="sec-baia__count">06</span>
                  <span className="sec-baia__unit">indivíduos/km²</span>
                </div>
              </div>
            </div>
          </div>

          <p className="sec-baia__statement" data-animate="fade-up" data-delay="0.5">
            Nossos estudos indicam crescimento de algumas populações de cavalos-marinhos,
            porém outras estão decrescendo.
          </p>

          <blockquote data-animate="fade-up" data-delay="0.6">
            &ldquo;Pense globalmente, aja localmente&rdquo;
            <cite>Patrick Geddes, 1915</cite>
          </blockquote>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — Como estamos ajudando + 6 cards
          ══════════════════════════════════════ */}
      <section className="sec-help" id="about">
        <div className="sec-help__header" data-animate="fade-up">
          <h2>Como estamos ajudando</h2>
          <p>
            Nossa equipe de biólogos desenvolve pesquisas de análise genética e comportamental,
            monitoramento populacional dos cavalos-marinhos em todo o Estado do Rio de Janeiro
            e projetos de educação ambiental junto às comunidades.
          </p>
        </div>
        <div className="sec-help__grid" data-animate="fade-up" data-delay="0.12">
          {cards.map((c) => (
            <Link href={c.href} key={c.title} className="sec-help__card">
              <div className="sec-help__card-img">
                <Image src={c.img} alt={c.title} fill style={{ objectFit: "cover" }} />
              </div>
              <div className="sec-help__card-body">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <span className="sec-help__card-link">Saiba mais <Arrow /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — Cavalos-marinhos desaparecendo
          ══════════════════════════════════════ */}
      <section className="sec-danger">
        <div className="sec-danger__header" data-animate="fade-up">
          <h2>Os cavalos-marinhos estão desaparecendo</h2>
          <p className="sec-danger__subtitle">
            Ameaçados de extinção, os cavalos-marinhos correm risco de desaparecer da costa brasileira.
          </p>
        </div>
        <div className="sec-danger__row" data-animate="fade-up">
          <div className="sec-danger__img">
            <Image src="/IMG_1245.png" alt="Cavalos-marinhos secos vendidos ilegalmente" fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="sec-danger__text">
            <h3>Por quê?</h3>
            <p>
              Os cavalos-marinhos estão ameaçados no Estado do Rio de Janeiro e em todo o Brasil.
              A coleta para aquariofilia, a venda desses animais secos e a destruição de seus habitats
              vêm levando esses lindos peixes ao desaparecimento!
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 5 — Como contribuir (accordion)
          ══════════════════════════════════════ */}
      <section className="sec-contribute">
        <div className="sec-contribute__inner" data-animate="fade-up">
          <h2>Como contribuir com nosso projeto</h2>

          <div className="sec-contribute__accordion">
            {contribuir.map((item, i) => (
              <div
                key={i}
                className={`accordion-item ${openAccordion === i ? "accordion-item--open" : ""}`}
              >
                <button
                  className="accordion-trigger"
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  aria-expanded={openAccordion === i}
                >
                  <span>{item.title}</span>
                  <ChevronDown />
                </button>
                <div className="accordion-panel">
                  <div className="accordion-panel__inner">
                    <p style={{ whiteSpace: "pre-line" }}>{item.content}</p>
                    {item.link && (
                      <Link href={item.link.href} className="accordion-link">
                        {item.link.label} <Arrow />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link href="/doacao" className="btn-donate">
            Doar <Arrow />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
          ══════════════════════════════════════ */}
      <Footer />
    </>
  );
}
