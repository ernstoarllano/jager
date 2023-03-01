import { Inter } from 'next/font/google'

import { GenericLayoutProps } from '@/types/layouts'

import { cn } from '@/utils/styles'

import '@/styles/global.css'

export const metadata = {
  title: 'Jaëger',
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export default function RootLayout({ children }: GenericLayoutProps) {
  return (
    <html lang="en">
      <body className={cn('font-inter bg-black', inter.variable)}>
        {children}
      </body>
    </html>
  )
}
