import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeUp } from '@/utils/animations';
import { cn } from '@/utils/cn';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeader = ({ label, title, description, align = 'left', className }: SectionHeaderProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={fadeUp}
      className={cn(
        'mb-12 md:mb-16 max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : '',
        className
      )}
    >
      {label && (
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 block mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-slate-500 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
