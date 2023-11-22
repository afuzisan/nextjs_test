import Image from 'next/image'
import './content_1Right.css'
import { useEffect } from 'react'
import {items} from './content_1Right_data'


const content_1Right = () => {
    const detailContentsStyle: React.CSSProperties = {
        position: 'absolute',
        top: '30%',
        left: 0,
        color: 'white',
        background: 'rgba(0, 0, 0, 0.5)',
        padding: '50px',
    }
    const iTitleStyle: React.CSSProperties = {
        position: 'absolute',
        top: '0',
        left: 0,
        color: 'white',
        background: 'rgba(0, 0, 0, 0.5)',
        padding: '10px',
        width: '150px',
        textAlign:'center',
        fontSize:'20px',
    }

    function detailsView(){
        const firstNone = document.querySelectorAll('.firstNone')
        firstNone.forEach(element => {
            if (element instanceof HTMLElement) {
                element.style.display = 'none';
            }   
        })
        const gridChildren = document.querySelectorAll('.gridChildren')
        gridChildren.forEach(element => {        
        element?.addEventListener('click',(e)=>{
         const targetElement = e.target as HTMLElement;
         document.startViewTransition(() => {
            let elementName = element.className.split(' ')
           const viewIndex = document.querySelector(`.${elementName[0]}-details`); 
           const right = document.querySelector('.right') as HTMLElement;
           const rightIconGrid = document.querySelector('.rightIconGrid') as HTMLElement;
           rightIconGrid ? (rightIconGrid.style.padding = '0px', rightIconGrid.style.margin = '0 auto') : null;
           right ? (right.style.backgroundColor = '#131212') : null;
           gridChildren.forEach((element: any) => {
               let htmlElement = element as HTMLElement;
               htmlElement ? (htmlElement.style.display = 'none') : null;
           });
           if (viewIndex) {
            const elementNameChildren = document.querySelector(`.${elementName[0]}-detailsChildren`);
            (viewIndex as HTMLElement).style.display = 'block';
            (elementNameChildren as HTMLElement).style.display = 'block';
            }
         })
        })
    });
    }

    function detailsNone(){
        const firstNone = document.querySelectorAll('.firstNone')
        const gridChildren = document.querySelectorAll('.gridChildren')
        firstNone.forEach(element => {
            element.addEventListener('click',(e)=>{
                const rightIconGrid = document.querySelector('.rightIconGrid') as HTMLElement;
                const right = document.querySelector('.right') as HTMLElement;
                rightIconGrid ? (rightIconGrid.style.padding = '50px 60px 60px 60px', rightIconGrid.style.margin = '0') : null;
                right ? (right.style.backgroundColor = '#fff') : null;
                document.startViewTransition(() => {
                firstNone.forEach(element=>{
                    (element as HTMLElement).style.display = 'none';
                })
                gridChildren.forEach(element => {
                    (element as HTMLElement).style.display = 'block';
                });
                
            })
        })
        });
        
    }


    useEffect(()=>{
        detailsView()
        detailsNone()
    },[])

    return (
        <div className="right">
        <div className="rightIconGrid">
          {items.map((item) => (
            <div className={`${item.name} gridChildren`}>
              <p className="p">{item.title}</p>
              <Image
                className={`${item.name}Image`}
                src={item.image}
                alt="Image"
                width={100}
                height={100}
                objectFit="cover"
                objectPosition="top right"
              />
            </div>
          ))}
        </div>
        {items.map((item) => {
            const imageStyle: React.CSSProperties = {
                backgroundImage: `url("${item.imagePath}")`,
                width: '100%',
                height: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                filter: 'brightness(50%)',
                opacity:'0.5'
            };

            return (
                <div className={`${item.name}-details firstNone`}>
                    <div className={`${item.name}-detailsChildren`}>
                        <div className={`${item.name}Image`} style={imageStyle}></div>
                    </div>
                    <p className="i-title" style={iTitleStyle}>{item.name.toUpperCase()}</p>
                    <p className="i-desc" style={detailContentsStyle}>
                        {item.text}
                    </p>
                </div>
            );
        })}
      </div>
    )
}

export default content_1Right