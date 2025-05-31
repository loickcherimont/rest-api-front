'use client';

import createPost from '@/actions/create-post';

export default function Form() {
    return (
        <form className='flex flex-col justify-around space-y-6 items-center mb-3' action={createPost}>
            {/* Form header */}
            <header className='flex flex-col items-center space-y-3'>
                <h2 className='font-bold text-5xl text-center'>Create a post</h2>
                <p className='text-slate-700'>Fill all fields to create a new post</p>
            </header>
            {/* Title field */}
            <div className='field flex flex-col space-y-3'>
                <label htmlFor='title' className='text-slate-700'>Title</label>
                <input id='title' name='title' placeholder='Enter your title' required className='' />
            </div>
            {/* Body field */}
            <div className='field flex flex-col space-y-3'>
                <label htmlFor='body' className='text-slate-700'>Body</label>
                <textarea id='body' name='body' placeholder='Write something about content' required />
            </div>
            <input type='submit' value='Submit' title='Create a post' className='bg-blue-500 rounded px-3 py-2 text-white cursor-pointer transition ease-in duration-300 hover:bg-blue-700 w-32 self-center' />
        </form>
    )
}