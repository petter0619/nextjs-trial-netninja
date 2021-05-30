import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, []);

    return (
        <div className="not-found">
            <h1>Oooop....</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>home page</a></Link></p>
        </div>
    )
}
