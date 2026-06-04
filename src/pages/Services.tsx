import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { services } from '@/data/services';
import ServiceCard from '@/components/ui/ServiceCard';
import SectionHeader from '@/components/shared/SectionHeader';
import PageWrapper from '@/components/layout/PageWrapper';
import CtaSection from '@/components/sections/CtaSection';
import ProcessSection from '@/components/sections/ProcessSection';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-6 text-left group"
      >
        <span className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
          {question}
        </span>
        <div className="p-1 rounded-full bg-slate-50 text-slate-400 group-hover:text-slate-900 transition-all">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-slate-500 leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Services = () => {
  const faqs = [
    {
      question: "¿Trabajas con contratos o por proyecto?",
      answer: "Principalmente trabajo por proyecto con metas y entregables definidos. Esto nos permite tener claridad sobre el alcance y los tiempos desde el inicio."
    },
    {
      question: "¿Cómo manejas los requerimientos cambiantes?",
      answer: "Entiendo que las ideas evolucionan. Trabajo de forma iterativa, permitiendo ajustes en el camino para asegurar que el resultado final realmente resuelva el problema."
    },
    {
      question: "¿Puedo ver el progreso durante el desarrollo?",
      answer: "Sí. Me gusta mantener una comunicación abierta con demos periódicas para que puedas ver cómo avanza el sistema y dar feedback constante."
    },
    {
      question: "¿Qué incluye la documentación final?",
      answer: "Entrego el código fuente completo, guías de configuración y una explicación técnica de cómo funciona el sistema para que sea fácil de mantener a futuro."
    },
    {
      question: "¿Puedes trabajar con mi equipo existente?",
      answer: "Claro. Puedo sumarme como un desarrollador más para reforzar el equipo o ayudar a definir la base técnica de un nuevo módulo o funcionalidad."
    }
  ];

  return (
    <PageWrapper>
      <Helmet>
        <title>Servicios | Itan Ramirez</title>
        <meta 
          name="description" 
          content="Desarrollo de software y análisis técnico para proyectos digitales. Especializado en MVPs y soluciones backend con Spring Boot y React." 
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-20 pb-20 bg-slate-50/50">
        <div className="section-container">
          <SectionHeader
            title="Servicios"
            description="Me enfoco en construir tecnología que resuelva problemas reales. Trabajo con proyectos que valoran la calidad técnica y la claridad en el desarrollo."
            className="max-w-3xl mb-0"
          />
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="section-container">
          <div className="flex flex-col gap-12">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process (Reused) */}
      <ProcessSection />

      {/* FAQ */}
      <section className="py-24 bg-slate-50/30">
        <div className="section-container">
          <SectionHeader
            label="Dudas comunes"
            title="Preguntas frecuentes"
            description="Respuestas directas a las inquietudes habituales de mis clientes B2B."
            align="center"
          />
          <div className="max-w-3xl mx-auto mt-12 bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </PageWrapper>
  );
};

export default Services;
