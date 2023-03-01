'use client'

import * as PopoverPrimitive from '@radix-ui/react-popover'
import { forwardRef } from 'react'

import { cn } from '@/utils/styles'

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, children, align = 'center', ...props }, ref) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        className={cn(
          'flex flex-col w-full min-w-[220px] max-w-fit p-3 text-black bg-white rounded-md shadow-md',
          className
        )}
        align={align}
        ref={ref}
        {...props}
      >
        {children}
        <PopoverPrimitive.Arrow className="fill-white" />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
})
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
