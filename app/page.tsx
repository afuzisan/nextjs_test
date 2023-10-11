"use client"
import './main.css'
import p5Types from 'p5'
import dynamic from 'next/dynamic';

const Home = () => {
  let color = 0;
  let size = 20;

  const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
  });

  const setup = (p5:p5Types) =>{
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.noStroke();
  }

  const draw =(p5:p5Types)=>{
  p5.background(255);
  p5.fill(50);
  for (let i = 0; i < p5.windowWidth; i += size * 4) {
    for (let j = 0; j < p5.windowHeight; j += size * 4) {
      drawRect(i, j, p5);
    }
  }    
}
// rect
function drawRect(x:number, y:number, p5:p5Types) {
  p5.push();
  p5.translate(x, y);
  console.log(color)
  color > 255 ? 
  p5.fill(p5.color(255, 204, 0))&&(color = 0) : 
  p5.fill(p5.color(255, 204, color+=0.003)) 
  p5.ellipse(0, 0, size, size);
  p5.pop();
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





