import Post from '@/components/Post';
import { PostType } from './types/definitions';
import BlogLink from '@/components/BlogLink';

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/posts`);
  const posts = await response.json();
  return (
    <div className='bg-slate-200 space-y-3'>
      {/* Container for all posts */}
      <div className='flex flex-col space-y-10'>
        {posts.map((post: PostType) => <Post key={post.id} id={post.id} postTitle={post.title} content={post.body} />)}
      </div>
      {/* <Link href='/edit'>Create a post</Link> */}
      <BlogLink href='/edit'>Create a post</BlogLink>
    </div>
  );
}
