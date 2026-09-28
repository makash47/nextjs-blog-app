import { betterAuth } from "better-auth";
import connectDB from "./mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { sendVerificationEmail} from "./email";
import { admin } from "better-auth/plugins";

const mongooseInstance = await connectDB();
export const auth = betterAuth({
    database:mongodbAdapter(mongooseInstance.connection.db),
    emailAndPassword: { 
    enabled: true, 
    requireEmailVerification: true,
  }, 

  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },

    emailVerification: {
    sendOnSignUp: true,

    async sendVerificationEmail({ user, url, token }, request) {
      void sendVerificationEmail({
        email: user.email,
        url,
      });
    },
    
  },

   plugins: [
    admin(),
  ],

});