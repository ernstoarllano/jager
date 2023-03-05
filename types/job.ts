import { Company } from '@/types/company'
import { Role } from '@/types/role'

export interface Job {
  id: string
  company: Company
  role: Role
  appliedAt: string
}

export interface JobsListProps {
  jobs: Job[] | null
}