import { CommunityItem } from '../types';
import comunidadLogo from '../assets/images/comunidad_logo.jpeg';

export const communityItems: CommunityItem[] = [
  {
    id: '1',
    name: 'Guías del código',
    role: 'Colaborador, comité de organización y voluntario',
    description: 'Comunidad dedicada a conectar el talento universitario con empresas del sector tecnológico, enfocándose en el desarrollo de habilidades clave y la vinculación profesional real.',
    impact: [
      'Conexión directa entre estudiantes y ecosistema empresarial.',
      'Fomento de habilidades técnicas y profesionales demandadas.',
      'Creación de una red de apoyo y mentoría para desarrolladores junior.'
    ],
    link: 'https://www.linkedin.com/posts/itan-gabriel-ramirez-miramontes-05594536a_ingenieraedaencienciascomputacionales-softwareengineering-ugcPost-7458727205909557248-3JLP',
    image: comunidadLogo
  }
];
