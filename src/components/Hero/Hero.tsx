'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.card}>
        {/* Video background */}
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          poster="/BG.JPG"
        >
          <source src="/videoherocm.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div className={styles.overlay} />

        {/* Content */}
        <div className={`${styles.content} ${isVisible ? styles.contentIn : ''}`}>
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeTag}>+22</span>
            <span className={styles.badgeText}>Anos de pesquisa e conservação marinha</span>
          </div>

          {/* Title */}
          <h1 className={styles.title}>
            Mergulhe na Ciência<br />
            <span style={{ whiteSpace: "nowrap" }}>dos Cavalos-Marinhos</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            Pesquisa, conservação e educação ambiental para proteger os cavalos-marinhos
            do Rio de Janeiro. Nosso trabalho conecta ciência e comunidade pela vida marinha.
          </p>

          {/* CTA Buttons */}
          <div className={styles.ctas}>
            <Link href="#about" className={styles.ctaPrimary}>
              Explorar Projetos
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </Link>
            <Link href="/cavalos-marinhos" className={styles.ctaSecondary}>
              Conheça os Cavalos-Marinhos
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </Link>
          </div>
        </div>

        {/* Bottom partner bar */}
        <div className={`${styles.partnerBar} ${isVisible ? styles.partnerBarIn : ''}`}>
          <span className={styles.partnerLabel}>Parceiro</span>
          <div className={styles.partnerLogos}>
            <Image src="/Principal_h_negativa.png" alt="Petrobras" width={160} height={48} style={{ height: 32, width: 'auto' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
