import { TimelineEntry } from "@/types";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { fadeUp } from "@/utils/animations";
import Badge from "./Badge";
import { cn } from "@/utils/cn";
import { ExternalLink } from "lucide-react";

interface TimelineItemProps {
  entry: TimelineEntry;
  isLast?: boolean;
}

const TimelineItem = ({ entry, isLast }: TimelineItemProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={fadeUp}
      className="relative pl-8 md:pl-0"
    >
      <div className="md:grid md:grid-cols-12 md:gap-8">
        {/* Date Desktop */}
        <div className="hidden md:block md:col-span-3 text-right">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest pt-1">
            {entry.period}
          </p>
        </div>

        {/* Center Line & Dot */}
        <div className="absolute left-0 top-0 bottom-0 md:relative md:col-span-1 flex flex-col items-center">
          <div className="w-3 h-3 rounded-full border-2 border-slate-900 bg-white z-10 mt-1.5" />
          {!isLast && <div className="w-[2px] grow bg-slate-100 mt-1" />}
        </div>

        {/* Content */}
        <div className={cn("md:col-span-8 pb-6", isLast ? "pb-0" : "")}>
          {/* Date Mobile */}
          <p className="md:hidden text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
            {entry.period}
          </p>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <h3 className="text-xl font-bold text-slate-900">{entry.title}</h3>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <p className="text-slate-500 font-medium">{entry.organization}</p>
            <Badge variant="outline" className="ml-2">
              {entry.type}
            </Badge>
          </div>

          <p className="text-slate-600 mb-6 max-w-2xl leading-relaxed">
            {entry.description}
          </p>

          <ul className="space-y-3 mb-6">
            {entry.highlights.map((highlight, i) => (
              <li
                key={i}
                className="text-sm text-slate-500 flex items-start gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-1.5 shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Images Grid */}
          {entry.images && entry.images.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {entry.images.map((img, i) => (
                <div
                  key={i}
                  className="aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200 group"
                >
                  <img
                    src={img}
                    alt={`${entry.title} - imagen ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Validation Link */}
          {entry.credentialUrl && (
            <div className="mb-6">
              <a
                href={entry.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-slate-600 transition-colors uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-lg border border-slate-200"
              >
                <ExternalLink size={14} />
                Validar Certificación
              </a>
            </div>
          )}

          <div className="mt-auto flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold text-slate-400 uppercase"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
