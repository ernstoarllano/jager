import Link from 'next/link'

import { cn } from '@/utils/styles'

const Button = ({ className, href, disabled, ...props }: any) => {
  if (href) {
    return <Link href={href} {...props} />
  }

  return (
    <button
      className={cn('px-4 py-2 text-white bg-gray-900 rounded', className)}
      disabled={disabled}
      {...props}
    />
  )
}

export { Button }
