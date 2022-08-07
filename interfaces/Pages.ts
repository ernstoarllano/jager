import { Company } from 'interfaces/Company'
import { Job } from 'interfaces/Job'
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

export interface JobsProps {
  jobs: Job[]
}

export interface ManagersProps {
  managers: Manager[]
}

export interface RecruitersProps {
  managers: Manager[]
}
