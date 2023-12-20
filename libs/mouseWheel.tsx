import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './mouseWheel.css'
import { WContent_1_right, WContent_1_left, WContent_2_right, WContent_2_left } from '../app/sliderMainContent'
let wheelFlag = 1
let deltaTotal: number = 0
const MouseWheel = () => {
	let scrollDirection = true
	let deltaTotalBefore = 0
	let beforeScrollDirection = true
	let first_flag = false

	useEffect(() => {
		initSlider()
		wheelMapCreate()
		window.addEventListener('wheel', updateScroll, { passive: false })
		function updateScroll(e: any) {
			e.preventDefault()
			if (deltaTotal <= 600 || deltaTotal >= -600) {
				deltaTotalBefore = deltaTotal
				deltaTotal += e.deltaY
			}
			beforeScrollDirection = scrollDirection
			deltaTotal >= deltaTotalBefore ? (scrollDirection = false) : (scrollDirection = true)
			//マウスホイールが反転した時スクロールのスコアを０に戻す
			beforeScrollDirection !== scrollDirection ? (deltaTotal = 0) : deltaTotal
			if (first_flag) {
				beforeScrollDirection !== scrollDirection ? removeEl() : null
			}
			first_flag = true
			wheelNumber(deltaTotal)

			if (deltaTotal === 600 && wheelFlag == 1) {
				wheelFlagloop('wheelFlag3', 'wheelFlag1')
				rightANDleftContentCreate('wheelFlag1', WContent_1_right, WContent_1_left)
				deltaTotal = 0
				wheelFlag = 2
				setSlider(deltaTotal, wheelFlag)
			} else if (deltaTotal === 600 && wheelFlag == 2) {
				wheelFlagloop('wheelFlag1', 'wheelFlag2')
				rightANDleftContentCreate('wheelFlag2', WContent_2_right, WContent_2_left)
				deltaTotal = 0
				wheelFlag = 3
				setSlider(deltaTotal, wheelFlag)
			} else if (deltaTotal === 600 && wheelFlag == 3) {
				wheelFlagloopEND('wheelFlag2')
				deltaTotal = 0
				wheelFlag = 1
				setSlider(deltaTotal, wheelFlag)
			} else if (deltaTotal === -600 && wheelFlag == 1) {
				wheelFlagloop('wheelFlag1', 'wheelFlag2')
				rightANDleftContentCreate('wheelFlag2', WContent_2_right, WContent_2_left)
				deltaTotal = 0
				wheelFlag = 3
				setSlider(deltaTotal, wheelFlag)
			} else if (deltaTotal === -600 && wheelFlag == 3) {
				wheelFlagloop('wheelFlag2', 'wheelFlag1')
				rightANDleftContentCreate('wheelFlag1', WContent_1_right, WContent_1_left)
				deltaTotal = 0
				wheelFlag = 2
				setSlider(deltaTotal, wheelFlag)
			} else if (deltaTotal === -600 && wheelFlag == 2) {
				wheelFlagloopEND('wheelFlag1')
				deltaTotal = 0
				wheelFlag = 1
				setSlider(deltaTotal, wheelFlag)
			}
		}
	}, [])
}

function setSlider(deltaTotalNumber: number, wheelFlagNumber: number) {
	localStorage.setItem('scrollData', JSON.stringify({ wheelFlag: wheelFlagNumber, deltaTotal: deltaTotalNumber }))
}
const initSlider = () => {
	const scrollData = JSON.parse(localStorage.getItem('scrollData') || '{"wheelFlag":1,"deltaTotal":0}')
	deltaTotal = scrollData.deltaTotal
	wheelFlag = scrollData.wheelFlag
	if (wheelFlag == 2) {
		wheelFlagloop('wheelFlag3', 'wheelFlag1')
		rightANDleftContentCreate('wheelFlag1', WContent_1_right, WContent_1_left)
		deltaTotal = 0
		wheelFlag = 2
	} else if (wheelFlag == 3) {
		wheelFlagloop('wheelFlag1', 'wheelFlag2')
		rightANDleftContentCreate('wheelFlag2', WContent_2_right, WContent_2_left)
		deltaTotal = 0
		wheelFlag = 3
	} else if (wheelFlag == 1) {
		wheelFlagloopEND('wheelFlag2')
		deltaTotal = 0
		wheelFlag = 1
	}
	return wheelFlag
}
function wheelMapCreate() {
	let main = document.querySelector('#mainTOP')
	let wheelMapElement = document.createElement('div')
	let wheelMapElementSpan = document.createElement('span')
	wheelMapElement.classList.add('wheelMap')
	wheelMapElementSpan.classList.add('wheelAfter')

	if (main !== null) main.appendChild(wheelMapElement)
	let wheelMap = document.querySelector('.wheelMap')
	if (wheelMap !== null) wheelMap.appendChild(wheelMapElementSpan)
}

function wheelNumber(deltaTotal: number) {
	let wheelAfter = document.querySelector('.wheelAfter')
	// let wheelMap = document.querySelector('.wheelMap')

	let wheelAfterRotate = document.querySelector('.wheelAfterRotate')
	// let wheelMapRotate = document.querySelector('.wheelMapRotate')

	if (deltaTotal >= 0) {
		let wheelAfterElement = wheelAfter as HTMLElement
		// console.log(deltaTotal)
		let deltaTotalborder = deltaTotal
		let backColor = Math.trunc(deltaTotal / 6 / 2)
		let rgb = `rgb(${backColor}%,${backColor}%,${backColor}%)`
		// console.log(rgb)
		deltaTotalborder === 600 ? (deltaTotalborder = 0) : deltaTotalborder
		if (wheelAfter !== null) wheelAfterElement.style.height = deltaTotalborder + 'px'
		if (wheelAfter !== null) wheelAfterElement.style.background = rgb

		// console.log(deltaTotal)
	} else if (deltaTotal <= 0) {
		let wheelAfterRotateElement = wheelAfterRotate as HTMLElement
		wheelAfterRotateElement !== null ? wheelAfterRotateElement : removeEl()
		let deltaTotalborder = deltaTotal * -1
		let backColor = Math.trunc((deltaTotal / 6 / 2) * -1)
		let rgb = `rgb(${backColor}%,${backColor}%,${backColor}%)`

		deltaTotalborder === 600 ? (deltaTotalborder = 0) : deltaTotalborder
		if (wheelAfterRotate !== null) wheelAfterRotateElement.style.height = deltaTotalborder + 'px'
		if (wheelAfterRotate !== null) wheelAfterRotateElement.style.background = rgb
	}
}

function removeEl() {
	let wheelMap = document.querySelector('.wheelMap')
	let wheelMapRotate = document.querySelector('.wheelMapRotate')
	if (wheelMap) {
		// wheelAfter.remove()
		wheelMap.remove()
		let main = document.querySelector('#mainTOP')
		let wheelMapElementRotate = document.createElement('div')
		let wheelMapElementSpan = document.createElement('span')
		wheelMapElementRotate.classList.add('wheelMapRotate')
		wheelMapElementSpan.classList.add('wheelAfterRotate')
		if (main !== null) main.appendChild(wheelMapElementRotate)
		let wheelMapRotate = document.querySelector('.wheelMapRotate')
		if (wheelMapRotate !== null) wheelMapRotate.appendChild(wheelMapElementSpan)
	} else if (wheelMapRotate) {
		// wheelAfterRotate.remove()
		wheelMapRotate.remove()
		let main = document.querySelector('#mainTOP')
		let wheelMapElement = document.createElement('div')
		let wheelMapElementSpan = document.createElement('span')
		wheelMapElement.classList.add('wheelMap')
		wheelMapElementSpan.classList.add('wheelAfter')
		if (main !== null) main.appendChild(wheelMapElement)
		let wheelMap = document.querySelector('.wheelMap')
		if (wheelMap !== null) wheelMap.appendChild(wheelMapElementSpan)
	}
}

//flag変更とエレメント変更関数
function wheelFlagloop(deleteFlag: string, flagAfterEl: string) {
	let mainTOP: Element | null = document.querySelector('body')
	let result1 = document.querySelectorAll('.' + flagAfterEl)
	let result2 = document.querySelectorAll('.' + deleteFlag)
	result1.forEach((element) => {
		let asElement = element as HTMLElement
		asElement.style.zIndex = '4'
	})
	result2.forEach((element) => {
		let asElement = element as HTMLElement
		asElement.style.zIndex = '3'
	})

	setTimeout(() => {
		try {
			if (result2 !== null && result2 !== undefined) {
				result2.forEach((element) => {
					element.remove()
				})
			}
			if (result1 !== null && result1 !== undefined && result1.length > 1) {
				result1.forEach((element, i) => {
					let elementAsUnknown = element as unknown
					let elementAsCollection = elementAsUnknown as HTMLCollectionOf<Element>
					elementAsCollection[i - 1].remove()
				})
			}
		} catch {}
	}, 50)
	let FlagElement = document.createElement('div')
	FlagElement.classList.add(flagAfterEl)
	if (mainTOP !== null) mainTOP.appendChild(FlagElement)
}

function wheelFlagloopEND(deleteFlag: string) {
	let result = document.querySelector('.' + deleteFlag)
	if (result !== null) result.remove()
}

function rightANDleftContentCreate(flagEl: string, RightContent: () => JSX.Element, LeftContent: () => JSX.Element) {
	let wheelFlagElement = document.querySelector('.' + flagEl)
	let rightContentParent = document.createElement('div')
	rightContentParent.classList.add('rightContent' + flagEl)
	let leftContentParent = document.createElement('div')
	leftContentParent.classList.add('leftContent' + flagEl)
	if (wheelFlagElement !== null) {
		wheelFlagElement.appendChild(rightContentParent)
		wheelFlagElement.appendChild(leftContentParent)
		if (RightContent !== null && RightContent !== undefined) {
			let rightParent = document.querySelector('.rightContent' + flagEl)
			if (rightParent instanceof HTMLElement) {
				const root = createRoot(rightParent as HTMLElement)
				root.render(<RightContent />)
			}
		}
		if (LeftContent !== null && RightContent !== undefined) {
			let leftParent = document.querySelector('.leftContent' + flagEl)
			if (leftParent instanceof HTMLElement) {
				const root = createRoot(leftParent as HTMLElement)
				root.render(<LeftContent />)
			}
		}
	}
}

export { MouseWheel, initSlider }
