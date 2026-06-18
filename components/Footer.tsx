'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const next = locale === 'pl' ? 'en' : 'pl';
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${next}${pathWithoutLocale}`);
  };

  return (
    <footer className="bg-bg border-t border-divider py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Duskivara"
              width={26}
              height={26}
              className="w-6.5 h-6.5 object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <span className="text-sm font-semibold tracking-tight text-text-primary">
              Duskivara
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
            <p className="text-xs text-muted">{t('tagline')}</p>
            <a
              href={`mailto:${t('email')}`}
              className="text-xs text-muted hover:text-text-primary transition-colors duration-200"
            >
              {t('email')}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-muted uppercase tracking-[0.15em]">
              {t('language')}:
            </span>
            <button
              onClick={switchLocale}
              className="text-[11px] uppercase tracking-[0.15em] text-muted hover:text-text-primary transition-colors duration-200 border border-divider hover:border-muted/40 px-3 py-1.5"
            >
              {locale === 'pl' ? 'EN' : 'PL'}
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-divider">
          <p className="text-[11px] text-muted/50 tracking-wider">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
