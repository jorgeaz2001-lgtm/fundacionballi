"use client";

import { FormEvent, useState } from "react";
import styles from "@/components/sections/ContactForm.module.css";

type ContactFormProps = {
  panel: {
    heading: string;
    bullets: string[];
    supportCopy: string;
    supportLabel: string;
    supportHref: string;
  };
  labels: {
    firstNameLabel: string;
    firstNamePlaceholder: string;
    lastNameLabel: string;
    lastNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    annualSalesLabel: string;
    annualSalesOptions: string[];
    sourceLabel: string;
    sourceOptions: string[];
    submitLabel: string;
  };
};

export function ContactForm({ panel, labels }: ContactFormProps) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    
    // Convertir FormData a objeto
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      // =====================================================
      // CONFIGURACIÓN: Reemplaza con tu endpoint de Formspree
      // 1. Ve a https://formspree.io/
      // 2. Crea una cuenta y un nuevo formulario
      // 3. Copia tu endpoint (ej: https://formspree.io/f/xnqkvnyp)
      // 4. Reemplaza la URL de abajo
      // =====================================================
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnqkvnyp"; // <-- REEMPLAZA ESTO
      
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSent(true);
        form.reset();
      } else {
        setError("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
      }
    } catch (err) {
      setError("Error de conexión. Por favor verifica tu conexión a internet.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <aside className={styles.side}>
          <h1>{panel.heading}</h1>
          <ul>
            {panel.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <p className={styles.supportCopy}>{panel.supportCopy}</p>
          <a className={styles.supportLink} href={panel.supportHref} target="_blank" rel="noreferrer">
            {panel.supportLabel}
          </a>
        </aside>

        <form className={styles.form} onSubmit={onSubmit}>
          <label>
            {labels.firstNameLabel}
            <input required type="text" name="firstName" placeholder={labels.firstNamePlaceholder} />
          </label>

          <label>
            {labels.lastNameLabel}
            <input required type="text" name="lastName" placeholder={labels.lastNamePlaceholder} />
          </label>

          <label>
            {labels.emailLabel}
            <input required type="email" name="email" placeholder={labels.emailPlaceholder} />
          </label>

          <label>
            {labels.companyLabel}
            <input required type="text" name="asunto" placeholder={labels.companyPlaceholder} />
          </label>

          <label>
            {labels.annualSalesLabel}
            <select required name="tipoConsulta" defaultValue="">
              <option value="" disabled>
                Selecciona...
              </option>
              {labels.annualSalesOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label>
            {labels.phoneLabel}
            <input required type="tel" name="phone" placeholder={labels.phonePlaceholder} />
          </label>

          <label>
            {labels.sourceLabel}
            <select required name="comoNosConociste" defaultValue="">
              <option value="" disabled>
                Selecciona...
              </option>
              {labels.sourceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={sending}
          >
            {sending ? "Enviando..." : labels.submitLabel}
          </button>
          
          {sent && (
            <p className={styles.success}>
              ✅ Mensaje enviado correctamente. Te contactaremos en breve.
            </p>
          )}
          
          {error && (
            <p className={styles.error}>
              ❌ {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
