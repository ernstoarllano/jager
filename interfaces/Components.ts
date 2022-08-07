import { Company } from 'interfaces/Company'
import { Job } from 'interfaces/Job'
import { Manager } from 'interfaces/Manager'
import { Recruiter } from 'interfaces/Recruiter'
import { Role } from 'interfaces/Role'
import { Screening } from 'interfaces/Screening'

export interface RoleProps {
  count: number
  role: string
}

export interface RolesProps {
  roles: Role[]
}

export interface ScreeningsProps {
  screenings: Screening[]
}

export interface CompaniesProps {
  companies: Company[]
}

export interface RecruitersProps {
  recruiters: Recruiter[]
}

export interface ManagersProps {
  managers: Manager[]
}

export interface JobsTableProps {
  jobs: Job[]
}

export interface ManagersTableProps {
  managers: Manager[]
}

export interface RecruitersTableProps {
  recruiters: Recruiter[]
}

export interface CompaniesTableProps {
  companies: Company[]
}
