"use client";

import copyTextToClipboard from "copy-text-to-clipboard";
import { Mail } from "lucide-react";
import { Toaster, toast } from "sonner";
import { cn } from "./cn";
import { Locale } from "@/lib/i18n/config";
import { t } from "../Translation";

const email = "hugo.gui.rocha@gmail.com";

export function EmailButton({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  return (
    <>
      <button
        title="Email"
        className={cn(className, "cursor-pointer")}
        onClick={() => {
          copyTextToClipboard(email);
          toast.success(t({ locale, key: "emailCopied" }));
        }}
      >
        <Mail size="23" />
      </button>
      <Toaster position="bottom-center" />
    </>
  );
}
