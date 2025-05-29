import Post from '@/components/Post';
import { PostType } from './types/definitions';

export default async function Home() {
  console.log('HOST HOME: ' + process.env.NEXT_PUBLIC_SERVER_HOST)
  const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/posts`);
  const posts = await data.json();
  return (
    <div>
      <div className='blog'>
        {posts.map((post: PostType) => <Post key={post.id} id={post.id} postTitle={post.title} content={post.body} />)}
      </div>
    </div>
  );
}
