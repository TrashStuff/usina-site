import { NavBar } from "../NavBar";
import type { Metadata } from "next";
import { Locale, locales } from "@/lib/i18n/config";
import { buildLocalePath } from "@/lib/i18n/routing";
import { getProjectSlugs, loadContent } from "./loadContent";
import { ProjectsList } from "./ProjectsList";
import { t } from "@/app/Translation";

const projectsLanguages = Object.fromEntries(
  locales.map((locale) => [locale, buildLocalePath(locale, "/projetos")])
);

export async function generateMetadata({
  params,
}: ProjetosProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: `${t({ locale, key: "projects" })} | Usina`,
    description: t({ locale, key: "projectsDescription" }),
    alternates: {
      languages: projectsLanguages,
    },
  };
}

type ProjetosProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function Projetos({ params }: ProjetosProps) {
  const { locale } = await params;

  const slugs = getProjectSlugs();

  const content = await Promise.all(
    slugs.map((fileName) => loadContent(locale, fileName))
  );

  const sortedContent = content
    .toSorted((a, b) => {
      return b.metadata.prioridade - a.metadata.prioridade;
    })
    .map(({ metadata }) => ({ metadata }));

  return (
    <div className="flex flex-col items-center min-h-screen">
      <NavBar currentPage="projetos" locale={locale} />

      <ProjectsList content={sortedContent} locale={locale} />
    </div>
  );
}
