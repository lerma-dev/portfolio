export interface Metadata {
  title: string;
  descripcion: string;
  canonical: string;
  keywords: string;
  image: string;
}

export const Main: Metadata = {
  title: "Portal - lerma.dev",
  descripcion: "Portal oficial de lerma.dev. Encuentra aplicaciones web, PWA, APKs y ejecutables creados por Héctor Lerma, libres de anuncios y de uso libre.",
  keywords: "APK Gratuitos, Aplicaciones, Software Libre, Libres Anuncios",
  canonical: "/",
  image: "/og-image.webp"
}

export const About: Metadata = {
  title: "Sobre el Portal - lerma.dev",
  descripcion: "Conoce el propósito detrás del portal de lerma-dev. Herramientas y aplicaciones libres de anuncios, enfocadas en la privacidad, el código abierto y el software independiente.",
  keywords: "Portal Oficial, Software Libre, Privacidad, Código Abierto, Apps Sin Anuncios, lerma-dev",
  canonical: "/about",
  image: "/og-image.webp"
};

export const AboutMe: Metadata = {
  title: "Sobre mí - lerma.dev",
  descripcion: "Conoce a Héctor Lerma, desarrollador de software enfocado en aplicaciones privadas, código abierto y herramientas sin anuncios.",
  keywords: "Héctor Lerma, lerma-dev, Desarrollador Software, Proyectos Open Source, Portafolio",
  canonical:  "/about-me",
  image: "/lerma-dev.webp"
};
