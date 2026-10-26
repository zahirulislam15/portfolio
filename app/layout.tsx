import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mohammad Zahirul Islam — Full Stack Software Engineer',
  description:
    'Portfolio of Mohammad Zahirul Islam, a full stack software engineer building thoughtful web applications and digital products.',
  openGraph: {
    title: 'Mohammad Zahirul Islam — Full Stack Software Engineer',
    description: 'Building thoughtful software for the work that matters.',
    type: 'website',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
