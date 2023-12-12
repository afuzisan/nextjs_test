// app/blog/[postId]/page.tsx
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../libs/microcms";
import { relative } from "path";
import Sidebar from './Sidebar.client';
import Header from "./header"
import './style.css'

export const revalidate = 5;

export async function generateStaticParams() {
 const { contents } = await getList();

 const paths = contents.map((post) => {
  return {
   postId: post.id,
  };
 });

 return [...paths];
}

export default async function StaticDetailPage({
 params: { postId },
}: {
 params: { postId: string };
}) {

 const post = await getDetail(postId);


 if (!post) {
  notFound();
 }



 const titleStyle = {
   display: 'flex', 
   flexDirection: 'column' as 'column',
   justifyContent: 'center', 
   alignItems: 'center', 
   height: '310px',
   

 };

 const mainStyle = {
   display: 'grid', 
   gridTemplateColumns: '708px 300px', 
   gap: '30px',
   margin: 'auto',
   maxWidth: '1120px', 
   backgroundColor: "white",
   borderRadius:'12px',
   padding: '40px 40px',
 };

 const footerStyle = {
   width: '100%', 
   height: '62px', 
   backgroundColor: '#ddd',
 };

 return (
        <>
          
          <Header />
          

          {/* タイトル */}
          <div id="title">
            <h1>{post.title}</h1>
          </div>
          
          <div id="main" >
            <div>
              <div id="contents">{typeof post.content === 'string' ? parse(post.content) : ''}</div>
            </div>
            <Sidebar />
          </div>
          
          {/* フッター */}
          <div id="footer">
            
          </div>
        </>
      );
    }