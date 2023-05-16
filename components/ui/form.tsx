import { FormProps } from '@/types/forms'

const Form = ({ onSubmit, children }: FormProps) => {
  return (
    <form
      className="w-full text-gray-900 bg-white shadow-lg rounded-lg overflow-hidden space-y-1"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  )
}

export { Form }
