'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    // No flex justify — content starts at the top, just cleared past the fixed navbar
    <section className="relative min-h-screen bg-bg border-b border-divider">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8"
        >
          <span className="text-[11px] uppercase tracking-[0.15em] text-muted border border-divider px-3 py-1.5">
            AI Automation Agency
          </span>
        </motion.div>

        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.92] tracking-tightest text-text-primary"
          >
            {t('headline1')}
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-14">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
            className="text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.92] tracking-tightest text-accent"
          >
            {t('headline2')}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16"
        >
          <p className="max-w-xs text-sm text-muted leading-relaxed">
            {t('subtext')}
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-4 bg-accent text-bg px-8 py-4 text-[11px] uppercase tracking-[0.05em] font-semibold hover:bg-accent-hover transition-colors duration-200 whitespace-nowrap rounded-btn"
          >
            {t('cta')}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll hint anchored to bottom of the full-height section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 right-10 hidden md:flex flex-col items-end gap-3"
      >
        <div className="w-px h-12 bg-divider" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted/50">scroll</span>
      </motion.div>
    </section>
  );
}
