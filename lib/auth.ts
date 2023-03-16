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
      maxAge: 24 * 60 * 60,
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
        session.user = token
      }

      return session
    },
    async jwt({ token }) {
      const user = await prisma.user.findUnique({
        where: {
          email: token.email as string,
        }
      })

      if (!user) {
        return token
      }

      return {
        id: user?.id,
        name: user?.name,
        email: user?.email,
        image: user?.image,
      }
    },
    async redirect({ baseUrl }) {
      return baseUrl
    },
  },
}
