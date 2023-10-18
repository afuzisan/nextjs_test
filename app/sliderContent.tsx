import Image from 'next/image'
import './icon.css'
import './photo.css'
import './wContent_1_left.css'
import Slider from './swiper';
import { useEffect, useState, useRef } from 'react'


const WContent_1_right = () => {

    return (
        <div className="right">
            <div className="rightHeader"><span>S</span><span>K</span><span>I</span><span>L</span><span>L</span></div>
            <div className="rightIconGrid">
                <div className='css gridChildren'>
                    <p className="p">CSS3</p>

                    <Image
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
                    <Image
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
                    <Image
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
        </div>
    )
}
const WContent_1_left = () => {
    useEffect(() => {

    }, [])
    return (
        <div className="left">
            <dl>
                <dt>1990年11月</dt>
                <dd>
                    <h2>日本に生まれる</h2>
                    <p>詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。</p>
                </dd>
                <dt>1996年4月</dt>
                <dd>
                    <h2>小学校に入学</h2>
                    <p>詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。</p>
                </dd>
                <dt>2002年4月</dt>
                <dd>
                    <h2>中学校に入学</h2>
                    <p>詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。</p>
                </dd>
                <dt>2005年4月</dt>
                <dd>
                    <h2>高校に入学</h2>
                    <p>詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。</p>
                </dd><dt>2008年4月</dt>
                <dd>
                    <h2>大学に入学</h2>
                    <p>詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。詳細な文章が入ります。</p>
                </dd>
            </dl>
            {/* <Slider /> */}
        </div>
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

export { WContent_1_right, WContent_1_left, WContent_2_right, WContent_2_left }