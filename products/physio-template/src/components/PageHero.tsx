"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-brand-primary py-28">
      {/* subtle accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 h-72 w-72 bg-brand-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block mb-4 rounded-md bg-white/10 px-4 py-1.5 text-sm font-medium text-brand-secondary"
        >
          {subtitle}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.45 }}
          className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
