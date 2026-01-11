'use client'

import { usePathname } from 'next/navigation';
import { Locale } from '@/lib/i18n/config';
import { buildLocalePath } from '@/lib/i18n/routing';
import { NavLink } from './NavLink';

export function LanguageLink({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  const otherLocale = locale === 'pt-BR' ? 'en' : 'pt-BR';

  return (
    <NavLink href={buildLocalePath(otherLocale, pathname.replace(/^\/(pt-BR|en)/, ""))}>
      {otherLocale === 'en' ? 'English' : 'Português'}
    </NavLink>
  )
} 