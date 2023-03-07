import * as z from 'zod'

export const jobSchema = z.object({
  role: z.string().min(1),
  company: z.string().min(1),
})