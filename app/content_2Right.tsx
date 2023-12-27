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

	const [originalContent, setOriginalContent] = useState<string[] | any[]>([])
	const [originalImages, setOriginalImage] = useState<string[] | any[]>([])
	const [originalCategorys, setOriginalCategory] = useState<string[] | any[]>([])
	const [originalIds, setOriginalId] = useState<string[] | any[]>([])
	const [originalDiscribe, setOriginalDiscribe] = useState<string[] | any[]>([])
	const [originalTitle, setOriginalTitle] = useState<string[] | any[]>([])

	let ViewNumber = 2
	useEffect(() => {
		axios.get(`${window.location.href}/api/route`).then((res: AxiosResponse<any[]>) => {
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

			setOriginalContent(contentsAf)
			setOriginalImage(ImagesAf)
			setOriginalCategory(categoryAf)
			setOriginalId(IdAf)
			setOriginalDiscribe(discribeAf)
			setOriginalTitle(titleAf)
		})
	}, [])
	return (
		<>
			<div id='twoSliderParent'>
				<div className='twoSliderTitle'>私が作ったツールやサービス</div>
				<div id='twoCards'>
					{Content.slice(0, ViewNumber).map((element, index) => {
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
					<div className='pagination'>
						<button
							onClick={() => {
								const newContent = [
									...Content.slice(Content.length - ViewNumber, Content.length),
									...Content.slice(0, Content.length - ViewNumber)
								]
								const newImages = [
									...Images.slice(Images.length - ViewNumber, Images.length),
									...Images.slice(0, Images.length - ViewNumber)
								]
								const newCategorys = [
									...Categorys.slice(Categorys.length - ViewNumber, Categorys.length),
									...Categorys.slice(0, Categorys.length - ViewNumber)
								]
								const newIds = [...Ids.slice(Ids.length - ViewNumber, Ids.length), ...Ids.slice(0, Ids.length - ViewNumber)]
								const newDiscribe = [
									...discribe.slice(discribe.length - ViewNumber, discribe.length),
									...discribe.slice(0, discribe.length - ViewNumber)
								]
								const newTitle = [
									...title.slice(title.length - ViewNumber, title.length),
									...title.slice(0, title.length - ViewNumber)
								]

								setContent(newContent)
								setImage(newImages)
								setcategory(newCategorys)
								setid(newIds)
								setdiscribe(newDiscribe)
								setTitle(newTitle)
							}}>
							前へ
						</button>
						<div>
							{Array.from({ length: Math.ceil(Content.length / ViewNumber) }, (_, i) => i + 1).map((pageNum) => (
								<button
									onClick={() => {
										let originalContentDupe = [...originalContent]
										let originalImagesDupe = [...originalImages]
										let originalCategorysDupe = [...originalCategorys]
										let originalIdsDupe = [...originalIds]
										let originalDiscribeDupe = [...originalDiscribe]
										let originalTitleDupe = [...originalTitle]
										const start = (pageNum - 1) * ViewNumber
										const end = (pageNum - 1) * ViewNumber + ViewNumber
										const newContent = [
											...originalContentDupe.slice(start, end),
											...originalContentDupe.slice(end),
											...originalContentDupe.slice(0, start)
										]
										const newImages = [
											...originalImagesDupe.slice(start, end),
											...originalImagesDupe.slice(end),
											...originalImagesDupe.slice(0, start)
										]
										const newCategorys = [
											...originalCategorysDupe.slice(start, end),
											...originalCategorysDupe.slice(end),
											...originalCategorysDupe.slice(0, start)
										]
										const newIds = [
											...originalIdsDupe.slice(start, end),
											...originalIdsDupe.slice(end),
											...originalIdsDupe.slice(0, start)
										]
										const newDiscribe = [
											...originalDiscribeDupe.slice(start, end),
											...originalDiscribeDupe.slice(end),
											...originalDiscribeDupe.slice(0, start)
										]
										const newTitle = [
											...originalTitleDupe.slice(start, end),
											...originalTitleDupe.slice(end),
											...originalTitleDupe.slice(0, start)
										]

										setContent(newContent)
										setImage(newImages)
										setcategory(newCategorys)
										setid(newIds)
										setdiscribe(newDiscribe)
										setTitle(newTitle)
									}}>
									{pageNum}
								</button>
							))}
						</div>
						<button
							onClick={() => {
								const newContent = [...Content.slice(ViewNumber), ...Content.slice(0, ViewNumber)]
								const newImages = [...Images.slice(ViewNumber), ...Images.slice(0, ViewNumber)]
								const newCategorys = [...Categorys.slice(ViewNumber), ...Categorys.slice(0, ViewNumber)]
								const newIds = [...Ids.slice(ViewNumber), ...Ids.slice(0, ViewNumber)]
								const newDiscribe = [...discribe.slice(ViewNumber), ...discribe.slice(0, ViewNumber)]
								const newTitle = [...title.slice(ViewNumber), ...title.slice(0, ViewNumber)]

								setContent(newContent)
								setImage(newImages)
								setcategory(newCategorys)
								setid(newIds)
								setdiscribe(newDiscribe)
								setTitle(newTitle)
							}}>
							次へ
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default SliderContentWcontent_2_right
