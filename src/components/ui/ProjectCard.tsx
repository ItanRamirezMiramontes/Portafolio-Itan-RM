import { Project } from "@/types";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Badge from "./Badge";
import { cn } from "@/utils/cn";
import { hoverLift } from "@/utils/animations";
import { technologies } from "@/data/technologies";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onSelect?: (project: Project) => void;
}

const ProjectCard = ({ project, featured, onSelect }: ProjectCardProps) => {
  const getTechIcon = (techName: string) => {
    return technologies.find(
      (t) => t.name.toLowerCase() === techName.toLowerCase(),
    )?.icon;
  };

  const Content = (
    <>
      {/* Image / Placeholder */}
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-8">
            <div className="text-center">
              <p className="text-4xl font-mono font-black text-slate-200 select-none mb-2">
                {project.title
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </p>
              <div className="w-8 h-1 bg-slate-200 mx-auto rounded-full" />
            </div>
          </div>
        )}

        <div className="absolute top-4 left-4 flex gap-2">
          <Badge
            variant="accent"
            className="bg-white/90 backdrop-blur-sm text-slate-900 border-white/20 shadow-sm"
          >
            {project.year}
          </Badge>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <Badge
            variant={project.status === "completed" ? "default" : "accent"}
          >
            {project.status === "completed" ? "Completado" : "En progreso"}
          </Badge>
          <div className="p-2 rounded-full bg-slate-50 text-slate-400 group-hover:text-slate-900 group-hover:bg-slate-100 transition-all duration-300">
            <ArrowUpRight size={18} />
          </div>
        </div>

        <div className="mb-6">
          <h3
            className={cn(
              "font-bold text-slate-900 mb-2 transition-colors group-hover:text-slate-700",
              featured ? "text-2xl md:text-3xl" : "text-xl",
            )}
          >
            {project.title}
          </h3>
          <p className="text-slate-500 line-clamp-2 text-sm md:text-base leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {featured && project.impact && (
          <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
              Impacto
            </p>
            <p className="text-slate-700 font-medium text-sm">
              {project.impact}
            </p>
          </div>
        )}

        <div className="mt-auto pt-6 border-t border-slate-50 flex flex-wrap gap-3">
          {project.stack.slice(0, 5).map((tech) => {
            const icon = getTechIcon(tech);
            return (
              <div
                key={tech}
                className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 rounded-lg border border-slate-100"
              >
                {icon && (
                  <img
                    src={icon}
                    alt={tech}
                    className="w-3.5 h-3.5 object-contain"
                  />
                )}
                <span className="text-[10px] font-bold text-slate-600">
                  {tech}
                </span>
              </div>
            );
          })}
          {project.stack.length > 5 && (
            <span className="text-[10px] text-slate-400 font-bold self-center">
              +{project.stack.length - 5}
            </span>
          )}
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      {...hoverLift}
      className={cn(
        "group relative bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col",
        featured ? "md:col-span-2" : "",
      )}
    >
      {onSelect ? (
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="block h-full flex flex-col text-left"
        >
          {Content}
        </button>
      ) : (
        <Link
          to={`/projects#${project.slug}`}
          className="block h-full flex flex-col"
        >
          {Content}
        </Link>
      )}
    </motion.div>
  );
};

export default ProjectCard;
