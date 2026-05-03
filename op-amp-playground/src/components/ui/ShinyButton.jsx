import React from 'react';
import { motion } from 'framer-motion';

export const ShinyButton = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-shadow duration-500 ${className}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#a855f7_50%,#06b6d4_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-surface/95 px-8 py-4 text-base font-bold text-text-main backdrop-blur-3xl transition-colors hover:bg-surface/80 gap-2">
        {children}
      </span>
    </motion.button>
  );
};
