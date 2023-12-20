/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	experimental: {
		appDir: true
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: '@svgr/webpack'
				}
			]
		})
		return config
	},
	images: {
		disableStaticImages: true, // importした画像の型定義設定を無効にする
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.microcms-assets.io',
				port: '',
				pathname: '/assets/*/*/*'
			}
		]
	}
}

module.exports = nextConfig
