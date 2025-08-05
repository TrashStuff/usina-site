import { MDXContent } from "mdx/types";
import { Content } from "./types";

const basePath = process.env.PAGES_BASE_PATH
  ? `${process.env.PAGES_BASE_PATH}/`
  : "/";

export async function loadContent(fileName: string) {
  const { default: Component, metadata } = await import(
    `@/content/${fileName}.mdx`
  );

  return {
    Component: Component as MDXContent,
    metadata: {
      ...metadata,
      prioridade: metadata.prioridade ?? 0,
      slug: fileName,
      image: `${basePath}content/${metadata.image}`,
    },
  } as Content;
}
