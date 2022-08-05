import { prisma } from 'lib/prisma'

export const getManagers = async () => {
  try {
    const managers = await prisma.manager.findMany()

    return { managers }
  } catch (err) {
    console.error(err)

    throw err
  }
}
