import { Technology } from '../types';

export const technologies: Technology[] = [
  // Backend
  { 
    id: '1', 
    name: 'Java', 
    category: 'backend', 
    level: 'expert',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
  },
  { 
    id: '2', 
    name: 'Spring Boot', 
    category: 'backend', 
    level: 'expert',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
  },
  { 
    id: '22', 
    name: 'Python', 
    category: 'backend', 
    level: 'proficient',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  { id: '23', name: 'Frappe Framework', category: 'backend', level: 'proficient' },
  { id: '3', name: 'APIs REST', category: 'backend', level: 'expert' },
  { id: '4', name: 'Microservicios', category: 'backend', level: 'proficient' },
  
  // Frontend
  { 
    id: '5', 
    name: 'React', 
    category: 'frontend', 
    level: 'proficient',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  { 
    id: '6', 
    name: 'JavaScript', 
    category: 'frontend', 
    level: 'proficient',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  { 
    id: '7', 
    name: 'HTML5', 
    category: 'frontend', 
    level: 'proficient',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  { 
    id: '8', 
    name: 'CSS3', 
    category: 'frontend', 
    level: 'proficient',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },

  // Database
  { 
    id: '9', 
    name: 'SQL', 
    category: 'database', 
    level: 'proficient',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },

  // DevOps / Cloud
  { 
    id: '10', 
    name: 'Docker', 
    category: 'devops', 
    level: 'proficient',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
  },
  { id: '11', name: 'OCI', category: 'cloud', level: 'proficient' },
  { 
    id: '12', 
    name: 'Git', 
    category: 'devops', 
    level: 'proficient',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  { id: '13', name: 'GitHub', category: 'devops', level: 'proficient' },

  // Methodologies & Product
  { id: '14', name: 'Agile / Scrum', category: 'product', level: 'expert' },
  { id: '16', name: 'Ingeniería de Requerimientos', category: 'product', level: 'expert' },
  { id: '18', name: 'Validación de MVPs', category: 'product', level: 'proficient' },
  { id: '19', name: 'Pitch técnico', category: 'product', level: 'proficient' },
  { id: '21', name: 'Documentación técnica', category: 'product', level: 'proficient' },
];


