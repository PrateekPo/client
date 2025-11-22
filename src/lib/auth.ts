import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

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
                // TODO: Connect to your NestJS backend API
                // For now, this is a placeholder
                if (credentials?.email && credentials?.password) {
                    // Simulate API call
                    return {
                        id: "1",
                        email: credentials.email as string,
                        name: "User",
                    };
                }
                return null;
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
            // TODO: Send user data to your NestJS backend
            console.log("Sign in:", { user, account, profile });
            return true;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.sub as string;
            }
            return session;
        },
        async jwt({ token, user, account }) {
            if (user) {
                token.id = user.id;
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
