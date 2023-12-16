// app/blog/[postId]/page.tsx
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../libs/microcms";
import { relative } from "path";
import Sidebar from './Sidebar.client';
import Header from "./header"
import './style.css'
import SidebarButton from './sidebarButton.client'
import { Metadata } from 'next'
import SeoComponent from './metadata'

type KeywordItem = {
  keyword: string;
};
export async function generateMetadata(url: { params: { postId: string } } ): Promise<Metadata> {

  const response = await getDetail(url.params.postId);
  const title = await response.title
  const description = await response.description
  const keywordArray  = await response.keywordADD

  const keywords = keywordArray.map((item: KeywordItem) => item.keyword);

  return SeoComponent({
    title: title,
    description: description,
    keywords: keywords
  }
  )
}

export const revalidate = 5;

export default async function StaticDetailPage({params: { postId }}: {params: { postId: string };}) 
{
 const post = await getDetail(postId);

 if (!post) {
  notFound();
 }

 return (
        <>
          <div className="landscape">縦画面で見てください。</div>
          <Header />
          <div id="title">
            <h1>{post.title}</h1>
          </div>
          <SidebarButton />
          <div id="main" >
            <div>
              <div id="contents">{typeof post.content === 'string' ? parse(post.content) : ''}</div>
            </div>
            <Sidebar />
          </div>
          <div id="footer">
            
          </div>
        </>
  );
}

