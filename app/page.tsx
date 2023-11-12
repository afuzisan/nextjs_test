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
  function mousemove() {
    //マウスストーカー用のdivを取得
    const stalker = document.querySelector('.stalker') as HTMLElement;

    // マウスの動きに追従するイベントリスナーを追加
    document.addEventListener('mousemove', function (e) {

      // ストーカーがnullでない場合のみ処理を行う
      if (stalker !== null) {
        let x = e.clientX
        let y = e.clientY
        // ストーカーの位置をマウスの位置に追従させる
        stalker.style.transform = 'translate(' + (x + 40) + 'px, ' + y + 'px)';
        // マウスの現在位置にある要素を取得
        var elements = document.elementsFromPoint(x, y);
        // 取得した要素をループで処理
        for (let i = 0; i < elements.length; i++) {
          // 要素が"dl.toolTips"にマッチする場合の処理
          if (elements[i]?.matches("dl.toolTips")) {
            initBorder()
            let toolTips = document.querySelector('dl.toolTips') as Element
            // クラススイッチの処理を行う
            classSwitch(toolTips, '201212')
            classSwitch(toolTips, '201301')

            // ツールチップのテキストを設定
            let text =
              `<div id="timeLineToolTip"><p>左クリックで進む</p><p>右クリックで戻る</p></div>`
            stalker.innerHTML = text

            break
          } 
          // 要素が"div.right"にマッチする場合の処理
          else if (elements[i]?.matches("div.right")) {
            initBorder()
            // ツールチップのテキストを設定
            let text =
              `<div id="rightToolTip"><p>オカダのスキルセット</p><p>私が勉強してきたスキルをアイコンで表示しています。</p></div>`
            stalker.innerHTML = text

            break
          }
          // 要素が"div.left"にマッチする場合の処理
          else if (elements[i]?.matches("div.left")) {
            initBorder()
            // ツールチップのテキストを設定
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


    const boxShadowStyle = "1em -1em #ccc, -1em 1em #ccc, 1em 1em #ccc, -1em -1em #ccc";
    const boxShadowDuration = "0.5s";
    function applyBoxShadow(element: HTMLElement | null){
      if (element) {
        element.style.boxShadow = boxShadowStyle;
        element.style.transitionDuration = boxShadowDuration;
      }
    };

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





