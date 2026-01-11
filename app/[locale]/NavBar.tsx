import { Locale } from "@/lib/i18n/config";
import { buildLocalePath } from "@/lib/i18n/routing";
import { NavLink } from "./NavLink";
import { LanguageLink } from "./LanguageLink";
import { t } from "../Translation";

export function NavBar({
  locale,
  currentPage,
}: {
  locale: Locale;
  currentPage: "home" | "nos" | "projetos" | "projeto";
}) {
  const homeHref = buildLocalePath(locale);
  const nosHref = buildLocalePath(locale, "/nos");
  const projetosHref = buildLocalePath(locale, "/projetos");

  return (
    <div className="container flex items-center justify-between z-10 px-5 pb-2 border-b-2 border-slate-200 my-20">
      <div className="flex items-center gap-5">
        {currentPage === "projetos" ? (
          <NavLink href={homeHref}>USINA</NavLink>
        ) : (
          <NavLink href={projetosHref} className="lowercase">
            {t({ locale, key: "projects" })}
          </NavLink>
        )}
      </div>

      <div className="flex gap-4">
        {currentPage === "nos" ? (
          <NavLink href={homeHref}>USINA</NavLink>
        ) : (
          <NavLink href={nosHref} className="lowercase">
            {t({ locale, key: "us" })}
          </NavLink>
        )}

        <LanguageLink locale={locale} />
      </div>
    </div>
  );
}
