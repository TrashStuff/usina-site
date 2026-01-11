import { ComponentProps } from "react";
import Link from "next/link";
import { cn } from "./cn";

export function NavLink(props: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={cn("text-slate-200 font-sans text-lg hover:-rotate-3 hover:text-slate-50 transition-all", props.className)}
    />
  );
}