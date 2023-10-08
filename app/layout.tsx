import './globals.css'
// next/linkをインポートする
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="ja">
      <body>
    <header>
    <h1>ポートフォリオサイト</h1>
    <nav>
    <Link href="/about">
    自己紹介
  </Link>
  <Link href="/works">
    作品集
  </Link>
  <Link href="/contact">
    お問い合わせ
  </Link>
    </nav>
  </header>
  

      {children}

      <footer>
    <p>&copy; 2023 山田太郎 All rights reserved.</p>
  </footer>
  </body>
    </html>

  )
}
