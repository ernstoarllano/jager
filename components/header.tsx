import { signOut } from 'next-auth/react'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3">
      <div>
        <Popover>
          <PopoverTrigger>
            <Avatar
              className="w-14 h-14 mr-1 rounded-full object-cover"
              alt="Ernesto Arellano"
              src="/avatar.png"
            />
          </PopoverTrigger>
          <PopoverContent>
            <Button onClick={signOut}>Sign Out</Button>
          </PopoverContent>
        </Popover>
      </div>
      <div className="justify-end">Test</div>
    </header>
  )
}
