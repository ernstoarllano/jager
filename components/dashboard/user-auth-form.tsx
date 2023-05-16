'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { Form } from '@/components/ui/form'

import { useToast } from '@/hooks/use-toast'
import { loginSchema } from '@/lib/validations/login'
import { LoginFormData } from '@/types/forms'

export default function UserAuthForm() {
  const { register, handleSubmit } = useForm<LoginFormData>({
    defaultValues: { email: '' },
    resolver: zodResolver(loginSchema),
  })
  const searchParams = useSearchParams()

  const onSubmit = async (data: LoginFormData) => {
    const result = await signIn('email', {
      email: data.email,
      redirect: false,
      callbackUrl: searchParams?.get('from') || '/dashboard',
    })

    if (!result?.ok) {
      throw new Error(result?.error || 'An error occurred. Please try again.')
    } else {
      toast({
        description:
          'A sign in link has been sent to your email address. Please check your inbox.',
      })
    }
  }

  const { toast } = useToast()

  return (
    <div className="min-w-[375px] space-y-6">
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        <button className="block w-full py-2 text-sm font-semibold text-white text-center bg-gray-900 rounded">
          Sign In
        </button>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-300"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-slate-500">Or continue with</span>
        </div>
      </div>
      <div className="flex flex-col space-y-6"></div>
    </div>
  )
}
