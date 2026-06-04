import { useState, useMemo, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeader from "@/components/shared/SectionHeader";
import PageWrapper from "@/components/layout/PageWrapper";
import CtaSection from "@/components/sections/CtaSection";
import { cn } from "@/utils/cn";

const Projects = () => {
  const [activeTag, setActiveTag] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const closeProject = () => setSelectedProject(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeProject();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      setActiveImageIndex(0);
    }
  }, [selectedProject]);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    const excludedTags = ["CACEI", "UAG", "CodeCup", "Codecup"]; // Including variants just in case

    projects.forEach((p) => {
      p.tags.forEach((t) => {
        if (!excludedTags.includes(t)) {
          tags.add(t);
        }
      });
    });

    return ["all", ...Array.from(tags).sort()];
  }, []);

  const filteredProjects = projects.filter(
    (p) => activeTag === "all" || p.tags.includes(activeTag),
  );

  return (
    <PageWrapper>
      <Helmet>
        <title>Proyectos | Itan Ramirez</title>
        <meta
          name="description"
          content="Explora mi portafolio de proyectos de ingeniería de software, desde sistemas académicos hasta soluciones empresariales a medida."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-20 pb-12 bg-slate-50/50">
        <div className="section-container">
          <SectionHeader
            title="Proyectos"
            description="Soluciones técnicas construidas con un enfoque pragmático y orientado a resultados."
            className="mb-8"
          />

          {/* Tag Filters */}
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border",
                  activeTag === tag
                    ? "bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-200"
                    : "bg-white text-slate-400 border-slate-200 hover:border-slate-300",
                )}
              >
                {tag === "all" ? "Ver todo" : tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="section-container">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} onSelect={openProject} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 p-4"
                onClick={closeProject}
              >
                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 24, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2rem] bg-white shadow-2xl"
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="flex flex-col gap-4 border-b border-slate-200 p-6 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">
                        {selectedProject.year}
                      </p>
                      <h2 className="text-3xl font-bold text-slate-900">
                        {selectedProject.title}
                      </h2>
                      <p className="mt-3 text-slate-500 max-w-2xl">
                        {selectedProject.tagline}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={closeProject}
                      aria-label="Cerrar proyecto"
                      className="self-start rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                    >
                      Cerrar
                    </button>
                  </div>

                  <div className="grid gap-6 p-6 md:grid-cols-[1.3fr_0.9fr]">
                    <div className="space-y-4">
                      {(() => {
                        const gallery = selectedProject.images?.length
                          ? selectedProject.images
                          : selectedProject.image
                            ? [selectedProject.image]
                            : [];
                        const activeImage = gallery[activeImageIndex];

                        return (
                          <>
                            {activeImage ? (
                              <div className="relative flex min-h-[320px] max-h-[520px] items-center justify-center overflow-hidden rounded-[2rem] bg-slate-100 shadow-sm">
                                <img
                                  src={activeImage}
                                  alt={`${selectedProject.title} imagen ${activeImageIndex + 1}`}
                                  className="max-h-[520px] w-full max-w-full object-contain"
                                />
                                {gallery.length > 1 && (
                                  <>
                                    <button
                                      type="button"
                                      onClick={(event) => {
                                        event.stopPropagation();
                                        setActiveImageIndex((current) =>
                                          current === 0
                                            ? gallery.length - 1
                                            : current - 1,
                                        );
                                      }}
                                      className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-sm transition hover:bg-white"
                                      aria-label="Imagen anterior"
                                    >
                                      ‹
                                    </button>
                                    <button
                                      type="button"
                                      onClick={(event) => {
                                        event.stopPropagation();
                                        setActiveImageIndex((current) =>
                                          current === gallery.length - 1
                                            ? 0
                                            : current + 1,
                                        );
                                      }}
                                      className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-sm transition hover:bg-white"
                                      aria-label="Imagen siguiente"
                                    >
                                      ›
                                    </button>
                                  </>
                                )}
                              </div>
                            ) : (
                              <div className="flex h-80 items-center justify-center rounded-[2rem] bg-slate-100 text-slate-500">
                                Imagen no disponible
                              </div>
                            )}

                            {gallery.length > 1 && (
                              <div className="space-y-3">
                                <div className="flex items-center justify-between text-sm text-slate-500">
                                  <p className="uppercase tracking-[0.35em] text-slate-400">
                                    Galería
                                  </p>
                                  <span>{`${activeImageIndex + 1} / ${gallery.length}`}</span>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                  {gallery.map((image, index) => (
                                    <button
                                      key={index}
                                      type="button"
                                      onClick={(event) => {
                                        event.stopPropagation();
                                        setActiveImageIndex(index);
                                      }}
                                      className={`overflow-hidden rounded-3xl border transition ${
                                        index === activeImageIndex
                                          ? "border-slate-900"
                                          : "border-transparent"
                                      }`}
                                    >
                                      <img
                                        src={image}
                                        alt={`${selectedProject.title} miniatura ${index + 1}`}
                                        className="h-24 w-full object-contain bg-slate-100"
                                      />
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </>
                        );
                      })()}
                    </div>

                    <div className="space-y-6 overflow-y-auto max-h-[calc(90vh-220px)] pr-2">
                      <section>
                        <h3 className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-3">
                          Contexto
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                          {selectedProject.context}
                        </p>
                      </section>

                      <section>
                        <h3 className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-3">
                          Problema
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                          {selectedProject.problem}
                        </p>
                      </section>

                      <section>
                        <h3 className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-3">
                          Resultado
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                          {selectedProject.result}
                        </p>
                      </section>

                      {selectedProject.impact && (
                        <section>
                          <h3 className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-3">
                            Impacto
                          </h3>
                          <p className="text-slate-700 leading-relaxed">
                            {selectedProject.impact}
                          </p>
                        </section>
                      )}

                      <section>
                        <h3 className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-3">
                          Tecnologías
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </section>

                      <section>
                        <h3 className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-3">
                          Etiquetas
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </section>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 font-medium">
                No se encontraron proyectos con esta categoría.
              </p>
              <button
                onClick={() => setActiveTag("all")}
                className="mt-4 text-slate-900 font-bold underline"
              >
                Ver todos los proyectos
              </button>
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </PageWrapper>
  );
};

export default Projects;
