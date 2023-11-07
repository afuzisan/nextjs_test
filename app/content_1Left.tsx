import './content_1left.css'
import { useState, useRef, useEffect } from 'react'

const Content_1Left = () => {
    console.log('レンダリング')
    let scrollVolume = 50
    let scrollDuration = 100
    const unit = 'vh'
    const [up, setUp] = useState(0)
    const [beforeUp, beforeSetUp] = useState(0)
    const [down, setDown] = useState(-scrollVolume)
    const [beforeDown, beforeSetDown] = useState(down + scrollVolume)
    const ref = useRef<HTMLDListElement>(null)

    function handleClickUp(event: any) {
        event.preventDefault();
        ref.current !== null ? ref.current.style.top = `${up}${unit}` : null
        up >= 0 ? setUp((pre: number) => pre) : setUp((pre: number) => pre + scrollVolume + 6)
        beforeUp >= 0 ? beforeSetUp(up) : beforeSetUp((pre: number) => pre = up)

        setDown((pre: number) => up - scrollVolume)
        beforeSetDown((pre: number) => pre = up)

        const keyframes = [
            { top: `${beforeUp}${unit}` }, // 開始時の状態
            { top: `${up}${unit}` } // 終了時の状態
        ];
        const options = animationOption()

        // アニメーションを実行
        ref.current !== null ? ref.current.animate(keyframes, options) : null

    }

    function handleClickDown(event: any) {
        event.preventDefault();
        console.log(`${down}${unit}`)
        ref.current !== null ? ref.current.style.top = `${down}${unit}` : null

        setDown((pre: number) => pre - scrollVolume - 6)
        beforeSetDown((pre: number) => pre = down)

        setUp((pre: number) => down + scrollVolume)
        beforeSetUp((pre: number) => pre = down)

        const keyframes = [
            { top: `${beforeDown}${unit}` }, // 開始時の状態
            { top: `${down}${unit}` } // 終了時の状態
        ];

        const options = animationOption()

        // アニメーションを実行
        ref.current !== null ? ref.current.animate(keyframes, options) : null
    }
    function animationOption() {
        // アニメーションの詳細を定義
        return ({
            easing: "ease",
            duration: scrollDuration
        })
    }

    function onmouseout() {
        let leftEl = document.querySelector('.left')
        console.log(leftEl)
        if (leftEl !== null) {
            leftEl.addEventListener('mouseout', () => {
                // element.classList.remove('aaaa')
                // console.log('out')
            });
        }
    }

    function mouseOver() {
        let addClassName = 'toolTips'
        let daysEl = document.querySelectorAll('.days')
        daysEl.forEach(element => {
            element.addEventListener('mouseover', () => {
                let daysEl = document.querySelectorAll('.days')
                daysEl.forEach((element, index) => {
                    if (element !== null) {
                        element.classList.remove(addClassName)
                    }
                });
                element.classList.add(addClassName)
            })
            let leftEl = document.querySelector('.left')
            console.log(leftEl)
            if (leftEl !== null) {
                leftEl.addEventListener('mouseout', () => {
                    element.classList.remove(addClassName)
                    // console.log('out')
                });
            }
        });
    }
    useEffect(() => {
        mouseOver()
        onmouseout()
    }, [])

    return (
        <>
            <h1 className="leftH1Title">WEB制作年表</h1>
            <div className="left">
                <dl className="timeline" ref={ref} onClick={handleClickDown} onContextMenu={handleClickUp}>
                    <dl className="days">
                        <dt>2012年12月</dt>
                        <dd>
                            <h2>初めてのWEBサイト制作</h2>
                            <p>自社のWEBサイトをHTMLとCSSで友達と二人で作りました。</p>
                            <p><small>制作期間は3ヶ月</small></p>
                            <a href="https://www.dropbox.com/home/%E8%87%AA%E4%BD%9C%E3%82%B5%E3%82%A4%E3%83%88/CMS?di=left_nav_browse" target="_blank">DropBoxにファイルが残ってました</a>
                        </dd>
                    </dl>
                    <dl className="days">
                        <dt>2013年1月</dt>
                        <dd>
                            <h2>初めてのWEBサービス制作</h2>
                            <p>HTMLとCSSだけで、無料ディレクトリ登録サイトのポータルサイトを作りました。</p>
                            <p>動的な処理は出来なかったのでメールでやり取りしてました。</p>
                        </dd>
                    </dl>
                    <dl className="days">
                        <dt>2013年4月</dt>
                        <dd>
                            <h2>WordPressを使いだす</h2>
                            <p>WordPressのテンプレートを少しだけ改修する</p>
                            <p>WordPressのカスタマイズをどうしてもしたかったため</p>
                            <p>PHPを意味も分からず弄り、何度も動かなくなり絶望しながら作りました。</p>
                        </dd>
                    </dl>
                    <dl className="days">
                        <dt>2013年8月</dt>
                        <dd>
                            <h2>JavaScriptを使って横断検索サイトを作る</h2>
                            <p>一部始終という横断検索サイトを作りました。</p>
                            <a href="https://www.dropbox.com/home/%E3%82%AB%E3%83%A1%E3%83%A9%E3%80%81%E7%94%BB%E5%83%8F/img?preview=urligainomozi.png" target="_blank">画像だけ残ってました。</a>

                        </dd>
                    </dl>
                    <dl className="days">
                        <dt>2014年1月</dt>
                        <dd>
                            <h2>2chまとめサイトの量産を始める</h2>
                            <p>当時スマホゲームの勢いがあったので、日本でリリースされるスマホゲームをピックアップして</p>
                            <p>出来るだけ多くの2chまとめブログを作ってました。</p>
                            <p>1日３～５サイト作り、記事の更新は全自動まとめツールでした。</p>
                            <p>沢山作ってた理由は、何がヒットするゲームになるのか予想するのが難しかった為です。</p>
                            <p>この時は毎月10万ぐらいずつ広告収入が増えていきました。</p>
                        </dd>
                    </dl>
                </dl>
            </div>
        </>
    )
}

export default Content_1Left 
