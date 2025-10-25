import { NavBar } from '@/app/NavBar'
import fs from 'node:fs'
import { loadContent } from "../loadContent";
import { InstagramEmbed } from "./InstagramEmbed";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { Component, metadata } = await loadContent(slug);

  return (
    <div className="flex flex-col items-center">
      <NavBar currentPage="projeto" />
      <div className="container grid grid-cols-1 gap-y-4 md:grid-cols-2 w-full pb-10 px-10 text-slate-100">
        <div className="space-x-1 space-y-2">
          {metadata.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block border border-gray-200 text-white text-xs font-semibold uppercase mr-2 px-2.5 py-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-2xl lg:text-4xl font-light">
            {metadata.title}
          </div>
          <div className="text-2xl">
            {metadata.cliente ? `${metadata.cliente} | ` : ""}
            {metadata.ano}
          </div>

          <p className="text-base text-pretty">{metadata.descricao}</p>
        </div>
      </div>
      <div className="container">
        <div className="prose dark:prose-invert prose-lg md:prose-xl max-w-none prose-headings:font-light prose-headings:uppercase prose-h1:text-3xl prose-h2:text-xl prose-h3:text-xl prose-p:text-2xl prose-p:lg:text-4xl prose-li:text-2xl prose-li:lg:text-3xl prose-a:underline prose-a:font-light [> iframe]:max-w-full! [>iframe]:border-1 px-2 md:px-10 w-full pb-6">
          <Component />
        </div>
      </div>
      <InstagramEmbed />
    </div>
  );
}

export function generateStaticParams() {
  const files = fs.readdirSync("./content");

  const result = files.map((fileName) => ({ slug: fileName.split(".")[0] }));

  return result;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { metadata } = await loadContent(slug);

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? ""),
    title: `${metadata.title} | Usina`,
    description: metadata.descricao,
    openGraph: {
      title: metadata.title,
      description: metadata.descricao,
      images: [metadata.image],
    },
  };
}

export const dynamicParams = false