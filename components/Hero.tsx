'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-bg">
      {/* Slow-motion CSS background — subtle texture, no particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #F5F5F0 1px, transparent 1px), linear-gradient(to bottom, #F5F5F0 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pb-24 pt-40">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-muted-light border border-muted/30 px-3 py-1.5">
            AI Automation Agency
          </span>
        </motion.div>

        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[clamp(2.8rem,8vw,7rem)] font-semibold leading-[0.95] tracking-tightest text-text-primary"
          >
            {t('headline1')}
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-12">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
            className="text-[clamp(2.8rem,8vw,7rem)] font-semibold leading-[0.95] tracking-tightest text-text-primary/40"
          >
            {t('headline2')}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-16"
        >
          <p className="max-w-sm text-sm text-muted-light leading-relaxed">
            {t('subtext')}
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-4 bg-accent text-text-primary px-8 py-4 text-xs uppercase tracking-widest hover:bg-accent/80 transition-all duration-300 whitespace-nowrap"
          >
            {t('cta')}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute bottom-8 right-10 hidden md:flex flex-col items-center gap-2"
        >
          <div className="w-px h-16 bg-muted/40 animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted/60 rotate-90 mt-2 origin-center">
            scroll
          </span>
        </motion.div>
      </div>

    </section>
  );
}
