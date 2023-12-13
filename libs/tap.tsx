import { WContent_1_right, WContent_1_left, WContent_2_right, WContent_2_left } from '../app/sliderMainContent'
import { createRoot } from 'react-dom/client';
import React, { useEffect, useState } from 'react'
import { initSlider } from './mouseWheel';
import '../components/app/keyframs.css'

const SwipeComponent = () => {
    // let wheelFlaginit = initSlider()
    // let wheelFlag = wheelFlaginit
    let timeLine = true
    let wheelFlag = 1
    let deltaTotal = 0
    let start: {x: number, y: number} | null = null;
    let end: {x: number, y: number} | null = null;
    
    const minimumDistance = 100; // 最小幅を設定

    
   
        // スワイプ／フリック
        const content1 = document.querySelector("body");
        if(content1){
            content1.addEventListener('touchmove', logSwipe, false);
    
            // タッチ開始
            content1.addEventListener('touchstart', logSwipeStart, false);
    
            // タッチ終了
            content1.addEventListener('touchend', logSwipeEnd, false);
        }

    
    function logSwipeStart(event: TouchEvent) {
      let swipeGuideEl = document.querySelector('#swipeGuide')
      if(swipeGuideEl !== null) {
        (swipeGuideEl as HTMLElement).style.display = 'none';
      }
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
            const scrollData = JSON.parse(localStorage.getItem('scrollData') || '{"wheelFlag":1,"deltaTotal":0}');
            deltaTotal = scrollData.deltaTotal
            wheelFlag = scrollData.wheelFlag
            const distanceX = Math.abs(end.x - start.x); // X軸の移動距離を計算
            const distanceY = Math.abs(end.y - start.y); // Y軸の移動距離を計算
    
            if(distanceY > minimumDistance || distanceX > minimumDistance) { // 最小幅以上動かした時のみ判定
                if( 0 > (end.y - start.y) && distanceX < minimumDistance ) {

                } else if( 0 < (end.y - start.y) && distanceX < minimumDistance ) {

                } else if( 0 > (end.x - start.x) && distanceY < minimumDistance) {

                    let [newDeltaTotal, newWheelFlag] = leftSwipe(wheelFlag, deltaTotal,'left',timeLine);
                    deltaTotal = newDeltaTotal;
                    wheelFlag = newWheelFlag;

                } else if( 0 < (end.x - start.x) && distanceY < minimumDistance) {

                    let [newDeltaTotal, newWheelFlag] = rightSwipe(wheelFlag,deltaTotal,'right',timeLine)

                    deltaTotal = newDeltaTotal;
                    wheelFlag = newWheelFlag;
                }
            }else{
                
           
            }
        }
    }
  function setSlider(deltaTotalNumber:number,wheelFlagNumber:number){
      localStorage.setItem('scrollData', JSON.stringify({ wheelFlag: wheelFlagNumber, deltaTotal: deltaTotalNumber }));
  }
  function rightSwipe(wheelFlag:number,deltaTotal:number,swipeDirection:string,timeLine:boolean){
      if (wheelFlag == 1) {
          wheelFlagloop('wheelFlag1', 'wheelFlag2')
          rightANDleftContentCreate('wheelFlag2', WContent_2_right, WContent_2_left)
          wheelFlag = 3
          setSlider(deltaTotal,wheelFlag)
  
      }
      else if (wheelFlag == 3) {
          wheelFlagloop('wheelFlag2', 'wheelFlag1')
          rightANDleftContentCreate('wheelFlag1', WContent_1_right, WContent_1_left)
          wheelFlag = 2
          setSlider(deltaTotal,wheelFlag)
  
      }
      else if (wheelFlag == 2) {
        let timeLineResult = timeLineSwitcher(timeLine,'right')
        if(timeLineResult){
          wheelFlagloopEND('wheelFlag1')
          wheelFlag = 1
          setSlider(deltaTotal,wheelFlag)
        }else{
          let element = document.querySelector('.leftContentwheelFlag1') as HTMLElement;
          element.style.display = 'block'
          element.style.zIndex = '100';
        }
      }
      return [deltaTotal,wheelFlag]
  }
  
  function leftSwipe(wheelFlag:number,deltaTotal:number,swipeDirection:string,timeLine:boolean): [number, number] {
      
      if (wheelFlag == 1) {
          wheelFlagloop('wheelFlag3', 'wheelFlag1')
          rightANDleftContentCreate('wheelFlag1', WContent_1_right, WContent_1_left)
          let element = document.querySelector('.rightContentwheelFlag1') as HTMLElement;
          element.style.animationName = 'translateXPlus' 
          wheelFlag = 2
          setSlider(deltaTotal,wheelFlag)
      } else if (wheelFlag == 2) {
        let timeLineResult = timeLineSwitcher(timeLine,'left')
        if(timeLineResult){
          wheelFlagloop('wheelFlag1', 'wheelFlag2')
          rightANDleftContentCreate('wheelFlag2', WContent_2_right, WContent_2_left)
          let rightContentwheelFlag2 = document.querySelector('.rightContentwheelFlag2') as HTMLElement;
          let leftContentwheelFlag2 = document.querySelector('.leftContentwheelFlag2') as HTMLElement;
          rightContentwheelFlag2.style.zIndex = '0';
          leftContentwheelFlag2.style.animationName = 'translateXPlus'
          rightContentwheelFlag2.style.animationName = 'translateXPlus'
          wheelFlag = 3
          setSlider(deltaTotal,wheelFlag)
        }else{
          let element = document.querySelector('.leftContentwheelFlag1') as HTMLElement;
          element.style.animationName = 'translateXPlus' 
          element.style.display = 'block'
          element.style.zIndex = '100';
        }
      } else if (wheelFlag == 3) {
        let element = document.querySelector('.rightContentwheelFlag2') as HTMLElement;
        console.log(element)
          element.style.animationName = 'translateXPlus' 
          wheelFlagloopEND('wheelFlag2')
          wheelFlag = 1
          setSlider(deltaTotal,wheelFlag)
      } 
      return [deltaTotal, wheelFlag];
  }
  function timeLineSwitcher(switcher:boolean,left:string){
    // if(left === 'left'){
      timeLine = !switcher
      return timeLine
    // }
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
  
                  const root = createRoot(leftParent as HTMLElement);
                  root.render(<LeftContent />);    
              }
          }
      }
  }
  
  function wheelFlagloopEND(deleteFlag: string) {
      let result = document.querySelector('.' + deleteFlag)
      if (result !== null) result.remove()
  }

    return(
        <></>
    )
}


export default SwipeComponent