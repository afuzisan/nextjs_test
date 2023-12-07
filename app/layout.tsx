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
      <head>
        <meta name="view-transition" content="same-origin" />
      </head>
      <body>
        <div className="stalker"></div>
        {children}
      </body>
    </html>

  )
}
