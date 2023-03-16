'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Form } from '@/components/ui/form'

import { jobSchema } from '@/lib/validations/job'
import { AddJobFormData } from '@/types/forms'
import { cn } from '@/utils/styles'

export default function AddJobForm({ roles, companies }: any) {
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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    setIsSaving(false)

    if (!res.ok) {
      console.log('error')
    }

    router.push('/jobs')
  }

  return (
    <div className="min-w-[375px]">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-6 py-6 space-y-2">
          <label htmlFor="role" className="block">
            Role
          </label>
          <select
            className="w-[350px] px-3 py-2 border border-solid border-slate-300 rounded"
            placeholder="Select a role"
            {...register('role')}
          >
            {roles.map((role: any) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
          {errors.role && (
            <p className="text-xs text-red-500 bg-red-300">
              {errors.role.message}
            </p>
          )}
        </div>
        <div className="px-6 py-6 space-y-2">
          <label htmlFor="company" className="block">
            Company
          </label>
          <select
            className="w-[350px] px-3 py-2 border border-solid border-slate-300 rounded"
            placeholder="Select a company"
            {...register('company')}
          >
            {companies.map((company: any) => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </select>
          {errors.company && (
            <p className="text-xs text-red-500 bg-red-300">
              {errors.company.message}
            </p>
          )}
        </div>
        <div className="px-6 py-4 border-t bg-slate-50">
          <button
            className={cn(
              'block w-fit-content px-4 py-2 text-sm font-semibold text-white text-center bg-black rounded'
            )}
          >
            Add Job
          </button>
        </div>
      </Form>
    </div>
  )
}
