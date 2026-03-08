"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

interface CollectionItem {
  title: string;
  desc: string;
  href: string;
  img: string;
  tags: string[];
}

export default function SwiperCarousel({ collections }: { collections: CollectionItem[] }) {
  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView="auto"
        centeredSlides={false}
        navigation={{
          nextEl: ".os-carousel-next",
          prevEl: ".os-carousel-prev",
        }}
        autoplay={{ delay: 4500, disableOnInteraction: true }}
        breakpoints={{
          0: { slidesPerView: 1.15, spaceBetween: 16 },
          640: { slidesPerView: 2.2, spaceBetween: 20 },
          1024: { slidesPerView: 3.2, spaceBetween: 24 },
          1400: { slidesPerView: 4, spaceBetween: 24 },
        }}
        style={{ padding: "0 24px 40px" }}
      >
        {collections.map((c) => (
          <SwiperSlide key={c.title}>
            <Link href={c.href} className="os-card">
              <div className="os-card-img">
                <Image src={c.img} alt={c.title} width={400} height={220} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div className="os-card-badge">
                  {c.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
              <div className="os-card-body">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className="os-card-link">
                  Saiba mais
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="os-carousel-nav">
        <button className="os-carousel-prev" aria-label="Anterior">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
        </button>
        <button className="os-carousel-next" aria-label="Próximo">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </>
  );
}
