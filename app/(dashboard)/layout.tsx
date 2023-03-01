import { redirect } from 'next/navigation'

import Header from '@/components/header'
import MainContainer from '@/components/main-container'
import MainNav from '@/components/main-nav'
import { GenericLayoutProps } from '@/types/layouts'

import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'

export default async function DashboardLayout({
  children,
}: GenericLayoutProps) {
  const user = await getCurrentUser()

  if (!user) redirect(authOptions.pages!.signIn as string)

  return (
    <div className="lg:grid lg:grid-cols-12 lg:h-screen">
      <MainNav />
      <MainContainer>
        <Header user={user} />
        {children}
      </MainContainer>
    </div>
  )
}
