import NextAuth, { Awaitable, NextAuthOptions, Session, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, _) {
        const authResponse = await fetch('https://reqres.in/api/login', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        });
        const authData = await authResponse.json();
        console.log(authData);
        if (!authResponse.ok || !authData) return null;
        return {
          token: authData.token,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user as any;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
