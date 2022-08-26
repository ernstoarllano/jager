import { prisma } from 'lib/prisma'

export const getRoles = async () => {
  try {
    const roles = await prisma.role.findMany({
      select: {
        id: true,
        name: true,
      },
    })

    return { roles }
  } catch (err) {
    console.error(err)

    throw err
  }
}
