import { NavBar } from '@/app/NavBar'
import fs from 'node:fs'
import { loadContent } from '../loadContent'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { Component } = await loadContent(slug)
 
  return (
    <div className="flex flex-col items-center">
    <NavBar />
    <Component />
    </div>
  )
}
 
export function generateStaticParams() {
  const files = fs.readdirSync('./content')

  const result = files.map((fileName) => ({ slug: fileName.split('.')[0] }))

  return result
}

export const dynamicParams = false