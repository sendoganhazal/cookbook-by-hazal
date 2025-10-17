"use client"
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchRecipesByMealTypeOrTag, fetchAllRecipes } from '@/lib/api-fetcher';
import { Recipe, RecipeResponse } from '@/lib/types';
import RecipesDataView from '@/components/molecules/recipes/RecipesDataView'

function RecipesContentWrapper() {
    const [recipes, setRecipes] = useState<Recipe[] | null>(null)
  const { slug, sub } = useParams();
  const params = `${slug}/${sub}`;
  async function getRecipes() {
    if (slug && sub) {
      const res = await fetchRecipesByMealTypeOrTag(params);
      if ("error" in res) {
        return [];
      }
      setRecipes(res)
    }

  }

  useEffect(() => {
    getRecipes()
  }, [])
  console.log("res", recipes)
  return (
    <section className='grid grid-nogutter'>
    
      <RecipesDataView recipes={recipes}/>
    </section>
  )
}

export default RecipesContentWrapper