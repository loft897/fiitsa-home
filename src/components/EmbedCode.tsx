"use client";

import { Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function EmbedCode({ slug }: { slug: string }) {
  const embed = `<iframe src="https://blog.fiitsa.com/embed/${slug}" width="100%" height="720" style="border:0;border-radius:16px;overflow:hidden" loading="lazy"></iframe>`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(embed);
    toast.success("Code embed copie");
  };

  return (
    <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
      <p className="text-sm font-semibold">Code embed</p>
      <pre className="mt-3 overflow-x-auto rounded-xl bg-muted/70 p-3 text-xs text-muted-foreground">
        {embed}
      </pre>
      <Button size="sm" className="mt-3" onClick={handleCopy}>
        <Copy className="mr-2 h-4 w-4" />
        Copier le code
      </Button>
    </div>
  );
}
