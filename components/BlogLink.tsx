import { BlogLinkType } from '@/app/types/definitions';
import Link from 'next/link';

export default function BlogLink({ href, children }: BlogLinkType) {
    return <Link href={href} className='text-blue-500 hover:underline'>{children}</Link>
}