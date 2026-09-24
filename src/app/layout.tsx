import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',       // ⚠️ renommé
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains',   // ⚠️ renommé
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RAZAFIARINOSY Lala Arthur — Freelance Fullstack Next.js',
  description:
    "Freelance fullstack Next.js. Je conçois et livre des produits web de bout en bout — administration publique, industrie, scale-ups.",
  metadataBase: new URL('https://arthur.dev'),
  openGraph: {
    title: 'RAZAFIARINOSY Lala Arthur — Freelance Fullstack Next.js',
    description:
      'Plateformes fullstack livrées en autonomie : Next.js, NestJS, Firebase, on-premise ou cloud.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAZAFIARINOSY Lala Arthur — Freelance Fullstack Next.js',
    description:
      'Plateformes fullstack livrées en autonomie : Next.js, NestJS, Firebase.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}