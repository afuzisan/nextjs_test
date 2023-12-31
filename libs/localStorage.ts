const localStorage = (
	setting: string,
	{ wheelFlagNumber, deltaTotalNumber, overFlowScrollNumber, PageNationNumber }: { wheelFlagNumber?: number; deltaTotalNumber?: number; overFlowScrollNumber?: number; PageNationNumber?: number } = {}
) => {
	if ('setItem' === setting) {
		setItems(wheelFlagNumber, deltaTotalNumber, overFlowScrollNumber, PageNationNumber)
	} else if ('getItem' === setting) {
		const localStorageData = JSON.parse(window.localStorage.getItem('localStorageData') || '{"wheelFlag":1,"deltaTotal":0,"overFlowScrollNumber":0,"PageNationNumber":1}')
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
function setItems(wheelFlagNumber?: number, deltaTotalNumber?: number, overFlowScrollNumber?: number, PageNationNumber?: number) {
	const wheelFlagInit = 1
	const deltaTotalInit = 0
	const overFlowScrollInit = 0
	const PageNationInit = 1
	const localStorageItem = window.localStorage.getItem('localStorageData')
	const localStorageData = localStorageItem
		? JSON.parse(localStorageItem)
		: //初めてサイトに訪れた時の設定
		  {
				wheelFlag: wheelFlagInit,
				deltaTotal: deltaTotalInit,
				overFlowScroll: overFlowScrollInit,
				PageNation: PageNationInit
		  }
	window.localStorage.setItem(
		'localStorageData',
		JSON.stringify({
			wheelFlag: wheelFlagNumber !== undefined ? wheelFlagNumber ?? wheelFlagInit : localStorageData.wheelFlag ?? wheelFlagInit,
			deltaTotal: deltaTotalNumber !== undefined ? deltaTotalNumber ?? deltaTotalInit : localStorageData.deltaTotal ?? deltaTotalInit,
			overFlowScroll: overFlowScrollNumber !== undefined ? overFlowScrollNumber ?? overFlowScrollInit : localStorageData.overFlowScroll ?? overFlowScrollInit,
			PageNation: PageNationNumber !== undefined ? PageNationNumber ?? PageNationInit : localStorageData.PageNation ?? PageNationInit
		})
	)
}

export default localStorage
