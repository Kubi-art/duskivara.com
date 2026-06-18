'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { IconShieldCheck, IconCalendarOff, IconTools } from '@tabler/icons-react';

const icons = [IconShieldCheck, IconCalendarOff, IconTools];

export default function RiskReversal() {
  const t = useTranslations('guarantee');
  const items = t.raw('items') as Array<{ title: string; text: string }>;

  return (
    <section className="bg-bg border-b border-divider py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="mb-4">
            <span className="text-[11px] uppercase tracking-[0.15em] text-muted">
              {t('label')}
            </span>
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">
            {t('headline')}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <div className="border border-divider p-8 rounded-sm group cursor-default transition-all duration-200 hover:border-accent relative overflow-hidden h-full">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top" />
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mb-5"
                  >
                    <Icon size={28} className="text-accent" />
                  </motion.div>
                  <h3 className="text-base font-semibold text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
