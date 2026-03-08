"use client";

import Image from "next/image";

const IMAGES = [
  "/DSCN6122.png",
  "/DSC09607.JPG",
  "/DSCN9364.JPG",
  "/DSCN8881.JPG",
  "/DSCN3640.JPG",
  "/DSC07166.png",
  "/DSCN7406.png",
  "/foto.jpg",
];

export default function ScrollGallery() {
  return (
    <section className="sg">
      <div className="sg-grid">
        {IMAGES.map((src, i) => (
          <div key={i} className={`sg-cell sg-cell--${i + 1}`}>
            <Image
              src={src}
              alt={`Cavalo-marinho ${i + 1}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 50vw, 40vw"
            />
          </div>
        ))}
        <div className="sg-center">
          <hgroup className="sg-center-text">
            <span className="sg-eyebrow">Você sabia?</span>
            <h2 className="sg-title">
              Os cavalos-marinhos vivem ao longo do litoral do Estado do Rio de
              Janeiro
            </h2>
            <p className="sg-sub">
              Mas poucas pessoas sabem disso. Te convidamos a conhecer um pouco
              mais sobre esses animais incríveis e como nosso projeto vem
              trabalhando para a conservação deles.
            </p>
          </hgroup>
          <svg
            className="sg-arrow"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
