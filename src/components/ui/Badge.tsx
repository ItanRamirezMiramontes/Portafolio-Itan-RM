import React from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'accent';
  size?: 'sm' | 'md';
  className?: string;
}

const Badge = ({ children, variant = 'default', size = 'sm', className }: BadgeProps) => {
  const variants = {
    default: 'bg-slate-100 text-slate-700 border-transparent',
    outline: 'bg-transparent border-slate-200 text-slate-500',
    accent: 'bg-slate-900 text-white border-transparent',
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-bold uppercase tracking-wider rounded-full border transition-colors',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
