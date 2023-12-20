import { useRouter } from 'next/router'

export default function Custom404() {
	const router = useRouter()

	return (
		<div>
			<h1>404 - ページが見つかりません</h1>
			<button onClick={() => router.back()}>戻る</button>
		</div>
	)
}
