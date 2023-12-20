import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import './content_2Right.css'

const SliderContentWcontent_2_right = () => {
	const [Content, setContent] = useState<string[]>([])
	const [Images, setImage] = useState<string[] | any[]>([])
	const [Categorys, setcategory] = useState<string[] | any[]>([])
	const [Ids, setid] = useState<string[] | any[]>([])
	const [discribe, setdiscribe] = useState<string[] | any[]>([])
	const [title, setTitle] = useState<string[] | any[]>([])
	useEffect(() => {
		// const hostname = window.location.hostname === 'localhost' ? 'http://localhost:3000' : 'https://nextjs-test-afuzisan.vercel.app';
		axios.get(`${window.location.href}/api/route`).then((res: AxiosResponse<any[]>) => {
			console.log(res)
			const contentsAf = res.data.map(
				(element: {
					content: string
					eyecatch: string
					category: { name: string }
					id: string
					discribe: string
					title: string
				}) => element.content
			)
			const ImagesAf = res.data.map(
				(element: {
					content: string
					eyecatch: string
					category: { name: string }
					id: string
					discribe: string
					title: string
				}) => element.eyecatch
			)
			const categoryAf = res.data.map(
				(element: {
					content: string
					eyecatch: string
					category: { name: string }
					id: string
					discribe: string
					title: string
				}) => element.category.name
			)
			const IdAf = res.data.map(
				(element: {
					content: string
					eyecatch: string
					category: { name: string }
					id: string
					discribe: string
					title: string
				}) => element.id
			)
			const discribeAf = res.data.map(
				(element: {
					content: string
					eyecatch: string
					category: { name: string }
					id: string
					discribe: string
					title: string
				}) => element.discribe
			)
			const titleAf = res.data.map(
				(element: {
					content: string
					eyecatch: string
					category: { name: string }
					id: string
					discribe: string
					title: string
				}) => element.title
			)
			setContent(contentsAf)
			setImage(ImagesAf)
			setcategory(categoryAf)
			setid(IdAf)
			setdiscribe(discribeAf)
			setTitle(titleAf)
		})
	}, [])
	// console.log(Content, Images, Categorys)
	return (
		<>
			<div id='twoSliderParent'>
				<div className='twoSliderTitle'>私が作ったツールやサービス</div>
				<div id='twoCards'>
					{Content.map((element, index) => {
						// console.log(element, index, Categorys[index])
						return Categorys[index] === '作品集' ? (
							<div className='twoCard' key={index}>
								<Link href={`/blog/${Ids[index]}`}>
									<div className='twoCardTitle'>{title[index]}</div>
								</Link>
								<Link href={`/blog/${Ids[index]}`}>
									<div className='imageEl'>
										<Image
											src={Images[index] !== undefined ? Images[index].url : '/logoPacks/typescript.svg'}
											alt='Image'
											width={300}
											height={200}
											objectFit='cover'
											objectPosition='top right'
										/>
									</div>
								</Link>
								<Link href={`/blog/${Ids[index]}`}>
									<div className='discribeEl'>{discribe[index]}</div>
								</Link>
							</div>
						) : null
					})}
				</div>
			</div>
		</>
	)
}

export default SliderContentWcontent_2_right
