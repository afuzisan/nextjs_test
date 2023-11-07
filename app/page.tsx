"use client"
import { MouseWheel } from '../libs/mouseWheel';
import { setup, draw } from '../libs/p5';
import dynamic from 'next/dynamic';
import LoadingEl from './loadingEl';
import { useEffect } from 'react';


const Home = () => {
  const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
  });
  MouseWheel()
  function mousemove() {
    //マウスストーカー用のdivを取得
    const stalker = document.querySelector('.stalker') as HTMLElement;

    //aタグにホバー中かどうかの判別フラグ
    let hovFlag = false;

    //マウスに追従させる処理 （リンクに吸い付いてる時は除外する）
    document.addEventListener('mousemove', function (e) {
      if (!hovFlag && stalker !== null) {
        let x = e.clientX
        let y = e.clientY
        stalker.style.transform = 'translate(' + (x + 40) + 'px, ' + y + 'px)';
        var elements = document.elementsFromPoint(x, y);
        elements.forEach(element => {
          if (element?.matches("dl.days")) {
            console.log('daysにマッチ')
          }
        });
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





