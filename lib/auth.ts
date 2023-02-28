import { prisma } from '@/lib/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from 'next-auth/providers/github'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.nextAuthSecret,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
    newUser: '/register',
  },
  providers: [
    EmailProvider({
      server: {
        host: process.env.smtpHost,
        port: process.env.smtpPort,
        auth: {
          user: process.env.smtpUser,
          pass: process.env.smtpPassword,
        },
      },
      from: process.env.smtpFrom,
    }),
    GitHubProvider({
      clientId: process.env.githubClientId || '',
      clientSecret: process.env.githubClientSecret || '',
    }),
  ],
  callbacks: {
    async session({ session }) {
      return session
    },
    async jwt({ token }) {
      return token
    },
    async redirect({ baseUrl }) {
      return baseUrl
    },
  },
}
