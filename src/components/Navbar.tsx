"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

interface DropdownItem { href: string; label: string }
interface NavMenuItem { href?: string; label: string; children?: DropdownItem[] }

const fullMenu: NavMenuItem[] = [
  { href: "/", label: "Home" },
  {
    label: "O Projeto",
    children: [
      { href: "/principios", label: "Nossos Princípios" },
      { href: "/historia", label: "Nossa História" },
      { href: "/equipe", label: "Equipe" },
      { href: "/rpbcm", label: "RPBCM" },
    ],
  },
  {
    label: "Pesquisa",
    children: [
      { href: "/monitoramento", label: "Monitoramento" },
      { href: "/comunicacao", label: "Comunicação" },
      { href: "/selecao-sexual", label: "Seleção Sexual" },
      { href: "/especies-invasoras", label: "Espécies Invasoras" },
      { href: "/genetica", label: "Genética" },
      { href: "/etnobiologia", label: "Etnobiologia" },
      { href: "/educacao", label: "Educação Ambiental" },
    ],
  },
  { href: "/cavalos-marinhos", label: "Cavalos-Marinhos" },
  { href: "/producao-cientifica", label: "Publicações" },
  { href: "/resgate", label: "Resgate" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useBodyScrollLock(menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = () => setOpenDropdown(null);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const toggleMenu = useCallback(() => setMenuOpen((p) => !p), []);
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, []);

  const handleEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };
  const handleLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 200);
  };
  const toggleMobileDrop = (e: React.MouseEvent, label: string) => {
    e.stopPropagation();
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const isActive = (href: string) => pathname === href;
  const isParentActive = (children: DropdownItem[]) =>
    children.some((c) => pathname === c.href);

  return (
    <>
      <header className={`glass-header ${scrolled ? "glass-header--scrolled" : ""}`}>
        <div className="glass-header__bar">
          {/* Logo */}
          <Link href="/" className="glass-header__logo" onClick={closeMenu} prefetch={false}>
            <Image
              src="/Logo Horizontal PCM.png"
              alt="Projeto Cavalos-Marinhos RJ"
              width={160}
              height={34}
              style={{ height: "auto", maxHeight: 30 }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="glass-header__nav">
            {fullMenu.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className={`glass-drop ${openDropdown === item.label ? "glass-drop--open" : ""}`}
                  onMouseEnter={() => handleEnter(item.label)}
                  onMouseLeave={handleLeave}
                >
                  <button
                    className={`glass-header__link glass-drop__trigger ${isParentActive(item.children) ? "active" : ""}`}
                    onClick={(e) => toggleMobileDrop(e, item.label)}
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                    <svg className="glass-drop__arrow" viewBox="0 0 12 12" width="10" height="10">
                      <path d="M3 5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div className="glass-drop__menu">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        prefetch={false}
                        className={isActive(child.href) ? "active" : ""}
                        onClick={closeMenu}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  prefetch={false}
                  className={`glass-header__link ${isActive(item.href!) ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA button */}
          <Link href="/contato" className="glass-header__cta" onClick={closeMenu} prefetch={false}>
            Contato
          </Link>

          {/* Mobile hamburger */}
          <button
            className={`glass-header__burger ${menuOpen ? "glass-header__burger--open" : ""}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile slide-out */}
      <nav className={`glass-mobile ${menuOpen ? "glass-mobile--open" : ""}`}>
        <div className="glass-mobile__inner">
          {fullMenu.map((item) =>
            item.children ? (
              <div key={item.label} className={`glass-mobile__drop ${openDropdown === item.label ? "glass-mobile__drop--open" : ""}`}>
                <button
                  className={`glass-mobile__link ${isParentActive(item.children) ? "active" : ""}`}
                  onClick={(e) => toggleMobileDrop(e, item.label)}
                >
                  {item.label}
                  <svg className="glass-drop__arrow" viewBox="0 0 12 12" width="10" height="10">
                    <path d="M3 5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <div className="glass-mobile__submenu">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} prefetch={false} onClick={closeMenu} className={isActive(child.href) ? "active" : ""}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                prefetch={false}
                className={`glass-mobile__link ${isActive(item.href!) ? "active" : ""}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            )
          )}
          <Link href="/contato" className="glass-mobile__cta" onClick={closeMenu} prefetch={false}>
            Contato
          </Link>
        </div>
      </nav>
      <div className={`glass-overlay ${menuOpen ? "glass-overlay--open" : ""}`} onClick={closeMenu} />
    </>
  );
}
