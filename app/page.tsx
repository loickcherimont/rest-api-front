import Post from '@/components/Post';
import { PostType } from './types/definitions';
import Form from '@/components/Form';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function Home() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/posts`);
  const posts = await data.json();
  return (
    <div className='bg-slate-200 space-y-3'>
      <Header />
      {/* Container for all posts */}
      <div className='flex flex-col space-y-10'>
        {posts.map((post: PostType) => <Post key={post.id} id={post.id} postTitle={post.title} content={post.body} />)}
      </div>
      {/* Form.tsx - DON'T FORGET TO DISABLE .hidden CLASS AFTER STYLING STEPS */}
      <Form />
      <Footer />
    </div>
  );
}
