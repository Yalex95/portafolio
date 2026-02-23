import z from "zod";

export const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().pipe(
    z.email({
      message: "Invalid email",
    }),
  ),
  message: z.string().min(1, "Message is required"),
})

export type Contact = z.infer<typeof ContactSchema>