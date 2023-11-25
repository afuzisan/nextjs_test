import './globals.css'


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
        <div className="stalker">aaaa</div>
        {children}
      </body>
    </html>

  )
}
