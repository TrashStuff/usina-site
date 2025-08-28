import { NavBar } from '@/app/NavBar'
import fs from 'node:fs'
import { loadContent } from '../loadContent'
import { ReactNode } from "react";
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
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 w-full pb-10">
        <div>
          <img
            src={metadata.image}
            alt={metadata.title}
            className="w-full object-cover pointer-events-none saturate-20"
          />
        </div>
        <div className="flex flex-row gap-2 px-2">
          <div className="flex flex-col justify-between gap-2 w-1/2">
            <div className="flex flex-col gap-2">
              <DataBlock label="Título">{metadata.title}</DataBlock>

              <DataBlock label="Atividade">
                {metadata.tags.join(", ")}
              </DataBlock>
            </div>
            <div className="flex flex-col gap-2">
              <DataBlock label="Cliente">{metadata.cliente}</DataBlock>

              <DataBlock label="Ano">{metadata.ano}</DataBlock>
            </div>
          </div>
          <div className="w-1/2">
            <DataBlock label="Descrição">{metadata.descricao}</DataBlock>
          </div>
        </div>
      </div>
      <div className="prose dark:prose-invert prose-lg md:prose-xl max-w-none prose-headings:font-light prose-headings:uppercase prose-h1:text-3xl prose-h2:text-xl prose-h3:text-xl prose-p:text-2xl prose-p:lg:text-4xl prose-li:text-2xl prose-li:lg:text-3xl prose-a:underline prose-a:font-light [> iframe]:max-w-full! [>iframe]:border-1 px-2 md:px-10 w-full pb-6">
        <Component />
      </div>
      <InstagramEmbed />
    </div>
  );
}

function DataBlock({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-xs uppercase font-light">{label}</div>
      <div className="text-2xl lg:text-4xl font-light">{children}</div>
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