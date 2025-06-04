import { MDXContent } from "mdx/types";

type Content = {
  Component: MDXContent;
  metadata: {
    slug: string;
    title: string;
    image: string;
    tags: string[];
    cliente: string;
    ano: string;
    descricao: string;
  };
};

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
      slug: fileName,
      image: `${basePath}content/${metadata.image}`,
    },
  } as Content;
}
