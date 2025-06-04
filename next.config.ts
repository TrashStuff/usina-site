import createMDX from '@next/mdx'
import { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  output: "export",
  basePath: process.env.PAGES_BASE_PATH,
  // Image Optimization using the default loader is not compatible with `{ output: 'export' }`
  images: { unoptimized: true },
};
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)