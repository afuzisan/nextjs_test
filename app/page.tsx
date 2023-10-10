"use client"
import './main.css'
import React, { useState } from 'react';
import Sketch from "react-p5";


const Home = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <main>
      <div id="mainTOP">
        <div className="logoParent">
          <h1 className="logo">ポートフォリオ</h1>
        </div>
        <div className="logoDiscription">
        <Sketch setup={setup} draw={draw} mouseClicked={handleClick} />
        </div>
      </div>
    </main>
  );
};
// 以下はp5.jsの関数です
function setup(p5, canvasParentRef) {
  p5.createCanvas(400, 400).parent(canvasParentRef);
}

function draw(p5) {
  p5.background(200);
  p5.ellipse(200, 200, 50, 50);
}

export default Home;
