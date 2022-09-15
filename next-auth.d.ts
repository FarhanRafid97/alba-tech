import NextAuth from 'next-auth';

declare module 'next-auth/jwt' {
  interface JWT {
    user: {
      token: string;
    };
  }
}
declare module 'next-auth/user' {
  interface User {
    token: string;
  }
}

declare module 'next-auth' {
  interface Session {
    user: {
      token: string;
    };
  }
}
