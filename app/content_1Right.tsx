import Image from 'next/image'
import './content_1Right.css'
import { useEffect } from 'react'

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
    const items = [
        {
            name: 'css',
            imagePath: '/logoPacks/css-3.svg',
            text: 'グリフィス天文台は、ロサンゼルスのグリフィス公園内にある天文台です。アールデコ調の外観と、ダウンタウンをふくめ市内を一望できます。<br />2006年に、4年に渡る大規模な改築工事が完成し、展示場やシアター、カフェなどが加えられた。また敷地内には映画「理由なき反抗」のロケ地として使用され、天文台の知名度を向上させた功績から、同作品で主演を務めたジェームズ・ディーンの銅像が建てられている。'
        },
        {
            name: 'html',
            imagePath: '/logoPacks/html-1.svg',
            text: 'グリフィス天文台は、ロサンゼルスのグリフィス公園内にある天文台です。ス公園内にある天文台です。ス公園内にある天文台です。'
        },
        {
            name: 'js',
            imagePath: '/logoPacks/javascript-1.svg',
            text: 'グリフィス天文台は、ロサンゼルスのグリフィス公園内にある天文台です。'
        },
    ];
    function hasClassNames(element: Element, className: string) {
        return (element) ? element.className.split(' ').find(element => element === className) : [];
    };
    function detailsView(){
        const firstNone = document.querySelectorAll('.firstNone')
        firstNone.forEach(element => {
            if (element instanceof HTMLElement) {
                element.style.display = 'none';
            }   
        })
        const gridChildren = document.querySelectorAll('.gridChildren')
        console.log(gridChildren)
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
                console.log(e)
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
                <div className='css gridChildren'>
                    <p className="p">CSS3</p>

                    <Image className="cssImage"
                        src="/logoPacks/css-3.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='html gridChildren' >
                    <p className="p">HTML5</p>
                    <Image className="htmlImage"
                        src="/logoPacks/html-1.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='js gridChildren'>
                    <p className="p">JavaScript</p>
                    <Image className="jsImage"
                        src="/logoPacks/javascript-1.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='ts gridChildren' >
                    <p className="p">TypeScript</p>
                    <Image
                        src="/logoPacks/typescript.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='next gridChildren' >
                    <p className="p">NEXT.js</p>
                    <Image
                        src="/logoPacks/nextjs-13.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='react gridChildren' >
                    <p className="p">React</p>
                    <Image
                        src="/logoPacks/react-1.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='node gridChildren' >
                    <p className="p">node.js</p>
                    <Image
                        src="/logoPacks/nodejs-2.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='jquery gridChildren' >
                    <p className="p">jQuery</p>
                    <Image
                        src="/logoPacks/jquery.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='linux gridChildren' >
                    <p className="p">Linux</p>
                    <Image
                        src="/logoPacks/linux-tux-1.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='playCanvas gridChildren' >
                    <p className="p">PlayCanvas</p>
                    <Image
                        src="/logoPacks/playcanvas-icon.png"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='wordpress gridChildren' >
                    <p className="p">WordPress</p>
                    <Image
                        src="/logoPacks/wordpress-icon.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='gas gridChildren' >
                    <p className="p">GAS</p>
                    <Image
                        src="/logoPacks/GAS_img.png"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='docker gridChildren' >
                    <p className="p">Docker</p>
                    <Image
                        src="/logoPacks/docker-4.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='postgresql gridChildren' >
                    <p className="p">PostgreSQL</p>
                    <Image
                        src="/logoPacks/postgresql.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='github gridChildren' >
                    <p className="p">GitHub</p>
                    <Image
                        src="/logoPacks/github-icon-1.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
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