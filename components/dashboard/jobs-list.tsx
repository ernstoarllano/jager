'use client'

import { Pencil2Icon, TrashIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'

import { JobsListProps } from '@/types/job'

import { formatDate } from '@/utils/dates'
import { cn } from '@/utils/styles'

export default function JobsList({ jobs }: JobsListProps) {
  const statusClass = (status: string) => {
    return cn('px-3 py-[3px] text-xs font-medium capitalize rounded-full', {
      'text-yellow-700 bg-yellow-50': status === 'applied',
      'text-orange-700 bg-orange-50': status === 'interview',
      'text-blue-700 bg-blue-50': status === 'offer',
      'text-red-700 bg-red-50': status === 'rejected',
      'text-green-700 bg-green-50': status === 'accepted',
    })
  }

  const onDelete = async (id: string) => {
    console.log(id)
  }

  return (
    <>
      {jobs && jobs.length >= 1 ? (
        <table className="w-full bg-white border border-gray-200 shadow-lg rounded-lg">
          <thead>
            <tr className="w-full text-xs text-gray-500 text-left border-b border-gray-200">
              <th className="px-6 py-3 font-medium">Job</th>
              <th className="px-6 py-3 font-medium">Applied At</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr
                key={job.id}
                className="text-sm border-b border-gray-200 last:border-b-0"
              >
                <td className="flex flex-col px-6 py-3">
                  <span className="font-medium">{job.company}</span>
                  <span>{job.role}</span>
                </td>
                <td className="px-6 py-3 font-normal text-gray-500">
                  {formatDate(job.createdAt)}
                </td>
                <td className="px-6 py-3">
                  <span className={statusClass(job.status)}>{job.status}</span>
                </td>
                <td className="px-6 py-3 text-center">
                  <div className="flex items-center justify-end space-x-4">
                    <Button className="p-0 text-sm text-violet-600 bg-transparent rounded-none">
                      <Pencil2Icon className="w-4 h-4" />
                    </Button>
                    <Button className="p-0 text-sm text-violet-600 bg-transparent rounded-none">
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <span>Add your first job.</span>
      )}
    </>
  )
}
