import { GenericLayoutProps } from '@/types/layouts'

export default function AuthLayout({ children }: GenericLayoutProps) {
  return (
    <div className="grid place-content-center w-5/12 mx-auto h-screen">
      {children}
    </div>
  )
}
