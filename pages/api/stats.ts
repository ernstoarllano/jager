import type { NextApiRequest, NextApiResponse } from 'next'
import { getInterviews } from 'services/getInterviews'
import { getJobs } from 'services/getJobs'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { applied, eliminated, hired, recent } = await getJobs()
    const { interviews, upcoming } = await getInterviews()

    res
      .status(200)
      .json({ applied, eliminated, hired, recent, interviews, upcoming })
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

export default handler
