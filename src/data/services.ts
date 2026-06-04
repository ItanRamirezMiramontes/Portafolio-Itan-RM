import { Service, ProcessStep } from '../types';

const standardProcess: ProcessStep[] = [
  {
    step: 1,
    title: 'Diagnóstico',
    description: 'Analizamos profundamente el problema de negocio y los objetivos antes de proponer cualquier solución técnica.',
    duration: 'Variable'
  },
  {
    step: 2,
    title: 'Ingeniería de requerimientos',
    description: 'Documentamos casos de uso, flujos de usuario y especificaciones técnicas claras para evitar retrabajos.',
    duration: '1-2 semanas'
  },
  {
    step: 3,
    title: 'Arquitectura',
    description: 'Diseñamos la estructura del sistema, selección de stack y modelado de datos pensando en escalabilidad y costos.',
    duration: '1 semana'
  },
  {
    step: 4,
    title: 'Desarrollo iterativo',
    description: 'Construcción modular con entregas constantes de valor, revisiones periódicas y ajustes sobre la marcha.',
    duration: '4-8 semanas (promedio MVP)'
  },
  {
    step: 5,
    title: 'Entrega y documentación',
    description: 'Handoff completo incluyendo código fuente, manuales técnicos, guías de despliegue y soporte inicial.',
    duration: '1 semana'
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Análisis y Definición Técnica',
    description: 'Ayudo a aterrizar ideas antes de programar. Me enfoco en descubrir qué construir realmente para que sea útil y viable.',
    problem: 'Tienes una idea o un proceso manual que duele, pero no sabes exactamente cómo transformarlo en una solución técnica clara.',
    deliverables: [
      'Documentación de casos de uso reales',
      'Definición de flujos y roles de usuario',
      'Análisis de requerimientos técnicos',
      'Estimación de esfuerzo y tecnología sugerida',
      'Diagramas de arquitectura base'
    ],
    idealFor: ['Emprendedores con ideas en etapa temprana', 'Negocios que buscan digitalizarse sin desperdiciar recursos', 'Equipos que necesitan claridad técnica antes de empezar'],
    process: standardProcess
  },
  {
    id: '2',
    title: 'Desarrollo de MVP Full Stack',
    description: 'Construyo productos mínimos viables que funcionan. No solo prototipos, sino bases sólidas que pueden crecer en el futuro.',
    problem: 'Necesitas validar una idea con usuarios reales rápidamente, sin complicaciones innecesarias pero con tecnología profesional.',
    deliverables: [
      'Aplicación web funcional (Frontend + Backend)',
      'Desarrollo con Java/Spring Boot o Node.js',
      'Interfaz de usuario moderna con React',
      'Base de datos estructurada y segura',
      'Deploy inicial para pruebas con usuarios'
    ],
    idealFor: ['Startups que necesitan demostrar tracción', 'Proyectos con presupuestos acotados que buscan calidad', 'Emprendedores que valoran la agilidad y el aprendizaje constante'],
    process: standardProcess
  },
  {
    id: '3',
    title: 'Backend & APIs Robustas',
    description: 'Diseño la lógica y el corazón de las aplicaciones. Me especializo en crear sistemas que se comunican bien y son fáciles de mantener.',
    problem: 'Tu sistema actual necesita conectarse con otros, está lento o simplemente necesitas una base técnica firme para escalar.',
    deliverables: [
      'Diseño y desarrollo de APIs REST',
      'Arquitectura modular y limpia',
      'Containerización con Docker',
      'Documentación técnica de la API (Swagger)',
      'Configuración de infraestructura cloud (OCI/Vercel)'
    ],
    idealFor: ['Empresas que necesitan modernizar sus procesos', 'Negocios que requieren integrar diferentes herramientas', 'Proyectos que han crecido y necesitan una base más sólida'],
    process: standardProcess
  }
];
