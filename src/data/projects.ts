import { Project } from '../types';

import globalAutopartsImage from '../assets/images/Proyectos_capturas/Global_Autoparts_E_commerce/catalogo.png';
import globalAutopartsImage2 from '../assets/images/Proyectos_capturas/Global_Autoparts_E_commerce/inventario.png';
import globalAutopartsImage3 from '../assets/images/Proyectos_capturas/Global_Autoparts_E_commerce/panel_ad,in.png';
import globalAutopartsImage4 from '../assets/images/Proyectos_capturas/Global_Autoparts_E_commerce/vista_producto.png';
import mirutagdlImage from '../assets/images/codecup/WhatsApp Image 2026-06-01 at 10.02.56 PM (2).jpeg';
import mirutagdlImage2 from '../assets/images/codecup/Capturas mvp/Captura de pantalla 2026-06-03 204831.png';
import mirutagdlImage3 from '../assets/images/codecup/Capturas mvp/Captura de pantalla 2026-06-03 205422.png';
import mirutagdlImage4 from '../assets/images/codecup/Capturas mvp/Captura de pantalla 2026-06-03 205449.png';
import seaCaceiImage from '../assets/images/SEA/sea-cacei-1.png';
import seaCaceiImage2 from '../assets/images/SEA/sea-cacei-2.png';
import seaCaceiImage3 from '../assets/images/SEA/sea-cacei-3.png';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'sea-cacei',
    title: 'SEA — Sistema de Evidencias Académicas CACEI',
    tagline: 'Liderazgo técnico y PM en sistema institucional para acreditación de carreras de ingeniería',
    problem: 'La UdeG CUTonalá necesita acreditarse ante CACEI. Mi objetivo es centralizar y estructurar 5 años de evidencias académicas con roles diferenciados para directores, coordinadores y docentes, eliminando el proceso manual anterior.',
    context: 'Proyecto institucional activo en UdeG CUTonalá. Mi rol es Project Manager Intern. Lidero la plataforma que alberga información histórica de 5 años, respetando la jerarquía oficial de la Universidad de Guadalajara.',
    constraints: [
      'Estructura de roles institucional fija y no negociable',
      'Integridad obligatoria de datos académicos sensibles de múltiples ciclos',
      'Gestión de stakeholders de alto nivel (Directores y Coordinadores)',
      'Coordinación de equipo distribuido mediante JIRA y Agile/Scrum'
    ],
    stack: ['Spring Boot', 'React', 'Docker', 'Microservicios', 'OCI', 'REST APIs', 'JIRA', 'Scrum'],
    architecture: 'Diseñé una arquitectura de microservicios donde la gestión de evidencias, el control de roles y los reportes corren de forma independiente. Utilizo Docker para asegurar la consistencia y OCI para el despliegue.',
    result: 'Sistema en desarrollo activo con requerimientos definidos mediante entrevistas directas. Coordino sprints quincenales y mantengo la documentación de flujos y errores versionada.',
    impact: 'Primer sistema centralizado de evidencias académicas para acreditación CACEI en CUTonalá. Liderazgo real sobre equipo multidisciplinario.',
    featured: true,
    status: 'in-progress',
    year: '2025',
    tags: ['Java', 'Spring Boot', 'Microservicios', 'Docker', 'OCI', 'React', 'Agile', 'PM', 'CACEI'],
    image: seaCaceiImage,
    images: [seaCaceiImage2, seaCaceiImage3]
  },
  {
    id: '3',
    slug: 'global-autoparts',
    title: 'Global Autoparts — Plataforma de Inventario',
    tagline: 'Solución de stock y rotación con React, microservicios y UX/UI centrada en inventarios.',
    problem: 'Las plataformas de autopartes necesitan visibilidad de inventario y rotación de stock en tiempo real, con componentes reutilizables y experiencia consistente para usuarios de almacén y ventas.',
    context: 'Proyecto enfocado en entender microservicios, componentes React, UX/UI y patrones de diseño aplicados a sistemas de inventario.',
    constraints: [
      'Mantener consistencia entre frontend y servicios distribuidos',
      'Diseñar componentes React reutilizables para paneles y fichas de producto',
      'Manejar rotación de stock y actualizaciones de inventario en tiempo real',
      'Alinear UX/UI con flujos de compra, búsqueda y catálogo de autopartes'
    ],
    stack: ['React', 'Microservicios', 'UX/UI', 'APIs', 'TypeScript', 'Componentes', 'Diseño'],
    architecture: 'Implementé un frontend modular en React con servicios desacoplados que exponen APIs de inventario. Añadí patrones de diseño para manejar estado, validaciones y actualización de stock eficiente.',
    result: 'Prototipo funcional con panel de inventario, vista de producto y control de rotación de stock. Mejora la comprensión de microservicios y diseño de plataformas de comercio B2B.',
    impact: 'Permite entender mejor los desafíos de inventario, UX y arquitectura distribuida en un entorno de autopartes.',
    featured: true,
    status: 'in-progress',
    year: '2026',
    tags: ['React', 'Microservicios', 'UX/UI', 'Inventario', 'APIs', 'Diseño', 'B2B'],
    image: globalAutopartsImage,
    images: [globalAutopartsImage2, globalAutopartsImage3, globalAutopartsImage4]
  },
  {
    id: '2',
    slug: 'mirutagdl',
    title: 'MiRutaGdl — Movilidad Accesible (CodeCup)',
    tagline: 'MVP finalista CodeCup: alternativa accesible para el transporte en Guadalajara',
    problem: 'Identifiqué que durante eventos masivos como el Mundial 2026, los turistas y personas con discapacidad enfrentan barreras que apps como Google Maps no resuelven. Propuse una solución enfocada en accesibilidad y facilidad de uso.',
    context: 'Hackathon CodeCUP. Desarrollé el MVP en 24 horas y presenté el pitch ante jueces del ecosistema emprendedor. Finalista en la categoría Idea.',
    constraints: [
      'Desarrollo de MVP funcional en 24 horas',
      'Foco extremo en accesibilidad y navegación simplificada',
      'Validación de modelo de negocio bajo presión',
      'Presentación ante inversores en la final "Beyond the world cup"'
    ],
    stack: ['React', 'JavaScript', 'REST APIs', 'Git'],
    architecture: 'Construí una SPA con React optimizada para dispositivos móviles. Integré APIs de transporte para rutas en tiempo real y apliqué principios de accesibilidad universal (alto contraste, navegación por voz).',
    result: '1er lugar en la categoría Movilidad y Transporte. El 19 de mayo presenté el proyecto en la final "Beyond the world cup" en la UAG ante inversores e interesados, demostrando la viabilidad técnica y comercial.',
    impact: 'Reconocimiento como 1er lugar CodeCUP 2026 y finalista nacional en categoría Idea.',
    featured: true,
    status: 'completed',
    year: '2026',
    tags: ['React', 'JavaScript', 'APIs', 'MVP', 'CodeCup', 'Accesibilidad', 'UAG'],
    image: mirutagdlImage,
    images: [mirutagdlImage2, mirutagdlImage3, mirutagdlImage4]
  }
];
