import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig, contactContent } from "@/content/contact";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Sección de Donación - Arriba */}
        <section className={styles.donateSection}>
          <h1 className={styles.donateTitle}>Dona aquí</h1>
          <p className={styles.donateSubtitle}>
            Tu apoyo nos permite llevar atención oftalmológica a quienes más lo necesitan
          </p>
          <div className={styles.bankCard}>
            <p className={styles.bankName}>🏦 {siteConfig.bankInfo.bank}</p>
            <div className={styles.bankDetails}>
              <p><strong>Cuenta:</strong> {siteConfig.bankInfo.accountNumber}</p>
              <p><strong>CLABE:</strong> {siteConfig.bankInfo.clabe}</p>
              <p><strong>Nombre:</strong> {siteConfig.bankInfo.accountName}</p>
            </div>
          </div>
          <div className={styles.contactButtons}>
            <a 
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\+/g, '')}`} 
              className={styles.whatsappButton}
              target="_blank"
              rel="noreferrer"
            >
              💬 Contactar por WhatsApp
            </a>
            <a 
              href={`mailto:${contactContent.contactInfo.email}`}
              className={styles.emailButton}
            >
              ✉️ Enviar correo
            </a>
          </div>
        </section>

        {/* Formulario de contacto - Abajo */}
        <section className={styles.formSection}>
          <ContactForm 
            panel={contactContent.panel} 
            labels={contactContent.form} 
          />
        </section>
      </div>
    </main>
  );
}
