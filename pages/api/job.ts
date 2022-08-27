import { prisma } from 'lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed')

  const data = JSON.parse(req.body)
  const save = await prisma.job.create({ data })

  res.status(200).json(save)
}

export default handler