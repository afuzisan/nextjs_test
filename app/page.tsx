"use client"
import './main.css'
import { MouseWheel } from '../libs/mouseWheel';
import dynamic from 'next/dynamic';


const Home = () => {
  const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
  });
  MouseWheel()


  return (
    <main>
      {/* <Sketch setup={setup} draw={draw}/> */}
      {/* <LoadingEl /> */}
      <div id="mainTOP">
        <div className="top">OKADA AKIYA</div>
      </div>
    </main>
  );
};
export default Home;





