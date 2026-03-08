"use client";

import { useRef } from "react";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const IMAGES = [
  { src: "/DSCN6122.png" },
  { src: "/DSC09607.JPG" },
  { src: "/Búzios (2).JPG" },
  { src: "/Experimento Hreidi Tubastraea Ago 18 (8).JPG" },
  { src: "/Araruama.JPG" },
  { src: "/cavmar fernandes.JPG" },
  { src: "/DSCN2718 - Maik da Hora.JPG" },
];

/* position of each image in the grid (absolute, relative to center) */
const IMAGE_POSITIONS: React.CSSProperties[] = [
  { width: "25vw", height: "25vh" },
  { width: "35vw", height: "30vh", top: "-30vh", left: "5vw" },
  { width: "20vw", height: "55vh", top: "-15vh", left: "-25vw" },
  { width: "25vw", height: "25vh", left: "27.5vw" },
  { width: "20vw", height: "30vh", top: "30vh", left: "5vw" },
  { width: "30vw", height: "25vh", top: "27.5vh", left: "-22.5vw" },
  { width: "15vw", height: "15vh", top: "22.5vh", left: "25vw" },
];

const ImmersiveScrollGallery: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const opacityImage = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacityText = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const scaleText = useTransform(scrollYProgress, [0.6, 0.8], [0.8, 1]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div ref={container} style={{ position: "relative", height: "200vh" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          background: "#fff",
        }}
      >
        {/* Zooming images */}
        {IMAGES.map((img, i) => (
          <motion.div
            key={i}
            style={{
              scale: scales[i],
              opacity: opacityImage,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              top: 0,
            }}
          >
            <div style={{ position: "relative", ...IMAGE_POSITIONS[i] }}>
              <Image
                src={img.src}
                alt={`Cavalo-marinho ${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        ))}

        {/* Text that appears at the end of scroll */}
        <motion.div
          style={{
            opacity: opacityText,
            scale: scaleText,
            position: "absolute",
            inset: 0,
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div className="immersive-text">
            <span className="immersive-text__eyebrow">Você sabia?</span>
            <h2 className="immersive-text__title">
              Os cavalos-marinhos vivem ao longo do litoral do Estado do Rio de
              Janeiro
            </h2>
            <p className="immersive-text__sub">
              Mas poucas pessoas sabem disso. Te convidamos a conhecer um pouco
              mais sobre esses animais incríveis e como nosso projeto vem
              trabalhando para a conservação deles.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImmersiveScrollGallery;
