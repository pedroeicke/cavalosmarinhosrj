"use client";

import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact" style={{ minHeight: "auto" }}>
      <div className="reef-bg">
        <div className="reef-element r1" />
        <div className="reef-element r2" />
        <div className="reef-element r3" />
        <div className="reef-element r4" />
        <div className="reef-element r5" />
      </div>

      <div className="section-inner contact-inner">
        <p className="section-label" data-animate="fade-up">Participe</p>
        <h2 className="contact-headline" data-animate="fade-up" data-delay="0.1">
          Junte-se a nós na preservação<br />dos cavalos-marinhos
        </h2>
        <p className="contact-subtext" data-animate="fade-up" data-delay="0.2">
          Pela conservação dos cavalos-marinhos
        </p>

        <div className="contact-grid" data-animate="fade-up" data-delay="0.35">
          <div className="contact-card">
            <h3>Fale Conosco</h3>
            <p>Entre em contato com a nossa equipe. Saiba tudo que acontece por aqui.</p>
            <a href="/contato" className="btn-contact">Enviar mensagem</a>
          </div>
          <div className="contact-card card-donate">
            <h3>Apoie o Projeto</h3>
            <p>Sua doação ajuda na construção de conhecimentos e na conservação dos cavalos-marinhos.</p>
            <a href="#" className="btn-donate">DOAR</a>
          </div>
          <div className="contact-card">
            <h3>Newsletter</h3>
            <p>Receba novidades sobre nossas pesquisas e ações.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Seu e-mail" aria-label="Endereço de e-mail" required />
              <button type="submit" className="btn-newsletter">OK</button>
            </form>
          </div>
        </div>

        <div className="social-links" data-animate="fade-up" data-delay="0.5">
          <a href="https://www.instagram.com/projetocavalosmarinhos/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://www.facebook.com/ProjetoCavalosMarinhos" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="https://www.youtube.com/@projetocavalosmarinhos" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.6C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        <div className="denunciation" data-animate="fade-up" data-delay="0.65">
          <p><strong>Presenciou crime ambiental envolvendo cavalos-marinhos?</strong></p>
          <p className="denu-contact">
            <strong>Linha Verde IBAMA:</strong> 0800 61 8080<br />
            <strong>E-mail:</strong> linhaverde.sede@ibama.gov.br
          </p>
          <Link href="/contato" className="btn-report">Saiba como denunciar</Link>
        </div>
      </div>

      <footer className="main-footer">
        <div className="footer-inner">
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <Image src="/Logo Horizontal PCM.png" alt="Projeto Cavalos-Marinhos RJ" width={200} height={42} style={{ height: "auto", opacity: 0.6, margin: "0 auto" }} />
          </div>

          <div className="footer-links">
            <div>
              <Link href="/">Home</Link>
              <Link href="/cavalos-marinhos">Cavalos-Marinhos</Link>
              <Link href="/rpbcm">RPBCM</Link>
              <Link href="/contato">Contato</Link>
            </div>
            <div>
              <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.2)", display: "block", marginBottom: 6, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>Sobre</span>
              <Link href="/principios">Princípios</Link>
              <Link href="/historia">História</Link>
              <Link href="/equipe">Equipe</Link>
              <Link href="/producao-cientifica">Publicações</Link>
            </div>
            <div>
              <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.2)", display: "block", marginBottom: 6, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>Projetos</span>
              <Link href="/monitoramento">Monitoramento</Link>
              <Link href="/comunicacao">Comunicação</Link>
              <Link href="/selecao-sexual">Seleção Sexual</Link>
              <Link href="/especies-invasoras">Espécies Invasoras</Link>
              <Link href="/genetica">Genética</Link>
              <Link href="/etnobiologia">Etnobiologia</Link>
              <Link href="/educacao">Educação Ambiental</Link>
            </div>
          </div>

          {/* Sponsors */}
          <div style={{ textAlign: "center", marginTop: 28, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.04)" }}>
            <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.2)", marginBottom: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>Apoio e Parceria</p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20, flexWrap: "wrap", opacity: 0.4 }}>
              <Image src="/Principal_h_cor_RGB.png" alt="Universidade Santa Úrsula" width={100} height={30} style={{ height: 24, width: "auto" }} />
              <Image src="/isbio.jpg" alt="ISBio" width={70} height={35} style={{ height: 28, width: "auto" }} />
              <Image src="/Iate.png" alt="Iate Clube" width={70} height={35} style={{ height: 28, width: "auto" }} />
              <Image src="/Sec Rio.png" alt="Secretaria do Rio" width={70} height={35} style={{ height: 24, width: "auto" }} />
              <Image src="/saopedrodaaldeia.png" alt="São Pedro da Aldeia" width={70} height={35} style={{ height: 28, width: "auto" }} />
              <Image src="/Sec Araruama.png" alt="Sec Araruama" width={70} height={35} style={{ height: 24, width: "auto" }} />
              <Image src="/Sec Arraial.png" alt="Sec Arraial" width={70} height={35} style={{ height: 24, width: "auto" }} />
            </div>
          </div>

          <p className="footer-copy" style={{ marginTop: 24 }}>&copy; {new Date().getFullYear()} Projeto Cavalos-Marinhos/RJ. Todos os direitos reservados.</p>
        </div>
      </footer>
    </section>
  );
}
