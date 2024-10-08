import Image from 'next/image'
import './content_1Right.css'
import { useEffect } from 'react'
import { items } from './content_1Right_data'
import HeaderLink from '../components/app/HeaderLink'
import localStorageOrigin from '../libs/localStorage'
declare global {
	interface Document {
		startViewTransition(callback: () => void): void
	}
}
const Content_1Right = () => {
	const detailContentsStyle: React.CSSProperties = {
		position: 'absolute',
		top: '30%',
		left: 0,
		color: 'white',
		background: 'rgba(0, 0, 0, 0.5)',
		padding: '50px',
		width: '100%',
		lineHeight: '1.6',
		fontSize: 'clamp(1rem, 0.606rem + 0.79vw, 3.125rem)'
	}
	const iTitleStyle: React.CSSProperties = {
		position: 'absolute',
		top: '0',
		left: 0,
		color: 'white',
		background: 'rgba(0, 0, 0, 0.5)',
		padding: '10px',
		width: '150px',
		textAlign: 'center',
		fontSize: 'clamp(1rem, -0.275rem + 1.06vw, 3.125rem)'
	}

	function detailsView() {
		const firstNone = document.querySelectorAll('.firstNone')
		firstNone.forEach((element) => {
			if (element instanceof HTMLElement) {
				element.style.display = 'none'
			}
		})
		const gridChildren = document.querySelectorAll('.gridChildren')
		gridChildren.forEach((element) => {
			element?.addEventListener('click', (e) => {
				const targetElement = e.target as HTMLElement
				// document.startViewTransition(() => {
				let elementName = element.className.split(' ')
				const viewIndex = document.querySelector(`.${elementName[0]}-details`)
				const right = document.querySelector('.right') as HTMLElement
				const rightIconGrid = document.querySelector('.rightIconGrid') as HTMLElement
				rightIconGrid ? ((rightIconGrid.style.padding = '0px'), (rightIconGrid.style.margin = '0 auto')) : null
				right ? (right.style.backgroundColor = '#131212') : null
				gridChildren.forEach((element: any) => {
					let htmlElement = element as HTMLElement
					htmlElement ? (htmlElement.style.display = 'none') : null
				})
				if (viewIndex) {
					const elementNameChildren = document.querySelector(`.${elementName[0]}-detailsChildren`)
					;(viewIndex as HTMLElement).style.display = 'block'
					;(elementNameChildren as HTMLElement).style.display = 'block'
				}
				// })
			})
		})
	}

	function detailsNone() {
		const firstNone = document.querySelectorAll('.firstNone')
		const gridChildren = document.querySelectorAll('.gridChildren')

		firstNone.forEach((element) => {
			element.addEventListener('click', (e) => {
				const rightIconGrid = document.querySelector('.rightIconGrid') as HTMLElement
				const right = document.querySelector('.right') as HTMLElement
				rightIconGrid ? ((rightIconGrid.style.padding = '40px 40px 40px 40px'), (rightIconGrid.style.marginBottom = '70px')) : null
				right ? (right.style.backgroundColor = '#fff') : null
				// document.startViewTransition(() => {
				firstNone.forEach((element) => {
					;(element as HTMLElement).style.display = 'none'
				})
				gridChildren.forEach((element) => {
					;(element as HTMLElement).style.display = 'block'
				})

				setLocalStorage(10)

				// })
			})
		})
	}
	function setLocalStorage(time: number) {
		setTimeout(() => {
			let right = document.querySelector('.right')
			const localStorageGet = localStorageOrigin('getItem')
			if (right && localStorageGet?.overFlowScroll) {
				right.scrollTop = localStorageGet?.overFlowScroll
			}
		}, time)
	}

	function addScrollEventListener() {
		const rightIconGrid = document.querySelector('.rightIconGrid')
		let right = document.querySelector('.right')
		right?.addEventListener('scroll', function (e) {
			if (rightIconGrid && rightIconGrid.firstElementChild && window.getComputedStyle(rightIconGrid.firstElementChild).display === 'block') {
				localStorageOrigin('setItem', { overFlowScrollNumber: right?.scrollTop })
			}
		})
	}
	useEffect(() => {
		addScrollEventListener()
		setLocalStorage(10)
		detailsView()
		detailsNone()
	}, [])

	return (
		<>
			<span className='displayView'>
				<HeaderLink page='page' />
			</span>
			<div className='right'>
				<div className='rightIconGrid'>
					{items.map((item, index) => (
						<div key={index} className={`${item.name} gridChildren`}>
							<p className='p'>{item.title}</p>
							<Image className={`${item.name}Image`} src={item.image} alt='Image' width={100} height={100} objectFit='cover' objectPosition='top right' />
						</div>
					))}
				</div>
				{items.map((item) => {
					const imageStyle: React.CSSProperties = {
						backgroundImage: `url("${item.imagePath}")`,
						width: '100%',
						height: '100vh',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						position: 'relative',
						filter: 'brightness(50%)',
						opacity: '0.5'
					}

					return (
						<>
							<div className={`${item.name}-details firstNone`} key={item.name}>
								<div className={`${item.name}-detailsChildren`}>
									<div className={`${item.name}Image`} style={imageStyle}></div>
								</div>
								<p className='i-title' style={iTitleStyle}>
									{item.name.toUpperCase()}
								</p>
								<div className='TransitionContent' style={detailContentsStyle}>
									{Array.isArray(item.text) &&
										item.text.map((desc, descIndex) => {
											return (
												<p key={descIndex} className='i-desc'>
													{desc}
												</p>
											)
										})}
								</div>
							</div>
						</>
					)
				})}
			</div>
		</>
	)
}

export default Content_1Right
