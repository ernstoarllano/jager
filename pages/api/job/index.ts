import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await getServerSession(req, res, authOptions)
    const user = session?.user
    const { role, company } = req.body

    await prisma.job.create({
      data: {
        userId: user?.id as string,
        company: company,
        role: role,
      },
    })

    return res.end()

  } catch (err) {
    return res.status(422).end()
  }
}