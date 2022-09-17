import { yupResolver } from '@hookform/resolvers/yup'
import Alert from 'components/Alert'
import FormButton from 'components/forms/FormButton'
import FormWrapper from 'components/forms/FormWrapper'
import { EditJobFields } from 'interfaces/interfaces'
import { SubmitHandler, useForm } from 'react-hook-form'
import { editJob } from 'schema/job'
import { useSWRConfig } from 'swr'
import { formatDateSplit } from 'utils/formatDateSplit'

const EditJob = ({ data }: any) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<EditJobFields>({
    defaultValues: {
      appliedOn: null || formatDateSplit(data.appliedOn),
      salary: null || data.salary,
      screenedOn: null || formatDateSplit(data.screenedOn),
      interviewedOn: null || formatDateSplit(data.interviewedOn),
      eliminatedOn: null || formatDateSplit(data.eliminatedOn),
      hiredOn: null || formatDateSplit(data.hiredOn),
    },
    resolver: yupResolver(editJob),
  })

  const { mutate } = useSWRConfig()

  const onSubmit: SubmitHandler<EditJobFields> = async (newData) => {
    try {
      const save = await fetch(`/api/job/edit/${data.id}`, {
        method: 'POST',
        body: JSON.stringify(newData),
      })

      mutate(`/api/job/${data.id}`)

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
            <Alert message="Job updated successfully" type="success" />
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
                  Interviewed On
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
              <div className="flex flex-col space-y-2">
                <label className="inline-block text-sm font-medium text-gray-600">
                  Hired On
                </label>
                <input
                  className="w-full h-9 p-2 text-sm border border-solid border-gray-300 rounded-md"
                  type="date"
                  {...register('hiredOn')}
                />
              </div>
              <FormButton isSubmitting={isSubmitting} text="Edit Job" />
            </div>
          </FormWrapper>
        </div>
      </div>
    </section>
  )
}

export default EditJob
