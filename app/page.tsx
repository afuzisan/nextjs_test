"use client"
import './main.css'
import p5Types from 'p5'
import dynamic from 'next/dynamic';
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

const Home = () => {

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
// 以下はp5.jsの関数です
function setup(p5: p5Types) {
  let canvas = p5.createCanvas(400, 400);
  console.log(canvas.style)
  canvas.style('z-index','-1')
}

function draw(p5: p5Types) {
  p5.background(200);
  p5.ellipse(200, 200, 50, 50);
}



export default Home;
