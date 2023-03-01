import { prisma } from '@/lib/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'

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
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user = {
          name: token.name as string,
          email: token.email as string,
          image: token.image as string,
        }
      }

      return session
    },
    async jwt({ token }) {
      const dbUser = await prisma.user.findUnique({
        where: {
          email: token.email as string,
        }
      })

      if (!dbUser) {
        return token
      }

      return {
        id: dbUser?.id,
        name: dbUser?.name,
        email: dbUser?.email,
        image: dbUser?.image,
      }
    },
    async redirect({ baseUrl }) {
      return baseUrl
    },
  },
}
