import type { Metadata, Viewport } from 'next'
import { Figtree, Fraunces } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-fraunces',
  display: 'swap',
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-figtree',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mindful Moments – Yoga, Slo Flo, Breathwork & Coaching',
  description:
    'Yoga, Slo Flo, breathing exercises, online classes, monthly membership and coaching for stress management, resilience and self understanding.',
}

export const viewport: Viewport = {
  themeColor: '#EDF2F0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  )
}
