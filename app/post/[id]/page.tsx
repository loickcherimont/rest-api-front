import { PostType } from '@/app/types/definitions';
import ModifyForm from '@/components/ModifyForm';
import Link from 'next/link';

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    // get a specific post
    const { id } = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/post/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const post: PostType = await response.json();

    return <div id={post.id}>
        {/* Detailed informations for the selected post */}
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        {/* Back to menu */}
        <Link href={'/'}>All posts</Link>
        <ModifyForm post={post}/>
    </div>
}