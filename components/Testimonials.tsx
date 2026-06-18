'use client';

import { useTranslations } from 'next-intl';
import FadeIn from './FadeIn';

interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const items = t.raw('items') as Testimonial[];

  return (
    <section className="py-20 md:py-24 border-b border-divider">
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
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-divider">
          {items.map((item, i) => (
            <FadeIn key={i} delay={0.07 * i}>
              <div className="bg-surface p-8 md:p-9 flex flex-col min-h-[260px]">
                <div
                  className="text-5xl leading-none select-none mb-4 font-serif"
                  style={{ color: 'rgba(217,119,6,0.4)' }}
                >
                  &ldquo;
                </div>
                <p className="text-sm text-text-primary/75 leading-relaxed flex-1">
                  {item.quote}
                </p>
                <div className="pt-5 mt-6 border-t border-divider">
                  <div className="text-xs font-semibold text-text-primary/80 tracking-tight">
                    {item.author}
                  </div>
                  <div className="text-[11px] text-muted tracking-wider mt-0.5">
                    {item.location}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
