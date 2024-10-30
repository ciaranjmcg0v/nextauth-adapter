import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    account?: {
      provider?: string;
      access_token?: string; // Add other properties as needed
    };
  }

  interface Token {
    accessToken?: string;
    provider?: string;
  }
}