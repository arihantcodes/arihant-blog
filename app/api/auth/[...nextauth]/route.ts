import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import CredentialsProvider from 'next-auth/providers/credentials';
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: '' },
        password: { label: 'password', type: 'password', placeholder: '' },
      },
      async authorize(credentials: any) {
          
          return {
              id: "user1"
          };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ||""
    })
  ],

  callbacks: {
    session: ({ session, token, user }: any) => {
      if (session.user) {
          session.user.id = token.uid
      }
      return session
  }
  },
});

export { handler as GET, handler as POST };
