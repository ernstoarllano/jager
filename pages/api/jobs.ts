import type { NextApiRequest, NextApiResponse } from 'next'
import { getJobs } from 'services/getJobs'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { jobs } = await getJobs()

    res.status(200).json(jobs)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

export default handler
