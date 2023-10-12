import{useEffect,useState} from 'react'
import './mouseWheel.css'
import { before } from 'node:test'

const mouseWheel = () => {
    let deltaTotal:number = 0
    let scrollDirection = true
    let deltaTotalBefore = 0
    let beforeScrollDirection = true
    useEffect(()=>{
        let wheelFlag = 1
        window.addEventListener('wheel', updateScroll, { passive: false });
        function updateScroll(e:any){
            e.preventDefault()
            if(deltaTotal <= 600 || deltaTotal >= -600){
                deltaTotalBefore = deltaTotal
                deltaTotal += e.deltaY 
            }
            beforeScrollDirection = scrollDirection
            deltaTotal >= deltaTotalBefore ? scrollDirection = false : scrollDirection = true
            //マウスホイールが反転した時スクロールのスコアを０に戻す
            beforeScrollDirection !== scrollDirection ? deltaTotal = 0 : deltaTotal

            if (deltaTotal === 600 && wheelFlag==1) {
                wheelFlagloop('wheelFlag3','wheelFlag1')
                rightANDleftContentCreate('wheelFlag1')
                deltaTotal = 0
                wheelFlag = 2
                

            } else if(deltaTotal === 600 && wheelFlag==2){
                wheelFlagloop('wheelFlag1','wheelFlag2')
                rightANDleftContentCreate('wheelFlag2')
                deltaTotal = 0
                wheelFlag = 3

            }else if(deltaTotal === 600 && wheelFlag==3){
                wheelFlagloopEND('wheelFlag2')
                deltaTotal = 0
                wheelFlag = 1
            }else if(deltaTotal === -600 && wheelFlag==1){
                wheelFlagloop('wheelFlag1','wheelFlag2')
                rightANDleftContentCreate('wheelFlag2')
                deltaTotal = 0
                wheelFlag = 3
            }
            else if(deltaTotal === -600 && wheelFlag==3){
                wheelFlagloop('wheelFlag2','wheelFlag1')
                rightANDleftContentCreate('wheelFlag1')
                deltaTotal = 0
                wheelFlag = 2
            }
            else if(deltaTotal === -600 && wheelFlag==2){
                wheelFlagloopEND('wheelFlag1')
                deltaTotal = 0
                wheelFlag = 1
            }
        }
    },[])
}


//flag変更とエレメント変更関数
function wheelFlagloop(deleteFlag,flagAfterEl){
    let mainTOP: Element | null = document.querySelector('body')
    let result1 = document.querySelectorAll('.'+flagAfterEl)
    let result2 = document.querySelectorAll('.'+deleteFlag)
    result1.forEach(element => {
        element.style.zIndex = 4;
    });
    result2.forEach(element => {
        element.style.zIndex = 3;
    });
    
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

export {mouseWheel}