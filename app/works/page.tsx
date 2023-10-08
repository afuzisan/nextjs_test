"use client"
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'My Page Title',
}
export default function works(){
    return(
        <div>
            <h1>worksページ</h1>
        </div>
    )
}