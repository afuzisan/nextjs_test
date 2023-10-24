
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import Image from 'next/image'
import axios from "axios"
import Slider from "./swiper"
import './twoSlides.css'

const sliderContentWcontent_2_right = () => {
    const [Content, setContent] = useState<string[]>([])
    const [Images, setImage] = useState<string[] | any[]>([])
    const [Categorys, setcategory] = useState<string[] | any[]>([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/route').then((res) => {
            const contentsAf = res.data.map(element => element.content);
            const ImagesAf = res.data.map(element => element.eyecatch)
            const categoryAf = res.data.map(element => element.category.name)
            setContent(contentsAf)
            setImage(ImagesAf)
            setcategory(categoryAf)
            // console.log(res)
        })
    }, [])
    console.log(Content, Images, Categorys)
    return (
        <>
            <div id="twoSliderParent">
                <div className="twoSliderTitle">私が作ったツールやサービス</div>
                <div id="twoCards">

                    {Content.map((element, index) => {
                        console.log(element, index, Categorys[index])
                        return (
                            Categorys[index] === '作品集' ?
                                <div className="twoCard" >
                                    <div className="twoCardTitle">aaa</div>
                                    <div className="imageEl">
                                        <Image
                                            src={Images[index] !== undefined ? Images[index].url : '/logoPacks/typescript.svg'}
                                            alt="Image"
                                            width={300}
                                            height={200}
                                            objectFit="cover"
                                            objectPosition="top right"
                                        />
                                    </div>
                                    <div className="discribeEl">
                                        {element}
                                    </div>
                                </div>
                                : null

                        )
                    })}
                </div>
            </div >

        </>
    )
}

export default sliderContentWcontent_2_right