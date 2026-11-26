import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  phoneNumber: z
    .string()
    .optional()
    .refine(
      (v) => !v || /^(\+234|0)[789]\d{9}$/.test(v),
      "Enter a valid Nigerian phone number",
    ),
  message: z.string().min(10, "Message should be at least 10 characters"),
  agree: z
    .boolean()
    .refine((v) => v === true, "You need to accept the privacy policy"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
