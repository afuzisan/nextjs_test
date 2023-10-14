import React,{useEffect,useState} from 'react'
import { createRoot } from 'react-dom/client';
import './mouseWheel.css'
import {WContent_1_right,WContent_1_left,WContent_2_right,WContent_2_left} from './wContent'

const mouseWheel = () => {
    // let [state , setState] = useState(1)
    let deltaTotal:number = 0
    let scrollDirection = true
    let deltaTotalBefore = 0
    let beforeScrollDirection = true
    let first_flag = false
    
    useEffect(()=>{
        let wheelFlag = 1
        wheelMapCreate()
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
            if(first_flag){
                beforeScrollDirection !== scrollDirection ? removeEl() : null
            }
            first_flag = true
            wheelNumber(deltaTotal,scrollDirection)
            
            if (deltaTotal === 600 && wheelFlag==1) {
                wheelFlagloop('wheelFlag3','wheelFlag1')
                rightANDleftContentCreate('wheelFlag1',WContent_1_right,WContent_1_left)
                deltaTotal = 0
                wheelFlag = 2
                

            } else if(deltaTotal === 600 && wheelFlag==2){
                wheelFlagloop('wheelFlag1','wheelFlag2')
                rightANDleftContentCreate('wheelFlag2',WContent_2_right,WContent_2_left)
                deltaTotal = 0
                wheelFlag = 3

            }else if(deltaTotal === 600 && wheelFlag==3){
                wheelFlagloopEND('wheelFlag2')
                deltaTotal = 0
                wheelFlag = 1
            }else if(deltaTotal === -600 && wheelFlag==1){
                wheelFlagloop('wheelFlag1','wheelFlag2')
                rightANDleftContentCreate('wheelFlag2',WContent_2_right,WContent_2_left)
                deltaTotal = 0
                wheelFlag = 3
            }
            else if(deltaTotal === -600 && wheelFlag==3){
                wheelFlagloop('wheelFlag2','wheelFlag1')
                rightANDleftContentCreate('wheelFlag1',WContent_1_right,WContent_1_left)
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
function wheelMapCreate(){
    let main = document.querySelector('#mainTOP')
    let  wheelMapElement = document.createElement('div')
    let  wheelMapElementSpan = document.createElement('span')
    wheelMapElement.classList.add('wheelMap');
    wheelMapElementSpan.classList.add('wheelAfter');

    main.appendChild(wheelMapElement)
    let wheelMap = document.querySelector('.wheelMap')
    wheelMap.appendChild(wheelMapElementSpan)
}

function wheelNumber(deltaTotal:number,scrollDirection:boolean){
    let wheelAfter = document.querySelector('.wheelAfter')
    let wheelMap = document.querySelector('.wheelMap')
    let wheelAfterRotate = document.querySelector('.wheelAfterRotate')
    let wheelMapRotate = document.querySelector('.wheelMapRotate')
    
    if(deltaTotal > 0){
        let deltaTotalborder = deltaTotal / 3
        wheelAfter.style.height = deltaTotalborder+'px'
        console.log(deltaTotal)
    }else if(deltaTotal < 0){
        let deltaTotalborder = deltaTotal*-1 / 3
        wheelAfterRotate.style.height = deltaTotalborder+'px'
        console.log(deltaTotal)
    }
}

function removeEl(){
    let wheelAfter = document.querySelector('.wheelAfter')
    let wheelMap = document.querySelector('.wheelMap')
    let wheelAfterRotate = document.querySelector('.wheelAfterRotate')
    let wheelMapRotate = document.querySelector('.wheelMapRotate')
    if(wheelAfter && wheelMap){
        wheelAfter.remove()
        wheelMap.remove()
        let main = document.querySelector('#mainTOP')
        let  wheelMapElementRotate = document.createElement('div')
        let  wheelMapElementSpan = document.createElement('span')
        wheelMapElementRotate.classList.add('wheelMapRotate');
        wheelMapElementSpan.classList.add('wheelAfterRotate');
        main.appendChild(wheelMapElementRotate)
        let wheelMapRotate = document.querySelector('.wheelMapRotate')
        wheelMapRotate.appendChild(wheelMapElementSpan)

    }else if(wheelAfterRotate && wheelMapRotate){
        wheelAfterRotate.remove()
        wheelMapRotate.remove()
        let main = document.querySelector('#mainTOP')
        let  wheelMapElement = document.createElement('div')
        let  wheelMapElementSpan = document.createElement('span')
        wheelMapElement.classList.add('wheelMap');
        wheelMapElementSpan.classList.add('wheelAfter');
        main.appendChild(wheelMapElement)
        let wheelMap = document.querySelector('.wheelMap')
        wheelMap.appendChild(wheelMapElementSpan)
    }
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

function rightANDleftContentCreate(flagEl,RightContent,LeftContent){
    let wheelFlagElement = document.querySelector('.'+flagEl)
    let rightContentParent = document.createElement('div')
    rightContentParent.classList.add('rightContent'+flagEl);
    let leftContentParent = document.createElement('div')
    leftContentParent.classList.add('leftContent'+flagEl);
    if(wheelFlagElement !== null){
        wheelFlagElement.appendChild(rightContentParent)
        wheelFlagElement.appendChild(leftContentParent)
        if(RightContent !== null && RightContent !== undefined){
            let rightParent = document.querySelector('.rightContent'+flagEl)
            const root = createRoot(rightParent);
            root.render(<RightContent />); 
        }
        if(LeftContent !== null && RightContent !== undefined){
            let leftParent = document.querySelector('.leftContent'+flagEl)
            const root = createRoot(leftParent);
            root.render(<LeftContent />); 
        }   
    }
}

export {mouseWheel}