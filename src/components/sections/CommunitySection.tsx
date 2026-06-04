import { communityItems } from '@/data/community';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedWrapper from '@/components/shared/AnimatedWrapper';
import { ExternalLink, Users, Briefcase, GraduationCap } from 'lucide-react';

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 bg-white">
      <div className="section-container">
        <SectionHeader
          label="Comunidad e Impacto"
          title="Construyendo el futuro del talento"
          description="Creo firmemente en el poder de la comunidad para acelerar el crecimiento profesional y cerrar la brecha entre la academia y la industria."
        />

        <div className="grid grid-cols-1 gap-12 mt-16">
          {communityItems.map((item) => (
            <AnimatedWrapper
              key={item.id}
              variant="fadeUp"
              className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold mb-6">
                  <Users size={14} />
                  COMUNIDAD
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{item.name}</h3>
                <p className="text-xl font-medium text-slate-600 mb-6">{item.role}</p>
                <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  {item.description}
                </p>

                <div className="space-y-4 mb-8">
                  {item.impact.map((point, index) => (
                    <div key={index} className="flex items-start gap-3 text-slate-700">
                      <div className="mt-1 bg-slate-900 text-white rounded-full p-1 shrink-0">
                        {index === 0 && <GraduationCap size={12} />}
                        {index === 1 && <Briefcase size={12} />}
                        {index === 2 && <Users size={12} />}
                      </div>
                      <span className="font-medium">{point}</span>
                    </div>
                  ))}
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold text-slate-900 border-b-2 border-slate-900 hover:pb-1 transition-all"
                  >
                    Ver publicación oficial
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              <div className="flex-1 w-full aspect-video bg-slate-200 rounded-xl overflow-hidden flex items-center justify-center relative group">
                 {item.image ? (
                   <img 
                     src={item.image} 
                     alt={item.name} 
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                 ) : (
                   <>
                     <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 to-slate-900/40 mix-blend-multiply" />
                     <Users size={80} className="text-slate-400 group-hover:scale-110 transition-transform duration-500" />
                   </>
                 )}
                 <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/60 backdrop-blur-md p-3 rounded-lg">
                      "Conectando el talento universitario con las habilidades reales del sector tech."
                    </p>
                 </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
