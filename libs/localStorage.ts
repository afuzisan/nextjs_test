const localStorage = (
	setting: string,
	{
		wheelFlagNumber,
		deltaTotalNumber,
		overFlowScrollNumber,
		PageNationNumber
	}: { wheelFlagNumber?: number; deltaTotalNumber?: number; overFlowScrollNumber?: number; PageNationNumber?: number }
) => {
	if ('setItem' === setting) {
		const localStorageItem = window.localStorage.getItem('localStorageData')
		const localStorageData = localStorageItem
			? JSON.parse(localStorageItem)
			: //初めてサイトに訪れた時に設定される初期値
			  {
					wheelFlag: 1,
					deltaTotal: 0,
					overFlowScroll: 0,
					PageNation: 1
			  }
		window.localStorage.setItem(
			'localStorageData',
			JSON.stringify({
				wheelFlag: wheelFlagNumber !== undefined ? wheelFlagNumber ?? 1 : localStorageData.wheelFlag ?? 1,
				deltaTotal: deltaTotalNumber !== undefined ? deltaTotalNumber ?? 0 : localStorageData.deltaTotal ?? 0,
				overFlowScroll:
					overFlowScrollNumber !== undefined ? overFlowScrollNumber ?? 0 : localStorageData.overFlowScroll ?? 0,
				PageNation: PageNationNumber !== undefined ? PageNationNumber ?? 1 : localStorageData.PageNation ?? 1
			})
		)
		console.log(
			JSON.stringify({
				wheelFlag: wheelFlagNumber !== undefined ? wheelFlagNumber : localStorageData.wheelFlag ?? 1,
				deltaTotal: deltaTotalNumber !== undefined ? deltaTotalNumber : localStorageData.deltaTotal ?? 0,
				overFlowScroll: overFlowScrollNumber !== undefined ? overFlowScrollNumber : localStorageData.overFlowScroll ?? 0,
				PageNation: PageNationNumber !== undefined ? PageNationNumber : localStorageData.PageNation ?? 1
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
