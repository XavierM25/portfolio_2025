import type { MetaFunction } from '@remix-run/node';
import Header from '@/components/header';

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
    <>
      <Header />
    </>
  );
}
