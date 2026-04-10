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
  whatsapp: "+528112345678",
  footer: {
    address: "Monterrey, Nuevo León, México",
    email: "contacto@fundacionvaldezballi.org",
    whatsapp: "+528112345678",
    legalLinks: [
      { label: "Aviso de Privacidad", href: "/privacidad" },
      { label: "Términos y Condiciones", href: "/terminos" }
    ],
    partnerLinks: [
      { label: "WhatsApp", href: "https://wa.me/528112345678" },
      { label: "contacto@fundacionvaldezballi.org", href: "mailto:contacto@fundacionvaldezballi.org" },
      { label: "Donaciones", href: CONTACT_URL }
    ]
  },
  bankInfo: {
    bank: "BBVA",
    accountName: "FUNDACION VALDEZ BALLI AC",
    accountNumber: "0124630084",
    clabe: "012580001246300848"
  }
};
