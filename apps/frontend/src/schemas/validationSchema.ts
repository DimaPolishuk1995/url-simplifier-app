import { z } from "zod";

export const urlSchema = z.object({
  originalUrl: z.string().url("Please enter a valid URL"),
});

export type UrlFormFields = z.infer<typeof urlSchema>;
