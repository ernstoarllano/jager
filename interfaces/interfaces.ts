interface Company {
  id: number
  name: string
  url: string
}

interface Role {
  id: number
  name: string
}

interface Job {
  id: number
  role: Role
  company: Company
  salary: number
  appliedOn: string
  screened: boolean
  interviewed: boolean
  eliminated: boolean
}

interface Recruiter {
  id: number
  firstName: string
  lastName: string
  linkedIn: string
  positiveExperience: boolean
}

interface Manager {
  id: number
  firstName: string
  lastName: string
  linkedIn: string
  positiveExperience: boolean
}

interface Interview {
  id: number
  company: Company
  recruiter?: Recruiter
  manager?: Manager
  role: Role
  screenedOn?: string
  interviewedOn?: string
}

interface WelcomeData {
  applied: number
  eliminated: number
  interviews: number
  recent: Job[]
  upcoming: Interview[]
}

export interface WelcomeProps {
  data: WelcomeData
  error: Error | null
}

export interface RecentProps {
  recent: Job[]
}
