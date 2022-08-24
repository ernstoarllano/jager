import { prisma } from 'lib/prisma'

export const getCompany = async (id: number) => {
  try {
    const company = await prisma.company.findUnique({
      where: {
        id,
      },
    })

    return { company }
  } catch (err) {
    console.error(err)

    throw err
  }
}
