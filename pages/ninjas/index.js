import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
    const data = await (await fetch('http://jsonplaceholder.typicode.com/users')).json();
    return {
        props: {
            ninjas: data
        }
    };
}

export default function Ninjas({ ninjas }) {
    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map(ninja => (
                <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    )
}
