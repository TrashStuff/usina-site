import fs from "fs";
import { NavBar } from "../NavBar";
import { loadContent } from "./loadContent";
import { ProjectsList } from "./ProjectsList";

export const metadata = {
  title: "Projetos | Usina",
  description: "Projetos desenvolvidos pela Usina",
};

export default async function Projetos() {
  const files = fs.readdirSync("./content");

  const content = await Promise.all(
    files.map((fileName) => loadContent(fileName.split(".")[0]))
  );

  const sortedContent = content
    .toSorted((a, b) => {
      return b.metadata.prioridade - a.metadata.prioridade;
    })
    .map(({ metadata }) => ({ metadata }));

  return (
    <div className="flex flex-col items-center min-h-screen">
      <NavBar currentPage="projetos" />

      <ProjectsList content={sortedContent} />
    </div>
  );
}
