import { NavBar } from '@/app/NavBar'
import fs from 'node:fs'
import { loadContent } from '../loadContent'
import { ReactNode } from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { Component, metadata } = await loadContent(slug);

  return (
    <div className="flex flex-col items-center">
      <NavBar currentPage="projetos" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full pb-10">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.PAGES_BASE_PATH}/${metadata.image}`}
            alt={metadata.title}
            className="w-full object-cover pointer-events-none saturate-20"
          />
        </div>
        <div className="flex flex-row gap-2">
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
      <div className="w-full">
        <Component />
      </div>
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
      <div className="text-4xl font-light">{children}</div>
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