import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timeline } from "@/data/timeline";
import TimelineItem from "@/components/ui/TimelineItem";
import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/utils/cn";

const TimelineSection = () => {
  const [filter, setFilter] = useState<string>("all");

  const types = [
    { id: "all", label: "Todo" },
    { id: "proyecto", label: "Proyectos" },
    { id: "internship", label: "Experiencia" },
    { id: "liderazgo", label: "Liderazgo" },
    { id: "hackathon", label: "Hackathons" },
    { id: "certificacion", label: "Certificaciones" },
  ];

  const filteredTimeline = timeline.filter(
    (item) => filter === "all" || item.type === filter,
  );

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <SectionHeader
          label="Experiencia"
          title="Mi evolución profesional"
          description="Un recorrido por los hitos técnicos, académicos y de liderazgo que han dado forma a mi enfoque actual."
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {types.map((type) => (
            <button
              key={type.id}
              onClick={() => setFilter(type.id)}
              className={cn(
                "px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
                filter === type.id
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-200"
                  : "bg-slate-50 text-slate-400 hover:bg-slate-100",
              )}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl">
          <AnimatePresence mode="popLayout">
            {filteredTimeline.map((entry, index) => (
              <motion.div
                key={entry.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <TimelineItem
                  entry={entry}
                  isLast={index === filteredTimeline.length - 1}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
