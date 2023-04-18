import { Job } from '@/types/job'

import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'

export const getJobs = async (): Promise<Promise<Job[]> | null> => {
  try {
    const user = await getCurrentUser()

    const jobs = await prisma.job.findMany({
      where: {
        userId: user?.id as string,
      },
      select: {
        id: true,
        company: true,
        role: true,
        createdAt: true,
        appliedAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      }
    })

    return JSON.parse(JSON.stringify(jobs))
  } catch (err) {
    throw err
  }
}