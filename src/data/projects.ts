export interface Project {
  image: string;
  title: string;
  description: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    image: '/BoticBot.webp',
    title: 'BoticBot - Tu IA para la salud',
    description:
      "Como proyecto universitario, desarrollé una página web para la farmacia 'Pharmacentral'. Utilicé React y Python, implementando inteligencia artificial mediante Gemini. La IA permite brindar atención al cliente a través de un chat, donde los usuarios pueden introducir sus síntomas, y el sistema responderá con posibles enfermedades y sugerencias relacionadas.",
    technologies: ['React', 'Python', 'MySQL'],
  },
  {
    image: '/Jorzaba.webp',
    title: 'Representaciones Jorzaba',
    description:
      "Como proyecto universitario, desarrollé una aplicación de escritorio para la empresa 'Representaciones Jorzaba', destinada al manejo de inventarios. Para su desarrollo, utilicé Visual Studio Community.",
    technologies: ['C#', 'MySQL'],
  },
  {
    image: '/FoodV.webp',
    title: 'FoodV - Pedidos de comida',
    description:
      "Como proyecto universitario, desarrollé una aplicación móvil para el restaurante 'Fresco', enfocada en la venta de productos y la gestión de pedidos para delivery dentro del campus universitario. Para su desarrollo, utilicé Netbeans.",
    technologies: ['Java', 'MySQL'],
  },
  {
    image: '/AchtDev.webp',
    title: 'AchtDev - Educación para todos',
    description:
      'Como proyecto universitario, desarrollé una página web para la academia GuimarBot, enfocada en el aprendizaje virtual, similar a plataformas como Platzi o EdTeam. Para su desarrollo, utilicé Visual Studio Code.',
    technologies: ['Astro', 'NodeJS', 'ExpressJS', 'MongoDB'],
  },
];