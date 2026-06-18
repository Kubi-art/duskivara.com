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
    <section id="services" className="py-32 md:py-40 border-t border-muted/20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <FadeIn>
              <span className="text-xs uppercase tracking-[0.25em] text-muted-light">
                {t('label')}
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-tight tracking-tightest text-text-primary">
                {t('title')}
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <p className="text-sm text-muted-light max-w-xs md:text-right">
              {t('subtitle')}
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-muted/20">
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
    <FadeIn delay={0.08 * index}>
      <motion.div
        className="relative bg-bg p-8 md:p-10 flex flex-col h-full min-h-[420px] group cursor-default overflow-hidden"
        whileHover="hovered"
      >
        {/* Purple border reveal on hover */}
        <motion.div
          className="absolute inset-0 border border-accent pointer-events-none"
          variants={{
            hovered: { opacity: 1 },
          }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        />

        {/* Featured indicator */}
        {item.featured && (
          <div className="absolute top-0 right-0 bg-accent px-3 py-1">
            <span className="text-[10px] uppercase tracking-widest text-text-primary">
              Popular
            </span>
          </div>
        )}

        <div className="flex-1">
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-light">
            {item.tagline}
          </span>

          <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tightest text-text-primary group-hover:text-accent transition-colors duration-300">
            {item.name}
          </h3>

          <div className="mt-4 w-8 h-px bg-muted/40 group-hover:w-16 group-hover:bg-accent/60 transition-all duration-500" />

          <p className="mt-6 text-sm text-muted-light leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-muted/20">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-muted-light mb-1">
                {item.setupLabel}
              </div>
              <div className="text-2xl font-semibold tracking-tight text-text-primary">
                {item.setup}
              </div>
              <div className="text-xs text-muted-light mt-1">
                + {item.monthly} {item.monthlyLabel}
              </div>
            </div>
            <a
              href="#contact"
              className="text-[11px] uppercase tracking-widest text-accent hover:text-text-primary border-b border-accent/40 hover:border-text-primary pb-0.5 transition-all duration-300"
            >
              {learnMore} →
            </a>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}
