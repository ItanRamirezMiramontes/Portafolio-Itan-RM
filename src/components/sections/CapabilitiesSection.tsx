import { Code2, ClipboardCheck, Layout, Cloud, Zap, MessageSquare } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedWrapper from '@/components/shared/AnimatedWrapper';

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Layout,
      title: 'Estructura & Backend',
      description: 'Construyo la base lógica de las aplicaciones pensando en la mantenibilidad y el crecimiento del código.',
    },
    {
      icon: ClipboardCheck,
      title: 'Análisis de Requerimientos',
      description: 'Colaboro para transformar ideas en especificaciones técnicas que guíen el desarrollo.',
    },
    {
      icon: Code2,
      title: 'Desarrollo Full Stack',
      description: 'Implemento soluciones completas, desde la lógica del servidor hasta interfaces interactivas.',
    },
    {
      icon: Cloud,
      title: 'Despliegue & Nube',
      description: 'Configuración de entornos y automatización para que el software sea accesible y confiable.',
    },
    {
      icon: Zap,
      title: 'Desarrollo de MVPs',
      description: 'Foco en la velocidad de entrega para validar ideas rápidamente sin sacrificar la base técnica.',
    },
    {
      icon: MessageSquare,
      title: 'Trabajo en Equipo',
      description: 'Comunicación clara entre el equipo técnico y las metas del proyecto.',
    },
  ];

  return (
    <section id="capabilities" className="py-24 bg-white">
      <div className="section-container">
        <SectionHeader
          label="Capacidades"
          title="Foco en el problema, luego en el código"
          description="Mi objetivo es que la tecnología sea una herramienta útil. Me involucro en entender el contexto para proponer la mejor implementación posible."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {capabilities.map((cap, i) => (
            <AnimatedWrapper
              key={cap.title}
              variant="fadeUp"
              delay={i * 0.1}
              className="flex flex-col gap-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 border border-slate-100">
                <cap.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{cap.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {cap.description}
                </p>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
