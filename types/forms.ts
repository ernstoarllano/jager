import { User } from 'next-auth'

export interface LoginFormData {
  email: string
}

export interface UserFormData {
  name: string | null | undefined
}

export interface UserProfileFormProps {
  user: User
}

export interface AddJobFormData {
  role: string
  company: string
}

export interface FormProps {
  className?: string
  onSubmit: () => void
  children: React.ReactNode
}