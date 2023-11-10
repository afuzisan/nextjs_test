"use client"
import { MouseWheel } from '../libs/mouseWheel';
import { setup, draw } from '../libs/p5';
import dynamic from 'next/dynamic';
import LoadingEl from './loadingEl';
import { useEffect } from 'react';
import './toolTips.css';


const Home = () => {
  const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
  });
  MouseWheel()
  function mousemove() {
    //マウスストーカー用のdivを取得
    const stalker = document.querySelector('.stalker') as HTMLElement;



    //マウスに追従させる処理 （リンクに吸い付いてる時は除外する）
    document.addEventListener('mousemove', function (e) {

      if (stalker !== null) {
        let x = e.clientX
        let y = e.clientY
        stalker.style.transform = 'translate(' + (x + 40) + 'px, ' + y + 'px)';
        var elements = document.elementsFromPoint(x, y);
        for (let i = 0; i < elements.length; i++) {
          if (elements[i]?.matches("dl.toolTips")) {
            initBorder()
            let toolTips = document.querySelector('dl.toolTips') as Element
            classSwitch(toolTips, '201212')
            classSwitch(toolTips, '201301')

            let text =
              `<div id="timeLineToolTip"><p>左クリックで進む</p><p>右クリックで戻る</p></div>`
            stalker.innerHTML = text

            break
          } else if (elements[i]?.matches("div.right")) {
            initBorder()
            let text =
              `<div id="rightToolTip"><p>オカダのスキルセット</p><p>私が勉強してきたスキルをアイコンで表示しています。</p></div>`
            stalker.innerHTML = text

            break
          }
          else if (elements[i]?.matches("div.left")) {
            initBorder()
            let text =
              `<div id="leftToolTip">
              <p>2012年から2023年にかけて制作した</p>
              <p>WEBサイトを年表で、まとめました。</p></div>`
            stalker.innerHTML = text
            break
          }
        };
      }
    });
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


    switch (className) {
      case hasClassNames(element, '201212'):
        initBorder()
        css.style.border = "solid 3px #38b508";
        html.style.border = "solid 3px #38b508";

        break;
      case hasClassNames(element, '201301'):
        initBorder()
        html.style.border = "solid 3px #38b508";
        break;
    }
  }

  function initBorder() {
    let gridChildren = document.querySelectorAll<HTMLElement>('.gridChildren')
    gridChildren.forEach((element) => {
      element.style.border = "";
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





