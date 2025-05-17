import { NavLink } from "./NavLink";

export function NavBar({ noHome }: { noHome?: boolean }) {
  return (
    <div className="container flex items-center justify-between z-10 my-20 px-5 border-b-2 border-transparent has-hover:border-slate-200">
      <NavLink href="/projetos">projetos</NavLink>
      {!noHome && <NavLink href="/">USINA</NavLink>}
      <NavLink href="/nos">nós</NavLink>
    </div>
  )
}