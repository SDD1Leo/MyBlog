const { z } = require("zod");
 
//schema
const signupSchema = z.object({
    username: z
    .string({required_error:"username is required"})
    .trim()
    .min(3,{message:"username must be of 3 characters"})
    .max(255,{message:"255 charcters max"}),
    name: z
    .string({required_error:"name is required"})
    .trim()
    .min(3,{message:"Name must be of 3 characters"})
    .max(255,{message:"255 charcters max"}),
    email: z.string({required_error:"email is required"})
    .trim()
    .email({message:"invalid email address"})
    .min(3,{message:"Name must be of 3 characters"})
    .max(255,{message:"255 charcters max"}),
    password: z
    .string({required_error:"password is required"})
    .min(8,{message:"password must be of 8 characters"})
    .max(255,{message:"255 charcters max"}),
 });

 const signinSchema = z.object({
   email: z.string({required_error:"email is required"})
   .trim()
   .email({message:"invalid email address"})
   .min(3,{message:"Name must be of 3 characters"})
   .max(255,{message:"255 charcters max"}),
   password: z
   .string({required_error:"password is required"})
   .min(8,{message:"password must be of 8 characters"})
   .max(255,{message:"255 charcters max"}),
});

 module.exports = {signupSchema,signinSchema};