import styles from "./page.module.css";

export default function TerminosPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Términos y Condiciones</h1>
        <p className={styles.lastUpdated}>Última actualización: Abril 2026</p>

        <section>
          <h2>1. Objeto</h2>
          <p>
            Los presentes Términos y Condiciones regulan el uso del sitio web de 
            <strong> Fundación Valdez Balli, A.C.</strong> (en adelante "La Fundación"), 
            así como los servicios de atención oftalmológica y programas de donación ofrecidos.
          </p>
        </section>

        <section>
          <h2>2. Definiciones</h2>
          <ul>
            <li><strong>Usuario:</strong> Persona que accede al sitio web o utiliza los servicios.</li>
            <li><strong>Paciente:</strong> Persona que recibe servicios médicos de la Fundación.</li>
            <li><strong>Donante:</strong> Persona que realiza aportaciones económicas a la Fundación.</li>
            <li><strong>Vision Center:</strong> Unidades de atención oftalmológica de la Fundación.</li>
            <li><strong>Caravanas:</strong> Unidades móviles de atención visual.</li>
          </ul>
        </section>

        <section>
          <h2>3. Servicios Ofrecidos</h2>
          <p>La Fundación ofrece los siguientes servicios:</p>
          <ul>
            <li>Consultas oftalmológicas de diagnóstico</li>
            <li>Exámenes de la vista y refractometría</li>
            <li>Detección de enfermedades oculares</li>
            <li>Prescripción y dispensación de lentes</li>
            <li>Referencia para cirugías oftalmológicas</li>
            <li>Programas de educación y prevención</li>
          </ul>
          <p>
            <strong>Nota:</strong> La Fundación opera bajo un modelo de subsidios cruzados. 
            Los precios varían según la capacidad económica del paciente.
          </p>
        </section>

        <section>
          <h2>4. Obligaciones del Usuario/Paciente</h2>
          <ul>
            <li>Proporcionar información veraz y completa sobre su estado de salud.</li>
            <li>Asistir puntualmente a las citas programadas.</li>
            <li>Informar con anticipación si no puede asistir a una cita.</li>
            <li>Seguir las indicaciones médicas proporcionadas.</li>
            <li>Respetar las instalaciones y al personal de la Fundación.</li>
            <li>No grabar ni fotografiar a otros pacientes sin consentimiento.</li>
          </ul>
        </section>

        <section>
          <h2>5. Política de Donaciones</h2>
          <h3>5.1 Donaciones en Efectivo</h3>
          <ul>
            <li>Las donaciones son voluntarias y no reembolsables.</li>
            <li>Se emiten recibos deducibles de impuestos conforme a la legislación mexicana.</li>
            <li>La Fundación es una Asociación Civil autorizada para recibir donativos deducibles.</li>
          </ul>
          
          <h3>5.2 Uso de Donaciones</h3>
          <p>
            Las donaciones se destinan exclusivamente a:
          </p>
          <ul>
            <li>Operación de Vision Centers y Caravanas</li>
            <li>Compra de equipamiento médico y medicamentos</li>
            <li>Cirugías para pacientes de bajos recursos</li>
            <li>Capacitación de personal médico</li>
            <li>Programas de educación comunitaria</li>
          </ul>
        </section>

        <section>
          <h2>6. Responsabilidad Médica</h2>
          <p>
            La Fundación se compromete a proporcionar atención médica con los estándares 
            de calidad establecidos. Sin embargo:
          </p>
          <ul>
            <li>Los resultados de tratamientos varían según el caso.</li>
            <li>El paciente debe seguir las indicaciones post-tratamiento.</li>
            <li>Casos complejos serán referidos a especialistas o hospitales base.</li>
            <li>La Fundación no se hace responsable por complicaciones derivadas de 
                información médica omitida por el paciente.</li>
          </ul>
        </section>

        <section>
          <h2>7. Propiedad Intelectual</h2>
          <p>
            Todo el contenido del sitio web (logos, imágenes, textos, videos) es propiedad 
            de la Fundación Valdez Balli, A.C. y está protegido por derechos de autor. 
            No se permite su uso sin autorización expresa.
          </p>
        </section>

        <section>
          <h2>8. Limitación de Responsabilidad</h2>
          <p>
            El sitio web se proporciona "tal cual". La Fundación no garantiza disponibilidad 
            ininterrumpida del sitio ni se responsabiliza por daños derivados del uso de la 
            información contenida en él.
          </p>
        </section>

        <section>
          <h2>9. Modificaciones</h2>
          <p>
            La Fundación se reserva el derecho de modificar estos términos en cualquier momento. 
            Los cambios entrarán en vigor al ser publicados en esta página.
          </p>
        </section>

        <section>
          <h2>10. Ley Aplicable</h2>
          <p>
            Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier 
            controversia será resuelta ante los tribunales competentes de Monterrey, Nuevo León.
          </p>
        </section>

        <section>
          <h2>11. Contacto</h2>
          <p>
            Para cualquier duda sobre estos términos, contacte a:<br />
            <strong>Email:</strong> contacto@fundacionvaldezballi.org<br />
            <strong>Dirección:</strong> Monterrey, Nuevo León, México
          </p>
        </section>

        <section>
          <h2>12. Aceptación</h2>
          <p>
            El uso de este sitio web y/o la recepción de servicios implica la aceptación 
            íntegra de estos Términos y Condiciones.
          </p>
        </section>
      </div>
    </main>
  );
}
