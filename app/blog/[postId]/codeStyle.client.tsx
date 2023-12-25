'use client'
import React, { useEffect } from 'react'

const CodeStyle = () => {
	function codePrettify() {}
	useEffect(() => {
		codePrettify()
	}, [])
	return (
		<>
			<div>codeStyle</div>
			<script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>
		</>
	)
}

export default CodeStyle
