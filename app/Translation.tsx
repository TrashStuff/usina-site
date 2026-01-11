import { Locale } from "@/lib/i18n/config";

export const translations = {
  "pt-BR": {
    emailCopied: "Email copiado para a área de transferência!",
    filter: "Filtrar",
    tv: "TV",
    ads: "Publicidade",
    cinema: "Cinema",
    podcast: "Podcast",
    other: "Outro",
    seeAll: "Ver todos",
    soundDesign: "desenho de som | pós produção | música",
    usina: "USINA",
    projects: "projetos",
    us: "Nós",
    usDescription: "Usina é uma produtora formada pela dupla Hugo Rocha e Miguel Mermelstein. Criamos soluções sonoras para projetos audiovisuais.",
  },
  en: {
    emailCopied: "Email copied to clipboard!",
    filter: "Filter",
    tv: "TV",
    ads: "Advertising",
    cinema: "Cinema",
    podcast: "Podcast",
    other: "Other",
    seeAll: "See all",
    soundDesign: "sound design | post production | music",
    usina: "USINA",
    projects: "projects",
    us: "Us",
    usDescription: "Usina é uma produtora formada pela dupla Hugo Rocha e Miguel Mermelstein. Criamos soluções sonoras para projetos audiovisuais.",
  },
};

export function t({ locale = 'pt-BR', key }: { locale: Locale; key: keyof (typeof translations)["pt-BR"] }) {
  return translations[locale][key];
}