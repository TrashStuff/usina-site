import type { Metadata } from "next";
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
    </html>
  );
}
