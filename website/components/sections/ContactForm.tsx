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

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
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
            <input required type="text" name="companyName" placeholder={labels.companyPlaceholder} />
          </label>

          <label>
            {labels.annualSalesLabel}
            <select required name="annualSales" defaultValue="">
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
            <select required name="source" defaultValue="">
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

          <button type="submit" className={styles.submitButton}>
            {labels.submitLabel}
          </button>
          {sent ? <p className={styles.success}>Mensaje recibido. Te contactaremos en breve.</p> : null}
        </form>
      </div>
    </section>
  );
}
