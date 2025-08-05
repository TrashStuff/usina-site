import type { MDXComponents } from 'mdx/types'
import { ReactNode } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: H1,
    h2: H2,
    h3: H3,
    p: Paragraph,
    ul: UnorderedList,
    hr: HorizontalLine,
    a: Anchor,
    ...components,
  };
}

function H1({ children }: { children: ReactNode }) {
  return <h1 className="text-4xl font-light mt-4 mb-3">{children}</h1>;
}

function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-3xl font-light mt-6 mb-3">{children}</h2>;
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="text-2xl font-light mt-6 mb-3">{children}</h3>;
}

function Paragraph({ children }: { children: ReactNode }) {
  return <p className="text-2xl lg:text-4xl font-light my-2">{children}</p>;
}

function HorizontalLine() {
  return <hr className="my-4 border-t border-gray-300" />;
}

function UnorderedList({ children }: { children: ReactNode }) {
  return (
    <ul className="ml-4 list-disc list-inside text-2xl lg:text-3xl font-light">
      {children}
    </ul>
  );
}

function Anchor({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="underline text-2xl lg:text-3xl font-light"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}