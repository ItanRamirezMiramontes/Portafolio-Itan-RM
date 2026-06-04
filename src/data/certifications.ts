import { Certification } from '../types';

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Oracle One — Back-end Specialization',
    issuer: 'Oracle / Alura',
    issuerFull: 'Oracle One Tech Foundation and Advance — Alura LATAM',
    period: 'Sep 2025 – Mar 2026',
    status: 'completed',
    description: 'Programa intensivo de formación en back-end con especialización en tecnologías Oracle enterprise. Certificación completada en Spring Boot, Java, APIs REST y Oracle Cloud Infrastructure (OCI).',
    skills: ['Spring Boot', 'Java', 'APIs REST', 'OCI', 'Microservicios'],
    credentialUrl: 'https://app.aluracursos.com/program/certificate/b5ee8de2-1eac-4813-86c3-8fcb68df3feb?lang'
  },
  {
    id: '2',
    title: 'Samsung — Leadership',
    issuer: 'Samsung',
    issuerFull: 'Samsung Innovation Campus — Liderazgo',
    period: '2025',
    status: 'completed',
    description: 'Certificación en competencias de liderazgo estratégico y gestión de equipos técnicos otorgada por Samsung Innovation Campus.',
    skills: ['Liderazgo de equipos técnicos', 'Gestión estratégica', 'Comunicación'],
    credentialUrl: 'https://certificados.ceneval.edu.mx/credential/8731a22b-9fa3-4eff-b7f6-29918a1f8adf'
  },
  {
    id: '3',
    title: 'Santander X Explorer',
    issuer: 'Santander',
    issuerFull: 'Santander X Explorer — Validación de MVPs y Emprendimiento Tech',
    period: 'Ene – Abr 2026',
    status: 'completed',
    description: 'Programa Santander para emprendedores tecnológicos. Validación de MVPs funcionales y pivoteo de ideas en fase de ideación.',
    skills: ['Validación de MVPs', 'Modelo de negocio', 'Emprendimiento tecnológico']
  }
];
