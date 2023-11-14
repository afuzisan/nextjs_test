"use client"
import { MouseWheel } from '../libs/mouseWheel';
import { setup, draw } from '../libs/p5';
import dynamic from 'next/dynamic';
import LoadingEl from './loadingEl';
import { createFactory, useEffect } from 'react';
import './toolTips.css';


const Home = () => {
  const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
  });
  MouseWheel()
  const mousemove = () => {
    const stalker = document.querySelector('.stalker') as HTMLElement;
    const toolTipTexts = {
      timeLineToolTip: `<div id="timeLineToolTip"><p>左クリックで進む</p><p>右クリックで戻る</p></div>`,
      rightToolTip: `<div id="rightToolTip"><p>オカダのスキルセット</p><p>私が勉強してきたスキルをアイコンで表示しています。</p></div>`,
      leftToolTip: `<div id="leftToolTip"><p>2012年から2023年にかけて制作した</p><p>WEBサイトを年表で、まとめました。</p></div>`,
      cssToolTip: `<div id="cssToolTip"><p>CSSは2012年から始めました。</p></div>`
    };
    const classNames = ['201212', '201301'];
    document.addEventListener('mousemove', function (e) {
      if (stalker !== null) {
        const { clientX: x, clientY: y } = e;
        const windowWidth = window.innerWidth;
        let translateX = x + 10;
        if (translateX + stalker.offsetWidth > windowWidth) {
          translateX = windowWidth - stalker.offsetWidth - 20;
        }
        stalker.style.transform = `translate(${translateX}px, ${y}px)`;

        const elements = document.elementsFromPoint(x, y);
        
        //マウスをホバーした時、表示するテキストを変更
        elements.some((element) => {
          if (element?.matches("dl.toolTips")) {
            initBorder();
            const toolTips = document.querySelector('dl.toolTips') as Element;
            classNames.forEach(className => classSwitch(toolTips, className));
            stalkerInit(stalker)
            stalker.innerHTML = toolTipTexts.timeLineToolTip;
            return true;
          } else if (element?.matches("div.right")) {
            initBorder();
            stalkerInit(stalker)
            stalker.innerHTML = toolTipTexts.rightToolTip;
            return true;
          } else if (element?.matches("div.left")) {
            initBorder();
            stalkerInit(stalker)
            stalker.innerHTML = toolTipTexts.leftToolTip;
            return true;
          }else if (element?.matches("div.css")) {
            initBorder();
            stalkerInit(stalker)
            stalker.innerHTML = toolTipTexts.cssToolTip;
            return true;
          }else{
            initBorder();
            stalker.innerHTML = '';
            stalker.style.border = "";
            stalker.style.backgroundColor = "";
            stalker.style.padding = "";
          }
          return false;
        });
      }
    });
  }
  function stalkerInit(stalker:HTMLElement){
    stalker.style.border = "1px solid #000";
    stalker.style.backgroundColor = "#fff";
    stalker.style.padding = "5px";
  }
  function hasClassNames(element: Element, className: string) {
    return (element) ? element.className.split(' ').find(element => element === className) : [];

  };
  function classSwitch(element: Element, className: string) {
    let css = document.querySelector('.css') as HTMLElement
    let html = document.querySelector('.html ') as HTMLElement
    let js = document.querySelector('.js') as HTMLElement
    let ts = document.querySelector('.ts') as HTMLElement
    let next = document.querySelector('.next') as HTMLElement
    let react = document.querySelector('.react') as HTMLElement
    let node = document.querySelector('.node') as HTMLElement
    let jquery = document.querySelector('.jquery') as HTMLElement
    let linux = document.querySelector('.linux') as HTMLElement
    let playCanvas = document.querySelector('.playCanvas') as HTMLElement
    let wordpress = document.querySelector('.wordpress') as HTMLElement
    let gas = document.querySelector('.gas') as HTMLElement
    let docker = document.querySelector('.docker') as HTMLElement
    let postgresql = document.querySelector('.postgresql') as HTMLElement
    let github = document.querySelector('.github') as HTMLElement


    const boxShadowStyle = "1em -1em #ccc, -1em 1em #ccc, 1em 1em #ccc, -1em -1em #ccc";
    const boxShadowDuration = "0.5s";
    function applyBoxShadow(element: HTMLElement | null){
      if (element) {
        element.style.boxShadow = boxShadowStyle;
        element.style.transitionDuration = boxShadowDuration;
      }
    };

    //マウスホバー時にアイコンにCSSを適用
    if (hasClassNames(element, '201212')) {
      initBorder();
      applyBoxShadow(css);
      applyBoxShadow(html);
    } else if (hasClassNames(element, '201301')) {
      initBorder();
      applyBoxShadow(html);
    }
  }

  function initBorder() {
    let gridChildren = document.querySelectorAll<HTMLElement>('.gridChildren')
    gridChildren.forEach((element) => {
      element.style.boxShadow = "";
    });

  }


  useEffect(() => {
    mousemove()
  }, [])

  return (
    <main>
      {/* <Sketch setup={setup} draw={draw} /> */}
      {/* <LoadingEl /> */}
      <div id="mainTOP">
        <div className="top">OKADA AKIYA</div>
      </div>
    </main>
  );
};
export default Home;





