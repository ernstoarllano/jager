import { prisma } from 'lib/prisma'

export const getInterviews = async () => {
  try {
    // Return count of all interviews
    const interviews = await prisma.job.count({
      where: {
        OR: [{ screenedOn: { not: null } }, { interviewedOn: { not: null } }],
      },
    })

    // Return upcomming interviews
    const now = new Date()
    const upcoming = await prisma.job.findMany({
      orderBy: {
        interviewedOn: 'asc',
      },
      where: {
        OR: [
          {
            screenedOn: {
              gte: new Date(now.setDate(now.getDate() + 1)).toISOString(),
            },
          },
          {
            interviewedOn: {
              gte: new Date(now.setDate(now.getDate() + 1)).toISOString(),
            },
          },
        ],
      },
      select: {
        id: true,
        company: true,
        recruiter: true,
        interviewer: true,
        role: true,
        screenedOn: true,
        interviewedOn: true,
      },
      take: 3,
    })

    return { interviews, upcoming }
  } catch (err) {
    console.error(err)

    throw err
  }
}
