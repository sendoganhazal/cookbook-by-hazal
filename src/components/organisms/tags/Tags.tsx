"use client"
import React, { useState, useEffect } from 'react';
import { fetchAllTags } from '@/lib/api-fetcher';
import Categories from '../../molecules/categories/Categories';
import styles from "./Tags.module.css";


 const Tags =  () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [tags, setTags] = useState<string[] | null>(null);

    async function getTags() {
        const data = await fetchAllTags();
        setTags(data)
    }

    useEffect(() => {
        getTags();
    }, [])



    return (
        <section className={styles.section}>
            <h2 className='mb-1 text-indigo-500 uppercase'>Tags</h2>
            <Categories categories={tags} type={"tag"} />
        </section>
    )
}
export default Tags;