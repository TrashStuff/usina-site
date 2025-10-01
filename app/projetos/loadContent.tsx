import { MDXContent } from "mdx/types";
import { allFilterableTags, Content, Metadata } from "./types";

const basePath = process.env.PAGES_BASE_PATH
  ? `${process.env.PAGES_BASE_PATH}/`
  : "/";

export async function loadContent(fileName: string) {
  const { default: Component, metadata } = await import(
    `@/content/${fileName}.mdx`
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
      }" não possui uma tag que se encaixe em um filtro.\n\n${parsedMetadata.tags
        .map((tag) => `- ${tag}`)
        .join(
          "\n"
        )}\n\nDuas possíveis soluções:\n\n1️⃣. Adicionar uma tag que se encaixe em algum filtro, como: ${allFilterableTags.join(
        ", "
      )}.\n\n2️⃣. Adicionar uma nova tag na lista de possíveis tags no arquivo './app/projetos/types.ts'.\n\n`
    );
  }

  return {
    Component: Component as MDXContent,
    metadata: parsedMetadata,
  } as Content;
}

