import Link from 'next/link';

export default function Header() {
    return <header className='flex justify-between p-5 bg-slate-100'>
        <h1 className='font-bold text-2xl'>
            <Link href={'/'}>Blog</Link>
        </h1>
        <div>BAR</div>
    </header>
}