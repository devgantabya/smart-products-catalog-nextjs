import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Hardcoded user for mock login fallback
const MOCK_USER = {
    id: 1,
    name: "Admin",
    email: "admin@example.com",
    password: "123456",
};

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Mock login
                if (
                    credentials.email === MOCK_USER.email &&
                    credentials.password === MOCK_USER.password
                ) {
                    return MOCK_USER;
                }

                // Here you can add DB users logic later
                return null;
            },
        }),
    ],
    session: { strategy: "jwt" },
    pages: { signIn: "/login" },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
