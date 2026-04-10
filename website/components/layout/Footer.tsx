import Link from "next/link";
import { siteConfig } from "@/content/site";
import styles from "@/components/layout/Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.ctaPanel}>
          <p className={styles.eyebrow}>ÚNETE A LA CAUSA</p>
          <h2>Ayúdanos a reducir la ceguera evitable en México.</h2>
          <p className={styles.subtitle}>
            Con tu apoyo, podemos llevar atención oftalmológica de calidad a más comunidades 
            vulnerables y restaurar la vista de quienes la han perdido.
          </p>
          <div className={styles.actions}>
            <Link href={siteConfig.ctaHref} className={styles.primaryAction}>
              Donar Ahora
            </Link>
            <Link href="/about" className={styles.secondaryAction}>
              Conócenos
            </Link>
          </div>
        </div>

        <div className={styles.bankInfo}>
          <p className={styles.bankTitle}>Datos bancarios para donaciones</p>
          <div className={styles.bankDetails}>
            <p><strong>Banco:</strong> {siteConfig.bankInfo.bank}</p>
            <p><strong>Cuenta:</strong> {siteConfig.bankInfo.accountNumber}</p>
            <p><strong>CLABE:</strong> {siteConfig.bankInfo.clabe}</p>
            <p><strong>Nombre:</strong> {siteConfig.bankInfo.accountName}</p>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.linkGroup}>
            <p className={styles.groupTitle}>Páginas</p>
            <div className={styles.linkRow}>
              {siteConfig.nav.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.linkGroup}>
            <p className={styles.groupTitle}>Contacto</p>
            <div className={styles.linkRow}>
              <a href={`https://wa.me/${siteConfig.whatsapp.replace(/\+/g, '')}`} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a href={`mailto:${siteConfig.footer.email}`}>
                {siteConfig.footer.email}
              </a>
            </div>
          </div>

          <div className={styles.linkGroup}>
            <p className={styles.groupTitle}>Legal</p>
            <div className={styles.linkRow}>
              {siteConfig.footer.legalLinks.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.meta}>
            <p className={styles.copy}>© 2026 Fundación Valdez Balli, A.C. Todos los derechos reservados.</p>
            <p className={styles.address}>{siteConfig.footer.address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
