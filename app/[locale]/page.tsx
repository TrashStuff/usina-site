import { Locale } from "@/lib/i18n/config";
import { NavBar } from "./NavBar";
import { ScatterText } from "./ScatterText";
import { Footer } from "./Footer";

type HomeProps = {
  params: Promise<{ locale: Locale }>;
};

import { t } from "../Translation";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_URL;

export async function generateMetadata({
  params,
}: HomeProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: `Usina - ${t({ locale, key: "soundDesign" })}`,
    description: t({ locale, key: "soundDesign" }),
    metadataBase: siteUrl ? new URL(siteUrl) : undefined,
    alternates: {
      canonical: "/",
      languages: {
        "pt-BR": "/pt-BR",
        en: "/en",
      },
    },
  };
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  return (
    <div className="flex flex-col items-center h-screen overflow-hidden">
      <NavBar currentPage="home" locale={locale} />

      <div className="text-slate-100 font-sans text-9xl grow h-screen flex items-center">
        <div className="z-20 text-center">
          <ScatterText>USINA</ScatterText>
        </div>
      </div>

      <Footer locale={locale} />
    </div>
  );
}
