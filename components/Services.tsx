'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  setup: string;
  monthly: string;
  setupLabel: string;
  monthlyLabel: string;
  featured?: boolean;
}

export default function Services() {
  const t = useTranslations('services');
  const items = t.raw('items') as ServiceItem[];

  return (
    <section id="services" className="py-20 md:py-24 border-b border-divider">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-14">
          <div>
            <FadeIn>
              <span className="text-[11px] uppercase tracking-[0.15em] text-accent">
                {t('label')}
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight tracking-tightest text-text-primary max-w-lg">
                {t('title')}
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <p className="text-sm text-muted max-w-xs">
              {t('subtitle')}
            </p>
          </FadeIn>
        </div>

        {/* gap-px on bg-divider creates the 1px separator lines between cards */}
        <div className="grid md:grid-cols-3 gap-px bg-divider">
          {items.map((item, i) => (
            <ServiceCard key={item.id} item={item} index={i} learnMore={t('learnMore')} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BorderBeam() {
  return (
    /*
     * Outer div: opacity-0 by default, fades in on group-hover.
     * The rotating conic-gradient div is 300%×300%, centered at the card center.
     * The inset-[1px] sibling div in ServiceCard masks everything except
     * the 1px border edge — so only the beam sweeping past each edge is visible.
     */
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute"
        style={{
          top: '-100%',
          left: '-100%',
          width: '300%',
          height: '300%',
          background:
            'conic-gradient(from 0deg, transparent 78%, rgba(217,119,6,0.4) 82%, #D97706 85%, rgba(217,119,6,0.4) 88%, transparent 92%)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}

function ServiceCard({
  item,
  index,
  learnMore,
}: {
  item: ServiceItem;
  index: number;
  learnMore: string;
}) {
  return (
    <FadeIn delay={0.07 * index}>
      {/*
       * Outer: transparent bg so the gap-px lines and beam are both visible at edges.
       * group + overflow-hidden so BorderBeam is clipped to the card.
       */}
      <div className="group relative overflow-hidden">
        <BorderBeam />

        {/* Card surface — inset 1px from edge so beam shows at the border */}
        <div className="absolute inset-[1px] bg-surface pointer-events-none" />

        {/* Actual content on top */}
        <div className="relative z-10 p-8 md:p-9 flex flex-col min-h-[400px]">
          {item.featured && (
            <div className="absolute top-0 right-0 bg-accent px-3 py-1 z-20">
              <span className="text-[10px] uppercase tracking-[0.1em] font-semibold text-bg">
                Popular
              </span>
            </div>
          )}

          <div className="flex-1">
            <span className="text-[11px] uppercase tracking-[0.1em] text-accent">
              {item.tagline}
            </span>

            <h3 className="mt-3 text-xl md:text-2xl font-semibold tracking-tighter text-text-primary">
              {item.name}
            </h3>

            <p className="mt-5 text-sm text-muted leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="mt-8 pt-0">
            <div className="flex items-end justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-muted mb-1">
                  {item.setupLabel}
                </div>
                <div className="text-2xl font-bold tracking-tight text-text-primary">
                  {item.setup}
                </div>
                <div className="text-xs text-muted mt-1">
                  + {item.monthly}
                </div>
              </div>
              <a
                href="https://calendly.com/mikolaj-kubacki/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-[0.1em] text-accent hover:text-accent-hover border-b border-accent/30 hover:border-accent-hover pb-0.5 transition-all duration-200"
              >
                {learnMore} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
