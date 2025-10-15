"use client"
import React, { useState, useEffect } from 'react';
import { fetchAllMealTypes } from '@/lib/api-fetcher';
import Categories from '../../molecules/categories/Categories';
import styles from "./MealTypes.module.css";


 const MealTypes =  () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [mealTypes, setMealTypes] = useState<string[] | null>(null);

    async function getMealTypes() {
        const data = await fetchAllMealTypes();
        setMealTypes(data);
    }

    useEffect(() => {
        getMealTypes();
    }, [])



    return (
        <section className={styles.section}>
            <h2 className='mb-1 text-indigo-500 uppercase'>Meal Types</h2>
            <Categories categories={mealTypes} type={"meal-type"} />
        </section>
    )
}
export default MealTypes;