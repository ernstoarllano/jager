'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Spinner } from '@/components/ui/spinner'

import { useToast } from '@/hooks/use-toast'
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
      throw new Error('An error occurred. Please try again.')
    } else {
      toast({
        title: 'Success',
        description: 'Settings has been updated.',
      })
      router.refresh()
    }
  }

  const { toast } = useToast()

  return (
    <div className="lg:col-span-10">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-6 py-6 space-y-2">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name
          </label>
          <input
            className="w-[350px] px-3 py-2 border border-gray-300 rounded-lg"
            type="text"
            {...register('name')}
          />
          {errors.name && (
            <p className="text-xs text-red-500 bg-red-300">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <Button
            className={cn(
              'block w-fit-content ml-auto px-4 py-2 text-sm font-medium text-white text-center bg-violet-600 rounded-lg'
            )}
          >
            {!isSaving ? `Update Profile` : <Spinner />}
          </Button>
        </div>
      </Form>
    </div>
  )
}
