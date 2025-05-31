import { PostType } from '@/app/types/definitions';
import ModifyForm from '@/components/ModifyForm';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
    if(!response.ok) {
        console.error(response);
    }
    const post: PostType = await response.json();

    // verify if post contains 'id' a required property of PostType
    // If not there is an error
    if(post.id === undefined || post.id === null) {
        notFound()
    }

    return <div id={post.id} className='bg-slate-200 h-full flex flex-col items-center'>
        {/* Detailed informations for the selected post */}
        <h3 className='text-xl text-slate-600 font-bold p-3 uppercase'>{post.title}</h3>
        {/* Image in real size */}
        <div className='flex justify-center'>
            <Image src='/sample-image.png' alt='Sample image' width={400} height={0} className='rounded-lg' />
        </div>
        <p className='text-slate-600 text-justify indent-8 mt-3'>{post.body}</p>
        {/* Back to menu */}
        <div className='flex justify-end'>
            <Link href={'/'} className='text-blue-500 hover:underline me-3'>All posts</Link>
        </div>

        {/* /* ModifyForm.tsx - DON'T FORGET TO DISABLE .hidden CLASS AFTER STYLING STEPS */}
        <h3 className='text-xl text-slate-600 font-bold p-3 uppercase'>Modify this post</h3>
        <ModifyForm post={post} />
    </div>
}