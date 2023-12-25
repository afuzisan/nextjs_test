'use client'
import React, { useEffect } from 'react'
import Script from 'next/script'

const CodeStyle = () => {
	function codePrettify() {
		const preElement = document.querySelector('pre')
		if (preElement) {
			preElement.classList.add('prettyprint')
		}
	}
	useEffect(() => {
		codePrettify()
	}, [])
	return (
		<>
			<Script src='https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js' />
		</>
	)
}

export default CodeStyle
