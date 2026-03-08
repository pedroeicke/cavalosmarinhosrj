"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="os-footer">
      {/* ── Main footer content ── */}
      <div className="os-footer__main">
        <div className="os-footer__main-inner">
          {/* Left: text + social */}
          <div className="os-footer__left">
            <p className="os-footer__big-text">
              Projeto Cavalos-Marinhos é construído por uma equipe interdisciplinar
              na interseção entre ciência, educação e conservação marinha.
            </p>
            <div className="os-footer__socials">
              <a href="https://www.instagram.com/projetocavalosmarinhos/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.facebook.com/ProjetoCavalosMarinhos" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.youtube.com/@projetocavalosmarinhos" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Center: links */}
          <div className="os-footer__links-grid">
            <div className="os-footer__link-col">
              <Link href="/principios">Princípios</Link>
              <Link href="/historia">História</Link>
              <Link href="/equipe">Equipe</Link>
              <Link href="/producao-cientifica">Publicações</Link>
              <Link href="/rpbcm">RPBCM</Link>
            </div>
            <div className="os-footer__link-col">
              <Link href="/monitoramento">Monitoramento <span className="os-footer__ext">↗</span></Link>
              <Link href="/educacao">Educação <span className="os-footer__ext">↗</span></Link>
              <Link href="/contato">Fale conosco <span className="os-footer__ext">↗</span></Link>
              <Link href="/cavalos-marinhos">Cavalos-Marinhos</Link>
              <Link href="/especies-invasoras">Espécies Invasoras</Link>
            </div>
          </div>

          {/* Right: CTAs */}
          <div className="os-footer__ctas">
            <Link href="/doacao" className="os-footer__donate">
              <span className="os-footer__donate-icon">🤍</span>
              Apoie o Projeto
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </Link>
            <Link href="/contato" className="os-footer__contact-btn">
              Fale conosco
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Gradient divider ── */}
      <div className="os-footer__divider" />

      {/* ── WHITE: Apoio ── */}
      <div className="os-footer__row os-footer__row--white">
        <div className="os-footer__row-inner">
          <span className="os-footer__row-label">Apoio</span>
          <div className="os-footer__row-logos">
            <Image src="/Sem Título-5.png" alt="Universidade Santa Úrsula" width={160} height={50} style={{ height: 44, width: "auto" }} />
            <Image src="/isbio.jpg" alt="ISBio" width={100} height={40} style={{ height: 40, width: "auto" }} />
            <Image src="/DIVE.png" alt="Dive Point" width={120} height={50} style={{ height: 40, width: "auto" }} />
            <Image src="/aquario.png" alt="Aquário" width={100} height={50} style={{ height: 38, width: "auto" }} />
            <Image src="/Iate.png" alt="Iate Clube do Rio de Janeiro" width={160} height={50} style={{ height: 38, width: "auto" }} />
            <Image src="/Sec Rio.png" alt="Rio Meio Ambiente" width={80} height={40} style={{ height: 36, width: "auto" }} />
            <Image src="/saopedrodaaldeia.png" alt="São Pedro da Aldeia" width={120} height={40} style={{ height: 36, width: "auto" }} />
            <Image src="/Sec Araruama.png" alt="Prefeitura Araruama" width={120} height={40} style={{ height: 36, width: "auto" }} />
            <Image src="/Sec Arraial.png" alt="Arraial do Cabo" width={100} height={40} style={{ height: 36, width: "auto" }} />
          </div>
        </div>
      </div>

      {/* ── WHITE: Parceria ── */}
      <div className="os-footer__row os-footer__row--white os-footer__row--border">
        <div className="os-footer__row-inner">
          <span className="os-footer__row-label">Parceria</span>
          <div className="os-footer__row-logos">
            <Image src="/Principal_h_cor_RGB.png" alt="Petrobras" width={200} height={60} style={{ height: 48, width: "auto" }} />
          </div>
        </div>
      </div>

      {/* ── Bottom copyright ── */}
      <div className="os-footer__bottom">
        <p>&copy; {new Date().getFullYear()} Projeto Cavalos-Marinhos/RJ &bull; Universidade Santa Úrsula &bull; ISBio</p>
      </div>
    </footer>
  );
}
