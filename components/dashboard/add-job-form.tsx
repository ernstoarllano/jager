'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

import { useSaving } from '@/hooks/use-saving'
import { useToast } from '@/hooks/use-toast'
import { jobSchema } from '@/lib/validations/job'
import { AddJobFormData } from '@/types/forms'
import { cn } from '@/utils/styles'

export default function AddJobForm() {
  const router = useRouter()
  const { isSaving, setIsSaving } = useSaving()
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddJobFormData>({
    defaultValues: { role: '', company: '', status: 'applied' },
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

  return (
    <div className="mt-5 pt-5 border-t border-gray-200">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center py-6 space-y-2">
          <label htmlFor="role" className="w-[280px] text-gray-700 font-medium">
            Role
          </label>
          <div className="flex flex-col">
            <input
              className="w-[512px] px-3 py-2 border border-gray-300 rounded-lg"
              type="text"
              {...register('role')}
            />
            {errors.role && (
              <Alert className="mt-4 text-xs text-red-500 bg-red-300">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription className="text-xs">
                  {errors.role.message}
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
        <div className="flex items-center py-6 space-y-2">
          <label
            htmlFor="company"
            className="w-[280px] text-gray-700 font-medium"
          >
            Company
          </label>
          <div className="flex flex-col">
            <input
              className="w-[512px] px-3 py-2 border border-gray-300 rounded-lg"
              type="text"
              {...register('company')}
            />
            {errors.company && (
              <Alert className="mt-4 text-xs text-red-500 bg-red-300">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription className="text-xs">
                  {errors.company.message}
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
        <div className="flex items-center py-6 space-y-2">
          <label
            htmlFor="status"
            className="w-[280px] text-gray-700 font-medium"
          >
            Status
          </label>
          <div className="flex flex-col">
            <select
              className="w-[512px] px-3 py-2 bg-white border border-gray-300 rounded-lg"
              {...register('status')}
            >
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
              <option value="accepted">Accepted</option>
            </select>
            {errors.status && (
              <Alert className="mt-4 text-xs text-red-500 bg-red-300">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription className="text-xs">
                  {errors.status.message}
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
        <div className="py-4 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <Button
              className={cn(
                'block w-fit ml-auto px-4 py-2 text-sm font-medium text-gray-700 text-center bg-white border border-gray-300 rounded-lg'
              )}
              onClick={reset}
            >
              Cancel
            </Button>
            <Button
              className={cn(
                'block w-fit ml-auto px-4 py-2 text-sm font-medium text-white text-center bg-violet-600 rounded-lg'
              )}
            >
              Add Job
            </Button>
          </div>
        </div>
      </Form>
    </div>
  )
}
