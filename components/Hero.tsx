'use client';

import { useTranslations } from 'next-intl';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useCallback } from 'react';
import { IconLock, IconBolt, IconHeadphones } from '@tabler/icons-react';

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
    <span
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', columnGap: '0.25em', overflow: 'visible' }}
    >
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden' }}>
          <motion.span
            style={{ display: 'inline-block' }}
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
        </span>
      ))}
    </span>
  );
}

const notificationCards = [
  {
    titleKey: 'card1Title' as const,
    messageKey: 'card1Message' as const,
    time: '23:47',
    borderColor: '#D97706',
    enterDelay: 0.3,
    floatDelay: 0,
  },
  {
    titleKey: 'card2Title' as const,
    messageKey: 'card2Message' as const,
    time: '23:47',
    borderColor: '#10B981',
    enterDelay: 0.9,
    floatDelay: 1,
  },
  {
    titleKey: 'card3Title' as const,
    messageKey: 'card3Message' as const,
    time: '23:48',
    borderColor: '#D97706',
    enterDelay: 1.5,
    floatDelay: 2,
  },
];

const trustItems = [
  { Icon: IconLock, labelKey: 'item1' as const },
  { Icon: IconBolt, labelKey: 'item2' as const },
  { Icon: IconHeadphones, labelKey: 'item3' as const },
];

export default function Hero() {
  const t = useTranslations('hero');
  const tTrust = useTranslations('heroTrust');
  const tNotif = useTranslations('heroNotifications');

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
        <div className="flex flex-row items-start gap-12">
          {/* Left: main content */}
          <div className="flex-1 min-w-0">
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-1 overflow-visible">
              <WordReveal
                text={t('headline1')}
                className="text-text-primary"
                delay={0.18}
              />
            </h1>

            {/* Line 2 — amber */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-12 overflow-visible">
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
              className="flex flex-col items-start gap-5"
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

          {/* Right: notification cards — desktop only */}
          <div className="hidden md:flex flex-col gap-3 w-[280px] flex-shrink-0 pt-32">
            {notificationCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: card.enterDelay,
                }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: card.floatDelay,
                  }}
                  className="bg-surface border border-divider rounded-sm p-3"
                  style={{ borderLeft: `3px solid ${card.borderColor}` }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-medium text-text-primary">
                      {tNotif(card.titleKey)}
                    </span>
                    <span className="text-[10px] text-muted">{card.time}</span>
                  </div>
                  <p className="text-[12px] text-muted leading-relaxed">
                    {tNotif(card.messageKey)}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
