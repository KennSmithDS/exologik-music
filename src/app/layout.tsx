import type { Metadata } from 'next'
import './globals.css'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Exologik — Ritual DJ & Multi-instrumentalist',
  description:
    'Ritual DJ & Multi-instrumentalist | Sonic Dance Ceremony | Music Production | Tai Chi Arts. Conscious global bass, organic tribal house, and downtempo from Flagstaff, AZ.',
  openGraph: {
    title: 'Exologik',
    description: 'Ritual DJ & Multi-instrumentalist | Sonic Dance Ceremony',
    images: ['/brand/embossed-logo.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
