import { prisma } from 'lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed')

  try {
    const { id } = req.query
    const data = JSON.parse(req.body)
    const save = await prisma.job.update({
      where: {
        id: parseInt(id as string),
      },
      data,
    })

    res.status(200).json(save)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

export default handler
