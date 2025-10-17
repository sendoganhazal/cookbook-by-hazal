"use client"
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchRecipesByMealTypeOrTag } from '@/lib/api-fetcher';
import { Recipe } from '@/lib/types';
import RecipesDataView from '@/components/molecules/recipes/RecipesDataView'
import { Tag } from 'primereact/tag';

function RecipesContentWrapper() {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null)
  const { slug, sub } = useParams();
  const params = `${slug}/${sub}`;
  async function getRecipes() {
    const res = await fetchRecipesByMealTypeOrTag(params);
    if ("error" in res) {
      return [];
    }
    setRecipes(res)

  }

  useEffect(() => {
    getRecipes()
  }, [])
  console.log("res", recipes)
  return (
    <section className='grid grid-nogutter'>
      <div className='col-12 px-3 py-5'>
        <div className='flex align-items-center gap-2'>
          <span className='text-4xl font-bold'>Recipes</span>
          <Tag value={sub} severity={"secondary"} className='p-2' />
        </div>
      </div>
      <RecipesDataView recipes={recipes} />
    </section>
  )
}

export default RecipesContentWrapper