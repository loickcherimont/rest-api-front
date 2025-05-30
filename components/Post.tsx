'use client'

import Image from 'next/image';
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
        <div id={id} className='flex rounded-lg shadow mx-5 h-32 bg-slate-100'>
            {/* Image */}
            {/* <div className='rounded-l-lg'> */}
                <Image src='/sample-image.png' alt='Sample image' width={163} className='rounded-l-lg' height={0} />
            {/* </div> */}
            {/* Informations */}
            <div className='w-full flex flex-col justify-around'>
                {/* Text */}
                <div className='flex flex-col ms-5'>
                    <h3 className='font-semibold'>{postTitle}</h3>
                    {/* .truncate to avoid text wrapping */}
                    <p className='italic truncate'>{content}</p>
                </div>
                {/* Buttons */}
                <div className='flex md:justify-end md:space-x-5 md:me-3 justify-around'>
                    <button onClick={() => handleDelete(id)} className='text-red-500 cursor-pointer hover:underline'>Delete</button>
                    {/* // Show a specific post */}
                    <Link href={`/post/${id}`} className='text-blue-500 hover:underline'>See details</Link>
                </div>
            </div>
        </div>
    );
}