"use client"
import './main.css'
import Sketch from "react-p5";
import p5Types from 'p5'


const Home = () => {
  return (
    <main>
      <div id="mainTOP">
        <div className="logoParent">
          <h1 className="logo">ポートフォリオ</h1>
        </div>
        <div className="logoDiscription">
         <Sketch setup={setup} draw={draw} /> 
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
