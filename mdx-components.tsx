import type { MDXComponents } from 'mdx/types'
import { ReactNode } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: H1,
    p: Paragraph,
    ...components,
  };
}

function H1({ children }: { children: ReactNode }) {
  return <h1 className="text-4xl font-light">{children}</h1>;
}

function Paragraph({ children }: { children: ReactNode }) {
  return <p className="text-2xl lg:text-4xl font-light">{children}</p>;
}