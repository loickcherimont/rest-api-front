'use server';

// import { redirect } from 'next/navigation';

export default async function modifyPost(formData: FormData) {
    const title = formData.get('title');
    const body = formData.get('body');

    console.log('Modify', location.pathname)

    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/post`, {
        method: 'PUT',
        body: JSON.stringify({title, body}),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json();
    console.log(data);
    
    // return redirect('/');
} 