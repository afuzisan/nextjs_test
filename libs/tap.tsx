import { WContent_1_right, WContent_1_left, WContent_2_right, WContent_2_left } from '../app/sliderMainContent'
import { createRoot } from 'react-dom/client';
let wheelFlag = 1
let deltaTotal = 0
const SwipeComponent = () => {
    let start: {x: number, y: number} | null = null;
    let end: {x: number, y: number} | null = null;
    const minimumDistance = 100; // 最小幅を設定

    
    window.addEventListener('load', function(){
        // スワイプ／フリック
        const content1 = document.querySelector("body");
        if(content1){
            content1.addEventListener('touchmove', logSwipe, false);
    
            // タッチ開始
            content1.addEventListener('touchstart', logSwipeStart, false);
    
            // タッチ終了
            content1.addEventListener('touchend', logSwipeEnd, false);
        }
    });
    
    function logSwipeStart(event: TouchEvent) {
        // event.preventDefault();
        start = {x: event.touches[0].pageX, y: event.touches[0].pageY};
        end = {x: event.touches[0].pageX, y: event.touches[0].pageY};
    }
    
    function logSwipe(event: TouchEvent) {
            // event.preventDefault();
            end = {x: event.touches[0].pageX, y: event.touches[0].pageY};
    }
    
    function logSwipeEnd(event: TouchEvent) {
        // event.preventDefault();
        if(end !== null && start !== null){
            const distanceX = Math.abs(end.x - start.x); // X軸の移動距離を計算
            const distanceY = Math.abs(end.y - start.y); // Y軸の移動距離を計算
    
            if(distanceY > minimumDistance || distanceX > minimumDistance) { // 最小幅以上動かした時のみ判定
                if( 0 > (end.y - start.y) && distanceX < minimumDistance ) {

                } else if( 0 < (end.y - start.y) && distanceX < minimumDistance ) {

                } else if( 0 > (end.x - start.x) && distanceY < minimumDistance) {
                    console.log('左にスワイプ');
                    let [newDeltaTotal, newWheelFlag] = upSwipe(wheelFlag,deltaTotal)
                    deltaTotal = newDeltaTotal;
                    wheelFlag = newWheelFlag;
                } else if( 0 < (end.x - start.x) && distanceY < minimumDistance) {
                    console.log('右にスワイプ');
                    let [newDeltaTotal, newWheelFlag] = downSwipe(wheelFlag, deltaTotal);
                    deltaTotal = newDeltaTotal;
                    wheelFlag = newWheelFlag;
                }
            }else{
                
                console.log('tap')
            }
        }
    }

    return(
        <></>
    )
}

function setSlider(deltaTotalNumber:number,wheelFlagNumber:number){
    localStorage.setItem('scrollData', JSON.stringify({ wheelFlag: wheelFlagNumber, deltaTotal: deltaTotalNumber }));
}
function upSwipe(wheelFlag:number,deltaTotal:number){
    if (wheelFlag == 1) {
        wheelFlagloop('wheelFlag1', 'wheelFlag2')
        rightANDleftContentCreate('wheelFlag2', WContent_2_right, WContent_2_left)
        deltaTotal = 0
        wheelFlag = 3

        
        setSlider(deltaTotal,wheelFlag)

    }
    else if (wheelFlag == 3) {
        wheelFlagloop('wheelFlag2', 'wheelFlag1')
        rightANDleftContentCreate('wheelFlag1', WContent_1_right, WContent_1_left)
        deltaTotal = 0
        wheelFlag = 2
        setSlider(deltaTotal,wheelFlag)

    }
    else if (wheelFlag == 2) {
        wheelFlagloopEND('wheelFlag1')
        deltaTotal = 0
        wheelFlag = 1
        setSlider(deltaTotal,wheelFlag)
    }
    return [deltaTotal,wheelFlag]
}

function downSwipe(wheelFlag:number,deltaTotal:number): [number, number] {
    if (wheelFlag == 1) {
        wheelFlagloop('wheelFlag3', 'wheelFlag1')
        rightANDleftContentCreate('wheelFlag1', WContent_1_right, WContent_1_left)
        deltaTotal = 0
        wheelFlag = 2
        setSlider(deltaTotal,wheelFlag)


    } else if (wheelFlag == 2) {
        wheelFlagloop('wheelFlag1', 'wheelFlag2')
        rightANDleftContentCreate('wheelFlag2', WContent_2_right, WContent_2_left)
        deltaTotal = 0
        wheelFlag = 3
        setSlider(deltaTotal,wheelFlag)

    } else if (wheelFlag == 3) {
        wheelFlagloopEND('wheelFlag2')
        deltaTotal = 0
        wheelFlag = 1
        setSlider(deltaTotal,wheelFlag)
    } 
    return [deltaTotal, wheelFlag];
}

function wheelFlagloop(deleteFlag: string, flagAfterEl: string) {
    let mainTOP: Element | null = document.querySelector('body')
    let result1 = document.querySelectorAll('.' + flagAfterEl)
    let result2 = document.querySelectorAll('.' + deleteFlag)
    result1.forEach(element => {
        let asElement = element as HTMLElement;
        asElement.style.zIndex = '4';
    });
    result2.forEach(element => {
        let asElement = element as HTMLElement;
        asElement.style.zIndex = '3';
    });

    setTimeout(() => {
        try {
            if (result2 !== null && result2 !== undefined) {
                result2.forEach(element => {
                    element.remove()
                });
            }
            if (result1 !== null && result1 !== undefined && result1.length > 1) {
                result1.forEach((element, i) => {
                    let elementAsUnknown = element as unknown;
                    let elementAsCollection = elementAsUnknown as HTMLCollectionOf<Element>;
                    elementAsCollection[i - 1].remove()

                });
            }
        } catch { }
    }, 1500)
    let FlagElement = document.createElement('div')
    FlagElement.classList.add(flagAfterEl);
    if (mainTOP !== null) mainTOP.appendChild(FlagElement)
}

function rightANDleftContentCreate(flagEl: string, RightContent: () => JSX.Element, LeftContent: () => JSX.Element) {
    let wheelFlagElement = document.querySelector('.' + flagEl)
    let rightContentParent = document.createElement('div')
    rightContentParent.classList.add('rightContent' + flagEl);
    let leftContentParent = document.createElement('div')
    leftContentParent.classList.add('leftContent' + flagEl);
    if (wheelFlagElement !== null) {
        wheelFlagElement.appendChild(rightContentParent)
        wheelFlagElement.appendChild(leftContentParent)
        if (RightContent !== null && RightContent !== undefined) {
            let rightParent = document.querySelector('.rightContent' + flagEl)
            if (rightParent !== null) {
                const root = createRoot(rightParent);
                root.render(<RightContent />);
            }
        }
        if (LeftContent !== null && RightContent !== undefined) {
            let leftParent = document.querySelector('.leftContent' + flagEl)
            if (leftParent !== null) {
                const root = createRoot(leftParent);
                root.render(<LeftContent />);
            }
        }
    }
}

function wheelFlagloopEND(deleteFlag: string) {
    let result = document.querySelector('.' + deleteFlag)
    if (result !== null) result.remove()
}

export default SwipeComponent

