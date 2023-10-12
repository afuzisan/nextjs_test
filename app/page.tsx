"use client"
import './main.css'
import p5Types from 'p5'
import dynamic from 'next/dynamic';
import LoadingEl from './loadingEl'
import MouseWheel from './mouseWheel';


const Home = () => {
  MouseWheel()
  let cFlag = true
  let color = 0;
  let size = 180;

  const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
  });

  const setup = (p5:p5Types) =>{
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.stroke(200, 102, 0);
    // p5.frameRate(50);
    
  }

  const draw =(p5:p5Types)=>{
  p5.background(255);
  p5.fill(50);
  for (let i = 0; i < p5.windowWidth; i += size * 1) {
    for (let j = 0; j < p5.windowHeight; j += size * 1) {
      drawRect(i, j, p5);
    }
  }    
}
function drawRect(x:number, y:number, p5:p5Types) {
  p5.push();
  p5.translate(x, y);
  p5.translate(p5.sin(color)*10, p5.sin(color));
  p5.shearX(1.3);
  color > 200 || color < 0 ? cFlag =! cFlag : cFlag;
  cFlag === true ? p5.fill(p5.color(200, 204, color+=0.003))  : p5.fill(p5.color(200, 204, color-=0.003)) ;
  p5.ellipse(0, 0, size, size)
  p5.pop();
}

  return (
    <main>
      {/* <Sketch setup={setup} draw={draw}/> */}
      {/* <LoadingEl /> */}
      <div id="mainTOP">
        <div className="logoParent">
          <h1 className="logo">ポートフォリオ</h1>
        </div>
        <div className="logoDiscription">
        
        </div>
      </div>
    </main>
  );
};
export default Home;





