"use client"
import { MouseWheel } from '../libs/mouseWheel';
import { setup, draw } from '../libs/p5';
import dynamic from 'next/dynamic';
import LoadingEl from './loadingEl';
import { createFactory, useEffect } from 'react';
import './toolTips.css';
import { type } from 'os';


const Home = () => {
  const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
  });
  MouseWheel()
  const mousemove = () => {
    const stalker = document.querySelector('.stalker') as HTMLElement;
    const toolTipTexts = {
      "dl.toolTips": `<div id="timeLineToolTip"><p>左クリックで進む</p><p>右クリックで戻る</p></div>`,
      "div.right": `<div id="rightToolTip"><p>オカダのスキルセット</p><p>私が勉強してきたスキルをアイコンで表示しています。</p></div>`,
      "div.left": `<div id="leftToolTip"><p>2012年から2023年にかけて制作した</p><p>WEBサイトを年表で、まとめました。</p></div>`,
      "div.css": `<div id="cssToolTip"><p>CSSは2012年から始めました。</p></div>`
    };
    const classNames = ['201212', '201301'];
    document.addEventListener('mousemove', function (e) {
      if (stalker !== null) {
        const { clientX: x, clientY: y } = e;
        const windowWidth = window.innerWidth;
        let translateX = x + 10;
        let translateY = y + 20;
        if (translateX + stalker.offsetWidth > windowWidth) {
          translateX = windowWidth - stalker.offsetWidth - 20;
        }
        stalker.style.transform = `translate(${translateX}px, ${translateY}px)`;

        const elements = document.elementsFromPoint(x, y);
        //マウスをホバーした時、表示するテキストを変更
        elements.some((element) => {
          if (element?.matches("dl.toolTips")) {
            matche(stalker,toolTipTexts,"dl.toolTips")
            const toolTips = document.querySelector("dl.toolTips") as Element;
            classSwitch(toolTips);
            return true;
          } else if (element?.matches("div.right")) {
            matche(stalker,toolTipTexts,"div.right")
            return true;
          } else if (element?.matches("div.left")) {
            matche(stalker,toolTipTexts,"div.left")
            return true;
          }else if (element?.matches("div.css")) {
            matche(stalker,toolTipTexts,"div.css")
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
  function matche(stalker: HTMLElement, toolTipTexts: {[key: string]: string}, text: string) {
    initBorder();
    stalkerInit(stalker)
    stalker.innerHTML = toolTipTexts[text];
    return true;
  }
  function stalkerInit(stalker:HTMLElement){
    stalker.style.border = "1px solid #000";
    stalker.style.backgroundColor = "#fff";
    stalker.style.padding = "5px";
    stalker.style.opacity = "0.9";
    stalker.style.fontWeight ="800"
  }
  function hasClassNames(element: Element, className: string) {
    return (element) ? element.className.split(' ').includes(className) : false;
  };
  function classSwitch(element: Element) {
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



    const boxShadowStyle = "0.2em -0.2em lightcoral, -0.2em 0.2em lightcoral, 0.2em 0.2em lightcoral, -0.2em -0.2em lightcoral";
    const boxShadowDuration = "0.5s";
    function applyBoxShadow(element: HTMLElement | null){
      if (element) {
        element.style.boxShadow = boxShadowStyle;
        element.style.transitionDuration = boxShadowDuration;
      }
    };

    //マウスホバー時にアイコンにCSSを適用
    switch (true) {
      case hasClassNames(element, 'day201211'):
        initBorder();
        applyBoxShadow(html);
        applyBoxShadow(css);
        break;
      case hasClassNames(element, 'day201212'):
          initBorder();
          applyBoxShadow(html);
          applyBoxShadow(css);
          break;
      case hasClassNames(element, 'day201301'):
          initBorder();
          applyBoxShadow(html);
          applyBoxShadow(css);
          break;
      case hasClassNames(element, 'day201303'):
          // 'day201303' クラスを持つ要素に対する操作
          applyBoxShadow(wordpress);
          break;
      case hasClassNames(element, 'day201304'):
          // 'day201304' クラスを持つ要素に対する操作
          applyBoxShadow(html);
          applyBoxShadow(css);
          applyBoxShadow(wordpress);
          break;
      case hasClassNames(element, 'day201305'):
          // 'day201308' クラスを持つ要素に対する操作
          applyBoxShadow(js);
          break;

      case hasClassNames(element, 'day201401'):
          // 'day201401' クラスを持つ要素に対する操作
          applyBoxShadow(html);
          applyBoxShadow(css);
          applyBoxShadow(js);
          break;
        case hasClassNames(element, 'day201402'):
            // 'day201401' クラスを持つ要素に対する操作
            applyBoxShadow(html);
            applyBoxShadow(css);
            applyBoxShadow(js);
            applyBoxShadow(wordpress);
            break;
      case hasClassNames(element, 'day201501'):
          // 'day201501' クラスを持つ要素に対する操作
          break;
      case hasClassNames(element, 'day201801'):
          // 'day201801' クラスを持つ要素に対する操作
          applyBoxShadow(html);
          applyBoxShadow(css);
          applyBoxShadow(js);
          applyBoxShadow(wordpress);
          break;
      case hasClassNames(element, 'day201807'):
          // 'day201807' クラスを持つ要素に対する操作
          applyBoxShadow(html);
          applyBoxShadow(css);
          applyBoxShadow(js);
          break;
      case hasClassNames(element, 'day201808'):
          // 'day201808' クラスを持つ要素に対する操作
          applyBoxShadow(html);
          applyBoxShadow(css);
          applyBoxShadow(js);
          break;
      case hasClassNames(element, 'day201809'):
          // 'day201809' クラスを持つ要素に対する操作
          applyBoxShadow(html);
          applyBoxShadow(css);
          applyBoxShadow(jquery);
          break;
      case hasClassNames(element, 'day201909'):
          // 'day201909' クラスを持つ要素に対する操作
          applyBoxShadow(html);
          applyBoxShadow(css);
          applyBoxShadow(js);
          break;
      case hasClassNames(element, 'day202007'):
          // 'day202001' クラスを持つ要素に対する操作
          applyBoxShadow(gas);
          break;
      case hasClassNames(element, 'day202111'):
          // 'day202002' クラスを持つ要素に対する操作
          applyBoxShadow(github);
          break;
      case hasClassNames(element, 'day202112'):
          // 'day202003' クラスを持つ要素に対する操作
          applyBoxShadow(node);
          break;
      case hasClassNames(element, 'day202203'):
          // 'day202004' クラスを持つ要素に対する操作
          applyBoxShadow(node);
          break;
      case hasClassNames(element, 'day202205'):
          // 'day202005' クラスを持つ要素に対する操作
          applyBoxShadow(linux);
          break;
      case hasClassNames(element, 'day202207'):
          // 'day202007' クラスを持つ要素に対する操作
          applyBoxShadow(postgresql);
          break;
      case hasClassNames(element, 'day202210'):
          // 'day202008' クラスを持つ要素に対する操作
          applyBoxShadow(react)
          break;
      case hasClassNames(element, 'day202211'):
          // 'day202009' クラスを持つ要素に対する操作
          applyBoxShadow(next)
          break;
      case hasClassNames(element, 'day202212'):
          // 'day202010' クラスを持つ要素に対する操作
          applyBoxShadow(js)
          break;
      case hasClassNames(element, 'day202307'):
          // 'day202011' クラスを持つ要素に対する操作
          applyBoxShadow(docker)
          break;
      case hasClassNames(element, 'day202308'):
          // 'day202012' クラスを持つ要素に対する操作
          applyBoxShadow(postgresql)
          break;
      case hasClassNames(element, 'day202309'):
          // 'day202101' クラスを持つ要素に対する操作
          applyBoxShadow(playCanvas)
          break;
      case hasClassNames(element, 'day202310'):
          // 'day202102' クラスを持つ要素に対する操作
          applyBoxShadow(playCanvas)
          break;
          case hasClassNames(element, 'day202311'):
            // 'day202102' クラスを持つ要素に対する操作
            applyBoxShadow(ts)
            break;
      case hasClassNames(element, 'day202312'):
          // 'day202103' クラスを持つ要素に対する操作
          applyBoxShadow(html)
          applyBoxShadow(css)
          applyBoxShadow(js)
          applyBoxShadow(playCanvas)
          applyBoxShadow(docker)
          applyBoxShadow(next)
          applyBoxShadow(react)
          applyBoxShadow(github)
          break;
        case hasClassNames(element, 'day202312kara'):
            // 'day202312kara' クラスを持つ要素に対する操作
            break;
        default:
            // どのクラス名も一致しない場合の操作
            break;
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
