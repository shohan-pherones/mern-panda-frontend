import { z } from "zod";

export const userProfileFormSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(3, "Name is required"),
  addressLine1: z.string().min(3, "AddressLine1 is required"),
  country: z.string().min(3, "Country is required"),
  city: z.string().min(3, "City is required"),
});

export type UserProfileFormDataType = z.infer<typeof userProfileFormSchema>;
