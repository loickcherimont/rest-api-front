import Post from '@/components/Post';
import { PostType } from './types/definitions';
import Form from '@/components/Form';

export default async function Home() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/posts`);
  const posts = await data.json();
  return (
    <div>
      {/* Blog */}
      <div className='blog'>
        {posts.map((post: PostType) => <Post key={post.id} id={post.id} postTitle={post.title} content={post.body} />)}
      </div>
      <Form />
    </div>
  );
}
