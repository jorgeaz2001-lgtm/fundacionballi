"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import styles from "@/components/layout/Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.navBar}>
        <div className={styles.container}>
          <Link className={styles.logo} href="/">
            <Image
              src="/images/logo.png"
              alt="Fundación Valdez Balli - Salud Visual para Todos"
              width={200}
              height={42}
              className={styles.logoImage}
              priority
            />
          </Link>

          <button
            type="button"
            className={styles.menuToggle}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            Menu
          </button>

          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                className={pathname === item.href ? styles.navActive : styles.navLink}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href={siteConfig.ctaHref} label={siteConfig.ctaLabel} />
          </nav>
        </div>
      </div>
    </header>
  );
}
