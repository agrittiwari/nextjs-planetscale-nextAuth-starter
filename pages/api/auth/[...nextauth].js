import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from '../../../lib/prisma'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_cLIENT_SECRET,
    }),
    // ...add more providers here  
  ], session: {
    strategy: "jwt" ,
    jwt:true,
  },
  jwt: {
    secret:process.env.NEXTAUTH_SECRET
  },
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token to the token right after signin
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user.id = token.id
      return session
    }
    
  }
})