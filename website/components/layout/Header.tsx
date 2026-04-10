"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { siteConfig } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import styles from "@/components/layout/Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          <Link className={styles.logo} href="/" onClick={closeMenu}>
            <Image
              src="/images/logo.png"
              alt="Fundación Valdez Balli"
              width={160}
              height={40}
              className={styles.logoImage}
              priority
            />
          </Link>

          <button
            type="button"
            className={styles.menuToggle}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
            <div className={styles.navLinks}>
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  className={pathname === item.href ? styles.navActive : styles.navLink}
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className={styles.navCta}>
              <ButtonLink href={siteConfig.ctaHref} label={siteConfig.ctaLabel} />
            </div>
          </nav>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </>
  );
}
