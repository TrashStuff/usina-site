import { Locale } from "./config";

export function buildLocalePath(locale: Locale, path: string = "/") {
  const normalizedPath =
    path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;

  return `/${locale}${normalizedPath}`;
}
