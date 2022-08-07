import { prisma } from 'lib/prisma'

export const getScreenings = async () => {
  try {
    const screenings = await prisma.job.findMany({
      orderBy: {
        screenedOn: 'asc',
      },
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

    return { screenings: JSON.parse(JSON.stringify(screenings)) }
  } catch (err) {
    console.error(err)

    throw err
  }
}
