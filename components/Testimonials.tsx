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
    <section className="py-32 md:py-40 border-t border-muted/20">
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
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-muted/20">
          {items.map((item, i) => (
            <FadeIn key={i} delay={0.08 * i}>
              <div className="bg-bg p-8 md:p-10 flex flex-col gap-8 group">
                <div className="text-3xl text-muted/30 font-serif leading-none select-none">
                  &ldquo;
                </div>
                <p className="text-sm text-text-primary/70 leading-relaxed flex-1 -mt-4">
                  {item.quote}
                </p>
                <div className="pt-6 border-t border-muted/20">
                  <div className="text-xs font-medium text-text-primary tracking-tight">
                    {item.author}
                  </div>
                  <div className="text-[11px] text-muted-light tracking-wider mt-1">
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
