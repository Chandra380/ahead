import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ahead',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Noto+Sans:wght@700&family=Poppins:wght@500&family=Rubik&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <Navbar/>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
