import{useEffect,useState} from 'react'

const mouseWheel = () => {
    
    useEffect(()=>{
        let wheelFlag = 1
        window.addEventListener('wheel', updateScroll, { passive: false });
        function updateScroll(e:any){
            e.preventDefault()
            let delta = e.deltaY;
            if (delta === 100 && wheelFlag==1) {
                wheelFlag =2
                wheelFlagloop('wheelFlag3','wheelFlag1')
            } else if(delta === 100 && wheelFlag==2){
                wheelFlag = 3
                wheelFlagloop('wheelFlag1','wheelFlag2')
            }else if(delta === 100 && wheelFlag==3){
                wheelFlag = 1
                wheelFlagloop('wheelFlag2','wheelFlag3')
            }
        }
    },[])
}

export default mouseWheel

//flag変更とエレメント変更関数
function wheelFlagloop(flagBeforeEl,flagAfterEl){
    let mainTOP: Element | null = document.querySelector('#mainTOP')
    let result = document.querySelector('.'+flagBeforeEl)
    if(result !== null) result.remove()
    let FlagElement = document.createElement('div')
    FlagElement.classList.add(flagAfterEl);
    mainTOP.appendChild(FlagElement)
}