import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  noPadding?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  glass = true,
  noPadding = false,
  onClick,
}) => {
  const glassStyles = glass
    ? 'bg-white/10 backdrop-blur-lg border border-white/20'
    : 'bg-white shadow-lg';
    
  const paddingStyles = noPadding ? '' : 'p-6';
  
  const hoverStyles = hover
    ? 'hover:shadow-glass hover:-translate-y-2 hover:border-white/30'
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -8 } : {}}
      onClick={onClick}
      className={`rounded-2xl ${glassStyles} ${paddingStyles} ${hoverStyles} transition-all duration-300 ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;

