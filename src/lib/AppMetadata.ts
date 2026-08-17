export interface AppMetadata {
  id: string;
  title: string;
  descripcion: string;
  icono: string;
  screenshots: string[];
  tags: string[];    
  badge?: 'pwa' | 'web' | 'android' | 'windows';
  author?: string;
  url?: string;
  download?: string;
  beta?: string;
  github?: string;
}
export const Projects: AppMetadata[] = [
  {
    id: "local-tunes-pwa",
    title: "Local Tunes",
    author: "lerma-dev",
    descripcion: "Reproductor de archivos locales rápido, ligero y con soporte offline total. Sin servidores, 100% privado.",
    icono: "/screenshots/local-tunes-pwa/icon.svg",
    screenshots: [
      "/screenshots/local-tunes-pwa/01.webp",
      "/screenshots/local-tunes-pwa/02.webp"
    ],
    tags: ["Audio Local", "Offline", "Privado"],
    badge: "pwa",
    url: "https://local-tunes.netlify.app/",
    beta: "https://lerma-dev.github.io/local-tunes",
    github: "https://github.com/lerma-dev/local-tunes",
  },
  {
    id: "local-tunes-desktop",
    title: "Local Tunes (Desktop)",
    author: "lerma-dev",
    descripcion: "Versión de escritorio con barra de título personalizada y reproducción continua en segundo plano. Sin servidores, 100% privado.",
    icono: "/screenshots/local-tunes-win/icon.svg",
    screenshots: [
      "/screenshots/local-tunes-win/01.webp",
    ],
    tags: ["Audio Activo", "Offline", "Privado"],  
    badge: "windows",
    download: "https://github.com/lerma-dev/local-tunes/releases/download/v1.6.6/local_tunes_v1.6.6.exe",
    github: "https://github.com/lerma-dev/local-tunes",
  },
  {
    id: "tictactoe-android",
    title: "Tic Tac Toe",
    author: "lerma-dev",
    descripcion: "El clásico juego de estrategia para partidas locales rápidas. Disfruta de una interfaz limpia, fluida y diseñada para toda la familia.",
    icono: "/screenshots/tic-tac-toe/icon.svg",
    screenshots: [
      "/screenshots/tic-tac-toe/01.webp",
      "/screenshots/tic-tac-toe/02.webp"
    ],
    tags: ["Juego", "Estrategia", "Clásico"],
    badge: "android",
    download: "https://github.com/lerma-dev/tictactoe-android/releases/download/V1.0/TicTacToe_v1.0.apk",
    github: "https://github.com/lerma-dev/tictactoe-android",
  },
  {
    id: "calculadora-web",
    title: "Calculadora Básica",
    author: "lerma-dev",
    descripcion: "Calculadora intuitiva y ligera diseñada para resolver operaciones matemáticas básicas de forma rápida.",
    icono: "/screenshots/calc-lerma/icon.svg",
    screenshots: [
      "/screenshots/calc-lerma/01.webp",
      "/screenshots/calc-lerma/02.webp"
    ],
    tags: ["Herramienta", "Matemáticas", "Utilidad"],
    badge: "pwa",
    url: "https://calc-lerma.netlify.app/",
    github: "https://github.com/lerma-dev/Calculadora-Web",
  },
];