import './globals.css'

export const metadata = {
	title: '岡田明也ポートフォリオ',
	description: '岡田明也のポートフォリオをまとめたサイトです。',
	keywords: 'ポートフォリオ, 岡田明也',
	icons: [{ rel: 'icon', url: '/favicon/favicon.ico' }],
	ogTags: {
		ogTitle: '岡田明也ポートフォリオ',
		ogDescription: '岡田明也のポートフォリオをまとめたサイトです。',
		// ogImage: 'OG Image URL',

		ogUrl: 'https://nextjs-test-sigma-ebon.vercel.app/'
	},
	robots: 'noindex, nofollow'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ja'>
			<body>
				<div className='stalker'></div>
				{children}
			</body>
		</html>
	)
}
