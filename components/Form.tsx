
import createPost from '@/actions/create-post';

export default function Form() {
    return <form className='border flex flex-col h-42 justify-around' action={createPost}>
        <div className='field flex'>
            <label htmlFor='title'>Title</label>
            <input id='title' name='title' placeholder='Enter your title'/>
        </div>
        <div className='field flex'>
            <label htmlFor='body'>Body</label>
            <textarea id='body' name='body' placeholder='Write something about content' rows={4} cols={40} />
        </div>
        <input type='submit' value='Submit' title='Create a post' className='bg-blue-500 w-32 cursor-pointer'/>
    </form>
}