import Link from 'next/link'

import { cn } from '@/utils/styles'

const Button = ({ className, href, ...props }: any) => {
  if (href) {
    return <Link href={href} {...props} />
  }

  return (
    <button
      className={cn('px-4 py-2 text-white bg-black rounded', className)}
      {...props}
    />
  )
}

export { Button }
