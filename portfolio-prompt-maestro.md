# PROMPT MAESTRO — PORTFOLIO PROFESIONAL B2B

## Instrucciones completas para construcción paso a paso

---

> **Cómo usar este prompt:**
> Copia y pega cada sección en tu herramienta de IA (Claude, Cursor, Copilot, etc.) en el orden indicado.
> Cada bloque es autónomo. Incluye siempre el contexto del bloque anterior cuando sea relevante.

---

## CONTEXTO GLOBAL (incluir en TODOS los prompts)

```
Estoy construyendo el portfolio profesional de ITAN GABRIEL RAMÍREZ MIRAMONTES, ingeniero en Ciencias Computacionales (UdeG CUTonalá, 2023–2027), con perfil product-minded orientado a consultoría tecnológica para startups y MiPyMEs.

Contacto real del propietario:
- Nombre: Itan Ramírez
- Email: itanrami05@gmail.com
- GitHub: ItanRamirezMiramontes
- LinkedIn: ItanRamirez
- Ciudad: Guadalajara, Jalisco, México

Stack del proyecto (frontend del portfolio):
- React + Vite + TypeScript
- TailwindCSS (utility-first, sin clases saturadas)
- shadcn/ui (componentes base, sin sobreescribir estilos internos del tema)
- Framer Motion (solo microinteracciones: fadeUp, stagger, hover — nada invasivo)
- React Router DOM v6
- Lucide React (iconografía)
- react-helmet-async (SEO)

Stack técnico real de Itan (para mostrar en el sitio — NO cambiar esto):
- Lenguajes: Java, JavaScript (ES6+), SQL, HTML5, CSS3
- Frameworks: Spring Boot, React
- Herramientas: Git, GitHub, Docker, JIRA
- Cloud e Infra: Oracle Cloud Infrastructure (OCI), Microservicios, APIs REST
- Metodologías: Agile (Scrum), Kanban, Ingeniería de Requerimientos
- Certificaciones: Oracle One (Alura) — Back-end con Spring Boot, Java, APIs REST y OCI; Samsung Innovation Campus — IA y Liderazgo; Santander X Explorer — Validación de MVPs

Reglas absolutas de código:
- TypeScript estricto: sin `any`, interfaces en `src/types/index.ts`
- Alias de paths: `@/` apunta a `src/`
- Sin hardcode de contenido en JSX: todo viene de `src/data/`
- Mobile-first en todos los componentes
- Accesibilidad: HTML semántico, aria-labels donde aplica, contraste correcto
- Sin console.log en producción
- Componentes pequeños y con responsabilidad única

Estética obligatoria:
- Limpio, serio, técnico, premium
- Sin glassmorphism, sin neón, sin partículas, sin scroll hijacking
- Whitespace generoso, jerarquía tipográfica fuerte, grids limpios
- Animaciones: solo revelan contenido, no distraen

Responde siempre con código completo y funcional. No uses placeholders como `// TODO` o `...rest of code`.
```

---

## PASO 1 — SCAFFOLDING E INSTALACIÓN

```
[INCLUIR CONTEXTO GLOBAL]

Genera el setup inicial completo del proyecto. Necesito:

1. El comando exacto para crear el proyecto con Vite + React + TypeScript
2. El listado completo de dependencias a instalar (producción y dev) con sus versiones estables actuales
3. El archivo `vite.config.ts` configurado con:
   - Plugin de TailwindCSS v4 (@tailwindcss/vite)
   - Alias de path `@` → `src/`
   - Build optimizado con manual chunks para: vendor (react, react-dom), router (react-router-dom), motion (framer-motion), ui (shadcn)
4. El archivo `tsconfig.json` con:
   - `strict: true`
   - Path alias `@/*` → `./src/*`
   - Target ES2020
5. El archivo `tsconfig.node.json` correspondiente
6. El script de bash para crear TODA la estructura de carpetas de una vez:
   src/assets/{images,icons,fonts}
   src/components/{ui,layout,sections,shared}
   src/pages
   src/data
   src/hooks
   src/utils
   src/types
   src/styles
   src/routes
7. El archivo `.gitignore` profesional para este stack
8. El archivo `.env.example` vacío con comentarios de qué variables podría necesitar el proyecto

No generes aún ningún componente React. Solo configuración.
```

---

## PASO 2 — SISTEMA DE TIPOS

```
[INCLUIR CONTEXTO GLOBAL]

Crea el archivo `src/types/index.ts` con TODAS las interfaces TypeScript del proyecto.

Necesito interfaces para:

1. `Project`
   - id: string
   - slug: string (para URL)
   - title: string
   - tagline: string (una línea de impacto)
   - problem: string
   - context: string (startup, universidad, empresa, etc.)
   - constraints: string[] (tiempo, presupuesto, usuarios)
   - stack: string[]
   - architecture: string (descripción de decisiones técnicas)
   - result: string
   - impact: string (métrica o resultado concreto si existe)
   - featured: boolean
   - status: 'completed' | 'in-progress' | 'archived'
   - year: string
   - tags: string[]

2. `TimelineEntry`
   - id: string
   - year: string
   - period: string (ej: "Ene 2023 – Mar 2023")
   - title: string
   - organization: string
   - type: 'hackathon' | 'incubadora' | 'internship' | 'proyecto' | 'liderazgo' | 'certificacion' | 'educacion'
   - description: string
   - highlights: string[] (máximo 3 bullets de impacto)
   - tags: string[]
   - featured: boolean

3. `Service`
   - id: string
   - title: string
   - description: string
   - problem: string (qué problema del cliente resuelve)
   - deliverables: string[]
   - idealFor: string[] (tipos de cliente)
   - process: ProcessStep[]

4. `ProcessStep`
   - step: number
   - title: string
   - description: string
   - duration: string (estimación)

5. `Technology`
   - id: string
   - name: string
   - category: 'frontend' | 'backend' | 'cloud' | 'database' | 'devops' | 'architecture' | 'product'
   - level: 'expert' | 'proficient' | 'familiar'
   - icon?: string

6. `NavItem`
   - label: string
   - href: string
   - external?: boolean

7. `SeoProps`
   - title: string
   - description: string
   - canonical?: string
   - ogImage?: string

8. `Certification`
   - id: string
   - title: string
   - issuer: string (nombre corto, para badges)
   - issuerFull: string (nombre completo del programa)
   - period: string
   - status: 'completed' | 'in-progress'
   - description: string
   - skills: string[]
   - credentialUrl?: string

Todas las interfaces deben exportarse individualmente. Agrega comentarios JSDoc breves donde el nombre no sea autoexplicativo.
```

---

## PASO 3 — ARCHIVOS DE DATA

```
[INCLUIR CONTEXTO GLOBAL]
[INCLUIR src/types/index.ts completo]

Crea los 4 archivos de data tipados con la información REAL de Itan Ramírez extraída de su CV. No inventes ni suavices datos — usa exactamente lo que está documentado.

---

### `src/data/projects.ts`

Crea un array `projects: Project[]` con los siguientes proyectos reales:

**Proyecto 1 — SEA CACEI (Sistema de Evidencias Académicas)**
- title: "SEA — Sistema de Evidencias Académicas CACEI"
- tagline: "Liderazgo técnico y PM en sistema institucional para acreditación de carreras de ingeniería"
- problem: "La UdeG CUTonalá necesita acreditarse ante CACEI (organismo acreditador de carreras de ingeniería en México). Para lograrlo, debe centralizar y estructurar 5 años de evidencias académicas por ciclo escolar, con roles diferenciados para directores de división, coordinadores de carrera y docentes. Hasta ahora ese proceso era manual, disperso y sin trazabilidad."
- context: "Proyecto institucional activo en UdeG CUTonalá. Rol de Itan: Project Manager Intern. Sept 2025 – presente. La plataforma debe albergar información histórica de 5 años hacia atrás por ciclo, respetando la estructura de roles oficial de la Universidad de Guadalajara."
- constraints: [
    "Estructura de roles institucional fija: la jerarquía UdeG no es negociable y debe reflejarse exactamente en el sistema",
    "Datos académicos sensibles de múltiples ciclos escolares con integridad obligatoria",
    "Stakeholders de distintos niveles: directores, coordinadores y docentes con necesidades distintas",
    "Equipo distribuido coordinado en JIRA con metodología Agile/Scrum",
    "Ningún proceso puede interrumpir las operaciones académicas en curso"
  ]
- stack: ["Spring Boot", "React", "Docker", "Microservicios", "Oracle Cloud Infrastructure (OCI)", "REST APIs", "JIRA", "Scrum"]
- architecture: "Arquitectura de microservicios donde cada módulo funcional (gestión de evidencias, control de roles y permisos, reportes de acreditación por ciclo, administración de usuarios) corre de forma independiente. APIs REST como contrato entre servicios. Containerización con Docker para consistencia entre entornos de desarrollo y producción. Deploy en OCI. La separación por módulos permite que el sistema escale por área sin afectar otros componentes."
- result: "Sistema en desarrollo activo con fases completadas de requerimientos funcionales y no funcionales. Roles y permisos definidos mediante entrevistas directas con directores y coordinadores. Equipo técnico coordinado con sprints quincenales. Documentación de errores y flujos levantada y versionada."
- impact: "Primer sistema centralizado de evidencias académicas para acreditación CACEI en CUTonalá. Liderazgo real sobre equipo multidisciplinario en entorno institucional con stakeholders de alto nivel."
- featured: true
- status: 'in-progress'
- year: "2025"
- tags: ["Java", "Spring Boot", "Microservicios", "Docker", "OCI", "React", "Agile", "PM", "Requerimientos", "CACEI"]

**Proyecto 2 — CodeCUP Hackathon (Movilidad / Mundial 2026)**
- title: "Move-it — Movilidad Accesible para el Mundial 2026"
- tagline: "MVP ganador CodeCUP: alternativa accesible a Google Maps para el Mundial de Guadalajara"
- problem: "Durante el Mundial 2026 en Guadalajara, miles de turistas internacionales enfrentarán barreras de idioma, desconocimiento del sistema de transporte y falta de accesibilidad para personas con discapacidad. Las apps existentes como Google Maps no abordan estas necesidades específicas en contexto de evento masivo."
- context: "Hackathon CodeCUP, categoría Movilidad y Transporte. 20–21 de marzo de 2026. Desarrollo en 24 horas con equipo pequeño. Presentación ante panel de jueces con pitch de modelo de negocio incluido."
- constraints: [
    "24 horas totales de desarrollo — arquitectura y decisiones técnicas en los primeros 30 minutos",
    "Demo funcional requerida para el pitch, no solo wireframes",
    "Audiencia con necesidades diversas: turistas internacionales, personas con discapacidad, visitantes no hispanohablantes",
    "Validación simultánea del modelo de negocio junto al desarrollo técnico"
  ]
- stack: ["React", "JavaScript", "REST APIs", "Git"]
- architecture: "SPA con React para la interfaz de usuario con soporte multiidioma básico. Integración con APIs de transporte público de Guadalajara para rutas en tiempo real. Diseño orientado a accesibilidad: contraste alto, navegación simplificada, soporte para lectores de pantalla. Arquitectura deliberadamente simple para ser deployable dentro del deadline del hackathon."
- result: "1er lugar categoría Movilidad y Transporte. MVP funcional demostrado en vivo ante jueces. Pitch de modelo de negocio y viabilidad técnica presentado y validado. Posicionado también como finalista en categoría Idea."
- impact: "1er lugar CodeCUP 2026 — Movilidad y Transporte. Finalista categoría Idea."
- featured: true
- status: 'completed'
- year: "2026"
- tags: ["React", "JavaScript", "APIs", "MVP", "Hackathon", "Accesibilidad", "Pitch", "Multiidioma"]

**Proyecto 3 — Kire Informática + Global Autoparts**
- title: "ERP & API de Inventario — Kire Informática / Global Autoparts"
- tagline: "Primer contacto con procesos empresariales reales: de los dolores del cliente al sistema funcionando"
- problem: "Las empresas cliente de Kire Informática no sabían exactamente qué querían digitalizar — solo sabían que tenían procesos manuales dolorosos. La falta de claridad en requerimientos y la necesidad de demos personalizadas por perfil de negocio era el cuello de botella del proceso de implementación. Global Autoparts necesitaba una API REST confiable para manejar inventario y ventas."
- context: "Internship en Kire Informática como Technical Support & Software Intern. Enero – Mayo 2025. Primer acercamiento a clientes empresariales reales con procesos manuales y baja madurez tecnológica."
- constraints: [
    "Clientes que no podían articular sus requerimientos con claridad — el dolor era evidente, la solución no",
    "Cada cliente tenía un perfil de negocio distinto que requería configuración única del ERP",
    "Presupuesto y timelines ajustados propios de PyMEs",
    "Necesidad de documentar flujos existentes antes de poder proponer automatizaciones"
  ]
- stack: ["Java", "Spring Boot", "Docker", "REST APIs", "Microservicios", "React", "JavaScript", "HTML", "CSS"]
- architecture: "API REST para Global Autoparts construida con arquitectura de microservicios: módulo de inventario y módulo de ventas independientes, comunicados vía REST. Containerización con Docker para portabilidad entre entornos de cliente. Para las demos del ERP: componentes en React con estructura modular — primer acercamiento profundo a React orientado a componentes reutilizables. Demos en HTML/CSS/JS para presentaciones comerciales rápidas."
- result: "ERP implementado con éxito en múltiples clientes con demos personalizadas. API REST de Global Autoparts funcional, documentada y containerizada con Docker. Levantamiento de requerimientos completo entregado por cliente."
- impact: "Comprensión directa de cómo las empresas viven sus dolores tecnológicos — base para el enfoque de consultoría actual. Primer uso de React en arquitectura de componentes en entorno productivo real."
- featured: true
- status: 'completed'
- year: "2025"
- tags: ["Java", "Spring Boot", "Docker", "Microservicios", "REST APIs", "React", "ERP", "Requerimientos", "Digitalización"]

**Proyecto 4 — App Beca Alimentaria UdeG (Full Stack Intern)**
- title: "Digitalización Beca Alimentaria — CUTonalá"
- tagline: "De proceso manual a sistema digital: requerimientos, arquitectura e implementación para programa de impacto social"
- problem: "El programa de Beca de Alimentos del CUTonalá opera manualmente, sin visibilidad del estatus para los estudiantes beneficiados ni herramientas de gestión para los operadores del programa. Estudiantes de bajos recursos pierden tiempo y acceso por falta de información."
- context: "UdeG CUTonalá — Full Stack Developer Intern. Marzo 2026 – presente. El trabajo va mucho más allá del desarrollo: incluye levantamiento de requerimientos, modelado de procesos actuales, implementación técnica, diagramas de arquitectura y análisis de costos de digitalización."
- constraints: [
    "Usuarios finales con variada alfabetización digital — UX debe ser extremadamente simple",
    "Datos sensibles de estudiantes (información económica y académica) con manejo seguro obligatorio",
    "Integración con sistemas institucionales existentes de la UdeG",
    "Análisis de costos de digitalización incluido como entregable — no solo el código"
  ]
- stack: ["Spring Boot", "React", "REST APIs", "Docker"]
- architecture: "Levantamiento de requerimientos funcionales y no funcionales con usuarios del programa (coordinadores y beneficiados). Modelado de procesos actuales (AS-IS) y propuesta de procesos digitalizados (TO-BE). Diagrama de arquitectura completo antes de escribir código. Estimación de costos de implementación y mantenimiento. Backend con Spring Boot, frontend mobile-first con React, comunicación vía REST APIs."
- result: "Proceso de requerimientos y diagramas completado. Implementación en curso con entregables documentados en cada fase."
- impact: "Digitalización de acceso a apoyos sociales para estudiantes de escasos recursos. Proceso con documentación completa — no solo código."
- featured: false
- status: 'in-progress'
- year: "2026"
- tags: ["Spring Boot", "React", "REST APIs", "Requerimientos", "Diagramas", "Impacto social", "Digitalización"]

---

### `src/data/timeline.ts`

Crea un array `timeline: TimelineEntry[]` con las siguientes entradas REALES en orden cronológico descendente (más reciente primero):

1. **UdeG — Full Stack Developer Intern** (Marzo 2026 – presente)
   - type: 'internship'
   - organization: "Universidad de Guadalajara (UdeG) — CUTonalá"
   - description: "Trabajando en la digitalización del programa de Beca de Alimentos del CUTonalá. El trabajo no es solo desarrollo: incluye levantamiento de requerimientos, modelado de procesos AS-IS y TO-BE, diagramas de arquitectura, estimación de costos de digitalización e implementación con Spring Boot y React."
   - highlights: ["Requerimientos funcionales y no funcionales levantados con coordinadores del programa", "Diagramas de arquitectura y flujos de proceso documentados como entregables formales", "Implementación Full Stack: React (frontend mobile-first) + Spring Boot (backend) + REST APIs"]

2. **CodeCUP — 1er Lugar Movilidad y Transporte** (20–21 Marzo 2026)
   - type: 'hackathon'
   - organization: "CodeCUP 2026"
   - description: "Desarrollo de MVP en 24 horas para mejorar la movilidad urbana durante el Mundial 2026 en Guadalajara. La solución abordó accesibilidad para turistas internacionales con barreras de idioma y personas con discapacidad — un problema real que Google Maps no resuelve en contexto de evento masivo."
   - highlights: ["1er lugar categoría Movilidad y Transporte", "MVP funcional con soporte multiidioma y accesibilidad construido en 24 horas", "Pitch de modelo de negocio y solución técnica ante panel de jueces — finalista categoría Idea"]

3. **Santander X Explorer** (Enero – Abril 2026)
   - type: 'certificacion'
   - organization: "Santander"
   - description: "Programa de formación en emprendimiento tecnológico enfocado en validación de MVPs, pivoteo de ideas y construcción de infraestructura para negocios digitales."
   - highlights: ["Validación de MVPs funcionales para startups en etapa temprana", "Metodología de pivoteo e ideación para emprendimientos tecnológicos", "Formación en construcción de infraestructura y modelo de negocio tech"]

4. **Ganador — "Tus ideas valen 10k" — Compartamos Banco** (Enero 2026)
   - type: 'hackathon'
   - organization: "Compartamos Banco"
   - description: "Convocatoria de emprendimiento donde Itan lideró tanto la presentación comercial como el desarrollo técnico para demostrar viabilidad funcional del proyecto ante jurados expertos."
   - highlights: ["Ganador de convocatoria — premio de $10,000 MXN", "Pitch comercial liderado ante panel de jueces expertos", "Desarrollo técnico del MVP para demostrar viabilidad funcional del negocio"]

5. **UdeG — Project Manager Intern / SEA CACEI** (Septiembre 2025 – presente)
   - type: 'liderazgo'
   - organization: "Universidad de Guadalajara (UdeG) — CUTonalá"
   - description: "Liderazgo del Sistema de Evidencias Académicas para la acreditación CACEI de carreras de ingeniería. Rol de PM: levantamiento de requerimientos funcionales y no funcionales, documentación de errores, distribución de trabajo en JIRA, gestión de roles y colaboración entre equipos. La plataforma alberga información de 5 años atrás por ciclo escolar, respetando la estructura de roles oficial de la UdeG."
   - highlights: ["Requerimientos funcionales y no funcionales documentados con stakeholders institucionales de alto nivel", "Arquitectura de microservicios coordinada con equipo bajo Scrum/JIRA — sprints quincenales", "Sistema con cobertura de 5 ciclos escolares históricos y estructura de roles UdeG completa"]

6. **Oracle One — Alura — Back-end Specialization** (Septiembre 2025 – Marzo 2026)
   - type: 'certificacion'
   - organization: "Oracle / Alura"
   - description: "Certificación Oracle One Tech Foundation and Advance con especialización en Back-end. Programa intensivo en tecnologías enterprise: Spring Boot, Java, APIs REST y Oracle Cloud Infrastructure (OCI). Certificación oficial completada."
   - highlights: ["Spring Boot y Java a nivel profesional — base del stack actual de Itan", "APIs REST y arquitectura de servicios cloud en Oracle Cloud Infrastructure (OCI)", "Certificación formal Oracle One Tech Foundation + Advance completada"]

7. **Samsung Innovation Campus — IA y Liderazgo** (Septiembre 2025 – presente)
   - type: 'certificacion'
   - organization: "Samsung"
   - description: "Programa Samsung Innovation Campus enfocado en inteligencia artificial aplicada y liderazgo para gestión de equipos técnicos. Certificación en curso."
   - highlights: ["Inteligencia artificial aplicada — fundamentos y casos de uso reales", "Liderazgo técnico para manejo de equipos multidisciplinarios", "Certificación Samsung Innovation Campus en proceso (OzzIA AI)"]

8. **CreCe — Programa de Incubación CUTonalá** (Octubre – Diciembre 2025)
   - type: 'incubadora'
   - organization: "CUTonalá / UdeG"
   - description: "Programa institucional de incubación de negocios de CUTonalá para emprendedores. Acompañamiento en ideación, validación y desarrollo de modelo de negocio."
   - highlights: ["Programa de incubación del CUTonalá para emprendedores y startups en etapa temprana", "Acompañamiento en modelo de negocio, ideación y validación de propuesta de valor", "Base de conocimiento en emprendimiento tecnológico que complementa el perfil técnico"]

9. **Kire Informática — Technical Support & Software Intern** (Enero – Mayo 2025)
   - type: 'internship'
   - organization: "Kire Informática"
   - description: "Primer contacto directo con empresas reales y sus dolores tecnológicos. Las empresas frecuentemente no saben qué quieren digitalizar — solo saben que tienen procesos manuales dolorosos. Este internship fue la escuela de comprensión de requerimientos empresariales: documentar flujos, entender el negocio antes de proponer tecnología, y entregar demos que comuniquen valor, no solo código."
   - highlights: ["Comprensión profunda de dolores en procesos empresariales y automatización — base del enfoque actual de consultoría", "API REST de microservicios con Docker para Global Autoparts (inventario y ventas)", "Primer uso de React en arquitectura de componentes reutilizables en entorno productivo real"]

10. **Universidad de Guadalajara — Ingeniería en Ciencias Computacionales** (Agosto 2023 – Junio 2027)
    - type: 'educacion'
    - organization: "UdeG CUTonalá"
    - description: "Licenciatura en Ingeniería en Ciencias Computacionales en la Universidad de Guadalajara, campus CUTonalá. Carrera activa cursando 3er año con múltiples proyectos institucionales reales en paralelo."
    - highlights: ["Estructuras de Datos, Algoritmos, Ingeniería de Software, Microservicios, Bases de Datos", "Proyectos institucionales reales desde 1er año — no solo académicos", "Formación técnica base que se complementa con experiencia profesional activa desde 2025"]

---

### `src/data/services.ts`

Mantén los 3 servicios pero actualiza el lenguaje para reflejar el perfil real de Itan: full stack con Java/Spring Boot + React, experiencia en requerimientos, microservicios y MVPs probados en entornos reales.

**Servicio 1 — Ingeniería de Requerimientos**
- problem: "Tu equipo tiene una idea pero no sabe exactamente qué construir, qué priorizar ni cómo comunicárselo a un desarrollador."
- idealFor: ["Startups en etapa de ideación o pre-seed", "MiPyMEs que quieren digitalizar procesos manuales", "Empresas que han fallado proyectos tech por falta de claridad"]
- deliverables: ["Documento funcional con casos de uso", "Definición de roles y permisos del sistema", "Flujos de usuario documentados", "Estimación técnica realista", "Recomendación de arquitectura"]

**Servicio 2 — Desarrollo de MVP Full Stack**
- problem: "Necesitas validar una idea con usuarios reales pero no tienes equipo técnico ni tiempo para construir algo sobreingenieriado."
- idealFor: ["Startups que necesitan demostrar tracción a inversores", "Negocios con proceso manual que necesitan digitalizarse", "Emprendedores con idea clara y presupuesto acotado"]
- deliverables: ["MVP funcional deployado y accesible", "Backend con Spring Boot o Node.js según necesidad", "Frontend con React (web) o mobile-first", "Documentación técnica básica", "Recomendaciones de siguientes iteraciones"]

**Servicio 3 — Arquitectura de Sistemas y APIs**
- problem: "Tu sistema actual no escala, tiene deuda técnica o necesitas una API que conecte múltiples servicios o plataformas."
- idealFor: ["Empresas con sistemas legacy que necesitan modernizarse", "Negocios que integran múltiples herramientas sin API unificada", "Startups que superaron su MVP y necesitan arquitectura real"]
- deliverables: ["Diseño de arquitectura de microservicios o modular", "APIs REST documentadas (Swagger/Postman)", "Containerización con Docker", "Deploy en OCI, Vercel o servidor del cliente", "Guía de mantenimiento y escalado"]

---

### `src/data/technologies.ts`

Crea el array `technologies: Technology[]` con el stack REAL de Itan. Sin inventar tecnologías que no aparecen en su CV:

Backend (expert/proficient): Java, Spring Boot, APIs REST, Microservicios
Frontend (proficient): React, JavaScript (ES6+), HTML5, CSS3
Base de datos (proficient): SQL
DevOps / Cloud (proficient): Docker, Oracle Cloud Infrastructure (OCI), Git, GitHub
Metodologías (expert): Agile / Scrum, Kanban, Ingeniería de Requerimientos, JIRA
Product (proficient): Validación de MVPs, Pitch técnico, Gestión de stakeholders, Documentación técnica

---

### `src/data/certifications.ts` (archivo adicional)

Agrega una interface `Certification` al types/index.ts:
- id: string
- title: string
- issuer: string
- issuerFull: string
- period: string
- status: 'completed' | 'in-progress'
- description: string
- skills: string[]
- credentialUrl?: string

Crea el array `certifications: Certification[]` con las certificaciones REALES de Itan:

**Certificación 1 — Oracle One Tech Foundation + Advance**
- title: "Oracle One — Back-end Specialization"
- issuer: "Oracle / Alura"
- issuerFull: "Oracle One Tech Foundation and Advance — Alura LATAM"
- period: "Sep 2025 – Mar 2026"
- status: 'completed'
- description: "Programa intensivo de formación en back-end con especialización en tecnologías Oracle enterprise. Certificación completada en Spring Boot, Java, APIs REST y Oracle Cloud Infrastructure (OCI). Base técnica principal del stack de Itan."
- skills: ["Spring Boot", "Java", "APIs REST", "Oracle Cloud Infrastructure (OCI)", "Microservicios"]

**Certificación 2 — Samsung Innovation Campus — IA y Liderazgo**
- title: "Samsung Innovation Campus — AI & Leadership"
- issuer: "Samsung"
- issuerFull: "Samsung Innovation Campus — Inteligencia Artificial y Liderazgo"
- period: "Sep 2025 – presente"
- status: 'in-progress'
- description: "Programa Samsung enfocado en inteligencia artificial aplicada y liderazgo para gestión de equipos técnicos (OzzIA AI). Certifica tanto habilidades técnicas de IA como competencias de liderazgo estratégico."
- skills: ["Inteligencia Artificial aplicada", "Liderazgo de equipos técnicos", "Gestión estratégica"]

**Certificación 3 — Santander X Explorer**
- title: "Santander X Explorer"
- issuer: "Santander"
- issuerFull: "Santander X Explorer — Validación de MVPs y Emprendimiento Tech"
- period: "Ene – Abr 2026"
- status: 'completed'
- description: "Programa Santander para emprendedores tecnológicos. Validación de MVPs funcionales, pivoteo de ideas en fase de ideación y construcción de infraestructura para negocios tecnológicos."
- skills: ["Validación de MVPs", "Modelo de negocio", "Emprendimiento tecnológico", "Pivoteo de ideas"]

Exporta también el array `navItems: NavItem[]` con las 4 rutas:
- { label: "Inicio", href: "/" }
- { label: "Trayectoria", href: "/trajectory" }
- { label: "Proyectos", href: "/projects" }
- { label: "Servicios", href: "/services" }
```

---

## PASO 4 — UTILIDADES Y HOOKS BASE

````
[INCLUIR CONTEXTO GLOBAL]

Crea los siguientes archivos de utilidades y hooks:

---

### `src/utils/cn.ts`
Función `cn()` usando `clsx` + `tailwind-merge` para combinar clases de Tailwind de forma segura. Exportación nombrada.

---

### `src/utils/animations.ts`
Sistema de variantes de Framer Motion reutilizables. Exporta:

- `fadeUp` — entra desde abajo con opacity
- `fadeIn` — solo opacity
- `slideInLeft` — entra desde la izquierda
- `staggerContainer` — padre que hace stagger de hijos
- `staggerItem` — hijo para usar dentro de staggerContainer
- `scaleIn` — entra con escala desde 0.95
- `hoverLift` — objeto `whileHover` para cards (translateY -4px, sombra sutil)

Cada variante debe tener `hidden` y `visible`. Las transiciones deben usar `easeOut` con duración entre 0.4s y 0.6s. El stagger debe ser de 0.08s entre hijos.

---

### `src/hooks/useScrollReveal.ts`
Hook personalizado que usa `IntersectionObserver` para detectar cuando un elemento entra al viewport. Interfaz:

```ts
function useScrollReveal(options?: {
  threshold?: number   // default: 0.15
  rootMargin?: string  // default: '0px'
  once?: boolean       // default: true
}): { ref: RefObject<HTMLElement>; isVisible: boolean }
````

---

### `src/hooks/useActiveSection.ts`

Hook que detecta qué sección está actualmente visible en el viewport (para highlight del navbar en scroll). Acepta un array de section IDs y retorna el ID activo como string.

---

### `src/styles/globals.css`

Archivo CSS base con:

- Directiva `@import "tailwindcss"`
- Variables CSS custom para el design system:
  - `--font-sans`: fuente principal (Inter o similar)
  - `--font-mono`: fuente monoespaciada
  - Colores del brand: primary (azul profundo o slate oscuro), accent (un color de acento sobrio, no neón)
  - Radios de borde consistentes
- Reset mínimo: `*, box-sizing: border-box`, `html: scroll-behavior: smooth`
- Clase `.section-container` para max-width consistente (1200px, padding horizontal responsive)
- Clase `.gradient-text` para texto con gradiente sutil del brand
- Scrollbar estilizado (fino, color del brand)

```

---

## PASO 5 — LAYOUT BASE

```

[INCLUIR CONTEXTO GLOBAL]
[INCLUIR src/types/index.ts]
[INCLUIR src/data/technologies.ts — solo navItems]
[INCLUIR src/utils/cn.ts]

Crea los componentes de layout. Todos deben ser TypeScript estricto, mobile-first, accesibles.

---

### `src/components/layout/Navbar.tsx`

Navbar profesional con estas características:

- Logo/nombre a la izquierda (texto, no imagen — algo como "JD" o iniciales con tipografía monoespaciada)
- Links de navegación a la derecha (desktop) consumiendo `navItems` desde data
- En mobile: menú hamburguesa que abre un drawer lateral o menú desplegable
- Comportamiento en scroll: fondo transparente en top → fondo con backdrop-blur + borde sutil al hacer scroll (usa `useScrollPosition` inline o un efecto simple)
- Link activo resaltado (usa `useLocation` de react-router-dom)
- CTA "Contacto" como botón diferenciado al final
- Transición suave en todos los estados
- `aria-label` en el botón hamburguesa, `role="navigation"` en el nav

---

### `src/components/layout/Footer.tsx`

Footer minimalista con:

- Nombre/brand a la izquierda
- Links de navegación centrados
- Links a LinkedIn y GitHub a la derecha (con íconos de Lucide)
- Año dinámico con `new Date().getFullYear()`
- Línea separadora superior
- Sin exceso de contenido — limpio y profesional

---

### `src/components/layout/PageWrapper.tsx`

Wrapper de página que:

- Aplica padding-top para compensar el navbar fijo
- Usa `AnimatePresence` + `motion.main` de Framer Motion para transición entre páginas (fadeIn simple, 0.3s)
- Acepta `children: React.ReactNode`
- Aplica la clase `.section-container` o deja que cada sección lo maneje

---

### `src/components/shared/SectionHeader.tsx`

Componente reutilizable para encabezados de sección con:

- Props: `label?: string` (texto pequeño encima, como "Servicios"), `title: string`, `description?: string`, `align?: 'left' | 'center'`
- `label` en texto pequeño uppercase con color de acento
- `title` en tipografía grande y bold
- `description` en texto muted debajo
- Animación fadeUp al entrar al viewport (usa `useScrollReveal`)

---

### `src/components/shared/AnimatedWrapper.tsx`

Wrapper genérico que aplica una variante de Framer Motion al entrar al viewport. Props:

- `children: React.ReactNode`
- `variant?: keyof typeof variants` (default: 'fadeUp')
- `delay?: number`
- `className?: string`
- Usa `whileInView` con `viewport={{ once: true, margin: '-50px' }}`

```

---

## PASO 6 — COMPONENTES UI BASE

```

[INCLUIR CONTEXTO GLOBAL]
[INCLUIR src/utils/cn.ts]
[INCLUIR src/types/index.ts]

Crea los componentes UI base del proyecto. Todos deben extender elementos HTML nativos con TypeScript correcto.

---

### `src/components/ui/Badge.tsx`

Badge/tag para etiquetas de tecnologías y categorías.
Props: `children`, `variant?: 'default' | 'outline' | 'accent'`, `size?: 'sm' | 'md'`
Estética: fondo muy sutil, texto pequeño, border-radius pill.

---

### `src/components/ui/ProjectCard.tsx`

Card para mostrar un proyecto. Props: `project: Project`, `featured?: boolean`.

La card debe mostrar:

- Año + status badge (chip pequeño: "Completado", "En progreso")
- Título del proyecto
- Tagline (una línea de impacto)
- Stack como lista de badges
- Flecha o icono de "Ver más" en hover
- En featured: más espacio, quizás mostrar el campo `impact`

Comportamiento: hover con animación sutil (usa `hoverLift` de animations.ts). Click navega a `/projects#slug` o abre modal (por ahora, solo navega).

No usar imagen de preview — reemplazar con una composición de texto o un elemento visual abstracto y limpio basado en colores.

---

### `src/components/ui/ServiceCard.tsx`

Card para un servicio. Props: `service: Service`, `index: number`.

Debe mostrar:

- Número de índice estilizado (01, 02, 03) en grande y tenue
- Título del servicio
- Descripción
- `idealFor` como lista corta
- Deliverables en formato de lista con check icons (Lucide: `Check`)
- Sin precio (no mostrar pricing)

---

### `src/components/ui/TimelineItem.tsx`

Item individual de timeline. Props: `entry: TimelineEntry`, `isLast?: boolean`.

Estructura visual:

- Línea vertical conectora a la izquierda
- Punto/dot en la línea
- Año/período a la izquierda
- Contenido a la derecha: título, organización, descripción, highlights como bullets
- Badge de tipo (hackathon, internship, etc.)
- Animación fadeUp al entrar al viewport

---

### `src/components/ui/TechGrid.tsx`

Grid de tecnologías agrupadas por categoría. Props: `technologies: Technology[]`.

Agrupa por `category`. Para cada categoría: encabezado de sección y grid de chips. Los chips muestran nombre y nivel (sin barra de progreso — solo un punto de color o texto sutil como "Expert").

```

---

## PASO 7 — PÁGINA HOME

```

[INCLUIR CONTEXTO GLOBAL]
[INCLUIR src/types/index.ts]
[INCLUIR src/data/projects.ts — solo featured]
[INCLUIR src/data/services.ts]
[INCLUIR src/data/technologies.ts]
[INCLUIR todos los componentes creados hasta ahora — nombres y props]

Crea la página `src/pages/Home.tsx` completa con todas sus secciones. Cada sección es un componente separado en `src/components/sections/`.

---

### Sección 1: Hero — `src/components/sections/HeroSection.tsx`

Esta sección es la más importante del sitio. Debe comunicar posicionamiento en 3 segundos.

Contenido:

- Chip/badge pequeño arriba: "Disponible para proyectos" (con dot verde animado pulsando)
- Headline principal (H1): algo como "Ingeniería de software con enfoque de producto" — grande, bold, máximo 2 líneas
- Subheadline: "Diseño, construyo y entrego sistemas reales — desde los requerimientos hasta el deploy — con Java, Spring Boot y React."
- Dos CTAs: primario "Ver proyectos" → `/projects`, secundario "Hablemos" → `mailto:itanrami05@gmail.com`
- Elementos de credibilidad debajo de los CTAs — usar datos reales del CV:
  - "4 proyectos entregados"
  - "1er lugar CodeCUP 2026"
  - "Spring Boot · React · Docker"
- Sin imagen hero — sustituir con un elemento visual técnico: puede ser un bloque de código estilizado, un diagrama ASCII simplificado, o simplemente tipografía grande y composición fuerte

Animación: entrada escalonada con stagger — primero el chip, luego el H1, luego el sub, luego los CTAs, luego los stats.

---

### Sección 2: Capacidades — `src/components/sections/CapabilitiesSection.tsx`

NO usar skill bars. NO usar porcentajes.

Muestra 6 capacidades como cards o grid de items. Cada item:

- Ícono de Lucide relevante
- Título corto (ej: "Arquitectura de sistemas", "Ingeniería de requerimientos", "MVPs en tiempo real")
- Descripción de 1-2 líneas de qué significa eso para el cliente

Capacidades reales de Itan (basadas en su CV y experiencia real — no inventar otras):

1. **Arquitectura de microservicios** — Diseño de sistemas modulares con Spring Boot y Docker antes de escribir la primera línea de código
2. **Ingeniería de requerimientos** — Entrevistas con stakeholders, documentación funcional y no funcional, flujos AS-IS y TO-BE. Las empresas frecuentemente no saben qué quieren — Itan sabe cómo descubrirlo
3. **Desarrollo Full Stack** — React (componentes, SPA, mobile-first) + Spring Boot (APIs REST, servicios) + SQL como contrato de datos
4. **Cloud e infraestructura** — Deploy en Oracle Cloud Infrastructure (OCI), containerización con Docker, consistencia entre entornos
5. **MVPs bajo presión** — Entrega funcional en 24 horas probada en hackathon real (CodeCUP 2026, 1er lugar). No solo velocidad: también pitch del modelo de negocio
6. **Gestión técnica de proyectos** — Scrum, JIRA, coordinación de equipos, comunicación con stakeholders no técnicos de alto nivel (directores universitarios, clientes empresariales)

Layout: grid 2 columnas mobile, 3 columnas desktop.

---

### Sección 3: Proyectos destacados — `src/components/sections/FeaturedProjectsSection.tsx`

Muestra solo los proyectos con `featured: true` del array `projects`.

Usa `ProjectCard` en modo featured. Agrega un CTA al final: "Ver todos los proyectos →" que navega a `/projects`.

Layout: 1 columna mobile, 2 columnas desktop.

---

### Sección 4: Cómo trabajo — `src/components/sections/ProcessSection.tsx`

Muestra el proceso de trabajo en 5 pasos:

1. Diagnóstico — entender el problema real
2. Ingeniería de requerimientos — documentar antes de construir
3. Arquitectura — diseñar la solución correcta
4. Desarrollo iterativo — entregar valor en incrementos
5. Entrega y documentación — código limpio, handoff completo

Diseño: lista numerada vertical con línea conectora, o grid de cards con número grande. Cada paso con título, descripción de 2-3 líneas e ícono.

---

### Sección 5: CTA Final — `src/components/sections/CtaSection.tsx`

Sección de cierre de página con:

- Headline: algo como "¿Tienes un proyecto en mente?"
- Subtext: "Cuéntame qué estás construyendo. Puedo ayudarte desde la idea hasta el deploy."
- Botón primario: "Escribir mensaje" (mailto o WhatsApp)
- Botón secundario: "Ver mis servicios" → `/services`
- Fondo diferente al resto (quizás un tono levemente más oscuro o una sección con borde)

---

### `src/pages/Home.tsx`

Ensambla todas las secciones con:

- `react-helmet-async` para SEO: title, description, og:title, og:description
- Cada sección envuelta en su `<section>` con id para navegación por anchors
- Importa y renderiza: HeroSection, CapabilitiesSection, FeaturedProjectsSection, ProcessSection, CtaSection

```

---

## PASO 8 — PÁGINA TRAJECTORY

```

[INCLUIR CONTEXTO GLOBAL]
[INCLUIR src/types/index.ts]
[INCLUIR src/data/timeline.ts]
[INCLUIR src/components/ui/TimelineItem.tsx]
[INCLUIR src/components/shared/SectionHeader.tsx]

Crea la página `src/pages/Trajectory.tsx` y la sección correspondiente.

### `src/components/sections/TimelineSection.tsx`

Timeline vertical completo con todas las entradas de `timeline`.

Estructura visual:

- Línea vertical continua a la izquierda (o centrada en desktop)
- Cada `TimelineItem` animado al entrar al viewport (stagger progresivo)
- Filtro por tipo encima (tabs o botones toggle): "Todo", "Proyectos", "Educación", "Hackathons" — filtra el array de forma declarativa (no eliminar del DOM, usar `AnimatePresence` para transición)
- Año como separador visual entre grupos de años

### `src/pages/Trajectory.tsx`

- SEO metadata específico de esta página
- Hero de página: título "Trayectoria" + descripción de 1 línea sobre qué encontrará el visitante
- TimelineSection
- CTA al final invitando a ver proyectos

```

---

## PASO 9 — PÁGINA PROJECTS

```

[INCLUIR CONTEXTO GLOBAL]
[INCLUIR src/types/index.ts]
[INCLUIR src/data/projects.ts]
[INCLUIR src/components/ui/ProjectCard.tsx]

Crea la página `src/pages/Projects.tsx` y componentes de detalle.

### Lista de proyectos

Grid de todos los proyectos con:

- Filtro por tag (tecnología) — toggle de badges en la parte superior
- `AnimatePresence` + `layout` de Framer Motion para animar el reordenamiento/filtrado
- Sin paginación — son pocos proyectos

### Detalle de proyecto (inline, no nueva página)

Cuando el usuario hace click en una card, expande el detalle en la misma página (tipo accordion o panel expandible) O navega a un modal. Elige la opción más limpia para UX.

El detalle completo debe mostrar:

- Problema que resolvía
- Contexto
- Restricciones del proyecto
- Decisiones de arquitectura (el campo `architecture`)
- Stack completo como badges
- Resultado e impacto
- Link a repositorio (placeholder: "#")

### `src/pages/Projects.tsx`

- SEO metadata
- Hero de página: "Proyectos" + descripción
- Grid filtrable
- Estado vacío si ningún proyecto coincide con el filtro

```

---

## PASO 10 — PÁGINA SERVICES

```

[INCLUIR CONTEXTO GLOBAL]
[INCLUIR src/types/index.ts]
[INCLUIR src/data/services.ts]
[INCLUIR src/components/ui/ServiceCard.tsx]

Crea la página `src/pages/Services.tsx`.

### Estructura de la página:

1. **Hero de servicios**: título "Servicios" + propuesta de valor de 2 líneas. Ej: "No vendo horas. Entrego soluciones. Trabajo con empresas que necesitan tecnología bien diseñada, no solo código."

2. **Grid de servicios**: Los 3 servicios con `ServiceCard` en layout vertical (1 columna, cards anchas con detalle visible).

3. **Proceso de trabajo**: Los 5 pasos del proceso (reutiliza o adapta `ProcessSection` de Home).

4. **FAQ mínimo**: 4-5 preguntas frecuentes de un cliente B2B:
   - "¿Trabajas con contratos o por proyecto?"
   - "¿Cómo manejas los requerimientos cambiantes?"
   - "¿Puedo ver el progreso durante el desarrollo?"
   - "¿Qué incluye la documentación final?"
   - "¿Puedes trabajar con mi equipo existente?"
     Respuestas cortas, directas, confianza-building. Usa un accordion (shadcn/ui Accordion component).

5. **CTA final**: "Cuéntame tu proyecto" con botón de contacto.

### `src/pages/Services.tsx`

- SEO metadata
- PageWrapper + todas las secciones

```

---

## PASO 11 — ROUTER Y APP PRINCIPAL

```

[INCLUIR CONTEXTO GLOBAL]
[INCLUIR todos los archivos de layout creados]
[INCLUIR src/pages — lista de páginas]

Crea los archivos finales de ensamblaje:

### `src/routes/AppRouter.tsx`

Router con:

- `BrowserRouter`
- `lazy()` para cada página (code splitting)
- `Suspense` con fallback mínimo (spinner o pantalla en blanco — no loading skeleton complejo)
- `AnimatePresence` de Framer Motion wrapping las Routes para transición entre páginas
- Scroll al top en cada cambio de ruta (componente `ScrollToTop` interno)
- Estructura: Navbar siempre visible → Routes → Footer siempre visible

### `src/App.tsx`

Componente raíz que:

- Envuelve con `HelmetProvider` de react-helmet-async
- Renderiza `AppRouter`
- Sin lógica adicional

### `src/main.tsx`

Entry point estándar con `StrictMode`. Sin cambios especiales.

### Componente `ScrollToTop` (interno en AppRouter o archivo separado)

Hook-based, usa `useEffect` + `useLocation` para hacer `window.scrollTo(0, 0)` en cada cambio de ruta.

```

---

## PASO 12 — SEO Y CONFIGURACIÓN FINAL

```

[INCLUIR CONTEXTO GLOBAL]

Crea los archivos de configuración final y optimización:

### `src/components/shared/Seo.tsx`

Componente SEO reutilizable usando `react-helmet-async`. Props: `SeoProps` del types.

Debe incluir:

- `<title>` con formato: "[Título de página] | Itan Ramírez — Ingeniería de Software"
- `<meta name="description">`
- `<meta name="author">`
- OpenGraph: og:title, og:description, og:type, og:url, og:image (placeholder)
- Twitter card: summary_large_image
- `<link rel="canonical">`

### `public/robots.txt`

Configuración básica que permite indexación completa.

### `public/site.webmanifest`

Web app manifest básico con nombre, colores del brand, iconos placeholder.

### `index.html`

HTML base optimizado con:

- `lang="es"`
- Meta viewport correcto
- Preconnect a Google Fonts si se usan
- Título base y descripción fallback
- Sin scripts inline innecesarios

### `src/styles/globals.css` — adiciones finales

Agrega:

- Clase `.sr-only` para contenido solo para screen readers
- Focus visible styles personalizados (sin outline feo del browser, pero accesible)
- Print styles básicos (ocultar navbar y botones en impresión)

```

---

## PASO 13 — CHECKLIST DE VERIFICACIÓN FINAL

```

[INCLUIR CONTEXTO GLOBAL]

Revisa el proyecto completo y verifica o corrige:

**TypeScript:**
[ ] Sin uso de `any` en ningún archivo
[ ] Todas las props tienen tipos explícitos
[ ] No hay imports sin usar
[ ] No hay variables declaradas sin usar

**Accesibilidad:**
[ ] Todos los `<img>` tienen `alt`
[ ] Todos los `<button>` sin texto visible tienen `aria-label`
[ ] El orden de headings es correcto (H1 → H2 → H3)
[ ] Links con texto descriptivo (no "click aquí")
[ ] Contraste de color correcto en texto sobre fondos

**Performance:**
[ ] Imágenes con `loading="lazy"` donde aplica
[ ] Fuentes con `font-display: swap`
[ ] No hay imports de librerías completas cuando solo se necesita una función
[ ] Todas las páginas usan `lazy()` para code splitting

**SEO:**
[ ] Cada página tiene title y description únicos
[ ] OpenGraph tags en cada página
[ ] `<link rel="canonical">` en cada página

**Mobile:**
[ ] Navbar mobile funciona correctamente
[ ] Cards y grids responsive probados en 375px, 768px, 1024px, 1440px
[ ] Touch targets mínimo 44x44px

**Código:**
[ ] Sin `console.log` en archivos de producción
[ ] Sin comentarios de código muerto
[ ] Consistencia en nombres: PascalCase componentes, camelCase variables, kebab-case archivos de estilos
s
