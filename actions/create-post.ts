'use server';

import { redirect } from 'next/navigation';

export default async function createPost(formData: FormData) {
    const title = formData.get('title');
    const body = formData.get('body');

    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/post`, {
        method: 'POST',
        body: JSON.stringify({title, body}),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json();
    console.log(data);
    if(!response.ok) {
        console.error(response);
        return
    }
    
    return redirect('/');
} 