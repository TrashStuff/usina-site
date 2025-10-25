import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Usina - Desenho de som | Pós produção | Música",
  description: "Desenho de som | Pós produção | Música",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
      <GoogleAnalytics gaId="G-6V547PTR36" />
    </html>
  );
}
