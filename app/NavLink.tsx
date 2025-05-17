import Link from "next/link";
import { ComponentProps } from "react";

export function NavLink(props: ComponentProps<typeof Link>) {
  return <Link className="text-slate-200 font-sans text-lg hover:-rotate-6 hover:text-slate-50" {...props}/>;
}
