import type { NextApiRequest, NextApiResponse } from 'next'
import { getRoles } from 'services/getRoles'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { roles } = await getRoles()

    res.status(200).json(roles)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

export default handler
