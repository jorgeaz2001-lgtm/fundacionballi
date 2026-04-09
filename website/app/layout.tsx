import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Fundación Valdez Balli | Salud Visual para Todos",
  description:
    "Trabajamos en la zona metropolitana de Monterrey para ayudar a las comunidades vulnerables a acceder a atención oftalmológica de calidad. Reducimos la ceguera evitable y mejoramos la calidad de vida."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <a className="skipLink" href="#main-content">
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
