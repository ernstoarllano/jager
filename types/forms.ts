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