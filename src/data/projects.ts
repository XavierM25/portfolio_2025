import { TranslationKey } from '../types/translationKeys';

export interface Project {
  image: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  technologies: string[];
}

export const projects: Project[] = [
  {
    image: '/BoticBot.webp',
    titleKey: 'project1Title',
    descriptionKey: 'project1Description',
    technologies: ['React', 'Python', 'MySQL'],
  },
  {
    image: '/Jorzaba.webp',
    titleKey: 'project2Title',
    descriptionKey: 'project2Description',
    technologies: ['C#', 'MySQL'],
  },
  {
    image: '/FoodV.webp',
    titleKey: 'project3Title',
    descriptionKey: 'project3Description',
    technologies: ['Java', 'MySQL'],
  },
  {
    image: '/AchtDev.webp',
    titleKey: 'project4Title',
    descriptionKey: 'project4Description',
    technologies: ['Astro', 'NodeJS', 'ExpressJS', 'MongoDB'],
  },
];