import Link from "next/link";
import { ComponentProps } from "react";

export function NavBar({
  currentPage,
}: {
  currentPage: "home" | "nos" | "projetos" | "projeto";
}) {
  return (
    <div className="container flex items-center justify-between z-10 px-5 pb-2 border-b-2 border-slate-200 my-20">
      <div className="flex items-center gap-5">
        {currentPage === "projetos" ? (
          <NavLink href="/">USINA</NavLink>
        ) : (
          <NavLink href="/projetos">projetos</NavLink>
        )}
      </div>

      {currentPage === "nos" ? (
        <NavLink href="/">USINA</NavLink>
      ) : (
        <NavLink href="/nos">nós</NavLink>
      )}
    </div>
  );
}

export function NavLink(props: ComponentProps<typeof Link>) {
  return (
    <Link
      className="text-slate-200 font-sans text-lg hover:-rotate-3 hover:text-slate-50 transition-all"
      {...props}
    />
  );
}
