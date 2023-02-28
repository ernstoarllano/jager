'use client'

import { GitHubIcon } from '@/components/icons'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function UserAuthForm() {
  const { register, handleSubmit } = useForm()
  const searchParams = useSearchParams()

  const onSubmit = async (data: any) => {
    const result = await signIn('email', {
      email: data.email,
      redirect: false,
      callbackUrl: searchParams?.get('from') || '/dashboard',
    })

    if (!result?.ok) {
      throw new Error(result?.error || 'An error occurred. Please try again.')
    }
  }

  return (
    <div className="min-w-[375px] space-y-6">
      <form
        className="w-full p-6 text-sunnyside-black bg-white border border-solid border-slate-300 rounded space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-2">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            className="w-full p-1 border border-solid border-slate-300 rounded"
            type="email"
            {...register('email')}
          />
        </div>
        <button className="block w-full py-2 text-sm font-semibold text-white text-center bg-black rounded">
          Sign In
        </button>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-300"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-slate-500">Or continue with</span>
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <button
          className="flex items-center justify-center w-full py-2 text-sm font-semibold text-center  bg-white space-x-2 rounded"
          onClick={() => signIn('github')}
        >
          <GitHubIcon classNames="h-4 fill-black" />
          <span>GitHub</span>
        </button>
      </div>
    </div>
  )
}
