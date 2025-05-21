import { InstagramIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <div className="container flex flex-col items-center justify-center z-10 my-20 mx-5 px-5 pt-2 border-t-2 border-slate-200">
      <div>desenho de som | pós produção | música</div>
      <div className="flex gap-2">
        <Link
          href="https://instagram.com/"
          title="Instagram"
          target="_blank"
          className="bg-slate-900/20 text-slate-100 p-1 rounded-lg"
        >
          <InstagramIcon size="23" />
        </Link>
        <Link
          href="https://www.youtube.com/"
          title="YouTube"
          target="_blank"
          className="bg-slate-900/20 text-slate-100 p-1 rounded-lg"
        >
          <YoutubeIcon size="23" />
        </Link>
      </div>
    </div>
  );
}
