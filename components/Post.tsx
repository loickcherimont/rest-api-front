'use client'

import { redirect } from 'next/navigation';

type PostProps = {
    id: string;
    postTitle: string;
    content: string;
}

export default function Post(props: PostProps) {
    console.log('HOST', process.env.NEXT_PUBLIC_SERVER_HOST);
    const handleDelete = async (id: string) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/post/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.log(response);
        const data = await response.json();
        console.log('Removed: ' + data);
        redirect('');
    }
    const { id, postTitle, content } = props;
    return (
        <div id={id} className='border'>
            <h3 className='font-semibold'>{postTitle}</h3>
            <p className='italic'>{content}</p>
            <button onClick={() => handleDelete(id)} className='bg-red-500 rounded text-white px-4 py-2 cursor-pointer'>Delete</button>
        </div>
    );
}