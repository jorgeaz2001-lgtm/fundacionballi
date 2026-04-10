import { ContactForm } from "@/components/sections/ContactForm";
import { contactContent } from "@/content/contact";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        {/* Sección de Donación - Arriba */}
        <section className={styles.donateSection}>
          <div className={styles.donateContainer}>
            <aside className={styles.side}>
              <h1>Dona aquí</h1>
              <ul>
                <li>Apoya nuestra misión de salud visual</li>
                <li>Ayuda a comunidades vulnerables</li>
                <li>Transforma vidas con tu donación</li>
              </ul>
              <p className={styles.supportCopy}>
                Tu contribución nos permite seguir brindando atención oftalmológica de calidad.
              </p>
            </aside>

            <div className={styles.bankInfo}>
              <div className={styles.bankRow}>
                <span className={styles.bankLabel}>Banco</span>
                <span className={styles.bankValue}>BBVA</span>
              </div>
              <div className={styles.bankRow}>
                <span className={styles.bankLabel}>Cuenta</span>
                <span className={styles.bankValue}>0124630084</span>
              </div>
              <div className={styles.bankRow}>
                <span className={styles.bankLabel}>CLABE</span>
                <span className={styles.bankValue}>012580001246300848</span>
              </div>
              <div className={styles.bankRow}>
                <span className={styles.bankLabel}>Nombre</span>
                <span className={styles.bankValue}>FUNDACION VALDEZ BALLI AC</span>
              </div>
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
