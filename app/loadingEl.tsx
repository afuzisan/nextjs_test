import './loading.css'
import {useEffect, useState } from 'react';

const loadingEl = () => {
  useEffect(()=>{
    window.setTimeout(()=>{
        document.querySelector('#loading')?.remove()
    },3000)
  },[])
  return (
    <div id="loading"></div> 
  )
}

export default loadingEl