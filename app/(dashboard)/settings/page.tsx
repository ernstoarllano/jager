import { redirect } from 'next/navigation'

import UserProfileForm from '@/components/dashboard/user-profile-form'

import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'

export default async function SettingsPage() {
  const user = await getCurrentUser()

  if (!user) redirect(authOptions.pages!.signIn as string)

  return (
    <section className="lg:grid lg:grid-cols-12">
      <div className="lg:col-span-2">
        <h3 className="font-medium text-gray-700">Personal Info</h3>
        <p className="text-sm text-gray-500">
          Update your photo and personal details.
        </p>
      </div>
      <UserProfileForm user={user} />
    </section>
  )
}
