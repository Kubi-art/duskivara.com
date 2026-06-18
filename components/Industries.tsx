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
  IconPaw,
  IconBarbell,
  IconTruck,
} from '@tabler/icons-react';

const icons = [
  IconCar,
  IconDental,
  IconScissors,
  IconBook,
  IconHome,
  IconBolt,
  IconPaw,
  IconBarbell,
  IconTruck,
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
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
          <p className="mt-3 text-sm text-muted max-w-lg">
            {t('subheadline')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
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
                className="border border-divider rounded-sm p-4 group cursor-default transition-all duration-200"
                style={{ backgroundColor: '#111827' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#1a2235';
                  (e.currentTarget as HTMLElement).style.borderColor = '#D97706';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#111827';
                  (e.currentTarget as HTMLElement).style.borderColor = '#1F2937';
                }}
              >
                <Icon
                  size={20}
                  className="text-accent transition-transform duration-200 group-hover:-translate-y-0.5"
                />
                <p className="text-sm font-medium mt-3" style={{ color: '#F5F0E8' }}>{label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
