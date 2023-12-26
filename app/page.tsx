'use client'
import { MouseWheel } from '../libs/mouseWheel'
import { setup, draw } from '../libs/p5'
import dynamic from 'next/dynamic'
import LoadingEl from './loadingEl'
import { useEffect } from 'react'
import './toolTips.css'
import mousemove from '../libs/mouseMove'
import './Content_2Left.css'
import HeaderLink from '../components/app/HeaderLink'
import SwipeComponent from '../libs/tap'
import SwipeGuide from './swipeGuide'
import IframeInPlaycanvas from './iframe'

const Home = () => {
	const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
		ssr: false
	})

	MouseWheel()

	useEffect(() => {
		mousemove()
	}, [mousemove])

	useEffect(() => {
		SwipeComponent()
		mousemove()
	}, [])

	return (
		<>
			<main>
				<div className='landscape'>縦画面で見てください。</div>
				<div id='mainCover'>
					<HeaderLink page='page' />
					<SwipeGuide />
				</div>
				<div id='mainTOP'>
					<IframeInPlaycanvas />
				</div>
			</main>
		</>
	)
}

export default Home
