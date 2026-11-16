import type { Metadata } from 'next'
import './globals.css'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.exologik.live'),
  title: 'Exologik — Ritual DJ & Multi-instrumentalist',
  description:
    'Ritual DJ & Multi-instrumentalist | Sonic Dance Ceremony | Music Production | Tai Chi Arts. Conscious global bass and downtempo with live handpan, flute, charango and voice — from Flagstaff, AZ.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Exologik',
    title: 'Exologik — Ritual DJ & Multi-instrumentalist',
    description: 'Sonic Dance Ceremony · Music Production · Tai Chi Arts',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Exologik gold logo beside the sunset over Sedona, with Exologik playing charango on a red rock ledge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exologik — Ritual DJ & Multi-instrumentalist',
    description: 'Sonic Dance Ceremony · Music Production · Tai Chi Arts',
    images: ['/og-image.jpg'],
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
