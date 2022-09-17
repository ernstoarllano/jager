import { yupResolver } from '@hookform/resolvers/yup'
import Alert from 'components/Alert'
import Spinner from 'components/Spinner'
import { RoleFields } from 'interfaces/interfaces'
import { SubmitHandler, useForm } from 'react-hook-form'
import { newRole } from 'schema/role'

const AddRole = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<RoleFields>({
    resolver: yupResolver(newRole),
  })

  const onSubmit: SubmitHandler<RoleFields> = async (data) => {
    try {
      const save = await fetch('/api/role/add', {
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
          <h2 className="mb-2">Role</h2>
          <p className="text-sm">
            Enter as much information as you can about the role.
          </p>
        </div>
        <div className="lg:col-span-8 space-y-6">
          {isSubmitSuccessful && (
            <Alert message="Role, was added successfully." type="success" />
          )}
          <form
            className="lg:p-6 lg:bg-white lg:shadow lg:rounded-md"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="inline-block text-sm font-medium text-gray-600">
                  Role
                </label>
                <input
                  className="w-full h-9 p-2 text-sm border border-solid border-gray-300 rounded-md"
                  type="text"
                  {...register('name', { required: true })}
                />
                {errors.name && (
                  <p className="text-sm text-red-800">
                    Please enter the role name.
                  </p>
                )}
              </div>
              <button
                className="flex items-center px-6 py-3 text-sm font-medium text-day bg-purple-500 rounded-full cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting ? <Spinner /> : 'Add Role'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddRole
