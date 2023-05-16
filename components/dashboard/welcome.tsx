import { PlusIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function Welcome({ user }: any) {
  return (
    <section className="flex flex-row items-center justify-between">
      <div>
        <h1 className="text-2xl font-medium">Welcome back, {user.name}</h1>
        <p className="text-gray-500">Track and manage your job applications.</p>
      </div>
      <Link
        className="flex flex-row items-center justify-between px-4 py-2 text-sm font-medium text-white bg-violet-600 rounded-lg space-x-1"
        href="/jobs/add"
      >
        <PlusIcon className="w-4 h-4" />
        <span>Add Job</span>
      </Link>
    </section>
  )
}
