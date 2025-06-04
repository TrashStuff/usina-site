  "use client";
  
import copyTextToClipboard from "copy-text-to-clipboard";
import { Mail } from "lucide-react";
import { Toaster, toast } from "sonner";
import { cn } from "./cn";

const email = "hugo.gui.rocha@gmail.com";

export function EmailButton({ className }: { className?: string }) {
  return (
    <>
    <button
      title="Email"
      className={cn(className, "cursor-pointer")}
      onClick={() => {
        copyTextToClipboard(email);
        toast.success("Email copiado para a área de transferência!");
      }}
    >
      <Mail size="23" />
    </button>
    <Toaster/>
    </>
  );
}