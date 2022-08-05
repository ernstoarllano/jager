import { Company } from 'interfaces/Company'
import { Manager } from 'interfaces/Manager'
import { Recruiter } from 'interfaces/Recruiter'

export interface HomeProps {
  eliminated: number
  applications: number
  roles: [
    {
      id: number
      name: string
      _count: {
        jobs: number
      }
    }
  ]
  companies: Company[]
  recruiters: Recruiter[]
  managers: Manager[]
}
