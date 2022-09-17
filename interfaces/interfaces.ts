interface Company {
  id: number
  name: string
  website: string
  logo: string
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
  hiredOn: string
}

interface Interview {
  id: number
  company: Company
  role: Role
  screenedOn?: string
  interviewedOn?: string
}

interface WelcomeData {
  applied: number
  eliminated: number
  interviews: number
  hired: number
  recent: Job[]
  upcoming: Interview[]
}

export interface DashboardProps {
  children?: React.ReactNode
}

export interface WelcomeProps {
  data: WelcomeData
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
  hired: number
}

export interface ScheduleProps {
  upcoming: Interview[]
}

export interface StatusProps {
  screenedOn?: string
  interviewedOn?: string
  eliminatedOn?: string
  hiredOn?: string
}

export interface CompanyFields {
  name: string
  website: number | null
  logo: FileList | null
}

export interface RoleFields {
  name: string
}

export interface AddJobFields {
  appliedOn: string
  roleId: number
  companyId: number
  salary: number
}

export interface EditJobFields {
  appliedOn: string
  roleId: number
  companyId: number
  salary: number
  screenedOn: string | null
  interviewedOn: string | null
  eliminatedOn: string | null
  hiredOn: string | null
}
