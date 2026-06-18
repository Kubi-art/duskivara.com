'use client';

import { useTranslations } from 'next-intl';
import FadeIn from './FadeIn';

export default function Problem() {
  const t = useTranslations('problem');
  const items = t.raw('items') as Array<{ number: string; text: string }>;

  return (
    <section className="py-32 md:py-40 border-t border-muted/20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <FadeIn>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-light">
            {t('label')}
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-6 text-base md:text-lg text-muted-light max-w-xl leading-relaxed">
            {t('intro')}
          </p>
        </FadeIn>

        <div className="mt-20 md:mt-24 grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-muted/20">
          {items.map((item, i) => (
            <FadeIn key={item.number} delay={0.1 * i}>
              <div className="py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 group">
                <span className="block text-[4rem] md:text-[5rem] font-semibold leading-none tracking-tightest text-muted/20 mb-8 group-hover:text-accent/30 transition-colors duration-500">
                  {item.number}
                </span>
                <p className="text-sm text-muted-light leading-relaxed max-w-xs">
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
