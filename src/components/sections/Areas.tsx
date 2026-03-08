import Link from "next/link";

export default function Areas() {
  return (
    <section className="section areas-section" id="areas">
      <div className="section-inner areas-inner">
        <h2 className="section-label" data-animate="fade-up">Áreas de Atuação</h2>

        <div className="areas-layout">
          {/* Left card */}
          <div className="area-card area-left" data-animate="slide-left">
            <div className="area-icon">
              <svg viewBox="0 0 64 64" width="48" height="48">
                <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M20,40 Q32,15 44,40" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="32" cy="28" r="4" fill="currentColor" opacity="0.5" />
              </svg>
            </div>
            <h3>Pesquisa &amp; Monitoramento</h3>
            <p>Realizamos monitoramento de populações em seis regiões do Rio de Janeiro, com análises genéticas, estudos comportamentais e acompanhamento de tendências populacionais desde 2002.</p>
            <div className="area-links">
              <Link href="/monitoramento" className="area-link">Monitoramento</Link>
              <Link href="/genetica" className="area-link">Genética</Link>
              <Link href="/comunicacao" className="area-link">Comunicação</Link>
              <Link href="/selecao-sexual" className="area-link">Seleção Sexual</Link>
            </div>
            <Link href="/monitoramento" className="btn-more">Saiba mais →</Link>
          </div>

          {/* Central seahorse */}
          <div className="seahorse-central" data-animate="fade-up" data-delay="0.3">
            <svg className="seahorse-svg" viewBox="0 0 200 500" xmlns="http://www.w3.org/2000/svg">
              <path d="M100,20 C85,20 75,30 70,45 C65,60 68,75 75,85 C60,85 50,90 45,100 C40,110 42,125 50,135 C45,140 40,150 38,165 C36,180 40,195 50,205 C45,215 42,230 45,245 C48,260 55,270 65,275 C60,285 58,300 60,315 C62,330 68,340 78,345 C75,355 74,370 78,385 C82,400 90,410 100,415 C95,425 92,440 95,450 C98,460 105,465 110,460 C115,455 112,445 108,438 C118,430 125,420 125,405 C125,390 118,380 110,375 C120,365 125,350 123,335 C121,320 115,310 108,305 C118,295 122,280 120,265 C118,250 112,240 105,235 C115,225 120,210 118,195 C116,180 110,170 102,165 C112,155 118,140 115,125 C112,110 105,100 95,95 C108,88 115,75 112,60 C109,45 102,35 100,20Z"
                fill="rgba(164,218,242,0.08)" stroke="rgba(164,218,242,0.25)" strokeWidth="1.5" />
              <circle cx="82" cy="55" r="5" fill="rgba(164,218,242,0.3)" />
              <circle cx="83" cy="54" r="2" fill="rgba(242,106,106,0.5)" />
              <path d="M70,65 C55,62 42,68 35,75" fill="none" stroke="rgba(164,218,242,0.2)" strokeWidth="1.5" />
              <path d="M115,130 C135,120 140,140 130,155 C125,145 118,138 115,130Z" fill="rgba(164,218,242,0.06)" stroke="rgba(164,218,242,0.15)" strokeWidth="1" />
              <path d="M108,438 C120,450 115,470 100,475 C85,480 78,468 85,458" fill="none" stroke="rgba(164,218,242,0.2)" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Right card */}
          <div className="area-card area-right" data-animate="slide-right">
            <div className="area-icon">
              <svg viewBox="0 0 64 64" width="48" height="48">
                <rect x="12" y="20" width="40" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M12,24 L32,38 L52,24" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3>Educação &amp; Engajamento</h3>
            <p>Desenvolvemos ações de educação ambiental, ciência cidadã e etnobiologia, envolvendo comunidades tradicionais, escolas e cidadãos na conservação dos cavalos-marinhos.</p>
            <div className="area-links">
              <Link href="/etnobiologia" className="area-link">Etnobiologia</Link>
              <Link href="/educacao" className="area-link">Educação Ambiental</Link>
              <Link href="/ciencia-cidada" className="area-link">Ciência Cidadã</Link>
              <Link href="/especies-invasoras" className="area-link">Espécies Invasoras</Link>
            </div>
            <Link href="/etnobiologia" className="btn-more">Saiba mais →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
