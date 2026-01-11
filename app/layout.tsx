import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="antialiased">{children}</body>
      <GoogleAnalytics gaId="G-6V547PTR36" />
    </html>
  );
}
