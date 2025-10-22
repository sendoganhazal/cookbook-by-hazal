/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Recipe } from '@/lib/types';
import { fetchSingleRecipe } from '@/lib/api-fetcher';
import PageHeader from '@/components/molecules/recipe/PageHeader';
import RecipeCard from '@/components/atoms/recipes/RecipeCard';
import RecipeDetails from '@/components/molecules/recipe/RecipeDetails';
import RecipeOverview from '@/components/molecules/recipe/RecipeOverview';

export default function RecipeDetailPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  async function getSingleRecipe() {
    const res = await fetchSingleRecipe(id);
    console.log("res", res);
    setRecipe(res);
  }
  useEffect(() => {
    getSingleRecipe();
  }, []);


  return (
    <main>
      <section className='grid grid-nogutter justify-content-around'>
        <PageHeader title={recipe?.name} rating={recipe?.rating} tags={recipe?.tags} meal_type={recipe?.mealType} />
        <RecipeDetails image={recipe?.image} ingredients={recipe?.ingredients} instructions={recipe?.instructions} />
        <RecipeOverview servings={recipe?.servings} cuisine={recipe?.cuisine} difficulty={recipe?.difficulty} cookTimeMinutes={recipe?.cookTimeMinutes} prepTimeMinutes={recipe?.prepTimeMinutes} caloriesPerServing={recipe?.caloriesPerServing}/>
      </section>
    </main>
  )
}
