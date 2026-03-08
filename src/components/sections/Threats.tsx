"use client";

import Link from "next/link";
import Image from "next/image";

const projects = [
  { title: "Monitoramento", desc: "Monitoramentos das populações naturais em diversas áreas do litoral do Estado do Rio de Janeiro.", href: "/monitoramento", icon: "📍" },
  { title: "Comunicação Visual", desc: "Mecanismos visuais utilizados pelo cavalo-marinho: mudanças de coloração, displays e biofluorescência.", href: "/comunicacao", icon: "🌈" },
  { title: "Seleção Sexual", desc: "Quais fatores são relevantes na escolha de um parceiro reprodutivo.", href: "/selecao-sexual", icon: "💕" },
  { title: "Espécies Invasoras", desc: "Efeitos diretos e indiretos de espécies invasoras sobre os cavalos-marinhos.", href: "/especies-invasoras", icon: "⚠️" },
  { title: "Análise Genética", desc: "Composições genéticas das populações e manutenção de banco genético vivo.", href: "/genetica", icon: "🧬" },
  { title: "Educação Ambiental", desc: "Sensibilização junto à sociedade e capacitações para desenvolvimento sustentável.", href: "/educacao", icon: "📚" },
];

const contributions = [
  "Siga nossas redes sociais e compartilhe informações com seus seguidores",
  "Seja um voluntário! Informamos em nossas redes sociais a abertura de novas vagas",
  "Denuncie crimes ambientais: Linha Verde do IBAMA 0800 61 8080",
  "Encontrou um cavalo-marinho machucado? Acione nosso canal de emergência",
  "Encontrou um vivo? Faça parte de nossa rede de ciência cidadã",
  "Apoie financeiramente — sua doação ajuda na conservação",
];

export default function Threats() {
  return (
    <section className="section threats-section" id="threats" style={{
      background: "linear-gradient(180deg, var(--deep) 0%, var(--abyss) 100%)",
      minHeight: "auto"
    }}>
      <div className="section-inner threats-inner">
        <p className="section-label" data-animate="fade-up">Os cavalos-marinhos precisam de você</p>

        <h2 className="section-title" data-animate="fade-up" data-delay="0.1">
          Ameaçados de extinção no<br />litoral brasileiro
        </h2>

        <p className="section-subtitle" data-animate="fade-up" data-delay="0.2">
          A coleta para aquariofilia, a venda desses animais secos e a destruição de seus habitats
          vêm levando esses lindos peixes ao desaparecimento.
        </p>

        {/* Projects grid */}
        <div className="project-grid" data-animate="fade-up" data-delay="0.3">
          {projects.map((item) => (
            <Link key={item.title} href={item.href} className="project-card">
              <div className="project-card-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <span className="project-card-link">Saiba mais →</span>
            </Link>
          ))}
        </div>

        {/* How to contribute */}
        <div style={{ marginTop: 80 }}>
          <p className="section-label" data-animate="fade-up">Como Contribuir</p>
          <h3 className="section-title" data-animate="fade-up" data-delay="0.1" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
            Pequenas ações fazem<br />grande diferença
          </h3>

          <div data-animate="fade-up" data-delay="0.2" style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 12, maxWidth: 900, margin: "32px auto 0"
          }}>
            {contributions.map((text, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: 12,
                padding: "16px 20px", background: "var(--glass-bg)",
                borderRadius: "var(--radius-sm)", border: "1px solid var(--glass-border)"
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: "50%", background: "var(--teal)",
                  flexShrink: 0, marginTop: 8
                }} />
                <span style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "var(--light-text)" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div data-animate="fade-up" data-delay="0.4" style={{
          margin: "60px auto 48px", maxWidth: 560, borderRadius: 20, overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.06)"
        }}>
          <Image src="/mapa.png" alt="Mapa de áreas de monitoramento no Rio de Janeiro" width={560} height={380} style={{ width: "100%", height: "auto" }} />
          <div style={{ padding: "12px 16px", background: "var(--glass-bg)" }}>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontStyle: "italic", textAlign: "center" }}>
              Áreas de monitoramento do Projeto Cavalos-Marinhos/RJ
            </p>
          </div>
        </div>

        {/* CTA */}
        <div data-animate="fade-up" data-delay="0.5" style={{ textAlign: "center" }}>
          <a href="#contact" className="btn-dive" style={{ fontSize: "0.9rem" }}>
            Apoie o Projeto
          </a>
        </div>
      </div>
    </section>
  );
}
