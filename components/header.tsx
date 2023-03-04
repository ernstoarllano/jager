'use client'

import { ArchiveIcon, GearIcon } from '@radix-ui/react-icons'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

import { HeaderProps } from '@/types/header'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function Header({ user }: HeaderProps) {
  return (
    <header className="flex items-center justify-end px-6 py-3">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar
            className="w-10 h-10 rounded-full object-cover"
            alt={user.name as string}
            src="/avatar.png"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64">
          <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link className="flex items-center space-x-1" href="/jobs">
              <ArchiveIcon className="w-4 h-4" />
              <span>My Jobs</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="flex items-center space-x-1" href="/settings">
              <GearIcon className="w-4 h-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button className="w-full" onClick={signOut}>
              Log Out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
