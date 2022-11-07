import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "CLIENT_ID",
      clientSecret: process.env.GOOGLE_SECRET || "CLIENT_SECRET",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope: "openid email profile https://www.googleapis.com/auth/gmail.send",
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.SECRET,
  callbacks: {
    async signIn({ account, profile }) {
      console.log('account: ', account);
      console.log('profile: ', profile);
      if (account?.provider === "google" && profile?.email?.endsWith("@nitkkr.ac.in")) {
        console.log('scopes:', account?.scope);
        return true;
      }
      return true;
    },
    async jwt({ token, account }) {
      if (account?.refresh_token) {
        token.refresh_token = account.refresh_token;
      }
      console.log('token: ', token);
      return token;
    },
    async session({ session, token }) {
      console.log('session: ', session);

      return session;
    },

    redirect: async ({ url, baseUrl }): Promise<string> => {
      if (url === '/profile') {
        return Promise.resolve('/');
      }
      return Promise.resolve('/');
    },
  },
});
