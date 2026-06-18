'use client';

import { useTranslations } from 'next-intl';
import FadeIn from './FadeIn';

export default function Problem() {
  const t = useTranslations('problem');
  const items = t.raw('items') as Array<{ number: string; text: string }>;

  return (
    <section className="py-20 md:py-24 border-b border-divider">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <FadeIn>
          <span className="text-[11px] uppercase tracking-[0.15em] text-accent">
            {t('label')}
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-5 text-base text-muted max-w-lg leading-relaxed">
            {t('intro')}
          </p>
        </FadeIn>

        <div className="mt-16 md:mt-20 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-divider">
          {items.map((item, i) => (
            <FadeIn key={item.number} delay={0.08 * i}>
              <div className="py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
                <span className="block text-[4.5rem] md:text-[5.5rem] font-semibold leading-none tracking-tightest text-accent/30 mb-6 select-none">
                  {item.number}
                </span>
                <p className="text-sm text-text-primary leading-relaxed max-w-xs">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
