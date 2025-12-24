"use client";

import {
  Copy,
  Facebook,
  Linkedin,
  MessageCircle,
  Share2,
  Twitter,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const shareTargets = [
  {
    label: "WhatsApp",
    buildUrl: (url: string, title: string) =>
      `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    icon: MessageCircle,
  },
  {
    label: "Facebook",
    buildUrl: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    icon: Facebook,
  },
  {
    label: "X",
    buildUrl: (url: string, title: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    buildUrl: (url: string, title: string) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    icon: Linkedin,
  },
];

export function ShareBar({ url, title }: { url: string; title: string }) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    toast.success("Lien copie");
  };

  const handleNativeShare = async () => {
    if (!navigator.share) return;
    await navigator.share({ title, url });
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="sm" variant="secondary" onClick={handleNativeShare}>
        <Share2 className="mr-2 h-4 w-4" />
        Partager
      </Button>
      {shareTargets.map((target) => {
        const Icon = target.icon;
        return (
          <Button
            key={target.label}
            size="icon"
            variant="ghost"
            onClick={() =>
              window.open(target.buildUrl(url, title), "_blank", "noopener,noreferrer")
            }
            aria-label={`Partager sur ${target.label}`}
          >
            {Icon ? <Icon className="h-4 w-4" /> : <span>{target.label}</span>}
          </Button>
        );
      })}
      <Button size="sm" variant="ghost" onClick={handleCopy}>
        <Copy className="mr-2 h-4 w-4" />
        Copier le lien
      </Button>
    </div>
  );
}
