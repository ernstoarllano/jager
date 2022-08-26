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
  screenedOn: string
  interviewedOn: string
  eliminatedOn: string
}

interface Recruiter {
  id: number
  firstName: string
  lastName: string
  linkedIn: string
}

interface Interviewer {
  id: number
  firstName: string
  lastName: string
  linkedIn: string
}

interface Interview {
  id: number
  company: Company
  recruiter?: Recruiter
  interviewer?: Interviewer
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

export interface DashboardProps {
  children?: React.ReactNode
}

export interface WelcomeProps {
  data: WelcomeData
  error: Error | null
}

export interface RecentProps {
  recent: Job[]
}

export interface CountProps {
  text: string
  count: number
}

export interface ChartProps {
  interviews: number
  applied: number
  eliminated: number
}

export interface ScheduleProps {
  upcoming: Interview[]
}

export interface JobFields {
  appliedOn: string
  roleId: number
  companyId: number
  recruiterId?: number
  interviewerId?: number
  salary?: number
  screenedOn?: string
  interviewedOn?: string
  eliminatedOn?: string
}
