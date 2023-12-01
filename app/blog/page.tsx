
import Link from "next/link";
import { getList } from "../../libs/microcms";


export const revalidate = 5;

export default async function StaticPage() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div id="blogParent">
      <ul>
        {contents.map((post) => {
          return (
            <li key={post.id} >
              <img
                src={post.eyecatch !== undefined ? post.eyecatch.url : '../../logoPacks/css-3.svg'}
                sizes="100vw"
                style={{
                  width: '150px',
                  maxWidth: '150px',
                  height: 'auto',
                }}
                alt="ブログアイキャッチ画像"
              />
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}