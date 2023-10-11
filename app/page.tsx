"use client"
import './main.css'
import p5Types from 'p5'
import dynamic from 'next/dynamic';
// import { useEffect,useRef } from 'react';




const Home = () => {
  let x = 0;
  let noiseVariable = 0;

  const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
  });

  const setup = (p5:p5Types) =>{
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    // frameRate(3);
  }

  const draw =(p5:p5Types)=>{
    // random() 完全にランダム
    let randomValue = p5.random(0, 100);
    p5.point(x, 10000 + randomValue);
    // console.log(randomValue);
    // 0〜1を返す
    let noiseValue = p5.noise(noiseVariable) * 100;
    p5.point(x, 300 + noiseValue);
    // noiseVariable += 0.01;
    noiseVariable += 0.1;
    // console.log(noiseValue);
    x += 1;
  }


  return (
    <main>
      <div id="mainTOP">
        <div className="logoParent">
        <Sketch setup={setup} draw={draw}/> 
          <h1 className="logo">ポートフォリオ</h1>
        </div>
        <div className="logoDiscription">
        
        </div>
      </div>
    </main>
  );
};
export default Home;





