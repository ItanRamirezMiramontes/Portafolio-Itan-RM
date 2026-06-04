import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedWrapper from '@/components/shared/AnimatedWrapper';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Entendimiento',
      description: 'Analizamos juntos el problema y los objetivos para asegurar que estamos construyendo lo correcto.',
    },
    {
      number: '02',
      title: 'Definición Técnica',
      description: 'Aterrizamos la visión en especificaciones claras, definiendo qué se necesita para empezar.',
    },
    {
      number: '03',
      title: 'Estructura',
      description: 'Diseño la solución técnica buscando el balance ideal entre rapidez y robustez.',
    },
    {
      number: '04',
      title: 'Construcción',
      description: 'Desarrollo iterativo con comunicación constante y entregas funcionales frecuentes.',
    },
    {
      number: '05',
      title: 'Entrega final',
      description: 'Handoff de código bien documentado para que el proyecto pueda seguir creciendo.',
    },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="section-container">
        <SectionHeader
          label="Metodología"
          title="Cómo colaboro"
          description="Un proceso transparente y ordenado para que siempre sepas en qué etapa estamos y qué esperar."
          align="center"
        />

        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <AnimatedWrapper
              key={step.number}
              variant="fadeUp"
              delay={i * 0.1}
              className="relative flex flex-col gap-6"
            >
              <div className="text-4xl font-black text-slate-100 select-none">
                {step.number}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 -right-4 w-8 border-t border-slate-100" />
              )}
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
