import './globals.css'
import { Inter } from 'next/font/google'
import { Nunito_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito_sans'
})

export const metadata = {
  title: 'Budget',
  description: 'A simple budgeting app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${nunito_sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
