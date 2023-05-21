import { Big_Shoulders_Display, Inter } from 'next/font/google'

import { GenericLayoutProps } from '@/types/layouts'

import Toaster from '@/components/toaster'

import { cn } from '@/utils/styles'

import '@/styles/global.css'

export const metadata = {
  title: 'Jäger',
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

const bigShouldersDisplay = Big_Shoulders_Display({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-big-shoulders-display',
})

export default function RootLayout({ children }: GenericLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          'font-inter bg-gray-900',
          inter.variable,
          bigShouldersDisplay.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
