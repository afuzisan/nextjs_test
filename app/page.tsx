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
      <div id="main1">
        <h1 className="logo">ポートフォリオ</h1>
      </div>
    </main>
  );
};

export default Home;
