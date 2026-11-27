import { z } from "zod";

export const propertyTypes = ["land", "building", "commercial"] as const;

export const titleClaims = [
  "certificate-of-occupancy",
  "right-of-occupancy",
  "deed-of-assignment",
  "power-of-attorney",
  "not-sure",
] as const;

export const purposeEnquiry = ["due-diligence", "physical-inspection"];

const MAX_FILE_SIZE = 10 * 1024 * 1024; 
const ACCEPTED_TYPES = ["application/pdf", "image/jpeg", "image/png"];

const documentSchema = z
  .custom<File>((v) => v instanceof File)
  .refine((f) => f.size <= MAX_FILE_SIZE, "File must be less than 10MB")
  .refine(
    (f) => ACCEPTED_TYPES.includes(f.type),
    "Only PDF, JPG, JPEG or PNG files are allowed",
  )
  .optional();

export const searchSchema = z.object({
  applicantName: z.string().min(2, "Applicant's name is required"),
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine(
      (v) => /^(\+234|0)[789]\d{9}$/.test(v.replace(/[\s-]/g, "")),
      "Enter a valid Nigerian phone number",
    ),
  state: z.string().min(1, "Select a state"),
  lga: z.string().min(1, "Select a local government"),
  city: z.string().min(1, "Select a city"),
  address: z.string().min(5, "Add an address or description"),
  propertyType: z.enum(propertyTypes, { message: "Select a property type" }),
  titleClaims: z
    .array(z.enum(titleClaims))
    .min(1, "Select at least one title"),
  purposeEnquiry: z.array(z.enum(purposeEnquiry))
    .min(1, "Select at least one Purpose of Enquiry"),
  surveyPlan: documentSchema,
  otherDocument: documentSchema,
  createAccount: z.boolean(),
});

export type SearchValues = z.infer<typeof searchSchema>;