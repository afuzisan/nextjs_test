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
            let a = document.querySelector('dl.toolTips')
            console.log(a)
            let text =
              `<div id="timeLineToolTip"><p>左クリックで進む</p><p>右クリックで戻る</p></div>`
            stalker.innerHTML = text

            break
          } else if (elements[i]?.matches("div.right")) {
            let text =
              `<div id="rightToolTip"><p>オカダのスキルセット</p><p>私が勉強してきたスキルをアイコンで表示しています。</p></div>`
            stalker.innerHTML = text

            break
          }
          else if (elements[i]?.matches("div.left")) {
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





