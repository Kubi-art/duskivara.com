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
              <h2 className="mt-4 text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight tracking-tightest text-text-primary">
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

        <div className="grid md:grid-cols-3 gap-px bg-divider">
          {items.map((item, i) => (
            <ServiceCard key={item.id} item={item} index={i} learnMore={t('learnMore')} />
          ))}
        </div>
      </div>
    </section>
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
      <motion.div
        className="relative bg-surface p-8 md:p-9 flex flex-col h-full min-h-[400px] group cursor-default"
        whileHover="hovered"
      >
        {/* Amber border on hover */}
        <motion.div
          className="absolute inset-0 border border-accent pointer-events-none"
          variants={{ hovered: { opacity: 1 } }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />

        {item.featured && (
          <div className="absolute top-0 right-0 bg-accent px-3 py-1 rounded-bl-btn">
            <span className="text-[10px] uppercase tracking-[0.1em] font-semibold text-bg">
              Popular
            </span>
          </div>
        )}

        <div className="flex-1">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
            {item.tagline}
          </span>

          <h3 className="mt-3 text-xl md:text-2xl font-semibold tracking-tighter text-text-primary group-hover:text-accent transition-colors duration-200">
            {item.name}
          </h3>

          <div className="mt-4 w-6 h-px bg-divider group-hover:w-12 group-hover:bg-accent/50 transition-all duration-400" />

          <p className="mt-5 text-sm text-muted leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-divider">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-muted mb-1">
                {item.setupLabel}
              </div>
              <div className="text-2xl font-bold tracking-tight text-text-primary">
                {item.setup}
              </div>
              <div className="text-xs text-muted mt-1">
                + {item.monthly} {item.monthlyLabel}
              </div>
            </div>
            <a
              href="#contact"
              className="text-[11px] uppercase tracking-[0.1em] text-accent hover:text-accent-hover border-b border-accent/30 hover:border-accent-hover pb-0.5 transition-all duration-200"
            >
              {learnMore} →
            </a>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}
