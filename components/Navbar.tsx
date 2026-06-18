'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = () => {
    const next = locale === 'pl' ? 'en' : 'pl';
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${next}${pathWithoutLocale}`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-divider transition-all duration-500 ${
        scrolled ? 'bg-bg/95 backdrop-blur-sm' : 'bg-bg'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href={`/${locale}`} className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Duskivara"
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <span className="text-text-primary font-semibold tracking-tight text-sm">
            Duskivara
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-[11px] uppercase tracking-[0.15em] text-muted hover:text-text-primary transition-colors duration-200"
          >
            {t('services')}
          </a>
          <a
            href="#how-it-works"
            className="text-[11px] uppercase tracking-[0.15em] text-muted hover:text-text-primary transition-colors duration-200"
          >
            {t('howItWorks')}
          </a>
          <a
            href="#contact"
            className="text-[11px] uppercase tracking-[0.15em] text-muted hover:text-text-primary transition-colors duration-200"
          >
            {t('contact')}
          </a>
        </div>

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
    </header>
  );
}
