import { yupResolver } from '@hookform/resolvers/yup'
import { AddJob } from 'interfaces/Forms'
import { SubmitHandler, useForm } from 'react-hook-form'
import jobSchema from 'schema/job'

const AddJobForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddJob>({
    resolver: yupResolver(jobSchema),
  })

  const onSubmit: SubmitHandler<AddJob> = (data) => {
    console.log(data)
  }

  return (
    <section className="px-10 py-20 border-b border-solid border-gray-200">
      <div className="p-8 bg-white border border-solid border-gray-200 rounded-3xl shadow-lg space-y-12">
        <h2 className="text-3xl font-bold">Add Job</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div className="flex flex-col">
              <label className="block w-full h-9 font-medium">Role</label>
              <input
                className="w-full h-9 p-2 border border-solid border-gray-200"
                type="text"
                {...register('role', { required: true })}
              />
              {errors.role && (
                <p className="text-sm text-red-400">
                  Please enter the role for the job.
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="block w-full h-9 font-medium">Recruiter</label>
              <input
                className="w-full h-9 p-2 border border-solid border-gray-200"
                type="text"
                {...register('recruiter', { required: false })}
              />
            </div>
            <div className="flex flex-col">
              <label className="block w-full h-9 font-medium">Manager</label>
              <input
                className="w-full h-9 p-2 border border-solid border-gray-200"
                type="text"
                {...register('manager', { required: false })}
              />
            </div>
            <div className="flex flex-col">
              <label className="block w-full h-9 font-medium">Company</label>
              <input
                className="w-full h-9 p-2 border border-solid border-gray-200"
                type="text"
                {...register('company', { required: true })}
              />
              {errors.company && (
                <p className="text-sm text-red-400">
                  Please enter the company for the job.
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="block w-full h-9 font-medium">Salary</label>
              <input
                className="w-full h-9 p-2 border border-solid border-gray-200"
                type="number"
                {...register('salary', { required: false })}
              />
            </div>
            <div className="flex flex-col">
              <label className="block w-full h-9 font-medium">Applied On</label>
              <input
                className="w-full h-9 p-2 border border-solid border-gray-200"
                type="date"
                {...register('appliedOn', { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label className="block w-full h-9 font-medium">
                Screened On
              </label>
              <input
                className="w-full h-9 p-2 border border-solid border-gray-200"
                type="date"
                {...register('screenedOn', { required: false })}
              />
            </div>
            <div className="flex flex-col">
              <label className="block w-full h-9 font-medium">
                Interviewd On
              </label>
              <input
                className="w-full h-9 p-2 border border-solid border-gray-200"
                type="date"
                {...register('interviewOn', { required: false })}
              />
            </div>
            <div className="flex flex-col">
              <label className="block w-full h-9 font-medium">Eliminated</label>
              <select
                className="w-full h-9 p-2 border border-solid border-gray-200"
                {...register('eliminated', { required: true })}
              >
                <option value="true">Yes</option>
                <option value="false" selected>
                  No
                </option>
              </select>
            </div>
            <input
              className="flex items-center px-6 py-3 text-sm font-medium text-day bg-purple-500 rounded-full"
              value="Add Job"
              type="submit"
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default AddJobForm
