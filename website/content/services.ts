import { CONTACT_URL } from "@/content/site";

export const servicesContent = {
  hero: {
    title: "Servicios de Salud Visual",
    subtitle:
      "Ofrecemos atención oftalmológica integral con un modelo accesible, de bajo costo y alta calidad para reducir la ceguera evitable.",
    ctaLabel: "Solicitar Información",
    ctaHref: CONTACT_URL
  },
  intro: {
    heading: "Atención oftalmológica accesible para todos",
    body: "Nuestros servicios están diseñados para llegar a las comunidades más vulnerables, garantizando acceso a atención de calidad sin distinción de capacidad económica."
  },
  process: {
    heading: "Nuestro Proceso",
    body: "Un flujo de atención diseñado para garantizar acceso, diagnóstico y tratamiento efectivo.",
    steps: [
      { icon: "/images/icono.png", title: "Registro", body: "El paciente se registra en nuestro sistema y recibe una evaluación inicial." },
      { icon: "/images/icono.png", title: "Evaluación", body: "Evaluación completa de su salud visual por profesionales capacitados." },
      { icon: "/images/icono.png", title: "Diagnóstico", body: "Exámenes especializados para detectar cualquier problema ocular." },
      { icon: "/images/icono.png", title: "Tratamiento", body: "Prescripción de lentes, medicamentos o referencia para cirugía." },
      { icon: "/images/icono.png", title: "Seguimiento", body: "Control periódico para asegurar la efectividad del tratamiento." }
    ]
  },
  differenceHeading: "¿Por qué elegirnos?",
  differenceItems: [
    {
      title: "Consulta Oftalmológica",
      body: "Evaluación completa de la salud visual por profesionales capacitados, con posibilidad de consultas remotas mediante telemedicina para casos complejos."
    },
    {
      title: "Exámenes de Vista",
      body: "Refractometría y detección de errores de refracción que afectan a millones de mexicanos. Prescripción precisa de lentes correctivos."
    },
    {
      title: "Detección de Enfermedades",
      body: "Identificación temprana de cataratas, glaucoma, retinopatía diabética y otras patologías oculares que pueden causar ceguera si no se tratan."
    },
    {
      title: "Programa de Cirugías",
      body: "Expediciones médico-quirúrgicas vinculadas con hospitales base para garantizar procedimientos especializados, especialmente cirugías de cataratas."
    },
    {
      title: "Dispensación de Lentes",
      body: "Provisión de lentes y medicamentos a bajo costo, facilitando el acceso de los pacientes a estos recursos esenciales para su visión."
    },
    {
      title: "Seguimiento Continuo",
      body: "Monitoreo de pacientes con enfermedades visuales crónicas, asegurando que reciban atención continua y oportuna a lo largo del tiempo."
    }
  ],
  benefits: {
    image: "/images/content/examen-paciente.png",
    imageAlt: "Fundación Valdez Balli",
    heading: "Beneficios de nuestro modelo",
    points: [
      "Acceso a atención oftalmológica de calidad",
      "Precios accesibles y subsidios para quienes lo necesitan",
      "Tecnología de vanguardia",
      "Equipo médico altamente capacitado",
      "Cobertura en zonas urbanas y rurales",
      "Modelo sostenible y escalable"
    ]
  },
  faqs: [
    {
      question: "¿Cuánto cuesta una consulta?",
      answer:
        "Nuestro modelo de subsidios cruzados permite ofrecer consultas a precios accesibles. Los pacientes con mayor capacidad de pago ayudan a financiar la atención de quienes no pueden costearla. Algunos servicios son gratuitos para comunidades de muy bajos recursos."
    },
    {
      question: "¿Dónde están ubicados?",
      answer:
        "Actualmente operamos Vision Centers en la zona metropolitana de Monterrey. También llevamos servicios a comunidades remotas mediante nuestras Caravanas de la Visión."
    },
    {
      question: "¿Qué enfermedades tratan?",
      answer:
        "Nos enfocamos en las principales causas de ceguera evitable: cataratas, errores de refracción, glaucoma, retinopatía diabética y otras patologías oculares comunes."
    },
    {
      question: "¿Cómo puedo donar?",
      answer:
        "Puedes hacer donaciones directas a través de nuestra página de contacto. Tu apoyo nos permite seguir brindando atención a quienes más lo necesitan."
    },
    {
      question: "¿Ofrecen cirugías?",
      answer:
        "Sí, mediante nuestras expediciones médico-quirúrgicas en colaboración con hospitales base. Priorizamos cirugías de cataratas, que representan el 26.73% de los casos de ceguera en México."
    },
    {
      question: "¿Puedo ser voluntario?",
      answer:
        "¡Por supuesto! Buscamos voluntarios para apoyar en nuestras caravanas, programas educativos y actividades comunitarias. Contáctanos para más información."
    }
  ]
};
