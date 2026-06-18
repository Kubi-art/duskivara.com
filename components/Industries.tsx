'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  IconCar,
  IconDental,
  IconScissors,
  IconBook,
  IconHome,
  IconBolt,
} from '@tabler/icons-react';

const icons = [IconCar, IconDental, IconScissors, IconBook, IconHome, IconBolt];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Industries() {
  const t = useTranslations('industries');
  const items = t.raw('items') as string[];

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
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {items.map((label, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-surface border border-divider rounded-sm p-6 group cursor-default transition-all duration-200 hover:border-accent"
              >
                <div className="inline-block">
                  <Icon
                    size={24}
                    className="text-accent transition-transform duration-200 group-hover:-translate-y-1"
                  />
                </div>
                <p className="text-sm font-medium text-text-primary mt-3">{label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
