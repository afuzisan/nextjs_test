import './globals.css'
import HeaderMenu from './headerMenu'
import Link from 'next/link'

export const metadata = {
  title: 'test',
  description: 'testttt',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="ja">
      <body>
        {children}
      </body>
    </html>

  )
}
