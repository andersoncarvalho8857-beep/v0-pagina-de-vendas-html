import type { Metadata } from 'next'
import { Permanent_Marker, Caveat, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const permanentMarker = Permanent_Marker({ 
  weight: "400",
  subsets: ["latin"],
  variable: '--font-marker'
});

const caveat = Caveat({ 
  subsets: ["latin"],
  variable: '--font-hand'
});

export const metadata: Metadata = {
  title: 'MoldCraft - Crie mundos de papel em 3D',
  description: 'Monte Bonecos Incríveis de Papel em 3D. Com apenas tesoura e cola, esse é o hobby ideal para relaxar e impressionar mesmo sem ter experiência.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${permanentMarker.variable} ${caveat.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
