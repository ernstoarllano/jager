import { JobsListProps } from '@/types/job'

import { formatDate } from '@/utils/dates'

export default function JobsList({ jobs }: JobsListProps) {
  return (
    <div className="space-y-2">
      {jobs?.map((job) => (
        <div key={job.id}>
          <h3>{job.role.name}</h3>
          <p>{job.company.name}</p>
          <time>{formatDate(job.appliedAt)}</time>
        </div>
      ))}
    </div>
  )
}
