import { FormProps } from '@/types/forms'

const Form = ({ onSubmit, children }: FormProps) => {
  return (
    <div className="min-w-[375px]">
      <form
        className="w-full text-black bg-white border border-slate-300 rounded-lg overflow-hidden space-y-1"
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </div>
  )
}

export { Form }
