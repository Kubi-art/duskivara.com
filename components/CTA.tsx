'use client';

import { useTranslations } from 'next-intl';
import FadeIn from './FadeIn';

export default function CTA() {
  const t = useTranslations('cta');

  return (
    <section id="contact" className="py-20 md:py-24 border-b border-divider bg-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-semibold leading-tight tracking-tightest text-text-primary">
              {t('headline')}
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-5 text-sm text-muted max-w-sm leading-relaxed">
              {t('subtext')}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10">
              <a
                href="mailto:hello@duskivara.com"
                className="group inline-flex items-center gap-4 bg-accent text-bg px-10 py-4 text-[11px] uppercase tracking-[0.05em] font-semibold hover:bg-accent-hover transition-colors duration-200 rounded-btn"
              >
                {t('button')}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.28}>
          <div className="mt-16 pt-8 border-t border-divider">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-muted">Available now</span>
              </div>
              <a
                href="mailto:hello@duskivara.com"
                className="text-xs text-muted hover:text-text-primary transition-colors duration-200 tracking-wider"
              >
                hello@duskivara.com
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
