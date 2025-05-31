'use client';

import { PostType } from '@/app/types/definitions'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ModifyForm({ post }: { post: PostType }) {
    const router = useRouter();
    
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const handleModify = async (id: string) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/post/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, body }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const data = await response.json();
        console.log(data);
        router.push('/')
    }
    return (
        < form className='flex flex-col justify-around space-y-6 bg-white' onSubmit={(ev: React.FormEvent<HTMLFormElement>) => {
            ev.preventDefault();
            handleModify(post.id)
        }}>
            {/* Title field */}
            <div className='field flex flex-col space-y-3'>
                <label htmlFor='title' className='text-slate-700'>Title</label>
                <input id='title' name='title' placeholder='Enter the new title' value={title} onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setTitle(ev.currentTarget.value)} required />
            </div>
            {/* Body field */}
            <div className='field flex flex-col space-y-3'>
                <label htmlFor='body'>Body</label>
                <textarea id='body' name='body' placeholder='Write something different about the content' rows={4} cols={40} onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setBody(ev.currentTarget.value)} value={body} required />
            </div>
            {/* <input type='submit' value='Submit' title='Create a post' className='bg-blue-500 w-32 cursor-pointer' /> */}
            <input type='submit' value='Modify' title='Modify this post' className='bg-blue-500 rounded px-3 py-2 text-white cursor-pointer transition ease-in duration-300 hover:bg-blue-700 w-32 self-center' />
        </form >
    )

}