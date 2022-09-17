import Spinner from 'components/Spinner'

const FormButton = ({ isSubmitting, text }: any) => {
  return (
    <button
      className="flex items-center px-6 py-3 text-sm font-medium text-day bg-purple-500 rounded-full cursor-pointer"
      disabled={isSubmitting}
    >
      {isSubmitting ? <Spinner /> : text}
    </button>
  )
}

export default FormButton
