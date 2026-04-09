import Image from "next/image";
import styles from "./branding.module.css";

export default function BrandingPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fundación Valdez Balli - Guía de Marca</h1>
      
      <section className={styles.section}>
        <h2>Logotipos</h2>
        <div className={styles.logoGrid}>
          <div className={styles.logoItem}>
            <h3>Logo Principal</h3>
            <Image 
              src="/images/logo.png" 
              alt="Logo Fundación Valdez Balli" 
              width={400} 
              height={85}
              className={styles.logoImg}
            />
          </div>
          <div className={styles.logoItem}>
            <h3>Icono / Símbolo</h3>
            <Image 
              src="/images/icono.png" 
              alt="Icono Fundación Valdez Balli" 
              width={200} 
              height={158}
              className={styles.logoImg}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Colores de Marca</h2>
        <div className={styles.colorGrid}>
          <div className={styles.colorItem}>
            <div className={styles.colorBox} style={{ backgroundColor: "#1e3a5f" }}></div>
            <div className={styles.colorInfo}>
              <strong>Primario</strong>
              <code>#1e3a5f</code>
            </div>
          </div>
          <div className={styles.colorItem}>
            <div className={styles.colorBox} style={{ backgroundColor: "#152a45" }}></div>
            <div className={styles.colorInfo}>
              <strong>Primario Oscuro</strong>
              <code>#152a45</code>
            </div>
          </div>
          <div className={styles.colorItem}>
            <div className={styles.colorBox} style={{ backgroundColor: "#4a90c6" }}></div>
            <div className={styles.colorInfo}>
              <strong>Acento</strong>
              <code>#4a90c6</code>
            </div>
          </div>
          <div className={styles.colorItem}>
            <div className={styles.colorBox} style={{ backgroundColor: "#6bb3e0" }}></div>
            <div className={styles.colorInfo}>
              <strong>Acento Claro</strong>
              <code>#6bb3e0</code>
            </div>
          </div>
          <div className={styles.colorItem}>
            <div className={styles.colorBox} style={{ backgroundColor: "#5a6a7a" }}></div>
            <div className={styles.colorInfo}>
              <strong>Texto Secundario</strong>
              <code>#5a6a7a</code>
            </div>
          </div>
          <div className={styles.colorItem}>
            <div className={styles.colorBox} style={{ backgroundColor: "#c8dce8" }}></div>
            <div className={styles.colorInfo}>
              <strong>Borde</strong>
              <code>#c8dce8</code>
            </div>
          </div>
          <div className={styles.colorItem}>
            <div className={styles.colorBox} style={{ backgroundColor: "#f5f9fc" }}></div>
            <div className={styles.colorInfo}>
              <strong>Fondo Claro</strong>
              <code>#f5f9fc</code>
            </div>
          </div>
          <div className={styles.colorItem}>
            <div className={styles.colorBox} style={{ backgroundColor: "#ffffff", border: "1px solid #ddd" }}></div>
            <div className={styles.colorInfo}>
              <strong>Blanco</strong>
              <code>#ffffff</code>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Tipografía</h2>
        <div className={styles.typography}>
          <div className={styles.fontItem}>
            <h3 style={{ fontFamily: "var(--font-display)" }}>LT Remark / Serif</h3>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem" }}>
              Fundación Valdez Balli - Títulos y encabezados
            </p>
          </div>
          <div className={styles.fontItem}>
            <h3 style={{ fontFamily: "var(--font-sans)" }}>Inter / Sans-serif</h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem" }}>
              Texto de cuerpo, navegación, botones y elementos de UI. 
              Optimizada para legibilidad en pantalla.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Misión y Visión</h2>
        <div className={styles.mission}>
          <h3>Misión</h3>
          <p>
            Trabajar en la zona metropolitana de Monterrey para ayudar a las comunidades 
            vulnerables a acceder a atención oftalmológica de calidad mediante un modelo 
            sostenible y accesible que prevenga, detecte y trate enfermedades visuales de 
            manera oportuna, con el fin de reducir la ceguera evitable y mejorar la calidad 
            de vida de las personas afectadas.
          </p>
          
          <h3>Valores</h3>
          <ul className={styles.valuesList}>
            <li><strong>Accesibilidad:</strong> Atención para todos, sin distinción económica</li>
            <li><strong>Calidad:</strong> Estándares internacionales en todos nuestros servicios</li>
            <li><strong>Compromiso:</strong> Dedicación total a nuestra comunidad</li>
            <li><strong>Sostenibilidad:</strong> Modelo financiero autosustentable</li>
            <li><strong>Innovación:</strong> Uso de tecnología para ampliar el alcance</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Componentes UI</h2>
        <div className={styles.components}>
          <div className={styles.componentItem}>
            <h3>Botón Primario</h3>
            <button className={styles.btnPrimary}>Donar Ahora</button>
          </div>
          <div className={styles.componentItem}>
            <h3>Botón Secundario</h3>
            <button className={styles.btnSecondary}>Conocer Más</button>
          </div>
          <div className={styles.componentItem}>
            <h3>Enlace</h3>
            <a href="#" className={styles.link}>Ver servicios →</a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Enlaces del Sitio</h2>
        <ul className={styles.navList}>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Nosotros</a></li>
          <li><a href="/services">Servicios</a></li>
          <li><a href="/insights">Impacto</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </section>
    </div>
  );
}
