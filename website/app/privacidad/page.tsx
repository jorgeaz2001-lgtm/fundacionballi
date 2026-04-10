import styles from "./page.module.css";

export default function PrivacidadPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Aviso de Privacidad</h1>
        <p className={styles.lastUpdated}>Última actualización: Abril 2026</p>

        <section>
          <h2>I. Responsable del Tratamiento de Datos</h2>
          <p>
            <strong>Fundación Valdez Balli, A.C.</strong> (en adelante "La Fundación"), 
            con domicilio en Monterrey, Nuevo León, México, es responsable del tratamiento 
            de sus datos personales conforme a la Ley Federal de Protección de Datos Personales 
            en Posesión de los Particulares (LFPDPPP).
          </p>
          <p>
            <strong>Contacto:</strong> contacto@fundacionvaldezballi.org
          </p>
        </section>

        <section>
          <h2>II. Datos Personales que Recabamos</h2>
          <p>Para las finalidades descritas en el presente aviso, recabamos los siguientes datos:</p>
          <ul>
            <li>Nombre completo</li>
            <li>Correo electrónico</li>
            <li>Teléfono de contacto</li>
            <li>Dirección (cuando aplica para servicios a domicilio)</li>
            <li>Información de salud visual relevante</li>
            <li>Datos financieros (solo para procesos de donación)</li>
          </ul>
        </section>

        <section>
          <h2>III. Finalidades del Tratamiento</h2>
          <h3>Finalidades Primarias:</h3>
          <ul>
            <li>Prestación de servicios oftalmológicos y de salud visual</li>
            <li>Programación de citas y seguimiento médico</li>
            <li>Contacto para confirmación de citas y recordatorios</li>
            <li>Procesamiento de donaciones y envío de recibos deducibles</li>
            <li>Cumplimiento de obligaciones legales y regulatorias</li>
          </ul>
          
          <h3>Finalidades Secundarias:</h3>
          <ul>
            <li>Envío de boletines informativos sobre salud visual</li>
            <li>Invitación a eventos y campañas de la fundación</li>
            <li>Encuestas de satisfacción y mejora de servicios</li>
          </ul>
          <p>
            Usted puede oponerse al tratamiento de sus datos para finalidades secundarias 
            enviando un correo a la dirección indicada.
          </p>
        </section>

        <section>
          <h2>IV. Transferencia de Datos</h2>
          <p>
            Sus datos personales no serán transferidos a terceros sin su consentimiento, 
            salvo en los siguientes casos:
          </p>
          <ul>
            <li>Referencia a hospitales base para cirugías (con su autorización)</li>
            <li>Requerimientos de autoridades competentes</li>
            <li>Prestadores de servicios necesarios para la operación (firmas de auditoría, etc.)</li>
          </ul>
        </section>

        <section>
          <h2>V. Medidas de Seguridad</h2>
          <p>
            La Fundación implementa medidas de seguridad administrativas, técnicas y físicas 
            para proteger sus datos personales contra daño, pérdida, alteración, destrucción 
            o uso no autorizado.
          </p>
        </section>

        <section>
          <h2>VI. Derechos ARCO</h2>
          <p>
            Usted tiene derecho a conocer qué datos personales tenemos, para qué los utilizamos 
            y las condiciones de uso (Acceso), así como a solicitar la corrección de información 
            (Rectificación), la eliminación de datos (Cancelación) y a oponerse al uso de sus 
            datos (Oposición), conocidos como derechos ARCO.
          </p>
          <p>
            Para ejercer sus derechos ARCO, envíe una solicitud a: contacto@fundacionvaldezballi.org
          </p>
        </section>

        <section>
          <h2>VII. Cambios al Aviso de Privacidad</h2>
          <p>
            La Fundación se reserva el derecho de modificar el presente aviso. Las modificaciones 
            estarán disponibles en: fundacionvaldezballi.org/privacidad
          </p>
        </section>

        <section>
          <h2>VIII. Consentimiento</h2>
          <p>
            Al proporcionar sus datos personales a través de nuestros formularios o servicios, 
            usted declara haber leído y comprendido el presente Aviso de Privacidad y otorga 
            su consentimiento para el tratamiento de sus datos conforme a lo aquí establecido.
          </p>
        </section>
      </div>
    </main>
  );
}
