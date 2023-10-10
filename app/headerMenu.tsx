import React from 'react'
import Link from 'next/link';
import HeaderMenuData from './headerMenuData';
import { data } from 'autoprefixer';

const headerMenu = () => {
    return (
        HeaderMenuData.map((data) => {
            return (
                <li key={data.id}><Link href={data.link}>{data.name}</Link></li>
            )
        }) 
    )
}

export default headerMenu