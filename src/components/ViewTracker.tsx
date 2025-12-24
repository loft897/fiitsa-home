"use client";

import { useEffect } from "react";

export function ViewTracker({ postId }: { postId: string }) {
  useEffect(() => {
    fetch("/api/views", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId }),
    }).catch(() => null);
  }, [postId]);

  return null;
}
