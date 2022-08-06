import { Company } from 'interfaces/Company'
import { Recruiter } from 'interfaces/Recruiter'
import { Role } from 'interfaces/Role'

export interface Screening {
  id: number
  company: Company
  recruiter: Recruiter
  role: Role
  screenedOn: string
}
