'use client';

import { useTranslations } from 'next-intl';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

function AnimatedNumber({
  value,
  className,
  style,
}: {
  value: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 120, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    motionVal.set(value);
  }, [value, motionVal]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (v) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [spring]);

  return (
    <span className={className} style={style}>
      {display.toLocaleString('pl-PL')}
    </span>
  );
}

export default function ROICalculator() {
  const t = useTranslations('roi');

  const [queries, setQueries] = useState(10);
  const [visitValue, setVisitValue] = useState(200);

  const missed = Math.round(queries * 0.4 * 30);
  const losses = Math.round(missed * visitValue * 0.3);
  const roi = losses - 300;

  return (
    <section className="bg-bg border-b border-divider py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="mb-4">
            <span className="text-[11px] uppercase tracking-[0.15em] text-muted">
              {t('label')}
            </span>
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight mb-3">
            {t('headline')}
          </h2>
          <p className="text-sm text-muted">{t('subheadline')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-surface border border-divider rounded-sm p-8 md:p-10">
            {/* Inputs */}
            <div className="space-y-8">
              {/* Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm text-muted">{t('sliderLabel')}</label>
                  <span className="text-sm font-semibold text-accent">{queries}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={queries}
                  onChange={(e) => setQueries(Number(e.target.value))}
                  className="w-full h-1 rounded-full appearance-none cursor-pointer"
                  style={{ accentColor: '#D97706' }}
                />
              </div>

              {/* Number input */}
              <div>
                <label className="block text-sm text-muted mb-3">{t('priceLabel')}</label>
                <input
                  type="number"
                  min={50}
                  step={50}
                  value={visitValue}
                  onChange={(e) => setVisitValue(Math.max(50, Number(e.target.value)))}
                  className="bg-bg border border-divider text-text-primary px-4 py-2.5 text-sm rounded-sm w-32 focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            {/* Results */}
            <div className="border-t border-divider mt-8 pt-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">{t('result1Label')}</span>
                <span className="text-sm text-text-primary">
                  <AnimatedNumber value={missed} />
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">{t('result2Label')}</span>
                <AnimatedNumber
                  value={losses}
                  className="text-3xl font-bold text-accent"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">{t('result3Label')}</span>
                <span className="text-sm text-text-primary">{t('result3Value')}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">{t('result4Label')}</span>
                <AnimatedNumber
                  value={roi}
                  className="text-sm font-semibold"
                  style={{ color: roi > 0 ? '#10B981' : '#F5F0E8' }}
                />
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://calendly.com/mikolaj-kubacki/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full bg-accent hover:bg-accent-hover text-bg text-center text-[11px] uppercase tracking-[0.05em] font-semibold py-4 transition-colors duration-200 rounded-btn"
            >
              {t('cta')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
