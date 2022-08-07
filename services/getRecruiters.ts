import { prisma } from 'lib/prisma'

export const getRecruiters = async () => {
  try {
    const recruiters = await prisma.recruiter.findMany({
      include: {
        company: true,
      },
      orderBy: {
        lastName: 'asc',
      },
    })

    return { recruiters }
  } catch (err) {
    console.error(err)

    throw err
  }
}
