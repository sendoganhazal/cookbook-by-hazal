/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Recipe } from '@/lib/types';
import { fetchSingleRecipe } from '@/lib/api-fetcher';
import PageHeader from '@/components/molecules/recipe/PageHeader';

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
      <section className='grid grid-nogutter'>
        <PageHeader title={recipe?.name} rating={recipe?.rating} tags={recipe?.tags} cuisine={recipe?.cuisine} difficulty={recipe?.difficulty} />
      </section>
    </main>
  )
}
