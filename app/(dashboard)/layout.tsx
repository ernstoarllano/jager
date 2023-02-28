import MainContainer from '@/components/main-container'
import MainNav from '@/components/main-nav'
import { GenericLayoutProps } from '@/types/layouts'

export default async function DashboardLayout({
  children,
}: GenericLayoutProps) {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:h-screen">
      <MainNav />
      <MainContainer>{children}</MainContainer>
    </div>
  )
}
