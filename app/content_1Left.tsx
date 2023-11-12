import './content_1left.css'
import { useState, useRef, useEffect } from 'react'
import timelineData from './content_1left_data';

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
        console.log(timelineData)
    }, [])

    return (
        <>
            <h1 className="leftH1Title">WEB制作年表</h1>
            <div className="left">
                <dl className="timeline" ref={ref} onClick={handleClickDown} onContextMenu={handleClickUp}>
                    {timelineData.map((data, index) => (
                        <dl className={`days ${data.class}`} key={index}>
                            <dt>{data.date}</dt>
                            {data.events.map((event, eventIndex) => (
                                <dd key={eventIndex}>
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

