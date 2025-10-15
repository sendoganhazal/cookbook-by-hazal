/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Carousel} from 'primereact/carousel';
import Link from 'next/link';

type CategoriesProps = {
  categories: any | null;   // istersen buraya daha net bir type yazabilirsin
  type: string;
};

export default function Categories({ categories, type }: CategoriesProps) {
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    const CarouselItem = (item:string) => {
  return (
    <div className="border-1 border-indigo-100 border-round m-2 text-center py-5 px-3">
      <Link href={type === "meal-type" ? `/recipes/meal-type/${item.toLowerCase()}` : `/recipes/${type}/${item}`}  className="mb-1 text-blue-800 font-semibold uppercase">{item}</Link>
    </div>
  )
}
    return (
        <section>
            <Carousel value={categories} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={CarouselItem} />
        </section>
    )
}
