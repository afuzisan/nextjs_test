import{useEffect,useState} from 'react'
import './mouseWheel.css'

const mouseWheelDown = () => {
    let deltaTotal:number = 0
    useEffect(()=>{
        let wheelFlag = 1
        window.addEventListener('wheel', updateScroll, { passive: false });
        function updateScroll(e:any){
            e.preventDefault()
            deltaTotal >= 500 ? deltaTotal = 500 : deltaTotal += e.deltaY
            if (deltaTotal === 500 && wheelFlag==1) {
                wheelFlagloop('wheelFlag3','wheelFlag1')
                rightANDleftContentCreate('wheelFlag1')
                deltaTotal = 0
                wheelFlag = 2
                

            } else if(deltaTotal === 500 && wheelFlag==2){
                wheelFlagloop('wheelFlag1','wheelFlag2')
                rightANDleftContentCreate('wheelFlag2')
                deltaTotal = 0
                wheelFlag = 3

            }else if(deltaTotal ===500 && wheelFlag==3){
                wheelFlagloopEND('wheelFlag2')
                deltaTotal = 0
                wheelFlag = 1
            }
        }
    },[])
}

export default mouseWheelDown

//flag変更とエレメント変更関数
function wheelFlagloop(deleteFlag,flagAfterEl){
    let mainTOP: Element | null = document.querySelector('body')
    let result1 = document.querySelectorAll('.'+flagAfterEl)
    let result2 = document.querySelectorAll('.'+deleteFlag)
    setTimeout(()=>{
        try{
            if(result2 !== null && result2 !== undefined) {
                result2.forEach(element => {
                    element.remove()
                });
            }
            if(result1 !== null && result1 !== undefined && result1.length > 1) {
                result1.forEach((element,i) => {
                    element[i-1].remove()
                });
            }
        }catch{}
    },1500)
    let FlagElement = document.createElement('div')
    FlagElement.classList.add(flagAfterEl);
    mainTOP.appendChild(FlagElement)
}

function wheelFlagloopEND(deleteFlag){
    let result = document.querySelector('.'+deleteFlag)
    if(result !== null) result.remove()
}

function rightANDleftContentCreate(flagEl){
    let wheelFlagElement = document.querySelector('.'+flagEl)
    let rightContentParent = document.createElement('div')
    rightContentParent.classList.add('rightContent'+flagEl);
    let leftContentParent = document.createElement('div')
    leftContentParent.classList.add('leftContent'+flagEl);
    if(wheelFlagElement !== null){
        wheelFlagElement.appendChild(rightContentParent)
        wheelFlagElement.appendChild(leftContentParent)
    }
}