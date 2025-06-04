import fs from "fs";
import { NavBar } from "../NavBar";
import { loadContent } from "./loadContent";
import Link from "next/link";

export const metadata = {
  title: "Projetos | Usina",
  description: "Projetos desenvolvidos pela Usina",
};

export default async function Projetos() {
  const files = fs.readdirSync("./content");

  const content = await Promise.all(
    files.map((fileName) => loadContent(fileName.split(".")[0]))
  );

  return (
    <div className="flex flex-col items-center min-h-screen">
      <NavBar currentPage="projetos" />

      <div className="flex flex-wrap w-full gap-y-10 md:gap-y-0">
        {content.map(({ metadata }) => (
          <Link
            href={`/projetos/${metadata.slug}`}
            key={metadata.slug}
            className="grow md:aspect-[3/4] relative group md:bg-white md:flex flex-col justify-between md:p-4 text-slate-900 min-w-[300px]"
          >
            <img
              src={metadata.image}
              alt={metadata.title}
              className="md:absolute max-h-80 md:max-h-full top-0 left-0 h-full w-full object-cover pointer-events-none saturate-20 z-10 group-hover:opacity-0 transition-opacity"
            />
            <h3 className="text-slate-100 md:text-black p-4 md:p-0 text-4xl font-normal">
              {metadata.title}
            </h3>
            <div className="text-slate-100 md:text-black text-4xl md:text-lg p-4 md:p-0 font-light flex flex-col justify-around gap-4">
              <div>
                <div className="text-sm">Atividade</div>
                <div>{metadata.tags.join(", ")}</div>
              </div>
              <div>
                <div className="text-sm">Cliente</div>
                <div className="font-normal">{metadata.cliente}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
