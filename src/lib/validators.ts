import { z } from "zod";

export const reviewSchema = z.object({
  postId: z.string().uuid(),
  rating: z.number().int().min(1).max(5),
  name: z.string().max(80).optional().or(z.literal("")),
  email: z.string().email().optional().or(z.literal("")),
  message: z.string().min(10).max(2000),
  website: z.string().optional(),
  recaptchaToken: z.string().optional(),
});

export type ReviewInput = z.infer<typeof reviewSchema>;
