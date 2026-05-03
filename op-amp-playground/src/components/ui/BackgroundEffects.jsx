import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-background">
      {/* Aurora / Gradient Mesh Orbs */}
      
      {/* Top Left - Primary (Purple) */}
      <motion.div
        animate={{
          x: [0, 150, -50, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[120px] md:blur-[180px]"
      />
      
      {/* Center Right - Secondary (Cyan) */}
      <motion.div
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 150, -50, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-secondary/15 blur-[120px] md:blur-[180px]"
      />

      {/* Bottom Left - Accent (Rose) */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, 50, -100, 0],
          scale: [1, 1.3, 0.8, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[20%] left-[10%] w-[45vw] h-[45vw] rounded-full bg-accent/10 blur-[120px] md:blur-[180px]"
      />
    </div>
  );
};
