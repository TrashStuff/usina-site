import fs from "fs";
import { NavBar } from "../NavBar";
import { loadContent } from "./loadContent";
import Link from "next/link";
import Image from "next/image";

export default async function Projetos() {
  const files = fs.readdirSync("./content");

  const content = await Promise.all(
    files.map((fileName) => loadContent(fileName.split(".")[0]))
  );

  return (
    <div className="flex flex-col items-center min-h-screen">
      <NavBar />

      <div className="flex w-full justify-end container relative grow">
        <div className="w-full md:w-1/2 text-left">
          {content.map(({ metadata }) => (
            <div key={metadata.slug}>
              <h3 className="peer relative text-7xl font-sans hover:translate-x-10 transition-transform z-20 ease-in-out duration-500">
                <Link href={`/projetos/${metadata.slug}`}>
                  {metadata.title}
                </Link>
              </h3>
              <div className="opacity-0 peer-hover:opacity-100 transition-opacity duration-300 z-10">
                <Image
                  src={metadata.image}
                  alt={metadata.title}
                  fill
                  className="absolute top-0 w-full object-contain pointer-events-none max-w-2xl saturate-20"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
