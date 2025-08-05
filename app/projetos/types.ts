import { MDXContent } from "mdx/types";

export type Content = {
  Component: MDXContent;
  metadata: {
    slug: string;
    title: string;
    image: string;
    tags: string[];
    cliente?: string;
    ano: string;
    descricao: string;
    prioridade: number;
  };
};
