import * as z from 'zod'

export const userSchema = z.object({
  name: z.string().min(10).max(255),
})