"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const clientReviewSchema = z.object({
  name: z.string().max(80).optional(),
  email: z.string().email().optional(),
  rating: z.string().min(1),
  message: z.string().min(10).max(2000),
  website: z.string().optional(),
});

type ReviewFormValues = z.infer<typeof clientReviewSchema>;

export function ReviewForm({ postSlug }: { postSlug: string }) {
  const [loading, setLoading] = useState(false);
  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(clientReviewSchema),
    defaultValues: { rating: "5" },
  });

  const onSubmit = async (values: ReviewFormValues) => {
    setLoading(true);
    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          postSlug,
          rating: Number(values.rating),
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Erreur lors de lenvoi");
      }

      form.reset({ rating: "5", message: "", name: "", email: "", website: "" });
      toast.success("Merci pour votre avis. Il sera publie apres moderation.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erreur inattendue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nom (optionnel)</Label>
          <Input id="name" placeholder="Votre nom" {...form.register("name")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email (optionnel)</Label>
          <Input id="email" type="email" placeholder="vous@email.com" {...form.register("email")} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="rating">Note</Label>
        <Select
          value={form.watch("rating")}
          onValueChange={(value) => form.setValue("rating", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Choisir" />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 5 }).map((_, index) => {
              const value = String(index + 1);
              return (
                <SelectItem key={value} value={value}>
                  {value} / 5
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" rows={4} placeholder="Votre retour" {...form.register("message")} />
      </div>
      <div className="hidden">
        <Label htmlFor="website">Website</Label>
        <Input id="website" autoComplete="off" {...form.register("website")} />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "Envoi..." : "Envoyer mon avis"}
      </Button>
    </form>
  );
}
