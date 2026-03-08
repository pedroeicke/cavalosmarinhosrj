'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './HeroBigTitle.module.css'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

interface BreadcrumbItem {
    label: string
    href?: string
}

interface HeroBigTitleProps {
    title: string
    subtitle?: string
    breadcrumbs?: BreadcrumbItem[]
    imageSrc: string
    imageAlt?: string
    cta?: {
        label: string
        href: string
    }
}

export default function HeroBigTitle({
    title,
    subtitle,
    breadcrumbs,
    imageSrc,
    imageAlt = '',
    cta,
}: HeroBigTitleProps) {
    const containerRef = useRef<HTMLElement>(null)
    const stickyRef = useRef<HTMLDivElement>(null)
    const zoomElRef = useRef<HTMLDivElement>(null)
    const heroContentRef = useRef<HTMLDivElement>(null)
    const firstRowRef = useRef<HTMLDivElement>(null)
    const lastRowRef = useRef<HTMLDivElement>(null)
    const transOverlayRef = useRef<HTMLDivElement>(null)

    // Initial Split/Fade Animations
    useEffect(() => {
        const el = heroContentRef.current
        if (!el) return

        const timer = setTimeout(() => {
            el.querySelectorAll<HTMLElement>('.anim--split').forEach((node) => {
                node.classList.add('anim--split--in')
            })
            el.querySelectorAll<HTMLElement>('.anim--fade').forEach((node) => {
                node.classList.add('anim--fade--in')
            })
        }, 100)

        return () => clearTimeout(timer)
    }, [])

    // Scroll Zoom Animation
    useEffect(() => {
        const container = containerRef.current
        const zoomEl = zoomElRef.current
        const heroContent = heroContentRef.current
        const sticky = stickyRef.current
        const firstRow = firstRowRef.current
        const lastRow = lastRowRef.current
        const transOverlay = transOverlayRef.current

        if (!container || !zoomEl || !sticky) return

        const ctx = gsap.context(() => {
            function build() {
                // kill existing scroll triggers for this container
                ScrollTrigger.getAll().forEach((st) => {
                    const stVars = st.vars as Record<string, unknown>
                    if (stVars._fsContainer === container) st.kill()
                })

                // Reset inline props
                gsap.set(zoomEl!, { clearProps: "width,height,borderRadius" })
                if (heroContent) gsap.set(heroContent, { clearProps: "opacity" })
                if (firstRow) gsap.set(firstRow, { clearProps: "transform" })
                if (lastRow) gsap.set(lastRow, { clearProps: "transform" })
                if (transOverlay) gsap.set(transOverlay, { clearProps: "opacity" })

                // Measure "end" state in pixels
                gsap.set(zoomEl!, { width: "100%", height: "100%" })
                const endW = zoomEl!.getBoundingClientRect().width
                const endH = zoomEl!.getBoundingClientRect().height
                const endRadius = "30px"

                // Start size = viewport
                const startW = window.innerWidth
                const startH = window.innerHeight

                // Apply start immediately (full screen, no border radius)
                gsap.set(zoomEl!, { width: startW, height: startH, borderRadius: "0px" })
                if (transOverlay) gsap.set(transOverlay, { opacity: 0.5 })

                const getTotalScroll = () => {
                    const ch = container!.getBoundingClientRect().height
                    const vh = window.innerHeight
                    return Math.max(1, ch - vh)
                }

                const rowY = (el: HTMLElement | null) => el ? el.getBoundingClientRect().height * 0.07 : 0

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        start: "top top",
                        end: () => "+=" + getTotalScroll(),
                        scrub: true,
                        pin: sticky,
                        pinSpacing: true,
                        invalidateOnRefresh: true,
                        // @ts-expect-error custom property for tracking
                        _fsContainer: container
                    }
                })

                // Zoom shrink
                tl.to(zoomEl!, {
                    width: endW,
                    height: endH,
                    borderRadius: endRadius,
                    ease: "none"
                }, 0)

                // Overlay fades
                if (transOverlay) {
                    tl.to(transOverlay, { opacity: 0, ease: "none" }, 0)
                }

                // Fade content
                if (heroContent) {
                    const totalScroll = getTotalScroll()
                    const fadeDur = Math.max(0.0001, Math.min(1, 200 / totalScroll))
                    tl.fromTo(heroContent,
                        { opacity: 1 },
                        { opacity: 0, ease: "none", duration: fadeDur },
                        0
                    )
                }

                // Subtle row drift
                if (firstRow) tl.to(firstRow, { y: -rowY(firstRow), ease: "none" }, 0)
                if (lastRow) tl.to(lastRow, { y: rowY(lastRow), ease: "none" }, 0)

                ScrollTrigger.refresh()
            }

            // slightly deferred to ensure layout is ready
            setTimeout(build, 50)

            let rAF: number
            const onResize = () => {
                cancelAnimationFrame(rAF)
                rAF = requestAnimationFrame(build)
            }
            window.addEventListener("resize", onResize)
            return () => window.removeEventListener("resize", onResize)

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            transition-container="true"
            style={{ height: "250vh", position: "relative", width: "100%", backgroundColor: "#e2e8e8" }}
        >
            <div
                ref={stickyRef}
                transition-sticky="true"
                style={{
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    transform: "translateZ(0)"
                }}
            >
                <div className={styles.bgGrid}>
                    <div ref={firstRowRef} className={styles.bgRow}>
                        <div className={styles.bgImage}><img src="/Tartaruga.png" alt="" /></div>
                        <div className={styles.bgImage}><img src="/DSCN6122.png" alt="" /></div>
                        <div className={styles.bgImage}><img src="/BG.JPG" alt="" /></div>
                        <div className={styles.bgImage}><img src="/DSCN6122.png" alt="" /></div>
                    </div>

                    <div className={styles.centerRow}>
                        <div className={styles.bgImage}><img src="/DSCN6122.png" alt="" /></div>

                        {/* The zooming element */}
                        <div
                            className={`${styles.heroBigtitle} ${styles.centerZoom}`}
                            ref={zoomElRef}
                            zoomed-image="true"
                            style={{ margin: 0, padding: 0, overflow: "hidden", position: "relative", flex: "none", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 10 }}
                        >
                            {/* Background */}
                            <div className={styles.heroBigtitleBg} style={{ zIndex: 0, position: "absolute", width: "100%", height: "100%", left: 0, top: 0, borderRadius: 0 }}>
                                <img src={imageSrc} alt={imageAlt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>

                            {/* Content */}
                            <div
                                className={styles.heroBigtitleContent}
                                ref={heroContentRef}
                                hero-content="true"
                                style={{
                                    zIndex: 1,
                                    position: "relative",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "0 20px"
                                }}
                            >
                                {breadcrumbs && breadcrumbs.length > 0 && (
                                    <nav className={styles.breadcrumb} aria-label="breadcrumb" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                                        {breadcrumbs.map((item, i) => (
                                            <span key={i}>
                                                {item.href ? (
                                                    <a href={item.href}>{item.label}</a>
                                                ) : (
                                                    <span>{item.label}</span>
                                                )}
                                                {i < breadcrumbs.length - 1 && (
                                                    <span className={styles.separator}>/</span>
                                                )}
                                            </span>
                                        ))}
                                    </nav>
                                )}

                                <h1 className="anim--split" style={{ margin: "20px auto 40px", textAlign: "center" }}>
                                    {title.split(' ').map((word, i) => (
                                        <span key={i} className="anim--split__line" style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.2em' }}>
                                            <span className="anim--split__word" style={{ '--split-index': i } as React.CSSProperties}>
                                                {word}
                                            </span>
                                        </span>
                                    ))}
                                </h1>

                                {subtitle && (
                                    <p className={`${styles.subtitle} anim--fade`} style={{ marginBottom: "40px", textAlign: "center", maxWidth: "800px" }}>{subtitle}</p>
                                )}

                                {cta && (
                                    <a href={cta.href} className={`${styles.ctaButton} anim--fade`} style={{ animationDelay: '0.2s' }}>
                                        <span>{cta.label}</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className={styles.bgImage}><img src="/BG.JPG" alt="" /></div>
                    </div>

                    <div ref={lastRowRef} className={styles.bgRow}>
                        <div className={styles.bgImage}><img src="/BG.JPG" alt="" /></div>
                        <div className={styles.bgImage}><img src="/Tartaruga.png" alt="" /></div>
                        <div className={styles.bgImage}><img src="/DSCN6122.png" alt="" /></div>
                        <div className={styles.bgImage}><img src="/Tartaruga.png" alt="" /></div>
                    </div>

                    <div ref={transOverlayRef} className={styles.transiOverlay} />
                </div>
            </div>
        </section>
    )
}
