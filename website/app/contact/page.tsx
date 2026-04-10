import { ContactForm } from "@/components/sections/ContactForm";
import { contactContent } from "@/content/contact";
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
          <div className={styles.bankInfo}>
            <div className={styles.bankRow}>
              <span className={styles.bankLabel}>Banco</span>
              <span className={styles.bankValue}>BBVA</span>
            </div>
            <div className={styles.bankRow}>
              <span className={styles.bankLabel}>Cuenta</span>
              <span className={styles.bankValue}>0124 6300 84</span>
            </div>
            <div className={styles.bankRow}>
              <span className={styles.bankLabel}>CLABE</span>
              <span className={styles.bankValue}>012 580 0012 4630 0848</span>
            </div>
            <div className={styles.bankRow}>
              <span className={styles.bankLabel}>Nombre</span>
              <span className={styles.bankValue}>FUNDACION VALDEZ BALLI AC</span>
            </div>
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
