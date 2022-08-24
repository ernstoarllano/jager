import type { NextApiRequest, NextApiResponse } from 'next'
import { getCompany } from 'services/getCompany'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { company } = await getCompany(1)

    res.status(200).json(company)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

export default handler
