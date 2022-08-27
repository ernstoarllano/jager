import { yupResolver } from '@hookform/resolvers/yup'
import { CompanyFields } from 'interfaces/interfaces'
import { SubmitHandler, useForm } from 'react-hook-form'
import { newCompany } from 'schema/company'

const AddCompany = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<CompanyFields>({
    resolver: yupResolver(newCompany),
  })

  const onSubmit: SubmitHandler<CompanyFields> = async (data) => {
    try {
      const save = await fetch('/api/company', {
        method: 'POST',
        body: JSON.stringify(data),
      })

      return await save.json()
    } catch (err) {
      throw err
    }
  }

  return (
    <section className="p-10 space-y-12">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <h2 className="mb-2">Company</h2>
          <p className="text-sm">
            Enter as much information as you can about the company.
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
                    Company, was added successfully.
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
                  Name
                </label>
                <input
                  className="w-full h-9 p-2 text-sm border border-solid border-gray-300 rounded-md"
                  type="text"
                  {...register('name', { required: true })}
                />
                {errors.name && (
                  <p className="text-sm text-red-400">
                    Please enter the company name.
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <label className="inline-block text-sm font-medium text-gray-600">
                  Website
                </label>
                <input
                  className="w-full h-9 p-2 text-sm border border-solid border-gray-300 rounded-md"
                  type="text"
                  {...register('website')}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="inline-block text-sm font-medium text-gray-600">
                  Logo
                </label>
                <input
                  className="w-full h-9 p-2 text-sm border border-solid border-gray-300 rounded-md"
                  type="file"
                  {...register('logo')}
                />
              </div>
              <button
                className="flex items-center px-6 py-3 text-sm font-medium text-day bg-purple-500 rounded-full cursor-pointer"
                disabled={isSubmitting}
              >
                Add Company
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddCompany
