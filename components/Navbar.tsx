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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-muted/30 bg-bg/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href={`/${locale}`} className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Duskivara"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <span className="text-text-primary font-semibold tracking-tight text-sm">
            Duskivara
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-xs uppercase tracking-widest text-muted-light hover:text-text-primary transition-colors duration-300"
          >
            {t('services')}
          </a>
          <a
            href="#how-it-works"
            className="text-xs uppercase tracking-widest text-muted-light hover:text-text-primary transition-colors duration-300"
          >
            {t('howItWorks')}
          </a>
          <a
            href="#contact"
            className="text-xs uppercase tracking-widest text-muted-light hover:text-text-primary transition-colors duration-300"
          >
            {t('contact')}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={switchLocale}
            className="text-xs uppercase tracking-widest text-muted-light hover:text-text-primary transition-colors duration-300 border border-muted/40 hover:border-muted px-3 py-1.5"
          >
            {locale === 'pl' ? 'EN' : 'PL'}
          </button>
          <a
            href="#contact"
            className="hidden md:inline-flex text-xs uppercase tracking-widest bg-accent text-text-primary px-5 py-2.5 hover:bg-accent/80 transition-colors duration-300"
          >
            {t('cta')}
          </a>
        </div>
      </nav>
    </header>
  );
}
