import { redirect } from 'next/navigation'

import Welcome from '@/components/dashboard/welcome'

import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'

export default async function HomePage() {
  const user = await getCurrentUser()

  if (!user) redirect(authOptions.pages!.signIn as string)

  return (
    <div className="px-4 py-3">
      <Welcome user={user} />
    </div>
  )
}
