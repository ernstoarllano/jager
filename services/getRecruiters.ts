import { prisma } from 'lib/prisma'

export const getRecruiters = async (take: number = 6) => {
  try {
    const recruiters = await prisma.recruiter.findMany({
      include: {
        company: true,
      },
      orderBy: {
        lastName: 'asc',
      },
      take: take,
    })

    return { recruiters }
  } catch (err) {
    console.error(err)

    throw err
  }
}
