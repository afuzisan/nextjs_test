const localStorage = (
	setting: string,
	{
		wheelFlagNumber,
		deltaTotalNumber,
		overFlowScrollNumber,
		PageNationNumber
	}: { wheelFlagNumber: number; deltaTotalNumber: number; overFlowScrollNumber: number; PageNationNumber: number }
) => {
	if ('setItem' === setting) {
		const localStorageItem = window.localStorage.getItem('localStorageData')
		const localStorageData = localStorageItem ? JSON.parse(localStorageItem) : null

		let wheelFlagNumberResult = wheelFlagNumber ? wheelFlagNumber : localStorageData.wheelFlag
		let deltaTotalNumberResult = deltaTotalNumber ? deltaTotalNumber : localStorageData.deltaTotal
		let overFlowScrollNumberResult = overFlowScrollNumber ? overFlowScrollNumber : localStorageData.overFlowScroll
		let PageNationNumberResult = PageNationNumber ? PageNationNumber : localStorageData.PageNation

		window.localStorage.setItem(
			'localStorageData',
			JSON.stringify({
				wheelFlag: wheelFlagNumberResult === undefined ? 1 : wheelFlagNumberResult,
				deltaTotal: deltaTotalNumberResult === undefined ? 1 : deltaTotalNumberResult,
				overFlowScroll: overFlowScrollNumberResult === undefined ? 0 : overFlowScrollNumberResult,
				PageNation: PageNationNumberResult === undefined ? 1 : PageNationNumberResult
			})
		)
	} else if ('getItem' === setting) {
		const localStorageData = JSON.parse(
			window.localStorage.getItem('localStorageData') ||
				'{"wheelFlag":1,"deltaTotal":0,"overFlowScrollNumber":1,"PageNationNumber":1}'
		)
		return {
			wheelFlag: localStorageData.wheelFlag || wheelFlagNumber,
			deltaTotal: localStorageData.deltaTotal || deltaTotalNumber,
			overFlowScroll: localStorageData.overFlowScroll || overFlowScrollNumber,
			PageNation: localStorageData.PageNation || PageNationNumber
		}
	} else {
		return null
	}
}

export default localStorage
