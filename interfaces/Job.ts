import { Company } from 'interfaces/Company'
import { Manager } from 'interfaces/Manager'
import { Recruiter } from 'interfaces/Recruiter'
import { Role } from 'interfaces/Role'

export interface Job {
  id: number
  role: Role
  recruiter: Recruiter
  manager: Manager
  company: Company
  salary: number
  screenedOn: string
  interviewedOn: string
  eliminated: boolean
}
