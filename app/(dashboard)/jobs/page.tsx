import JobsList from '@/components/dashboard/jobs-list'

export default async function JobsPage() {
  return (
    <section className="px-6 py-3 space-y-8">
      <div>
        <h1 className="text-2xl font-bold">My Jobs</h1>
        <JobsList />
      </div>
    </section>
  )
}
