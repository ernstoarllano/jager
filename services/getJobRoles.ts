import { prisma } from 'lib/prisma'

export const getJobRoles = async () => {
  try {
    const roles = await prisma.role.findMany({
      select: {
        id: true,
        name: true,
        _count: true,
      },
    })

    return { roles }
  } catch (err) {
    console.error(err)

    throw err
  }
}
