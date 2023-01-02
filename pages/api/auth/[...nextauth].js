import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

const facebook_instance = FacebookProvider({
  clientId: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
});

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [facebook_instance],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
});
