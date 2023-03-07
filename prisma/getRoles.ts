
import { prisma } from '@/lib/prisma'

export const getRoles = async (): Promise<Promise<Record<any, any>[]> | null> => {
  try {
    const roles = await prisma.role.findMany({
      select: {
        id: true,
        name: true,
      },
    })

    return JSON.parse(JSON.stringify(roles))
  } catch (err) {
    throw err
  }
}