import { certifications } from '@/data/certifications';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedWrapper from '@/components/shared/AnimatedWrapper';
import { ExternalLink, Award, CheckCircle2 } from 'lucide-react';

const CertificationsSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="section-container">
        <SectionHeader
          label="Credenciales"
          title="Certificaciones y especializaciones"
          description="Validación técnica de mis conocimientos en el ecosistema Java enterprise, liderazgo y emprendimiento."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certifications.map((cert, i) => (
            <AnimatedWrapper
              key={cert.id}
              variant="fadeUp"
              delay={i * 0.1}
              className="bg-white p-8 rounded-2xl border border-slate-100 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-900 mb-6 border border-slate-100">
                <Award size={24} />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {cert.issuer}
                  </span>
                  <span className="text-slate-200">•</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {cert.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">{cert.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {cert.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:gap-3 transition-all uppercase tracking-widest"
                >
                  Validar credencial
                  <ExternalLink size={14} />
                </a>
              ) : (
                <div className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <CheckCircle2 size={14} className="text-green-500" />
                  Completado
                </div>
              )}
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
