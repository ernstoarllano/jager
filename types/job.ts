export interface Job {
  id: string
  company: string
  role: string
  status: "applied" | "interview" | "offer" | "rejected" | "accepted"
  createdAt: string
  appliedAt: string
}

export interface JobsListProps {
  jobs: Job[] | null
}