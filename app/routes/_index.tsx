import type { MetaFunction } from '@remix-run/node';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/header';
import Hero from '@/components/hero';
import AboutMe from '@/components/aboutme';
import Projects from '@/components/projects';
import Education from '@/components/education';
import Contact from '@/components/contact';

export const meta: MetaFunction = () => {
  return [
    { title: 'DaviX Studios' },
    {
      name: 'Estudiante de 7mo ciclo en la Universidad César Vallejo, especializado en programación FrontEnd con experiencia en frameworks como Angular, React y Astro. Enfocado en el desarrollo de aplicaciones web y móviles, optimización y mejora de la experiencia del usuario.',
      content: '¡Bienvenido a mi portfolio!',
    },
  ];
};

export default function Index() {
  return (
    <LanguageProvider>
      <div className="scroll-smooth">
        <Header />
        <Hero />
        <AboutMe />
        <Projects />
        <Education />
        <Contact />
      </div>
    </LanguageProvider>
  );
}
