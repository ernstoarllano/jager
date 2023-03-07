import { getCompanies } from '@/prisma/getCompanies'
import { getRoles } from '@/prisma/getRoles'

import AddJobForm from '@/components/dashboard/add-job-form'

export default async function AddJobPage() {
  const roles = await getRoles()
  const companies = await getCompanies()

  return (
    <section className="px-6 py-3 space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Add Job</h1>
        <AddJobForm roles={roles} companies={companies} />
      </div>
    </section>
  )
}
