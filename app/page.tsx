"use client"

// Home.tsx
import { useState } from "react"; // React Hooksを使うためにインポート

const Home = () => {
  const [count, setCount] = useState(0); // countというstateを定義し、初期値を0に設定
  console.log(count)

  const handleClick = () => { // ボタンがクリックされたときの処理を定義
    setCount(count + 1); // countを1増やす
    console.log('aaaa')
  };

  return (
    <main>
      <h1>test</h1>
      <p>カウント: {count}</p> 
      <button onClick={handleClick}>+1</button>
    </main>
  );
};

export default Home;
