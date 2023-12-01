"use client";

import React,{useEffect,useState} from 'react'
import './style.css'

const sidebar = () => {
  
  const sidebarStyle = {
    backgroundColor: "white",
    borderRadius:'12px',
    position:'relative' as 'relative',
    top:'0px',
  };

  const fixedStyle = {
    width:'300px',
    borderRadius: '12px',
    backgroundColor:'#ddd',
    position:'sticky' as 'sticky',
    top:'24px',
    padding:'20px 20px 25px',
  };

  function el(){
    const contents = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5')).map(el => ({id: el.id, content: el.textContent}));
    const parentElement = document.createElement('div'); // 親要素を作成
    parentElement.style.borderLeft = '1px solid black'; // 親要素にborder-leftを追加

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const ddElement = document.querySelector(`.ddClass a[href="#${entry.target.id}"]`) as HTMLElement;
        const contentElement = document.getElementById(entry.target.id);
        if (ddElement) {
          if (entry.isIntersecting) {
            ddElement.parentElement?.classList.remove('noactive');
            ddElement.parentElement?.classList.add('active');
            if (contentElement) {
              contentElement.classList.remove('contentNoActive');
              contentElement.classList.add('contentActive');
            }
          } else {
            ddElement.parentElement?.classList.remove('active');
            ddElement.parentElement?.classList.add('noactive');
            if (contentElement) {
              contentElement.classList.remove('contentActive');
              contentElement.classList.add('contentNoActive');
            }
          }
        }
      });
    }, {
      rootMargin: '0px 0px 0% 0px', // 画面内に21%入った時に発火
      threshold: [0.3, 0.21, 0.3] // スクロールを下から上に上がった時にも21%で発火
    });

    contents.forEach((content, index) => {
      const dt = document.createElement('dt');
      const dd = document.createElement('dd');
      dd.className = 'ddClass'; // Added class name

      const link = document.createElement('a');
      link.href = `#${content.id}`;
      link.textContent = index === 0 ? 'Topへ戻る' : content.content;
      dd.appendChild(link);
      dt.appendChild(dd);
      parentElement.appendChild(dt); // dtを親要素に追加

      const element = document.getElementById(content.id);
      if (element) {
        observer.observe(element); // 見出し要素を監視対象に追加
      }
    });

    document.querySelector('.fixed')?.appendChild(parentElement); // 親要素を.fixedに追加
  }
  useEffect(()=>{
    el()
  },[])
  return (
    <div id="sidebar" style={sidebarStyle}>
      <div className="fixed" style={fixedStyle}>
        目次
      </div>
    </div>
  )
}

export default sidebar
