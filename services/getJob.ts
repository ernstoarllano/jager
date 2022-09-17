import { prisma } from 'lib/prisma'

export const getJob = async (id: number) => {
  try {
    const job = await prisma.job.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        appliedOn: true,
        role: true,
        company: true,
        salary: true,
        screenedOn: true,
        interviewedOn: true,
        eliminatedOn: true,
        hiredOn: true,
      },
    })

    return { job }
  } catch (err) {
    console.error(err)

    throw err
  }
}
