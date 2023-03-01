import { redirect } from 'next/navigation'

import UserProfileForm from '@/components/dashboard/user-profile-form'

import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'

export default async function SettingsPage() {
  const user = await getCurrentUser()

  if (!user) redirect(authOptions.pages!.signIn as string)

  return (
    <section className="px-6 py-3 space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p>Manage account and website settings.</p>
      </div>
      <UserProfileForm user={user} />
    </section>
  )
}
