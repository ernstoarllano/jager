import type { NextApiRequest, NextApiResponse } from 'next'
import { getJob } from 'services/getJob'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query
    const { job } = await getJob(parseInt(id as string))

    res.status(200).json(job)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

export default handler
