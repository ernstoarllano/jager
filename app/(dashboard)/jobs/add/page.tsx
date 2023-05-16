import AddJobForm from '@/components/dashboard/add-job-form'

export default async function AddJobPage() {
  return (
    <section className="lg:grid lg:grid-cols-12">
      <div className="lg:col-span-2">
        <h3 className="font-medium text-gray-700">Job Info</h3>
        <p className="text-sm text-gray-500">Add job details.</p>
      </div>
      <AddJobForm />
    </section>
  )
}
