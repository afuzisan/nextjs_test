"use client"
import  React,{useEffect} from 'react';


export default function About() {  

  function a(){
    const timerId = setInterval(()=>{ // setIntervalの返り値をtimerIdに代入
      console.log('testessss')
    }, 1000);
    return timerId; // timerIdを返す
  }

  useEffect(()=>{
    const timerId = a(); // a関数の返り値をtimerIdに代入
    return () => clearInterval(timerId); // timerIdをclearIntervalの引数に渡す
  },[a]) // 依存配列にa関数を追加する
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }