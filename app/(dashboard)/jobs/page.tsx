import { getJobs } from '@/prisma/getJobs'

import JobsList from '@/components/dashboard/jobs-list'

export default async function JobsPage() {
  const jobs = await getJobs()

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-medium text-gray-700">Jobs</h2>
        <p className="text-sm text-gray-500">View your job applications.</p>
      </div>
      <JobsList jobs={jobs} />
    </section>
  )
}
