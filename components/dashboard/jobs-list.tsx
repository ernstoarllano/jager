import { JobsListProps } from '@/types/job'

import { formatDate } from '@/utils/dates'

export default function JobsList({ jobs }: JobsListProps) {
  return (
    <table className="w-full bg-white border border-gray-200 shadow-lg rounded-lg">
      <thead>
        <tr className="w-full text-xs text-gray-500 text-left border-b border-gray-200">
          <th className="px-6 py-3 font-medium">Job</th>
          <th className="px-6 py-3 font-medium">Applied At</th>
          <th className="px-6 py-3 font-medium">Status</th>
        </tr>
      </thead>
      <tbody>
        {jobs?.map((job) => (
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
              <span className="px-3 py-[2px] text-xs font-medium bg-gray-100 rounded-full">
                Processing
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
