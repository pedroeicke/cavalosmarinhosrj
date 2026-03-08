"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

interface Member {
  name: string;
  role: string;
  bio: string;
  photo: string;
  email?: string;
  lattes?: string;
}

const members: Member[] = [
  {
    name: "Natalie Freret-Meurer",
    role: "Coordenadora Geral",
    bio: "Fundadora do projeto em 2002 na Ilha Grande, RJ. Professora da Universidade Santa Úrsula, lidera todas as pesquisas sobre cavalos-marinhos no Estado do Rio de Janeiro.",
    photo: "/natalie.jfif.jpg",
    email: "nataliefreret@yahoo.com.br",
    lattes: "http://lattes.cnpq.br/7107327491707135",
  },
  {
    name: "Amanda Vaccani",
    role: "Coordenadora de Pesquisa",
    bio: "Coordena as atividades de pesquisa em campo e laboratório. Realizou a primeira descoberta de biofluorescência em cavalos-marinhos (Vaccani et al. 2021).",
    photo: "/AMANDA.png",
    email: "amandavaccani@hotmail.com",
    lattes: "http://lattes.cnpq.br/4202399450460323",
  },
  {
    name: "Tatiane Fernández",
    role: "Coordenadora de Campo",
    bio: "Responsável pelas operações de campo e mergulho nas regiões de monitoramento do estado do Rio de Janeiro.",
    photo: "/DCFC3888-A988-4990-80AA-175350F8CB2B - Tatiane Fernández.jpeg",
    email: "taty045@hotmail.com",
    lattes: "http://lattes.cnpq.br/6406651216960675",
  },
  {
    name: "Anderson Vilasboa",
    role: "Pesquisador Colaborador",
    bio: "Pesquisador colaborador contribuindo com monitoramento e conservação dos cavalos-marinhos.",
    photo: "/6.png",
    email: "andersonvilasboa@gmail.com",
    lattes: "http://lattes.cnpq.br/2627503801412287",
  },
  {
    name: "Gabriela Cabiró",
    role: "Bióloga",
    bio: "Realizou experimentos de identificação de personalidade em cavalos-marinhos para o estudo de seleção sexual.",
    photo: "/IMG_7153.PNG.jpg",
    email: "gabrielacabiro@hotmail.com",
    lattes: "http://lattes.cnpq.br/5853281727677631",
  },
  {
    name: "Dedina Bernardelli",
    role: "Educadora Ambiental",
    bio: "Responsável pelas ações de educação ambiental junto a escolas e comunidades.",
    photo: "/Dedina.jpg",
    email: "dedinabernardelli@cavalosmarinhosrj.com",
    lattes: "http://lattes.cnpq.br/5343544620533557",
  },
  {
    name: "Maria Teresa Gouveia",
    role: "Mentora de Educação",
    bio: "Mentora de educação ambiental, contribuindo com experiência em formação e comunicação científica.",
    photo: "/teresa.jpg",
    email: "mtjgouveia@gmail.com",
    lattes: "http://lattes.cnpq.br/9184294521691487",
  },
  {
    name: "Jose Araújo Souto Neto",
    role: "Pesquisador",
    bio: "Pesquisador na área de genética e monitoramento populacional.",
    photo: "/Screenshot_20221214_095424_Photos - José Araújo Souto Neto.jpg",
    email: "soutoneto_16@hotmail.com",
    lattes: "http://lattes.cnpq.br/1901430132626736",
  },
];

export default function Team() {
  const [selected, setSelected] = useState<Member | null>(null);

  const openPanel = useCallback((m: Member) => {
    setSelected(m);
  }, []);

  const closePanel = useCallback(() => {
    setSelected(null);
  }, []);

  useBodyScrollLock(!!selected);

  return (
    <section className="section team-section" id="team" style={{ minHeight: "auto" }}>
      <div className="section-inner team-inner">
        <p className="section-label" data-animate="fade-up">Nossa Equipe</p>
        <h2 className="section-title" data-animate="fade-up" data-delay="0.1">
          Quem faz acontecer
        </h2>
        <p className="team-subtitle" data-animate="fade-up" data-delay="0.15">
          Estudantes, pesquisadores e colaboradores unidos pela conservação dos cavalos-marinhos.
        </p>

        <div className="team-grid" data-animate="fade-up" data-delay="0.25">
          {members.map((m) => (
            <div key={m.name} className="team-card" onClick={() => openPanel(m)}>
              <div className="team-card-photo">
                <Image src={m.photo} alt={m.name} width={72} height={72} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              </div>
              <p className="member-label">{m.name}</p>
              <p className="member-role">{m.role}</p>
            </div>
          ))}
        </div>

        <Link href="/equipe" className="btn-more team-more" data-animate="fade-up" data-delay="0.5">
          Conheça toda a equipe →
        </Link>
      </div>

      {/* Side panel */}
      {selected && (
        <div className="team-panel active" onClick={(e) => { if (e.target === e.currentTarget) closePanel(); }}>
          <button className="panel-close" onClick={closePanel} aria-label="Fechar painel">&times;</button>
          <div className="panel-content">
            <div style={{
              width: 100, height: 100, borderRadius: "50%", overflow: "hidden",
              margin: "0 auto 20px", border: "2px solid rgba(164,218,242,0.15)"
            }}>
              <Image src={selected.photo} alt={selected.name} width={100} height={100}
                style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </div>
            <h3 className="panel-name">{selected.name}</h3>
            <span className="panel-role">{selected.role}</span>
            <p className="panel-bio">{selected.bio}</p>
            {selected.email && (
              <p style={{ fontSize: "0.85rem", marginTop: 16 }}>
                <a href={`mailto:${selected.email}`} style={{ color: "var(--coral)" }}>{selected.email}</a>
              </p>
            )}
            {selected.lattes && (
              <p style={{ fontSize: "0.85rem", marginTop: 8 }}>
                <a href={selected.lattes} target="_blank" rel="noopener noreferrer" style={{ color: "var(--coral)" }}>
                  Currículo Lattes →
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
