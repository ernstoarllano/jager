import { FormProps } from '@/types/forms'

import { cn } from '@/utils/styles'

const Form = ({ className, onSubmit, children }: FormProps) => {
  return (
    <form
      className={cn('w-full text-gray-900 space-y-1', className)}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  )
}

export { Form }
