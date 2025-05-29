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
        < form className='border flex flex-col h-42 justify-around' onSubmit={(ev: React.FormEvent<HTMLFormElement>) => {
            ev.preventDefault();
            handleModify(post.id)
        }}>
            <div className='field flex'>
                <label htmlFor='title'>Title</label>
                <input id='title' name='title' placeholder='Enter your title' value={title} onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setTitle(ev.currentTarget.value)} />
            </div>
            <div className='field flex'>
                <label htmlFor='body'>Body</label>
                <textarea id='body' name='body' placeholder='Write something about content' rows={4} cols={40} onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setBody(ev.currentTarget.value)} value={body} />
            </div>
            <input type='submit' value='Submit' title='Create a post' className='bg-blue-500 w-32 cursor-pointer' />
        </form >
    )

}