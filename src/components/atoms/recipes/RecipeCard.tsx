import React from 'react';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import Link from 'next/link';
import Image from 'next/image';
import { Recipe } from '@/lib/types';

type RecipeProps = {
  item: Recipe
}
const RecipeCard = ({ item }: RecipeProps) => {
  return (
    <div className="p-4 border-1 surface-border surface-card border-round" key={item.id}>
      <div className="flex flex-wrap align-items-center gap-2">
        <div className="flex flex-column justify-center gap-1 border-right-1 pr-2">
          <span className="font-semibold">Cuisine</span>
          <Tag value={item.cuisine} severity={"info"} className='p-1'></Tag>
        </div>
        <div className="flex flex-column justify-center gap-1">
          <span className="font-semibold">Difficulty</span>
          <Tag value={item.difficulty} severity={item.difficulty === "Easy" ? "success" :item.difficulty === "Hard" ? "danger" :"warning"} className='p-1'></Tag>
        </div>
      </div>
      <div className="flex flex-column align-items-center gap-3 py-5">
        <Image alt='alt' width={100} height={100} src={item.image} />
        <Link href={`/recipe/${item.id}`} className="text-2xl font-bold">{item.name}</Link>
        <Rating value={item.rating} readOnly cancel={false}></Rating>
      </div>
    </div>
  )
}

export default RecipeCard