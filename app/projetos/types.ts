import { MDXContent } from "mdx/types";

/**
 * ℹ️ Passo 1: Adicione novas tags aqui.
 */
export type TvTags = "TV";
export type PublicidadeTags = "Publicidade";
export type CinemaTags = "Cinema" | "Longa" | "Curta" | "Curta-Metragem";
export type PodcastTags = "Podcast";
export type OutroTags = "Animação" | "Série" | "Instalação";
export type TagsSemFiltros =
  | "Sound Design"
  | "Mixagem"
  | "Música Original"
  | "Desenho de Som";

export type Tag =
  | TvTags
  | PublicidadeTags
  | CinemaTags
  | PodcastTags
  | OutroTags
  | TagsSemFiltros;

export type FilterableTag = Exclude<Tag, TagsSemFiltros>;

type CategoryMapShape = {
  tv: readonly TvTags[];
  publicidade: readonly PublicidadeTags[];
  cinema: readonly CinemaTags[];
  podcast: readonly PodcastTags[];
  outro: readonly OutroTags[];
};

/**
 * ℹ️ Passo 2: Adicione novas tags aqui também.
 */
export const categoryMap = {
  tv: ["TV"],
  publicidade: ["Publicidade"],
  cinema: ["Cinema", "Longa", "Curta", "Curta-Metragem"],
  podcast: ["Podcast"],
  outro: ["Animação", "Série", "Instalação"],
} as const satisfies {
  [K in keyof CategoryMapShape]: readonly FilterableTag[];
};

export const allFilterableTags: FilterableTag[] =
  Object.values(categoryMap).flat();

type Collected = (typeof categoryMap)[keyof typeof categoryMap][number];

// Falta algo?
type Missing = Exclude<FilterableTag, Collected>;
// Sobrou algo indevido?
type Extra = Exclude<Collected, FilterableTag>;

// Dispare erro de tipo se houver problema
type _AssertNoMissing = Missing extends never
  ? true
  : ["Faltando tags no CategoryMap:", Missing];

const _assertNoExtra: _AssertNoExtra = true;
const _assertNoMissing: _AssertNoMissing = true;

type _AssertNoExtra = Extra extends never
  ? true
  : ["Tags não pertencem a FilterableTag:", Extra];

export type Category = keyof typeof categoryMap;

export type Metadata = {
  slug: string;
  title: string;
  image: string;
  tags: Tag[];
  cliente?: string;
  ano: string;
  descricao: string;
  prioridade: number;
};

export type Content = {
  Component: MDXContent;
  metadata: Metadata;
};
