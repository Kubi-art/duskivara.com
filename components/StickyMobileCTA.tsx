'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function StickyMobileCTA() {
  const t = useTranslations('mobileCta');

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-bg border-t border-divider py-3 px-4"
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href="#contact"
        className="block w-full bg-accent hover:bg-accent-hover text-bg text-center text-[12px] uppercase tracking-[0.08em] font-semibold py-3.5 transition-colors duration-200 rounded-btn"
      >
        {t('button')}
      </a>
    </motion.div>
  );
}
