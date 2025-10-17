"use client"
import React, { useEffect, useState } from 'react';
import RecipesDataView from '@/components/molecules/recipes/RecipesDataView'
import { fetchAllRecipes } from '@/lib/api-fetcher';
import { Recipe, RecipeResponse } from '@/lib/types';



export default function AllRecipes() {
    const [recipes, setRecipes] = useState<Recipe[] | null>(null);
    async function getAllRecipes() {
        const res = await fetchAllRecipes();
        if ("error" in res) {
            return [];
        }
        setRecipes(res)
    }
    useEffect(() => {
        getAllRecipes()
    }, [])
    console.log("res", recipes)
    return (
        <section className='grid grid-nogutter'>
            <div className='col-12'>
                <h1>All Recipes</h1>
            </div>
            <RecipesDataView recipes={recipes} />
        </section>
    )
}
