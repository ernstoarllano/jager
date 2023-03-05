import { getJobs } from '@/prisma/getJobs'

import JobsList from '@/components/dashboard/jobs-list'

export default async function JobsPage() {
  const jobs = await getJobs()

  return (
    <section className="px-6 py-3 space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">My Jobs</h1>
        <JobsList jobs={jobs} />
      </div>
    </section>
  )
}
