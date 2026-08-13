export interface AppMetadata {
  id: string;
  title: string;
  descripcion: string;
  icono: string;
  screenshots: string[];
  tags: string[];    
  badge?: 'pwa' | 'web' | 'mobile' | 'desktop';
  author?: string;
  url?: string;
  download?: string;
  beta?: string;
  github?: string;
  shareUrl?: string;
}

export const Projects: AppMetadata[] = [
  {
    id: "local-tunes-pwa",
    title: "Local Tunes",
    author: "lerma-dev",
    descripcion: "Reproductor de archivos locales rápido, ligero y con soporte offline total. Sin servidores, 100% privado.",
    icono: "/screenshots/local-tunes-pwa/icon-pwa.svg",
    screenshots: [
      "/screenshots/local-tunes-pwa/screen_desktop.webp",
      "/screenshots/local-tunes-pwa/screen_mobile.webp"
    ],
    tags: ["Audio Local", "Offline", "Privado"],
    badge: "pwa",
    url: "https://local-tunes.netlify.app/",
    beta: "https://lerma-dev.github.io/local-tunes",
    github: "https://github.com/lerma-dev/local-tunes",
    shareUrl: "https://lerma-dev.github.io/#local-tunes-pwa"
  },
  {
    id: "local-tunes-desktop",
    title: "Local Tunes (Desktop)",
    author: "lerma-dev",
    descripcion: "Versión de escritorio con barra de título personalizada y reproducción continua en segundo plano. Sin servidores, 100% privado.",
    icono: "/screenshots/local-tunes-win/icon-desktop.svg",
    screenshots: [
      "/screenshots/local-tunes-win/screen_main.webp",
    ],
    tags: ["Audio Activo", "Offline", "Privado"],  
    badge: "desktop",
    download: "https://github.com/lerma-dev/local-tunes/releases/download/v1.6.6/local_tunes_v1.6.6.exe",
    github: "https://github.com/lerma-dev/local-tunes",
    shareUrl: "https://lerma-dev.github.io/#local-tunes-desktop"
  },
  {
    id: "tictactoe-android",
    title: "Tic Tac Toe",
    author: "lerma-dev",
    descripcion: "El clásico juego de estrategia para partidas locales rápidas. Disfruta de una interfaz limpia, fluida y diseñada para toda la familia.",
    icono: "/screenshots/tic-tac-toe/ic_launcher.svg",
    screenshots: [
      "/screenshots/tic-tac-toe/screen_home.webp",
      "/screenshots/tic-tac-toe/screen_game.webp"
    ],
    tags: ["Juego", "Estrategia", "Clásico"],
    badge: "mobile",
    download: "https://github.com/lerma-dev/tictactoe-android/releases/download/V1.0/TicTacToe_v1.0.apk",
    github: "https://github.com/lerma-dev/tictactoe-android",
    shareUrl: "https://lerma-dev.github.io/#tictactoe-android"
  },
  {
    id: "calculadora-web",
    title: "Calculadora Básica",
    author: "lerma-dev",
    descripcion: "Calculadora intuitiva y ligera diseñada para resolver operaciones matemáticas básicas de forma rápida.",
    icono: "/screenshots/calc-lerma/icon.svg",
    screenshots: [
      "/screenshots/calc-lerma/screen_desktop.webp",
      "/screenshots/calc-lerma/screen_mobile.webp"
    ],
    tags: ["Herramienta", "Matemáticas", "Utilidad"],
    badge: "pwa",
    url: "https://calc-lerma.netlify.app/",
    github: "https://github.com/lerma-dev/Calculadora-Web",
    shareUrl: "https://lerma-dev.github.io/#calculadora-web"
  },
];