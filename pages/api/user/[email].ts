import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await getServerSession(req, res, authOptions)
    const user = session?.user
    const { name } = req.body

    await prisma.user.update({
      where: {
        email: user?.email as string,
      },
      data: { name },
    })

    return res.end()

  } catch (err) {
    return res.status(422).end()
  }
}