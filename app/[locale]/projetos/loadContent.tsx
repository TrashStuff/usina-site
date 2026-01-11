import fs from "node:fs";
import path from "node:path";
import { Locale, locales, defaultLocale } from "@/lib/i18n/config";
import { MDXContent } from "mdx/types";
import { allFilterableTags, Content, Metadata } from "./types";

const basePath = process.env.PAGES_BASE_PATH
  ? `${process.env.PAGES_BASE_PATH}/`
  : "/";

const contentRoot = path.join(process.cwd(), "content");

export async function loadContent(locale: Locale, fileName: string) {
  const fallbackLocales = locale === defaultLocale ? [locale] : [locale, defaultLocale];

  for (const currentLocale of fallbackLocales) {
    try {
      const { default: Component, metadata } = await import(
        `@/content/${currentLocale}/${fileName}.mdx`
      );

      const parsedMetadata: Metadata = {
        ...metadata,
        prioridade: metadata.prioridade ?? 0,
        slug: fileName,
        image: `${basePath}content/${metadata.image}`,
      };

      // @ts-expect-error: Verifica se todas as tags são válidas
      if (!parsedMetadata.tags.some((tag) => allFilterableTags.includes(tag))) {
        throw new Error(
          `\n\n\n ⚠️ As tags do projeto "${
            parsedMetadata.title
          }" ('./content/${currentLocale}/${fileName}.mdx') não possui uma tag que se encaixe em um filtro. Tags do projeto:\n\n${parsedMetadata.tags
            .map((tag) => `- ${tag}`)
            .join(
              "\n"
            )}\n\nDuas possíveis soluções:\n\n1️⃣. Adicionar uma tag que se encaixe em algum filtro, como: ${allFilterableTags.join(
            ", "
          )}.\n\n2️⃣. Adicionar uma nova tag na lista de possíveis tags no arquivo './app/[locale]/projetos/types.ts'.\n\n`
        );
      }

      return {
        Component: Component as MDXContent,
        metadata: parsedMetadata,
      } as Content;
    } catch (error) {
      if (!isMissingContent(error)) {
        throw error;
      }
    }
  }

  throw new Error(
    `Não foi possível encontrar o conteúdo '${fileName}' para o locale '${locale}'.`
  );
}

export function getProjectSlugs() {
  const slugs = new Set<string>();

  for (const locale of locales) {
    const dir = path.join(contentRoot, locale);
    if (!fs.existsSync(dir)) continue;

    fs.readdirSync(dir)
      .filter((file) => file.endsWith(".mdx"))
      .forEach((file) => slugs.add(file.replace(/\.mdx$/, "")));
  }

  return Array.from(slugs).sort();
}

function isMissingContent(error: unknown) {
  return (
    error instanceof Error &&
    (error.message.includes("Cannot find module") ||
      error.message.includes("Module not found"))
  );
}

