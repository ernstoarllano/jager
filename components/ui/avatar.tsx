import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { forwardRef } from 'react'

const Avatar = forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => {
  return (
    <AvatarPrimitive.Root>
      <AvatarPrimitive.Image className={className} ref={ref} {...props} />
    </AvatarPrimitive.Root>
  )
})
Avatar.displayName = AvatarPrimitive.Root.displayName

export { Avatar }
