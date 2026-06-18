'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [logoError, setLogoError] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);

      // Hide on scroll down, reveal on scroll up
      if (currentY < 80) {
        setVisible(true);
      } else if (currentY > lastScrollY.current + 6) {
        setVisible(false);
      } else if (currentY < lastScrollY.current - 6) {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = () => {
    const next = locale === 'pl' ? 'en' : 'pl';
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${next}${pathWithoutLocale}`);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-divider transition-colors duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-md'
          : 'bg-bg'
      }`}
      animate={{ y: visible ? 0 : '-100%' }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href={`/${locale}`} className="flex items-center gap-2.5">
          {!logoError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/logo.svg"
              alt=""
              style={{ height: '30px', width: 'auto', display: 'block' }}
              onError={() => setLogoError(true)}
            />
          ) : (
            <span style={{ color: '#F5F0E8', fontWeight: 700, fontSize: '20px', lineHeight: 1 }}>
              D
            </span>
          )}
          <span className="text-text-primary font-medium tracking-tight text-sm">
            Duskivara
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {(['services', 'howItWorks', 'contact'] as const).map((key) => (
            <a
              key={key}
              href={key === 'howItWorks' ? '#how-it-works' : `#${key}`}
              className="text-[11px] uppercase tracking-[0.15em] text-muted hover:text-text-primary transition-colors duration-200"
            >
              {t(key)}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={switchLocale}
            className="text-[11px] uppercase tracking-[0.15em] text-muted hover:text-text-primary transition-colors duration-200 border border-divider hover:border-muted/50 px-3 py-1.5"
          >
            {locale === 'pl' ? 'EN' : 'PL'}
          </button>
          <a
            href="#contact"
            className="hidden md:inline-flex text-[11px] uppercase tracking-[0.05em] font-semibold bg-accent text-bg px-5 py-2.5 hover:bg-accent-hover transition-colors duration-200 rounded-btn"
          >
            {t('cta')}
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
