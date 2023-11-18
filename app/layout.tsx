import './ui/globals.css'
import type { Metadata } from 'next'
import { signika } from './ui/fonts'
import Navbar from './ui/navbar'

export const metadata: Metadata = {
  title: 'Piettra Sol Studio',
  description: 'Criado por Beinus+ Clean Design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${signika.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
