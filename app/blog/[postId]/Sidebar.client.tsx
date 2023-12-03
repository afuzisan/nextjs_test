"use client";

import React,{useEffect,useState} from 'react'
import './style.css'

const ddStyle = {
  position: 'relative',
  paddingLeft: '15px',
  marginBottom: '10px',
  listStyle: 'none'
};

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
  function ddClassFn(){
    const ddClassEl = document.querySelectorAll('.ddClass')
    ddClassEl.forEach(element => {
      element.addEventListener('click',(e)=>{
        const parentElement = (e.target as HTMLElement).parentElement;
        if (parentElement) {
          const href = parentElement.querySelector('a')?.getAttribute('href');
          if (href !== undefined && href !== null && href.startsWith('#') && href.length > 1) {
            const idElement = document.querySelector(href);
            if (idElement) {
              (idElement as HTMLElement).style.transition = 'all 1s ease-in-out';
              (idElement as HTMLElement).style.textDecoration = 'underline';
              (idElement as HTMLElement).style.textDecorationColor = 'red';
              (idElement as HTMLElement).style.textDecorationThickness = '4px';
              (idElement as HTMLElement).style.textDecorationSkipInk = 'none';
            }
            setTimeout(() => {
              if (href) {
                const idElement = document.querySelector(href);
                if (idElement) {
                  (idElement as HTMLElement).style.transform = '';
                  (idElement as HTMLElement).style.textDecoration = '';
                  (idElement as HTMLElement).style.textDecorationColor = '';
                  (idElement as HTMLElement).style.textDecorationThickness = '';
                  (idElement as HTMLElement).style.textDecorationSkipInk = '';
                }
              }
            }, 1300);    
          }
        }
      })
    });
  }
  async function el(){
    const contents = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5')).map(el => ({id: el.id, content: el.textContent}));
    const parentElement = document.createElement('div'); // 親要素を作成
    parentElement.style.borderLeft = '1px solid black'; // 親要素にborder-leftを追加

    const observer = new IntersectionObserver((entries) => {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const ddElement = document.querySelector(`.ddClass a[href="#${entry.target.id}"]`) as HTMLElement;
        const ddElementAll = document.querySelectorAll(`.ddClass a`);
        if (entry.isIntersecting) {
          for(i=1;i<ddElementAll.length;i++){
            ddElementAll[i].parentElement?.classList.remove('active');
            
          }
          ddElement.parentElement?.classList.add('active');
        } 
        
        if (entry && entry.isIntersecting && !ddElement.parentElement?.classList.contains('green') ) {
          ddElement.parentElement?.classList.add('green');
        }         
      }
    }, {
      rootMargin: '0% 0px -100px 0px', 
      threshold: [1] 
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
    await ddClassFn();
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
