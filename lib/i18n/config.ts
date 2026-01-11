export const locales = ["pt-BR", "en"] as const;

export const defaultLocale = "pt-BR";

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}
