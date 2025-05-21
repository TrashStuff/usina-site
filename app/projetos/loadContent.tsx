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

export async function loadContent(fileName: string) {
  const { default: Component, metadata } = await import(
    `@/content/${fileName}.mdx`
  );

  return {
    Component: Component as MDXContent,
    metadata: {
      ...metadata,
      slug: fileName,
      image: `/content/${metadata.image}`,
    },
  } as Content;
}
