import Iframe from 'react-iframe'
import { useState } from 'react'
import './iframe.css'
const IframeInPlaycanvas = () => {
	const [isLoaded, setIsLoaded] = useState(false)
	const handleOnLoad = () => {
		setIsLoaded(true)
	}
	return (
		<>
			{!isLoaded && <div className='frameLoad'>読み込み中...</div>}
			<Iframe
				url='https://playcanv.as/b/bc103796'
				className='iframeCanvasTreeD'
				display='initial'
				position='relative'
				allowFullScreen
				onLoad={handleOnLoad}
			/>
		</>
	)
}

export default IframeInPlaycanvas
