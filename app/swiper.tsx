import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/modules'
import React, { useState, useEffect } from 'react'
import Link from "next/link"
import axios from "axios"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// カルーセルにする画像のソースをリストにします


const Slider = () => {
    // const [Content, setContent] = useState([])
    const [images, setImage] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/route').then((res) => {
            console.log(res.data[0])
            // setContent(res.data[0].content)
            let result = res.data.map((c) => {
                return c.eyecatch.url
            })
            setImage(result)
        })
        console.log(images)
    }, [])


    // const images = ['/dummy/1.jpg', '/dummy/2.jpg', '/dummy/3.jpg']
    {/* <div style={style} dangerouslySetInnerHTML={{ __html: Content }} /> */ }
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3} //一度に表示するスライドの数
            pagination={{
                clickable: true,
            }} //何枚目のスライドかを示すアイコン、スライドの下の方にある
            navigation //スライドを前後させるためのボタン、スライドの左右にある
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}

        >
            {images.map((src: string, index: number) => {
                return (
                    <SwiperSlide key={`${index}`}>
                        <Image src={src} width={150} height={150} alt="test_image" />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Slider