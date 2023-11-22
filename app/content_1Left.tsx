import './content_1left.css'
import { useState, useRef, useEffect } from 'react'
import timelineData from './content_1left_data';


// コンテンツ1の左側を表示するコンポーネント
const Content_1Left = () => {
    console.log('レンダリング')
    let scrollVolume = 44
    let scrollDuration = 100
    const unit = 'vh'
    const [up, setUp] = useState(0)
    const [beforeUp, beforeSetUp] = useState(0)
    const [down, setDown] = useState(-scrollVolume)
    const [beforeDown, beforeSetDown] = useState(down + scrollVolume)
    const ref = useRef<HTMLDListElement>(null)

    // 上にスクロールするためのハンドラ
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

    // 下にスクロールするためのハンドラ
    function handleClickDown(event: any) {
        event.preventDefault();
        // console.log(`${down}${unit}`)
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
    // アニメーションのオプションを定義する関数
    function animationOption() {
        // アニメーションの詳細を定義
        return ({
            easing: "ease",
            duration: scrollDuration
        })
    }

    // マウスが要素から離れたときのハンドラ
    function onmouseout() {
        let leftEl = document.querySelector('.left')
        // console.log(leftEl)
        if (leftEl !== null) {
            leftEl.addEventListener('mouseout', () => {
            });
        }
    }

    // マウスが要素に乗ったときのハンドラ
    function mouseOver() {
        let addClassName = 'toolTips'
        let addClassNameRight = 'toolTipsRight'
        let daysEl = document.querySelectorAll('.days')


        daysEl.forEach(element => {
            element.addEventListener('mouseover', () => {
                let daysEl = document.querySelectorAll('.days')
                let rightContentwheelFlag1El = document.querySelector('.rightContentwheelFlag1')
                daysEl.forEach((element, index) => {
                    if (element !== null) {
                        element.classList.remove(addClassName)
                    }
                });
                rightContentwheelFlag1El?.classList.add(addClassNameRight)
                element.classList.add(addClassName)


            })
            let leftEl = document.querySelector('.left')
            // console.log(leftEl)
            if (leftEl !== null) {
                leftEl.addEventListener('mouseout', () => {
                    element.classList.remove(addClassName)
                    let rightContentwheelFlag1El = document.querySelector('.rightContentwheelFlag1')
                    rightContentwheelFlag1El?.classList.remove(addClassNameRight)

                });
            }
        });
    }
    
    // コンポーネントがマウントされたときにハンドラを設定
    useEffect(() => {
        mouseOver()
        onmouseout()
    }, [])

    return (
        <>
            <h1 className="leftH1Title">勉強年表</h1>
            <div className="left">
                <dl className="timeline" ref={ref} onClick={handleClickDown} onContextMenu={handleClickUp}>
                    {timelineData.map((data, index) => (
                        <dl className={`days ${data.class}`}  key={index}>
                            <dt>{data.date}</dt>
                            {data.events.map((event, eventIndex) => (
                                <dd className="dd" key={eventIndex}>
                                    <h2>{event.title}</h2>
                                    {event.description.map((desc, descIndex) => (
                                        <p key={descIndex}>{desc}</p>
                                    ))}
                                    {('link' in event) && <a href={event.link} target="_blank">{event.linkDescription}</a>}
                                </dd>
                            ))}
                        </dl>
                    ))}
                </dl>
            </div>
        </>
    )
}

export default Content_1Left 
