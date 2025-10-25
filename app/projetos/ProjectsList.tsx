"use client";

import Link from "next/link";
import { Category, categoryMap, Content } from "./types";
import { useState } from "react";

export function ProjectsList({
  content,
}: {
  content: Omit<Content, "Component">[];
}) {
  const [category, setCategory] = useState<Category | null>(null);

  const visibleContent = content.filter(({ metadata }) => {
    if (!category) return true;
    const tags = categoryMap[category] ?? [];
    return tags.some((tag) => metadata.tags.includes(tag));
  });

  const handleChangeCategory = (id: Category | null) => {
    if (category === id || id === null) {
      setCategory(null);
      return;
    }

    setCategory(id);
  };

  return (
    <>
      <div className="w-full max-w-6xl px-2 md:px-4 md:pt-3 pb-8 md:pb-10 space-y-1">
        <div className="text-center text-xs uppercase font-thin">Filtrar</div>
        <div className="flex flex-wrap items-center justify-center w-full gap-2 md:gap-4`">
          <FilterButton
            id="tv"
            active={category === "tv"}
            onClick={handleChangeCategory}
          >
            TV
          </FilterButton>
          <FilterButton
            id="publicidade"
            active={category === "publicidade"}
            onClick={handleChangeCategory}
          >
            Publicidade
          </FilterButton>
          <FilterButton
            id="cinema"
            active={category === "cinema"}
            onClick={handleChangeCategory}
          >
            Cinema
          </FilterButton>
          <FilterButton
            id="podcast"
            active={category === "podcast"}
            onClick={handleChangeCategory}
          >
            Podcast
          </FilterButton>
          <FilterButton
            id="outro"
            active={category === "outro"}
            onClick={handleChangeCategory}
          >
            Outro
          </FilterButton>
          <FilterButton
            id={null}
            active={category === null}
            onClick={handleChangeCategory}
          >
            Ver todos
          </FilterButton>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 w-full gap-y-10 md:gap-y-0">
        {visibleContent.map(({ metadata }) => (
          <Link
            href={`/projetos/${metadata.slug}`}
            key={metadata.slug}
            className="grow md:aspect-[3/4] h-full relative group md:bg-white md:flex flex-col justify-between pb-10 md:p-4 text-slate-900 md:min-w-[300px]"
          >
            <img
              src={metadata.image}
              alt={metadata.title}
              className="md:absolute max-h-80 aspect-[3/4] md:max-h-full top-0 left-0 h-full w-full object-cover pointer-events-none z-10 group-hover:opacity-0 transition-opacity"
            />
            <h3 className="text-slate-100 md:text-black p-4 md:p-0 text-2xl md:text-4xl font-normal">
              {metadata.title}
            </h3>
            <div className="text-slate-100 md:text-black text-2xl md:text-lg p-4 md:p-0 font-light flex flex-col justify-around gap-4">
              <div>
                <div className="text-sm hidden md:block">Atividade</div>
                <div className="text-pretty truncate text-base md:text-2xl">
                  {metadata.tags.join(", ")}
                </div>
              </div>
              {metadata.cliente && (
                <div>
                  <div className="text-sm">Cliente</div>
                  <div className="font-normal text-base md:text-2xl">
                    {metadata.cliente}
                  </div>
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
  id,
  active,
  children,
  onClick,
}: {
  id: Category | null;
  active: boolean;
  children: React.ReactNode;
  onClick: (id: Category | null) => void;
}) {
  return (
    <button
      data-active={active ? "" : undefined}
      className="border data-[active]:bg-white data-[active]:text-gray-900 border-gray-200 text-white hover:bg-white hover:text-gray-900 transition-colors font-semibold uppercase px-2.5 py-2 text-sm cursor-pointer"
      onClick={() => onClick(id)}
    >
      {children}
    </button>
  );
}
