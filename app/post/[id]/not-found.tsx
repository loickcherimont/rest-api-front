import Link from 'next/link';

export default function NotFound() {
    return <div className='h-screen flex flex-col items-center justify-center space-y-3'>
        <h2 className='font-bold text-5xl text-center'>404 - Page Not Found</h2>
        <p className='text-slate-700'>Sorry but this path doesn&apos;t exist, </p>
        <Link href={'/'} className='text-blue-500 hover:underline me-3'>Go to home</Link>
    </div>
}