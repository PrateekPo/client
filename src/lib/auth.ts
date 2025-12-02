import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { login } from "./api";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                try {
                    const response = await login({
                        email: credentials.email as string,
                        password: credentials.password as string,
                    });

                    return {
                        id: response.user.id,
                        email: response.user.email,
                        name: response.user.name,
                        accessToken: response.accessToken,
                        isOnboarded: response.user.isOnboarded,
                    };
                } catch (error) {
                    console.error("Authentication failed:", error);
                    return null;
                }
            },
        }),
    ],
    pages: {
        signIn: "/login",
        signOut: "/",
        error: "/login",
        newUser: "/onboarding",
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account?.provider === "google" && profile) {
                // Handle Google OAuth - send to backend for processing
                try {
                    // TODO: Send Google user data to your NestJS backend
                    console.log("Google sign in:", { user, account, profile });
                    return true;
                } catch (error) {
                    console.error("Google auth error:", error);
                    return false;
                }
            }
            return true;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.sub as string;
                (session.user as any).accessToken = token.accessToken;
                (session.user as any).isOnboarded = token.isOnboarded;
            }
            return session;
        },
        async jwt({ token, user, account }) {
            if (user) {
                token.id = user.id;
                token.accessToken = (user as any).accessToken;
                token.isOnboarded = (user as any).isOnboarded;
            }
            if (account?.provider === "google") {
                token.provider = "google";
            }
            return token;
        },
    },
    session: {
        strategy: "jwt",
    },
});
