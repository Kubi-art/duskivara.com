'use client';

import { useTranslations } from 'next-intl';
import FadeIn from './FadeIn';

interface Step {
  number: string;
  name: string;
  description: string;
}

export default function HowItWorks() {
  const t = useTranslations('howItWorks');
  const steps = t.raw('steps') as Step[];

  return (
    <section id="how-it-works" className="py-20 md:py-24 border-b border-divider">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
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

        <div className="mt-16 md:mt-20 relative">
          {/* Amber connector line on desktop */}
          <div
            className="hidden md:block absolute top-7 left-0 right-0 h-px"
            style={{ background: 'rgba(217,119,6,0.3)' }}
            aria-hidden
          />

          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={0.1 + i * 0.1}>
                <div className="flex md:block items-start gap-6 md:gap-0">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center w-14 h-14 border border-divider text-[11px] uppercase tracking-[0.15em] text-accent bg-bg font-semibold">
                      {step.number}
                    </span>
                  </div>

                  <div className="md:mt-8">
                    <h3 className="text-base font-semibold tracking-tight text-text-primary">
                      {step.name}
                    </h3>
                    <p className="mt-2.5 text-sm text-muted leading-relaxed max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
