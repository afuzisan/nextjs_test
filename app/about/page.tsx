"use client"
import {useEffect} from 'react'

export default function About() {  
    useEffect(() => {
      let a = document.querySelector('h1') 
      console.log(a) 
      a.innerText = "abc";
    }, [])
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }