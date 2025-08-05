"use client";

import Link from "next/link";
import { Content } from "./types";
import { useState } from "react";

const categoryMap = {
  tv: ["Série", "TV", "Animação"],
  publicidade: ["Publicidade"],
  cinema: ["Longa", "Curta"],
  outro: ["Podcast"],
}

export function ProjectsList({ content }: { content: Omit<Content, 'Component'>[] }) {
  const [category, setCategory] = useState<keyof typeof categoryMap | null>(null);

  const visibleContent = content.filter(({ metadata }) => {
    if (!category) return true;
    const tags = categoryMap[category] ?? [];
    return tags.some(tag => metadata.tags.includes(tag));
  })

  return (
    <>
      <div className="w-full max-w-6xl px-2 md:px-4 md:pt-3 pb-8 md:pb-10">
        <div className="text-center text-xs uppercase font-thin">Filtrar</div>
        <div className="flex flex-wrap items-center justify-center w-full gap-2 md:gap-4`">
          <FilterButton onClick={() => setCategory("tv")}>TV</FilterButton>
          <FilterButton onClick={() => setCategory("publicidade")}>
            Publicidade
          </FilterButton>
          <FilterButton onClick={() => setCategory("cinema")}>
            Cinema
          </FilterButton>
          <FilterButton onClick={() => setCategory("outro")}>
            Outro
          </FilterButton>
          <FilterButton onClick={() => setCategory(null)}>Ver todos</FilterButton>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 w-full gap-y-10 md:gap-y-0">
        {visibleContent.map(({ metadata }) => (
          <Link
            href={`/projetos/${metadata.slug}`}
            key={metadata.slug}
            className="grow md:aspect-[3/4] h-full relative group md:bg-white md:flex flex-col justify-between pb-10 md:p-4 text-slate-900 md:min-w-[300px]"
          >
            <img
              src={metadata.image}
              alt={metadata.title}
              className="md:absolute max-h-80 aspect-[3/4] md:max-h-full top-0 left-0 h-full w-full object-cover pointer-events-none saturate-20 z-10 group-hover:opacity-0 transition-opacity"
            />
            <h3 className="text-slate-100 md:text-black p-4 md:p-0 text-4xl font-normal">
              {metadata.title}
            </h3>
            <div className="text-slate-100 md:text-black text-4xl md:text-lg p-4 md:p-0 font-light flex flex-col justify-around gap-4">
              <div>
                <div className="text-sm">Atividade</div>
                <div className="text-pretty truncate">
                  {metadata.tags.join(", ")}
                </div>
              </div>
              {metadata.cliente && (
                <div>
                  <div className="text-sm">Cliente</div>
                  <div className="font-normal">{metadata.cliente}</div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

function FilterButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button className="text-xl md:text-2xl cursor-pointer underline" onClick={onClick}>
      {children}
    </button>
  );
}
