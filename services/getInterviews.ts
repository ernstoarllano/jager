import { prisma } from 'lib/prisma'

export const getInterviews = async () => {
  try {
    const interviews = await prisma.job.count({
      where: {
        OR: [{ screened: true }, { interviewed: true }],
      },
    })

    const now = new Date()
    const upcoming = await prisma.job.findMany({
      where: {
        OR: [
          {
            screened: false,
            screenedOn: {
              gt: new Date(now.setDate(now.getDate() + 1)),
            },
            eliminated: false,
          },
          {
            interviewed: false,
            interviewedOn: {
              gt: new Date(now.setDate(now.getDate() + 1)),
            },
            eliminated: false,
          },
        ],
      },
      select: {
        id: true,
        company: true,
        recruiter: true,
        role: true,
        screenedOn: true,
        interviewedOn: true,
      },
    })

    const upcomingScreenings = await prisma.job.findMany({
      where: {
        screened: false,
        screenedOn: {
          not: null,
        },
        eliminated: false,
      },
      select: {
        id: true,
        company: true,
        recruiter: true,
        role: true,
        screenedOn: true,
      },
    })

    const upcomingInterivews = await prisma.job.findMany({
      orderBy: {
        interviewedOn: 'asc',
      },
      where: {
        interviewed: false,
        interviewedOn: {
          not: null,
        },
        eliminated: false,
      },
      select: {
        id: true,
        company: true,
        manager: true,
        role: true,
        interviewedOn: true,
      },
    })

    //const upcoming = [...upcomingScreenings, ...upcomingInterivews]

    return { interviews, upcoming }
  } catch (err) {
    console.error(err)

    throw err
  }
}
