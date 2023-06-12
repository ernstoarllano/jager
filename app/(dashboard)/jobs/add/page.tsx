import AddJobForm from '@/components/dashboard/add-job-form'

export default async function AddJobPage() {
  return (
    <section>
      <h3 className="font-medium text-gray-700">Job Info</h3>
      <p className="text-sm text-gray-500">Add job details.</p>
      <AddJobForm />
    </section>
  )
}
