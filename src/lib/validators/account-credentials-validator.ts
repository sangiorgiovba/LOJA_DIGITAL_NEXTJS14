import { z } from "zod";

    
   export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: " Sua senha precisa conter mais de 8 caracteres" }),
  });

  export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>;