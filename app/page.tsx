"use client"

// Home.tsx
import React, { useState } from "react"; // React Hooksを使うためにインポート

const Home = () => {
  const [count, setCount] = useState(0); // countというstateを定義し、初期値を0に設定

  const handleClick = () => { // ボタンがクリックされたときの処理を定義
    setCount(count + 1); // countを1増やす
    console.log('aaaa')
  };

  return (
    <main>
      <h1>test</h1>
      <p>カウント: {count}</p> // countの値を表示
      <button onClick={handleClick}>+1</button> // ボタンをクリックするとhandleClickが呼ばれる
    </main>
  );
};

export default Home;
