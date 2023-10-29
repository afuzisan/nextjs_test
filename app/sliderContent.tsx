import Image from 'next/image'
import SliderContentWcontent_2_right from './twoSlides'
import './icon.css'
import './photo.css'
import './wContent_1_left.css'
import { useEffect, useState, useRef } from 'react'

export const revalidate = 10;
const WContent_1_right = () => {

    return (
        <div className="right">
            <div className="rightHeader"><span>M</span><span>Y</span><span> </span><span>S</span><span>K</span><span>I</span><span>L</span><span>L</span></div>
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
    console.log('レンダリング')
    const [up, setUp] = useState(50)
    const [beforeUp, beforeSetUp] = useState(up - 50)
    const [down, setDown] = useState(0)
    const [beforeDown, beforeSetDown] = useState(down + 50)
    const ref = useRef<HTMLDivElement>(null)

    function handleClickUp() {

        ref.current !== null ? ref.current.style.top = `${up}px` : null
        console.log(up, '', beforeUp)

        up >= 0 ? setUp((pre: number) => pre) : setUp((pre: number) => pre + 50)
        up >= 0 ? beforeSetUp((pre: number) => pre = up) : beforeSetUp((pre: number) => pre = up)

        setDown((pre: number) => up - 50)
        beforeSetDown((pre: number) => pre = up)
        console.log(up + ' ', 'UP', ' ' + beforeUp, ' ' + 'beforeUP')
        const keyframes = [
            { top: `${beforeUp}px` }, // 開始時の状態
            { top: `${up}px` } // 終了時の状態
        ];
        // アニメーションの詳細を定義
        const options = {
            easing: "ease",
            duration: 100
        };
        // アニメーションを実行
        ref.current !== null ? ref.current.animate(keyframes, options) : null


    }

    function handleClickDown() {

        ref.current !== null ? ref.current.style.top = `${down}px` : null
        setDown((pre: number) => pre - 50)
        beforeSetDown((pre: number) => pre = down)

        setUp((pre: number) => down + 50)
        beforeSetUp((pre: number) => pre = down)

        console.log(down + ' ', 'down', ' ', beforeDown + ' ' + 'beforeDown')
        const keyframes = [
            { top: `${beforeDown}px` }, // 開始時の状態
            { top: `${down}px` } // 終了時の状態
        ];
        // アニメーションの詳細を定義
        const options = {
            easing: "ease",
            duration: 100
        };
        // アニメーションを実行
        ref.current !== null ? ref.current.animate(keyframes, options) : null



    }
    useEffect(() => {

    }, [])
    return (
        <>

            <h1 className="leftH1Title">WEB制作年表</h1>
            <div className="upArrow">
                <button className="dli-chevron-up" onClick={handleClickUp} ></button>
            </div>
            <div className="downArrow">
                <button className="dli-chevron-down" onClick={handleClickDown} ></button>
            </div>
            <div className="left">
                <dl className="timeline" ref={ref}>
                    <dt>2012年12月</dt>
                    <dd>
                        <h2>初めてのWEBサイト制作</h2>
                        <p>自社のWEBサイトをHTMLとCSSで友達と二人で作りました。</p>
                        <p><small>制作期間は3ヶ月</small></p>
                        <a href="https://www.dropbox.com/home/%E8%87%AA%E4%BD%9C%E3%82%B5%E3%82%A4%E3%83%88/CMS?di=left_nav_browse" target="_blank">DropBoxにファイルが残ってました</a>
                    </dd>
                    <dt>2013年1月</dt>
                    <dd>
                        <h2>初めてのWEBサービス制作</h2>
                        <p>HTMLとCSSだけで、無料ディレクトリ登録サイトのポータルサイトを作りました。</p>
                        <p>動的な処理は出来なかったのでメールでやり取りしてました。</p>
                    </dd>
                    <dt>2013年4月</dt>
                    <dd>
                        <h2>WordPressを使いだす</h2>
                        <p>WordPressのテンプレートを少しだけ改修する</p>
                        <p>WordPressのカスタマイズをどうしてもしたかったため</p>
                        <p>PHPを意味も分からず弄り、何度も動かなくなり絶望しながら作りました。</p>
                    </dd>
                    <dt>2013年8月</dt>
                    <dd>
                        <h2>JavaScriptを使って横断検索サイトを作る</h2>
                        <p>一部始終という横断検索サイトを作りました。</p>
                        <a href="https://www.dropbox.com/home/%E3%82%AB%E3%83%A1%E3%83%A9%E3%80%81%E7%94%BB%E5%83%8F/img?preview=urligainomozi.png" target="_blank">画像だけ残ってました。</a>

                    </dd><dt>2014年1月</dt>
                    <dd>
                        <h2>2chまとめサイトの量産を始める</h2>
                        <p>当時スマホゲームの勢いがあったので、日本でリリースされるスマホゲームをピックアップして</p>
                        <p>出来るだけ多くの2chまとめブログを作ってました。</p>
                        <p>1日３～５サイト作り、記事の更新は全自動まとめツールでした。</p>
                        <p>沢山作ってた理由は、何がヒットするゲームになるのか予想するのが難しかった為です。</p>
                        <p>この時は毎月10万ぐらいずつ広告収入が増えていきました。</p>
                    </dd>
                </dl>
                {/* <Slider /> */}
            </div>
        </>
    )
}
const WContent_2_right = () => {
    return (
        <SliderContentWcontent_2_right />
    )


}
const WContent_2_left = () => {
    return (
        <p className="right">WContent_2_left</p>
    )
}

export { WContent_1_right, WContent_1_left, WContent_2_right, WContent_2_left }