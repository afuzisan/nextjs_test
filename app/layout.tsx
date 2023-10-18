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
      {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script> */}
      <body>
        {/* <header> */}
        {/* <h1 id="logo"><Link href="/">ポートフォリオサイト</Link></h1>
        <nav><ul><HeaderMenu /></ul></nav> */}
        {/* </header> */}
        {children}
        {/* <footer>
        <p>&copy; 2023 山田太郎 All rights reserved.</p>
      </footer> */}
      </body>
    </html>

  )
}
