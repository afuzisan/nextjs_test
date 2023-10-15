import Image from 'next/image'
import './icon.css'
import {useEffect,useState,useRef} from 'react'

const WContent_1_right = () =>  {
    const css = useRef();
    const html = useRef();
    const js = useRef();
    const ts = useRef();
    const next = useRef();
    const node = useRef();
    const jquery = useRef();
    const linux = useRef();
    const playCanvas = useRef();
    const wordpress = useRef();
    const docker = useRef();
    const postgresql = useRef();

    useEffect(()=>{
        init()    
    },[])


    function init(){
        // css.current.style.position = 'absolute'
        // css.current.style.left = 200 + 'px'
    }

    return (
        <div className="right">
            <div className="rightHeader">SKILL</div>
            <div className="rightIconGrid">            
                <div className='css gridChildren' ref={css}>
                    <p>CSS3</p>
                    
                    <Image
                        src="/logoPacks/css-3.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='html gridChildren' ref={html}>
                    <p>HTML5</p>
                    <Image
                        src="/logoPacks/html-1.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='js gridChildren' ref={js}>
                    <p>Javascript</p>
                    <Image
                        src="/logoPacks/javascript-1.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='ts gridChildren' ref={ts}>
                    <p>TypeScript</p>
                    <Image
                        src="/logoPacks/typescript.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='next gridChildren' ref={next}>
                    <p>nextjs</p>
                    <Image
                        src="/logoPacks/nextjs-13.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='node gridChildren' ref={node}>
                    <p>nodejs</p>
                    <Image
                        src="/logoPacks/nodejs-2.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='jquery gridChildren' ref={jquery}>
                    <p>jquery</p>
                    <Image
                        src="/logoPacks/jquery.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='linux gridChildren' ref={linux}>
                    <p>Linux</p>
                    <Image
                        src="/logoPacks/linux-tux-1.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='playCanvas gridChildren' ref={playCanvas}>
                    <p>PlayCanvas</p>
                    <Image
                        src="/logoPacks/playcanvas-icon.png"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='wordpress gridChildren' ref={wordpress}>
                    <p>WordPress</p>
                    <Image
                        src="/logoPacks/wordpress-icon.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='docker gridChildren' ref={docker}>
                    <p>Docker</p>
                    <Image
                        src="/logoPacks/docker-4.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
                <div className='postgresql gridChildren' ref={postgresql}>
                    <p>PostgreSQL</p>
                    <Image
                        src="/logoPacks/postgresql.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        objectFit="cover"
                        objectPosition="top right"
                    />
                </div>
            </div>
        </div>
    )
}
const WContent_1_left = () => {
    return (
        <p className="right">WContent_1_left</p>
    )
}
const WContent_2_right = () => {
    return (
        <p className="right">WContent_2_right</p>
    )
}
const WContent_2_left = () => {
    return (
        <p className="right">WContent_2_left</p>
    )
}

export {WContent_1_right,WContent_1_left,WContent_2_right,WContent_2_left}