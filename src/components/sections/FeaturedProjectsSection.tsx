import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import SectionHeader from '@/components/shared/SectionHeader';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedWrapper from '@/components/shared/AnimatedWrapper';

const FeaturedProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 bg-slate-50/50 border-y border-slate-100">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <SectionHeader
            label="Trabajo reciente"
            title="Proyectos destacados"
            description="Una selección de sistemas construidos con enfoque en resolución de problemas reales."
            className="mb-0 md:mb-0"
          />
          <AnimatedWrapper variant="fadeIn" className="mt-8 md:mt-0">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-bold text-slate-900 hover:gap-3 transition-all"
            >
              Ver todos los proyectos
              <ArrowRight size={18} />
            </Link>
          </AnimatedWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={project.slug === 'sea-cacei'} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
