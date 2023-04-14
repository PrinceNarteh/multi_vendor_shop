import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  firstName: string({ required_error: "First name is required" }).min(
    1,
    "First name is required"
  ),
  lastName: string({ required_error: "Last name is required" }).min(
    1,
    "Last name is required"
  ),
  email: string({ required_error: "Email is required" }).email(
    "Email not valid"
  ),
  password: string({ required_error: "Password is required" }).min(
    6,
    "Password too short - should be minimum of 6 characters"
  ),
  confirmPassword: string({ required_error: "Confirm password is required" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.confirmPassword"
>;
