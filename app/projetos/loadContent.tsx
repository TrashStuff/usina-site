import { ComponentType } from "react"

type Content = {
  Component: ComponentType,
  metadata: {
    title: string
    slug: string
    image: string
  }
}

export async function loadContent(fileName: string) {
  const { default: Component, metadata } = await import(`@/content/${fileName}.mdx`)

  return {
    Component,
    metadata: {
      ...metadata,
      slug: fileName,
      image: `/content/${metadata.image}`,
    }
  } as Content
}