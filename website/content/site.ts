export type NavItem = {
  label: string;
  href: string;
};

/** Contact URL for donations and inquiries */
export const CONTACT_URL = "/contact";

export const siteConfig = {
  siteName: "Fundación Valdez Balli",
  companyName: "Fundación Valdez Balli, A.C.",
  ctaLabel: "Donar Ahora",
  ctaHref: CONTACT_URL,
  languages: ["ESPAÑOL"],
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/about" },
    { label: "Servicios", href: "/services" },
    { label: "Impacto", href: "/insights" },
    { label: "Contacto", href: "/contact" }
  ] satisfies NavItem[],
  account: {
    label: "Donar",
    href: CONTACT_URL
  },
  footer: {
    address: "Monterrey, Nuevo León, México",
    legalLinks: [
      { label: "Aviso de Privacidad", href: "/privacidad" },
      { label: "Términos y Condiciones", href: "/terminos" }
    ],
    partnerLinks: [
      { label: "Atención a Pacientes", href: "mailto:contacto@fundacionvaldezballi.org" },
      { label: "contacto@fundacionvaldezballi.org", href: "mailto:contacto@fundacionvaldezballi.org" },
      { label: "Donaciones", href: CONTACT_URL }
    ]
  }
};
