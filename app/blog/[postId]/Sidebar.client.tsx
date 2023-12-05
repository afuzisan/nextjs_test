"use client";

import React,{useEffect,useState} from 'react'
import './style.css'

const sidebar = () => {
  const [flag, setFlag] = useState(false);
  const sidebarStyle = {
    backgroundColor: "white",
    borderRadius:'12px',
    position:'relative' as 'relative',
    top:'0px',
  };

  const fixedStyle = {
    width:'300px',
    borderRadius: '12px',
    backgroundColor:'#fff',
    position:'sticky' as 'sticky',
    top:'24px',
    padding:'20px 20px 25px',
  };

  let clickHandler = (e: Event,observer: IntersectionObserver) => {
    observer.disconnect();
    const parentElement = (e.target as HTMLElement).parentElement;
    if (!parentElement) return;
    
    const href = parentElement.querySelector('a')?.getAttribute('href');
    if (!href || !href.startsWith('#') || href.length <= 1) return;
    
    const idElement = document.querySelector(href);
    if (!idElement) return;
    
    const idElementStyle = (idElement as HTMLElement).style;
    idElementStyle.transition = 'all 1s ease-in-out';
    idElementStyle.textDecoration = 'underline';
    idElementStyle.textDecorationColor = 'red';
    idElementStyle.textDecorationThickness = '4px';
    idElementStyle.textDecorationSkipInk = 'none';
    const ddElement = document.querySelector(`.ddClass a[href="#${idElement.id}"]`) as HTMLElement;
    ddElement.parentElement?.classList.add('activeYellow');
    
    idElement.addEventListener('transitionend', () => {
      ddElement.parentElement?.classList.remove('activeYellow');
      setContents(Array.from(document.querySelectorAll('h1, h2, h3, h4, h5')).map(el => ({id: el.id, content: el.textContent || ''})));
      idElementStyle.transform = '';
      idElementStyle.textDecoration = '';
      idElementStyle.textDecorationColor = '';
      idElementStyle.textDecorationThickness = '';
      idElementStyle.textDecorationSkipInk = '';
    });
  };

  function ddClassFn(observer: IntersectionObserver) {
    const ddClassEl = document.querySelectorAll('.ddClass')
    ddClassEl.forEach(element => {
      element.addEventListener('click', (e) => clickHandler(e, observer));
    });
  }

  const [contents, setContents] = React.useState<Array<{id: string, content: string}>>([]);

  useEffect(() => {
    setContents(Array.from(document.querySelectorAll('h1, h2, h3, h4, h5')).map(el => ({id: el.id, content: el.textContent || ''})));
  }, []);

  useEffect(() => {
    let parentElement = document.querySelector('.fixed div') as HTMLElement; // 親要素を取得
    
    if (!parentElement) { // 親要素が存在しない場合のみ作成
      parentElement = document.createElement('div') as HTMLElement; // 親要素を作成
      parentElement.classList.add('parentElement'); // parentElementにclass aをつける
      parentElement.style.borderLeft = '1px solid black'; // 親要素にborder-leftを追加
    }

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
        if(!flag){
        const dt = document.createElement('dt');
        const dd = document.createElement('dd');
        dd.className = 'ddClass'; // Added class name

        const link = document.createElement('a');
        link.href = `#${content.id}`;
        link.textContent = index === 0 ? 'トップへ戻る' : content.content;
        
          setFlag(true);
          dd.appendChild(link);
          dt.appendChild(dd);
          parentElement.appendChild(dt); // dtを親要素に追加
        }
        

        const element = document.getElementById(content.id);
        if (element) {
          observer.observe(element); // 見出し要素を監視対象に追加
        }
      });
      document.querySelector('.fixed')?.appendChild(parentElement); // 親要素を.fixedに追加
    
    ddClassFn(observer);
    return () => {
      observer.disconnect();
    };
  }, [contents]);

  return (
    <div id="sidebar" style={sidebarStyle}>
      <div className="fixed" style={fixedStyle}>
        目次
      </div>
    </div>
  )
}

export default sidebar


