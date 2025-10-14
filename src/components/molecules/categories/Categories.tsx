import React from 'react';
import { Carousel } from 'primereact/carousel';
import CarouselItem from '@/components/atoms/categories/CarouselItem';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Categories(categories:any) {
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
      console.log("meal", categories)
    return (
        <section>
            <Carousel value={categories.categories} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={CarouselItem} />
        </section>
    )
}
