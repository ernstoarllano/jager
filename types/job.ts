
export interface Job {
  id: string
  company: string
  role: string
  createdAt: string
  appliedAt: string
}

export interface JobsListProps {
  jobs: Job[] | null
}