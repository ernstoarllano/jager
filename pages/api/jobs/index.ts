import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await getServerSession(req, res, authOptions)
    const user = session?.user

    const jobs = await prisma.job.findMany({
      where: {
        userId: user?.id as string,
      },
      select: {
        company: true,
        role: true,
      }
    })

    return res.status(200).json(jobs)

  } catch (err) {
    return res.status(500).end()
  }
}