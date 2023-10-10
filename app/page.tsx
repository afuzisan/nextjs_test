"use client"
import './main.css'
import React, { useState } from 'react';
import p5Types from 'p5'
import dynamic from 'next/dynamic';
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

const Home = () => {
  const [count, setCount] = useState(0);
  function mouseClicked(p5: p5Types) {
    // クリックしたときにカウントを増やす処理を書く
    setCount(count + 1);
  }

  return (
    <main>
      <div id="mainTOP">
        <div className="logoParent">
          <h1 className="logo">ポートフォリオ</h1>
        </div>
        <div className="logoDiscription">
        {/* <Sketch setup={setup} draw={draw} /> */}
        <Sketch setup={setup} draw={draw} mouseClicked={mouseClicked} /> */}
        <p>カウント: {count}</p>
        </div>
      </div>
    </main>
  );
};
// 以下はp5.jsの関数です
function setup(p5: p5Types, canvasParentRef: Element) {
  p5.createCanvas(400, 400).parent(canvasParentRef);
}

function draw(p5: p5Types) {
  p5.background(200);
  p5.ellipse(200, 200, 50, 50);
}



export default Home;
