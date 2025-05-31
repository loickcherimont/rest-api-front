'use client'; // Error boundaries must be Client Components

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const router = useRouter()
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Error', error)
    }, [error])

    const handleReset = () => {
        reset();
        router.refresh();
    }


    return (

        <div className='h-screen flex flex-col items-center justify-center space-y-3'>
            <h2 className='font-bold text-5xl text-center'>Something went wrong!</h2>
            <p className='text-slate-700'>Sorry for this moment, we cannot find any resource</p>
            <button
                className='bg-blue-500 rounded px-3 py-2 text-white cursor-pointer transition ease-in duration-300 hover:bg-blue-700'
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    handleReset
                }
            >
                Try again
            </button>
        </div>

    )
}