"use client"
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchRecipesByMealTypeOrTag } from '@/lib/api-fetcher';
import { Recipe, RecipeResponse } from '@/lib/types';
import RecipeCard from '@/components/atoms/recipes/RecipeCard';

function RecipesDataView() {
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
      {
        recipes?.map(recipe => (
          <div className="col-12 md:col-6 lg:col-3 px-3 py-4" key={recipe.id}>
            <RecipeCard item={recipe} />
          </div>
        ))
      }
    </section>
  )
}

export default RecipesDataView