import { yupResolver } from '@hookform/resolvers/yup'
import { Company, Role } from '@prisma/client'
import Alert from 'components/Alert'
import FormButton from 'components/forms/FormButton'
import FormWrapper from 'components/forms/FormWrapper'
import { AddJobFields } from 'interfaces/interfaces'
import { SubmitHandler, useForm } from 'react-hook-form'
import { newJob } from 'schema/job'

const AddJob = ({ roles, companies }: any) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<AddJobFields>({
    resolver: yupResolver(newJob),
  })

  const onSubmit: SubmitHandler<AddJobFields> = async (data) => {
    try {
      const save = await fetch('/api/job/add', {
        method: 'POST',
        body: JSON.stringify(data),
      })

      reset()

      return await save.json()
    } catch (err) {
      throw err
    }
  }

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
            <Alert message="Job, was added successfully." type="success" />
          )}
          <FormWrapper callBack={handleSubmit(onSubmit)}>
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
                  <p className="text-sm text-red-800">
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
                  {roles &&
                    roles.length > 0 &&
                    roles.map((role: Role) => (
                      <option key={role.id} value={role.id}>
                        {role.name}
                      </option>
                    ))}
                </select>
                <span className="block text-xs font-light text-gray-500">
                  {`If role isn't listed add a new role below`}
                </span>
                {errors.roleId && (
                  <p className="text-sm text-red-800">
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
                  {companies &&
                    companies.length > 0 &&
                    companies.map((company: Company) => (
                      <option key={company.id} value={company.id}>
                        {company.name}
                      </option>
                    ))}
                </select>
                <span className="block text-xs font-light text-gray-500">
                  {`If company isn't listed add a new company below`}
                </span>
                {errors.companyId && (
                  <p className="text-sm text-red-800">
                    Please enter the company for the job.
                  </p>
                )}
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
                  <p className="text-sm text-red-800">
                    Please enter the salary for the job.
                  </p>
                )}
              </div>
              <FormButton isSubmitting={isSubmitting} text="Add Job" />
            </div>
          </FormWrapper>
        </div>
      </div>
    </section>
  )
}

export default AddJob
