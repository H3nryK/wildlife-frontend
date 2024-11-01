import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : undefined}
      className={`
        bg-white rounded-xl shadow-lg overflow-hidden
        ${hover ? 'transition-shadow hover:shadow-xl' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};