import type { NextApiRequest, NextApiResponse } from 'next'
import { getCompany } from 'services/getCompany'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query
    const { company } = await getCompany(parseInt(id as string))

    res.status(200).json(company)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

export default handler
