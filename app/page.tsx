"use client"

// Home.tsx
import './main.css'
import Sketch from './sketch'


const Home = () => {
  const p5element = Sketch()
  console.log(p5element.props)
  return (
    <main>
      <div id="mainTOP">
        <div className="logoParent">
          <h1 className="logo">ポートフォリオ</h1>
    
          {p5element}
    
        </div>
        <div className="logoDiscription">
          説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明
        </div>

      </div>
    </main>
  );
};

export default Home;
