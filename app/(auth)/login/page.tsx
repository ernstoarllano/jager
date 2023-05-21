import UserAuthForm from '@/components/dashboard/user-auth-form'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <>
      <UserAuthForm />
      <p className="px-8 text-center text-sm text-white">
        <Link href="/register" className="underline hover:text-brand">
          Don&apos;t have an account? Sign Up
        </Link>
      </p>
    </>
  )
}
