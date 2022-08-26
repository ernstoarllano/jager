import { yupResolver } from '@hookform/resolvers/yup'
import { JobFields } from 'interfaces/interfaces'
import { SubmitHandler, useForm } from 'react-hook-form'
import jobSchema from 'schema/job'
import useSWR from 'swr'
import { fetcher } from 'utils/dataFetcher'

const AddJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JobFields>({
    resolver: yupResolver(jobSchema),
  })

  const onSubmit: SubmitHandler<JobFields> = async (data) => {
    try {
      const save = await fetch('/api/job', {
        method: 'POST',
        body: JSON.stringify(data),
      })

      return await save.json()
    } catch (err) {
      throw err
    }
  }

  const { data: roles } = useSWR('/api/roles', fetcher)
  const { data: companies } = useSWR('/api/companies', fetcher)

  if (!roles || !companies) return <div>Loading...</div>

  return (
    <section className="p-10 space-y-12">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <h2 className="mb-2">Job Information</h2>
          <p className="text-sm">
            Enter as much information as you can about the job.
          </p>
        </div>
        <div className="lg:col-span-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="block w-full text-sm font-medium">
                  Applied On
                </label>
                <input
                  className="w-full h-9 p-2 border border-solid border-gray-200 rounded-md"
                  type="date"
                  {...register('appliedOn', { required: true })}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="block w-full text-sm font-medium">Role</label>
                <select
                  className="w-full h-9 p-2 bg-white border border-solid border-gray-200 rounded-md"
                  {...register('roleId', { required: true })}
                >
                  {roles.map((role: any) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
                {errors.roleId && (
                  <p className="text-sm text-red-400">
                    Please enter the role for the job.
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <label className="block w-full text-sm font-medium">
                  Company
                </label>
                <select
                  className="w-full h-9 p-2 bg-white border border-solid border-gray-200 rounded-md"
                  {...register('companyId', { required: true })}
                >
                  {companies.map((company: any) => (
                    <option key={company.id} value={company.id}>
                      {company.name}
                    </option>
                  ))}
                </select>
                {errors.companyId && (
                  <p className="text-sm text-red-400">
                    Please enter the company for the job.
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <label className="block w-full text-sm font-medium">
                  Recruiter
                </label>
                <input
                  className="w-full h-9 p-2 border border-solid border-gray-200 rounded-md"
                  type="text"
                  {...register('recruiterId', { required: false })}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="block w-full text-sm font-medium">
                  Salary
                </label>
                <input
                  className="w-full h-9 p-2 border border-solid border-gray-200 rounded-md"
                  type="number"
                  {...register('salary', { required: false })}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="block w-full text-sm font-medium">
                  Interviewer
                </label>
                <input
                  className="w-full h-9 p-2 border border-solid border-gray-200 rounded-md"
                  type="text"
                  {...register('interviewerId', { required: false })}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="block w-full text-sm font-medium">
                  Screened On
                </label>
                <input
                  className="w-full h-9 p-2 border border-solid border-gray-200 rounded-md"
                  type="date"
                  {...register('screenedOn', { required: false })}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="block w-full text-sm font-medium">
                  Interviewd On
                </label>
                <input
                  className="w-full h-9 p-2 border border-solid border-gray-200 rounded-md"
                  type="date"
                  {...register('interviewedOn', { required: false })}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="block w-full text-sm font-medium">
                  Eliminated On
                </label>
                <input
                  className="w-full h-9 p-2 border border-solid border-gray-200 rounded-md"
                  type="date"
                  {...register('eliminatedOn', { required: false })}
                />
              </div>
              <input
                className="flex items-center px-6 py-3 text-sm font-medium text-day bg-purple-500 rounded-full cursor-pointer"
                value="Add Job"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddJob
