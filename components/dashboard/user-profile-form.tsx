'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Form } from '@/components/ui/form'

import { userSchema } from '@/lib/validations/user'
import { UserFormData, UserProfileFormProps } from '@/types/forms'
import { cn } from '@/utils/styles'

export default function UserProfileForm({ user }: UserProfileFormProps) {
  const router = useRouter()

  const [isSaving, setIsSaving] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    defaultValues: { name: user.name },
    resolver: zodResolver(userSchema),
  })

  const onSubmit = async (data: UserFormData) => {
    setIsSaving(true)

    const res = await fetch(`/api/user/${user.email}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    setIsSaving(false)

    if (!res.ok) {
      console.log('error')
    }

    router.refresh()
  }

  return (
    <div className="min-w-[375px]">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-6 py-6 space-y-2">
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            className="w-[350px] px-3 py-2 border border-solid border-slate-300 rounded"
            type="text"
            {...register('name')}
          />
          {errors.name && (
            <p className="text-xs text-red-500 bg-red-300">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="px-6 py-4 border-t bg-slate-50">
          <button
            className={cn(
              'block w-fit-content px-4 py-2 text-sm font-semibold text-white text-center bg-black rounded'
            )}
            disabled={isSaving}
          >
            Update Profile
          </button>
        </div>
      </Form>
    </div>
  )
}
