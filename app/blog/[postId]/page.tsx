// static/[postId]/page.tsx
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../libs/microcms";

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

 return (
        <div>
          <div style={{ 
            width: '100vw', 
            height: '62px', 
            backgroundColor: 'white',
          }}>
            ヘッダー
          </div>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '310px' 
          }}>
            <img src="logo.png" alt="ロゴ" />
            <h1>{post.title}</h1>
          </div>
   
            <div id="main" style={{ 
              display: 'grid', 
              gridTemplateColumns: '665px 270px', 
              gap: '30px',
              margin: 'auto',
              maxWidth: '1045px', 
              backgroundColor: "white",
              borderRadius:'12px',
              padding: '40px 40px',
            }}>
              <div>
                <div>{parse(post.content)}</div>
              </div>
              <div id="sidebar" style={{
                backgroundColor: "white",
                borderRadius:'12px',
                // padding: '40px 40px',
              }}>
                サイドバー
              </div>
            </div>
            <div style={{ 
    width: '100vw', 
    height: '62px', 
    backgroundColor: '#ddd',
  }}>
    フッター
  </div>
        </div>
      );
    }