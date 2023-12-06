const { z } = require("zod");
//Creating an object schema
// const registerSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(6).max(20),
//   confirmPassword: z.string().min(6).max(20),
// });
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(20, { message: "Name must be at most 20 characters long" }),
  email: z
    .string({ required_error: "Email is required" })
    .min(3, { message: "Email must be at least 3 characters long" })
    .max(100, { message: "Email must be at most 100 characters long" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" }),
  //   confirmPassword: z
  //     .string({ required_error: "Confirm Password is required" })
  //     .min(6, { message: "Confirm Password must be at least 6 characters long" })
  //     .max(20, {
  //       message: "Confirm Password must be at most 20 characters long",
  //     }),
  phone: z
    .string({ required_error: "Phone is required" })
    .min(10, { message: "Phone must be at least 6 characters long" })
    .max(20, { message: "Phone must be at most 20 characters long" }),
});

module.exports = signupSchema;
