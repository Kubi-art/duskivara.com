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
    <section id="how-it-works" className="py-32 md:py-40 border-t border-muted/20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <FadeIn>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-light">
            {t('label')}
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-tight tracking-tightest text-text-primary max-w-xl">
            {t('title')}
          </h2>
        </FadeIn>

        <div className="mt-20 md:mt-24 relative">
          {/* Connector line desktop */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-muted/20" aria-hidden />

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={0.1 + i * 0.12}>
                <div className="relative">
                  <div className="flex md:block items-start gap-6 md:gap-0">
                    <div className="relative flex-shrink-0">
                      <span className="flex items-center justify-center w-16 h-16 border border-muted/30 text-xs uppercase tracking-widest text-muted-light bg-bg md:relative">
                        {step.number}
                      </span>
                    </div>

                    <div className="md:mt-10">
                      <h3 className="text-xl font-semibold tracking-tight text-text-primary">
                        {step.name}
                      </h3>
                      <p className="mt-3 text-sm text-muted-light leading-relaxed max-w-xs">
                        {step.description}
                      </p>
                    </div>
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
