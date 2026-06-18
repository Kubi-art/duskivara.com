'use client';

import { useTranslations } from 'next-intl';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useCallback } from 'react';
import { IconLock, IconBolt, IconHeadphones } from '@tabler/icons-react';

const trustItems = [
  { Icon: IconLock, labelKey: 'item1' as const },
  { Icon: IconBolt, labelKey: 'item2' as const },
  { Icon: IconHeadphones, labelKey: 'item3' as const },
];

export default function Hero() {
  const t = useTranslations('hero');
  const tTrust = useTranslations('heroTrust');

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

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            style={{ display: 'block' }}
          >
            {t('headline1')}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48 }}
            style={{ display: 'block', color: '#D97706' }}
          >
            {t('headline2')}
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          className="flex flex-col items-start gap-5"
        >
          <p className="max-w-xs text-sm text-muted leading-relaxed">
            {t('subtext')}
          </p>
          <a
            href="https://calendly.com/mikolaj-kubacki/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-accent text-bg px-8 py-4 text-[11px] uppercase tracking-[0.05em] font-semibold hover:bg-accent-hover transition-colors duration-200 whitespace-nowrap rounded-btn"
          >
            {t('cta')}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>

          {/* Trust signals */}
          <div className="flex items-center flex-wrap gap-5 mt-0">
            {trustItems.map(({ Icon, labelKey }) => (
              <div key={labelKey} className="flex items-center gap-1.5">
                <Icon size={14} className="text-accent" />
                <span className="text-[12px] text-muted">{tTrust(labelKey)}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
