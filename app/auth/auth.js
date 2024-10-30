import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
import { decodeAccessToken } from "@/lib/user/functions";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    MicrosoftEntraID({
      clientId: process.env.MICROSOFT_ENTRA_ID,
      clientSecret: process.env.MICROSOFT_ENTRA_ID_SECRET,
      tenantId: process.env.MICROSOFT_ENTRA_TENANT_ID, // Make sure you include this if required
      authorization: {
        params: {
          scope: "openid profile email",
        },
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt", // Use JWT for session
  },
  jwt: {
    secret: process.env.JWT_SECRET, // Ensure you have a secret defined
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        token.accessToken = account.access_token; // Store access token
        token.provider = account.provider; // Store provider information
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken; // Store access token in session
      session.account = {
        provider: token.provider,
      }; // Store provider info in session
      return session;
    },
  },
});
