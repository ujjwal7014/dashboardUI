import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // Add other providers as needed
    ],
    // Add any additional NextAuth configuration options here
    secret: process.env.JWT_SECRET,

    callbacks: {
        async signIn(user, account, profile) {
            return true;
        },
    },
});
