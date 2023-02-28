import { GenericLayoutProps } from '@/types/layouts'

import '@/styles/global.css'

export const metadata = {
  title: 'Jaëger',
}

export default function RootLayout({ children }: GenericLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
