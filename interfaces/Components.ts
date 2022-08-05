import { Company } from 'interfaces/Company'
import { Manager } from 'interfaces/Manager'
import { Recruiter } from 'interfaces/Recruiter'

export interface RolesProps {
  roles: [
    {
      id: number
      name: string
      _count: {
        jobs: number
      }
    }
  ]
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
