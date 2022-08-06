import { Company } from 'interfaces/Company'
import { Manager } from 'interfaces/Manager'
import { Recruiter } from 'interfaces/Recruiter'
import { Role } from 'interfaces/Role'
import { Screening } from 'interfaces/Screening'

export interface HomeProps {
  totalEliminated: number
  totalScreenings: number
  totalInterviews: number
  totalApplications: number
  roles: Role[]
  screenings: Screening[]
  companies: Company[]
  recruiters: Recruiter[]
  managers: Manager[]
}
