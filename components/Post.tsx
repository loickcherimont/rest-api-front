'use client'

import Link from 'next/link';
import { redirect } from 'next/navigation';

type PostProps = {
    id: string;
    postTitle: string;
    content: string;
}

export default function Post({ id, postTitle, content }: PostProps) {
    // To remove a post
    const handleDelete = async (id: string) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/post/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        console.log('Removed: ' + data);
        redirect('/');
    }


    return (
        <div id={id} className='border'>
            <h3 className='font-semibold'>{postTitle}</h3>
            <p className='italic'>{content}</p>
            <button onClick={() => handleDelete(id)} className='bg-red-500 rounded text-white px-4 py-2 cursor-pointer'>Delete</button>
            {/* // Show a specific post */}
            <Link href={`/post/${id}`} className='text-blue-500'>See details</Link>
        </div>
    );
}