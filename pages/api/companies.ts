import type { NextApiRequest, NextApiResponse } from 'next'
import { getCompanies } from 'services/getCompanies'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { companies } = await getCompanies()

    res.status(200).json(companies)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

export default handler
