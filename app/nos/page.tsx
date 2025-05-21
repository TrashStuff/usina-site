import Image from "next/image";
import { NavBar } from "../NavBar";
import { Metadata } from "next";

const nosDescription =
  "Uma dupla afiada com 15 anos de experiência conjunta, amplificada por uma rede de técnicos e criativos, atuante em diversas áreas: comunicação, arte, e entretenimento, de equipes pequenas à grandes corporações.";

export const metadata: Metadata = {
  title: "Nós | Usina",
  description: nosDescription,
  openGraph: {
    title: "Nós | Usina",
    description: nosDescription,
    images: ["/nos.jpg"],
  },
};

export default function Nos() {
  return (
    <div className="flex flex-col items-center h-screen">
      <style>{`
        body {
          background: #000;
        }
      `}</style>
      <Image
        src="/nos.jpg"
        alt="Nós"
        fill
        className="object-cover saturate-20 brightness-50"
      />

      <NavBar currentPage="nos" />
      <div className="pb-50 z-10 w-full px-5">
        <p className="text-slate-100 font-paragraph uppercase text-xl leading-9 md:text-6xl md:leading-18 max-w-4xl text-pretty z-10 bg-blend-multiply text-shadow-lg">
          {nosDescription}
        </p>
      </div>
    </div>
  );
}
