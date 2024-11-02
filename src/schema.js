import { z } from "zod";

export const schema = z.object({
    fullName: z.string().min(1, { message: "Full Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    phone: z.string().min(10, { message: "Invalid phone number" }),
    skillLevel: z.enum(["beginner", "intermediate", "advanced"], { required_error: "Please select a skill level" }),
    gender: z.enum(["male", "female", "other"], { required_error: "Please select a gender" }),
    bio: z.string().optional(),
    primaryInterest: z.enum(["coding", "design", "photography"], { required_error: "Please select a primary interest" }),
    notifications: z.array(z.string()).optional(),
  });

