import React from 'react';
import { motion } from 'framer-motion';
import * as variants from '@/utils/animations';

interface AnimatedWrapperProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  delay?: number;
  className?: string;
}

const AnimatedWrapper = ({ children, variant = 'fadeUp', delay = 0, className }: AnimatedWrapperProps) => {
  const animationVariants = {
    fadeUp: variants.fadeUp,
    fadeIn: variants.fadeIn,
    slideInLeft: variants.slideInLeft,
    staggerContainer: variants.staggerContainer,
    staggerItem: variants.staggerItem,
    scaleIn: variants.scaleIn,
  };

  const animationVariant = animationVariants[variant as keyof typeof animationVariants] || variants.fadeUp;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={animationVariant}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
