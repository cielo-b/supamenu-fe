import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Email is not valid"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});


export const registerSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().min(1, "Email is required").email("Email is not valid"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    phoneNumber: z.string().min(1, "Phone number is required"),
})