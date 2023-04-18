import { JobsListProps } from '@/types/job'

import { formatDate } from '@/utils/dates'

export default function JobsList({ jobs }: JobsListProps) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {jobs?.map((job) => (
        <div className="p-4 rounded-md shadow-md" key={job.id}>
          <h3>{job.role}</h3>
          <p>{job.company}</p>
          <time>{formatDate(job.createdAt)}</time>
          <span className="block">Active</span>
        </div>
      ))}
    </div>
  )
}
