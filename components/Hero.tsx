'use client';

import { useTranslations } from 'next-intl';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useCallback } from 'react';

function WordReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '105%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.07,
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const t = useTranslations('hero');

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  const spotlightBackground = useMotionTemplate`radial-gradient(700px circle at ${mouseX}px ${mouseY}px, rgba(217,119,6,0.09), transparent 70%)`;

  return (
    <section
      className="relative bg-bg border-b border-divider overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight follows cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: spotlightBackground }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-28">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="mb-8"
        >
          <span className="text-[11px] uppercase tracking-[0.15em] text-muted border border-divider px-3 py-1.5">
            AI Automation Agency
          </span>
        </motion.div>

        {/* Line 1 — white */}
        <h1 className="text-[clamp(2.6rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-tightest mb-1">
          <WordReveal
            text={t('headline1')}
            className="text-text-primary"
            delay={0.18}
          />
        </h1>

        {/* Line 2 — amber */}
        <h1 className="text-[clamp(2.6rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-tightest mb-16">
          <WordReveal
            text={t('headline2')}
            className="text-accent"
            delay={0.48}
          />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
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
    </section>
  );
}
