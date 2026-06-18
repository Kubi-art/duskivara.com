'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { IconX } from '@tabler/icons-react';

export default function Navbar() {
  const t = useTranslations('nav');
  const tAnnouncement = useTranslations('announcement');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [logoError, setLogoError] = useState(false);
  const [barDismissed, setBarDismissed] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const dismissed = localStorage.getItem('dusk_bar_v1');
    if (dismissed === 'true') {
      setBarDismissed(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);

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

  const dismissBar = () => {
    setBarDismissed(true);
    localStorage.setItem('dusk_bar_v1', 'true');
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
      {!barDismissed && (
        <div
          style={{ backgroundColor: '#D97706', color: '#0D1117' }}
          className="flex items-center justify-center px-6 py-2 relative"
        >
          <p
            style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.02em' }}
            className="text-center pr-8"
          >
            {tAnnouncement('text')}
          </p>
          <button
            onClick={dismissBar}
            style={{ color: '#0D1117' }}
            className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity duration-200"
            aria-label="Dismiss"
          >
            <IconX size={16} />
          </button>
        </div>
      )}
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href={`/${locale}`} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {!logoError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/logo.png"
              alt=""
              style={{
                height: '28px',
                width: 'auto',
                display: 'block',
                filter: 'brightness(0) invert(1)',
              }}
              onError={() => setLogoError(true)}
            />
          ) : (
            <span style={{ color: '#D97706', fontWeight: 700, fontSize: '20px', lineHeight: 1 }}>
              D
            </span>
          )}
          <span style={{ color: '#F5F0E8', fontSize: '18px', fontWeight: 500 }}>
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
