import Link from 'next/link'
import { getList } from '../../libs/microcms'
import { Metadata } from 'next'
import SeoComponent from '../../libs/metadata'
import Image from 'next/image'

export const revalidate = 5

export default async function StaticPage() {
	const { contents } = await getList()

	if (!contents || contents.length === 0) {
		return <h1>No contents</h1>
	}

	return (
		<div id='blogParent'>
			<ul>
				{contents.map((post) => {
					return (
						<li key={post.id}>
							<Image src={post.eyecatch !== undefined ? post.eyecatch.url : '/logoPacks/css-3.svg'} alt='ブログアイキャッチ画像' width={150} height={150} />
							<Link href={`/blog/${post.id}`}>{post.title}</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
