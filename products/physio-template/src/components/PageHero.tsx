"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-brand-primary overflow-hidden">
      {/* Premium Background Mesh/Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-primary via-brand-primary/95 to-brand-primary" />
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-[20%] -right-[10%] w-[60%] h-[150%] bg-brand-secondary/5 rounded-full blur-[120px] rotate-12" 
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-secondary text-[11px] font-bold uppercase tracking-[0.3em] backdrop-blur-md mb-6"
          >
            <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full animate-pulse" />
            {subtitle}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-7xl font-bold leading-[1.1] tracking-tighter text-white"
          >
            {title}
          </motion.h1>
        </div>
      </div>

      {/* Simplified bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-secondary/30" />
    </section>
  );
}
