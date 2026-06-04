import { TimelineEntry } from '../types';

// Import images
import bwc1 from '../assets/images/Beyond_the_world_cup/WhatsApp Image 2026-05-21 at 9.08.03 AM (1).jpeg';
import bwc2 from '../assets/images/Beyond_the_world_cup/WhatsApp Image 2026-05-21 at 9.08.03 AM.jpeg';
import bwc3 from '../assets/images/Beyond_the_world_cup/WhatsApp Image 2026-05-21 at 9.35.36 AM.jpeg';
import bwc4 from '../assets/images/Beyond_the_world_cup/WhatsApp Image 2026-05-21 at 9.47.47 AM.jpeg';

import cc1 from '../assets/images/codecup/WhatsApp Image 2026-06-01 at 10.02.56 PM (2).jpeg';
import cc2 from '../assets/images/codecup/WhatsApp Image 2026-06-01 at 10.02.56 PM.jpeg';

import comunidadLogo from '../assets/images/comunidad_logo.jpeg';

export const timeline: TimelineEntry[] = [
  {
    id: '10',
    year: '2026',
    period: '2026 – presente',
    title: 'Colaborador, comité de organización y voluntario',
    organization: 'Comunidad "Guías del código"',
    type: 'liderazgo',
    description: 'Lidero y co-creo una comunidad enfocada en conectar el talento universitario con empresas y habilidades clave del sector tecnológico. Facilitamos el crecimiento profesional mediante mentoría y vinculación real.',
    highlights: [
      'Co-creación de una red de talento universitario orientada a la industria',
      'Vinculación de estudiantes con oportunidades en empresas tecnológicas',
      'Desarrollo de habilidades técnicas y blandas en la comunidad de desarrolladores'
    ],
    tags: ['Comunidad', 'Liderazgo', 'Networking', 'Talento'],
    featured: true,
    images: [comunidadLogo]
  },
  {
    id: '0',
    year: '2026',
    period: '19 Mayo 2026',
    title: 'Finalista — "Beyond the world cup"',
    organization: 'Universidad Autónoma de Guadalajara (UAG)',
    type: 'hackathon',
    description: 'Presenté el MVP de MiRutaGdl en la gran final de CodeCup ante inversores y expertos del ecosistema. Defendí la viabilidad técnica y el impacto social de la solución en el contexto del Mundial 2026.',
    highlights: [
      'Pitch final ante panel de inversores internacionales',
      'Demostración de MVP funcional ante stakeholders del transporte',
      'Consolidación del proyecto como finalista nacional en categoría Idea'
    ],
    tags: ['Pitch', 'MVP', 'CodeCup', 'UAG'],
    featured: true,
    images: [bwc1, bwc2, bwc3, bwc4]
  },
  {
    id: '2',
    year: '2026',
    period: '20–21 Marzo 2026',
    title: '1er Lugar — CodeCUP 2026',
    organization: 'CodeCUP',
    type: 'hackathon',
    description: 'Desarrollé en 24 horas MiRutaGdl, una solución de movilidad accesible para el Mundial 2026. Logré el primer lugar en la categoría de Movilidad y Transporte.',
    highlights: [
      '1er lugar categoría Movilidad y Transporte',
      'MVP funcional con accesibilidad universal construido en solitario/equipo en 24h',
      'Finalista nacional en la categoría Idea'
    ],
    tags: ['React', 'Hackathon', 'Accesibilidad', 'CodeCup'],
    featured: true,
    images: [cc1, cc2]
  },
  {
    id: '4',
    year: '2026',
    period: 'Enero 2026',
    title: 'Ganador — "Tus ideas valen 10k"',
    organization: 'Compartamos Banco',
    type: 'hackathon',
    description: 'Mi mayor reto en esta convocatoria fue generar un modelo de negocio sólido y un elevator pitch efectivo. Logré convencer a jueces del ámbito financiero sobre la viabilidad de mi propuesta.',
    highlights: [
      'Ganador del premio de $10,000 MXN',
      'Creación de modelo de negocio y strategy de monetización',
      'Presentación de Elevator Pitch ante expertos financieros'
    ],
    tags: ['Pitch', 'Negocios', 'Fintech'],
    featured: false
  },
  {
    id: '5',
    year: '2025',
    period: 'Septiembre 2025 – presente',
    title: 'Project Manager Intern / SEA CACEI',
    organization: 'Universidad de Guadalajara (UdeG) — CUTonalá',
    type: 'liderazgo',
    description: 'Liderazgo del Sistema de Evidencias Académicas para la acreditación CACEI. Gestión de roles institucionales, levantamiento de requerimientos con stakeholders de alto nivel y coordinación de equipo bajo Scrum.',
    highlights: [
      'Arquitectura de microservicios coordinada con equipo bajo Scrum/JIRA',
      'Requerimientos documentados con directores y coordinadores institucionales',
      'Gestión de plataforma con 5 años de evidencias académicas históricas'
    ],
    tags: ['PM', 'Scrum', 'CACEI', 'Microservicios', 'JIRA'],
    featured: true
  },
  {
    id: '6',
    year: '2026',
    period: 'Septiembre 2025 – Marzo 2026',
    title: 'Oracle One — Back-end Specialization',
    organization: 'Oracle / Alura',
    type: 'certificacion',
    description: 'Certificación oficial Oracle One Tech Foundation + Advance. Formación intensiva en el ecosistema Java enterprise y despliegue en la nube.',
    highlights: [
      'Especialización en Spring Boot, Java y APIs REST',
      'Infraestructura cloud con Oracle Cloud Infrastructure (OCI)',
      'Desarrollo de microservicios con estándares de la industria'
    ],
    tags: ['Spring Boot', 'Java', 'OCI', 'Backend'],
    featured: false,
    credentialUrl: 'https://app.aluracursos.com/program/certificate/b5ee8de2-1eac-4813-86c3-8fcb68df3feb?lang'
  },
  {
    id: '7',
    year: '2026',
    period: '2025',
    title: 'Samsung Innovation Campus — Liderazgo',
    organization: 'Samsung / Ceneval',
    type: 'certificacion',
    description: 'Certificación de competencias en liderazgo y gestión de equipos técnicos, validada por Ceneval.',
    highlights: [
      'Liderazgo estratégico para equipos multidisciplinarios',
      'Gestión de proyectos técnicos y toma de decisiones',
      'Competencias de comunicación profesional certificadas'
    ],
    tags: ['Liderazgo', 'Soft Skills', 'Gestión'],
    featured: false,
    credentialUrl: 'https://certificados.ceneval.edu.mx/credential/8731a22b-9fa3-4eff-b7f6-29918a1f8adf'
  },
  {
    id: '9',
    year: '2025',
    period: 'Enero – Mayo 2025',
    title: 'Technical Support & Software Intern',
    organization: 'Kire Informática',
    type: 'internship',
    description: 'Trabajé en Total ERP digitalizando procesos empresariales. Mi enfoque fue entender los dolores del cliente para implementar módulos de CRM e inventarios usando Python y Frappe.',
    highlights: [
      'Implementación de módulos CRM y Gestión de Inventarios en Total ERP',
      'Modelado de procesos mediante diagramas de flujo y definición de roles/permisos',
      'Preparación de módulos utilizando Python, Frappe Framework, JS y HTML/CSS'
    ],
    tags: ['Python', 'Frappe', 'ERP', 'CRM', 'Digitalización'],
    featured: true
  },
];
