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
    <footer className="border-t border-muted/20 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Duskivara"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
            <span className="text-sm font-semibold tracking-tight text-text-primary">
              Duskivara
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
            <p className="text-xs text-muted-light">{t('tagline')}</p>
            <a
              href={`mailto:${t('email')}`}
              className="text-xs text-muted-light hover:text-text-primary transition-colors duration-300"
            >
              {t('email')}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-light uppercase tracking-widest">
              {t('language')}:
            </span>
            <button
              onClick={switchLocale}
              className="text-xs uppercase tracking-widest text-muted-light hover:text-text-primary transition-colors duration-300 border border-muted/30 hover:border-muted px-3 py-1.5"
            >
              {locale === 'pl' ? 'EN' : 'PL'}
            </button>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-muted/10">
          <p className="text-[11px] text-muted/50 tracking-wider">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
