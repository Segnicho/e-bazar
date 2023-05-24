import Layout from '@/components/Layout'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'e-Bazar',
  description: 'E-commerce app built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout >
        {children}
        </Layout>
        </body>
    </html>
  )
}
