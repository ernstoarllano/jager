'use client'

import {
  BarChartIcon,
  Crosshair2Icon,
  ExitIcon,
  GearIcon,
  LayersIcon,
} from '@radix-ui/react-icons'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

import { NavProps } from '@/types/nav'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export default function Nav({ user }: NavProps) {
  return (
    <>
      <header className="mb-8">
        <Link href="/">
          <h1 className="flex flex-row items-center text-3xl font-bigShouldersDisplay font-black uppercase space-x-2">
            <div className="p-1 bg-white rounded-lg">
              <Crosshair2Icon className="w-5 h-5 text-gray-900" />
            </div>
            <span className="inline-block">Jäger</span>
          </h1>
        </Link>
      </header>
      <ul className="mb-8 font-medium space-y-1">
        <li>
          <Link
            className="flex flex-row items-center px-4 py-2 bg-gray-700 rounded-md space-x-2"
            href="/"
          >
            <BarChartIcon className="w-5 h-5 text-gray-300" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex flex-row items-center px-4 py-2 bg-transparent rounded-md space-x-2"
            href="/jobs"
          >
            <LayersIcon className="w-5 h-5 text-gray-300" />
            <span>Jobs</span>
          </Link>
        </li>
      </ul>
      <ul className="font-medium space-y-1">
        <li>
          <Link
            className="flex flex-row items-center px-4 py-2 bg-transparent rounded-md space-x-2"
            href="/settings"
          >
            <GearIcon className="w-5 h-5 text-gray-300" />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
      <footer className="flex flex-row items-center justify-between w-full mt-auto pt-6 border-t border-gray-600">
        <div className="flex flex-row items-center space-x-3">
          <Avatar
            className="w-10 h-10 rounded-full object-cover"
            alt={user.name as string}
            src="/avatar.png"
          />
          <div className="flex flex-col text-sm">
            <span className="font-semibold text-white">{user.name}</span>
            <span>{user.email}</span>
          </div>
        </div>
        <Button
          className="w-auto p-0 text-gray-400 bg-transparent rounded-none"
          onClick={signOut}
        >
          <ExitIcon className="w-5 h-5" />
        </Button>
      </footer>
    </>
  )
}
