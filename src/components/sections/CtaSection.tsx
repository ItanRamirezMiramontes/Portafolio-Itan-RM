import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedWrapper from '@/components/shared/AnimatedWrapper';

const CtaSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="bg-slate-900 rounded-[2rem] p-12 md:p-20 text-center overflow-hidden relative">
          <div className="relative z-10">
            <AnimatedWrapper variant="fadeUp">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                ¿Tienes algo <span className="text-slate-500 italic font-mono">en mente?</span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Cuéntame sobre tu proyecto o idea. Estoy siempre abierto a colaborar en nuevos desafíos y seguir aprendiendo en el proceso.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="mailto:itanrami05@gmail.com"
                  className="inline-flex items-center gap-2 bg-white text-slate-900 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-100 transition-all hover:gap-3"
                >
                  Escribir mensaje
                  <Mail size={20} />
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-transparent text-white border border-slate-700 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-800 transition-all"
                >
                  Ver mis servicios
                  <ArrowRight size={20} />
                </Link>
              </div>
            </AnimatedWrapper>
          </div>

          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800/30 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-800/30 rounded-full -ml-32 -mb-32 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
