import { yupResolver } from '@hookform/resolvers/yup'
import { Company, Role } from '@prisma/client'
import AddJobLoader from 'components/loaders/AddJobLoader'
import { JobFields } from 'interfaces/interfaces'
import { SubmitHandler, useForm } from 'react-hook-form'
import { newJob } from 'schema/job'
import useSWR from 'swr'
import { fetcher } from 'utils/dataFetcher'

const AddJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<JobFields>({
    resolver: yupResolver(newJob),
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

  if (!roles || !companies) return <AddJobLoader />

  return (
    <section className="p-10 space-y-12">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <h2 className="mb-2">Job</h2>
          <p className="text-sm">
            Enter as much information as you can about the job.
          </p>
        </div>
        <div className="lg:col-span-8 space-y-6">
          {isSubmitSuccessful && (
            <div className="rounded-md bg-green-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    Job, was added successfully.
                  </p>
                </div>
              </div>
            </div>
          )}
          <form
            className="lg:p-6 lg:bg-white lg:shadow lg:rounded-md"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="inline-block text-sm font-medium text-gray-600">
                  Applied On
                </label>
                <input
                  className="w-full h-9 p-2 text-sm border border-solid border-gray-300 rounded-md"
                  type="date"
                  {...register('appliedOn', { required: true })}
                />
                {errors.appliedOn && (
                  <p className="text-sm text-red-400">
                    Please enter the date the job was applied on.
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <label className="inline-block text-sm font-medium text-gray-600">
                  Role
                </label>
                <select
                  className="w-full h-9 p-2 text-sm bg-white border border-solid border-gray-300 rounded-md"
                  {...register('roleId', { required: true })}
                >
                  <option defaultValue="">Select a role</option>
                  {roles.length > 0 &&
                    roles.map((role: Role) => (
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
                <label className="inline-block text-sm font-medium text-gray-600">
                  Company
                </label>
                <select
                  className="w-full h-9 p-2 text-sm bg-white border border-solid border-gray-300 rounded-md"
                  {...register('companyId', { required: true })}
                >
                  <option defaultValue="">Select a company</option>
                  {companies.length > 0 &&
                    companies.map((company: Company) => (
                      <option key={company.id} value={company.id}>
                        {company.name}
                      </option>
                    ))}
                </select>
                <span className="block text-xs font-light text-gray-500">
                  {`If company isn't listed add a new company above`}
                </span>
                {errors.companyId && (
                  <p className="text-sm text-red-400">
                    Please enter the company for the job.
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <label className="inline-block text-sm font-medium text-gray-600">
                  Recruiter
                </label>
                <select
                  className="w-full h-9 p-2 text-sm bg-white border border-solid border-gray-300 rounded-md"
                  {...register('recruiterId')}
                >
                  <option defaultValue="">Select a recruiter</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="inline-block text-sm font-medium text-gray-600">
                  Salary
                </label>
                <input
                  className="w-full h-9 p-2 text-sm border border-solid border-gray-300 rounded-md"
                  type="number"
                  {...register('salary')}
                />
                {errors.salary && (
                  <p className="text-sm text-red-400">
                    Please enter the salary for the job.
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <label className="inline-block text-sm font-medium text-gray-600">
                  Interviewer
                </label>
                <select
                  className="w-full h-9 p-2 text-sm bg-white border border-solid border-gray-300 rounded-md"
                  {...register('interviewerId')}
                >
                  <option defaultValue="">Select a interviewer</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="inline-block text-sm font-medium text-gray-600">
                  Screened On
                </label>
                <input
                  className="w-full h-9 p-2 text-sm border border-solid border-gray-300 rounded-md"
                  type="date"
                  {...register('screenedOn')}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="inline-block text-sm font-medium text-gray-600">
                  Interviewd On
                </label>
                <input
                  className="w-full h-9 p-2 text-sm border border-solid border-gray-300 rounded-md"
                  type="date"
                  {...register('interviewedOn')}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="inline-block text-sm font-medium text-gray-600">
                  Eliminated On
                </label>
                <input
                  className="w-full h-9 p-2 text-sm border border-solid border-gray-300 rounded-md"
                  type="date"
                  {...register('eliminatedOn')}
                />
              </div>
              <button
                className="flex items-center px-6 py-3 text-sm font-medium text-day bg-purple-500 rounded-full cursor-pointer"
                disabled={isSubmitting}
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddJob
