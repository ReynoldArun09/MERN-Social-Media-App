import {z} from 'zod'

export type UserModelType = {
    username: string;
    email: string;
    password: string;
    isVerified: boolean;
    verificationToken?: string;
    verificationTokenExpiration?: Date | null;
    isActive: boolean;
    isBlocked: boolean;
}

export type EmailOptions = {
    from: string;
    to: string;
    subject: string;
    html: string;
}

const EnvVariables = z.object({
    PORT: z.number().min(1),
    MONGO_DB_URL: z.string().min(1),
    ORIGIN: z.string().min(1),
    JWT_SECRET: z.string().min(10),
    JWT_EMAIL_TOKEN: z.string().min(10),
    SMPT_EMAIL: z.string(),
    SMPT_PASSWORD: z.string()
})

declare global {
    namespace NodeJS {
        export interface ProcessEnv extends z.infer<typeof EnvVariables> {}
    }
}


declare global {
    namespace Express {
      interface Request {
            user: string;
            userId: string;
      }
    }
  }