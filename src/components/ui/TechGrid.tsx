import { Technology } from '@/types';
import { cn } from '@/utils/cn';

interface TechGridProps {
  technologies: Technology[];
}

const TechGrid = ({ technologies }: TechGridProps) => {
  const categories = Array.from(new Set(technologies.map((t) => t.category)));

  const categoryLabels: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Bases de Datos',
    devops: 'DevOps & Git',
    cloud: 'Cloud Infra',
    architecture: 'Arquitectura',
    product: 'Producto & Agile',
  };

  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category} className="space-y-6">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100 pb-4">
            {categoryLabels[category] || category}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {technologies
              .filter((t) => t.category === category)
              .map((tech) => (
                <div
                  key={tech.id}
                  className="group p-4 bg-white border border-slate-100 rounded-xl hover:border-slate-200 hover:bg-slate-50/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {tech.icon && (
                      <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain" />
                    )}
                    <p className="text-sm font-bold text-slate-900">{tech.name}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      tech.level === 'expert' ? "bg-slate-900" : 
                      tech.level === 'proficient' ? "bg-slate-400" : "bg-slate-200"
                    )} />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {tech.level}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechGrid;
