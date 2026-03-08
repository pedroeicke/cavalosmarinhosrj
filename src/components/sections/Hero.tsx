import Image from "next/image";

export default function Hero() {
  return (
    <section className="section hero-section" id="hero">
      <div className="hero-video-bg">
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/videohero.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-badge" data-animate="fade-up">
          <Image src="/Logo Horizontal PCM.png" alt="PCM" width={120} height={26} style={{ height: 20, width: "auto", opacity: 0.9 }} />
        </div>

        <h1 className="hero-title" data-animate="fade-up" data-delay="0.1">
          Projeto<br />
          <span className="hero-title-large">Cavalos-Marinhos</span><br />
          <span className="hero-title-accent">Rio de Janeiro</span>
        </h1>

        <p className="hero-subtitle" data-animate="fade-up" data-delay="0.25">
          Pesquisa, conservação e educação ambiental para proteger os cavalos-marinhos do litoral fluminense.
        </p>

        <p className="hero-sub2" data-animate="fade-up" data-delay="0.35">
          Atuamos desde 2002 com monitoramento, genética, comunicação visual e ações junto a comunidades costeiras.
        </p>

        <a href="#about" className="btn-dive" data-animate="fade-up" data-delay="0.5">
          <span>Mergulhar</span>
          <svg className="arrow-down" viewBox="0 0 24 24" width="20" height="20">
            <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </a>
      </div>

      <div className="hero-scroll-indicator">
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
