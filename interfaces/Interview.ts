import { Company } from 'interfaces/Company'
import { Recruiter } from 'interfaces/Recruiter'
import { Role } from 'interfaces/Role'

export interface Interview {
  scheduledOn: Date
  company: Company
  recruiter: Recruiter
  role: Role
}
