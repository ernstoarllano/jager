import { Company } from 'interfaces/Company'

export interface Manager {
  id: number
  firstName: string
  lastName: string
  linkedIn?: string
  positiveExperience: boolean
  company?: Company[]
}
