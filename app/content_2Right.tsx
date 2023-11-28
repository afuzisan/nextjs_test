import React, { useState, useEffect } from 'react'
import Link from "next/link";
import Image from 'next/image'
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"
import './content_2Right.css'

const sliderContentWcontent_2_right = () => {
    const [Content, setContent] = useState<string[]>([])
    const [Images, setImage] = useState<string[] | any[]>([])
    const [Categorys, setcategory] = useState<string[] | any[]>([])
    const [Ids, setid] = useState<string[] | any[]>([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/route').then((res: AxiosResponse<any[]>) => {
            const contentsAf = res.data.map((element: { content: string; eyecatch: string; category: { name: string }; id:string;}) => element.content);
            const ImagesAf = res.data.map((element: { content: string; eyecatch: string; category: { name: string }; id:string;}) => element.eyecatch)
            const categoryAf = res.data.map((element: { content: string; eyecatch: string; category: { name: string }; id:string;  }) => element.category.name)
            const IdAf = res.data.map((element: { content: string; eyecatch: string; category: { name: string }; id:string;  }) => element.id)
            setContent(contentsAf)
            setImage(ImagesAf)
            setcategory(categoryAf)
            setid(IdAf)
          
        })
    }, [])
    // console.log(Content, Images, Categorys)
    return (
        <>
            <div id="twoSliderParent">
                <div className="twoSliderTitle">私が作ったツールやサービス</div>
                <div id="twoCards">

                    {Content.map((element, index) => {
                        // console.log(element, index, Categorys[index])
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
                                    <Link href={`/blog/${Ids[index]}`}>   
                                    <div className="discribeEl">
                                        {element}
                                    </div>
                                    </Link>
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