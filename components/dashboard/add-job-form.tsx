'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

import { useToast } from '@/hooks/use-toast'
import { jobSchema } from '@/lib/validations/job'
import { AddJobFormData } from '@/types/forms'
import { cn } from '@/utils/styles'

export default function AddJobForm() {
  const router = useRouter()

  const [isSaving, setIsSaving] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddJobFormData>({
    defaultValues: { role: '', company: '' },
    resolver: zodResolver(jobSchema),
  })

  const onSubmit = async (data: AddJobFormData) => {
    setIsSaving(true)

    const res = await fetch('/api/job/', {
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
        description: 'Job has been added.',
      })
      router.push('/jobs')
      router.refresh()
    }
  }

  const { toast } = useToast()

  return (
    <div className="lg:col-span-10">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-6 py-6 space-y-2">
          <label htmlFor="role" className="block text-gray-700 font-medium">
            Role
          </label>
          <input
            className="w-[350px] px-3 py-2 border border-gray-300 rounded-lg"
            type="text"
            {...register('role')}
          />
          {errors.role && (
            <p className="text-xs text-red-500 bg-red-300">
              {errors.role.message}
            </p>
          )}
        </div>
        <div className="px-6 py-6 space-y-2">
          <label htmlFor="company" className="block text-gray-700 font-medium">
            Company
          </label>
          <input
            className="w-[350px] px-3 py-2 border border-gray-300 rounded-lg"
            type="text"
            {...register('company')}
          />
          {errors.company && (
            <p className="text-xs text-red-500 bg-red-300">
              {errors.company.message}
            </p>
          )}
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <Button
            className={cn(
              'block w-fit-content ml-auto px-4 py-2 text-sm font-medium text-white text-center bg-violet-600 rounded-lg'
            )}
          >
            Add Job
          </Button>
        </div>
      </Form>
    </div>
  )
}
