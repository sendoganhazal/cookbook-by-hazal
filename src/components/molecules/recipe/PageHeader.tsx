"use client"
import React from 'react'
import { Tag } from 'primereact/tag'
import { Rating } from 'primereact/rating'

type HeaderProps = {
    title?: string,
    cuisine?: string,
    difficulty?: string,
    meal_type?: string[],
    tags?: string[],
    rating?: number,
}

const PageHeader = ({ title, cuisine, difficulty, meal_type, tags, rating, }: HeaderProps) => {
    return (
        <section className='col-12 px-3 py-5'>
            <div className='flex align-items-center gap-3'>
                <h1 className='text-4xl text-primary'>{title}</h1>
                <div className='flex align-items-center gap-1'>
                    <Rating value={rating} readOnly cancel={false} stars={5} step={0.5} />
                    <span className='font-bold text-primary'>{rating}</span>
                </div>

                <div className='flex align-items-center gap-1'>
                    {
                        tags?.map((tag, key) => (
                            <Tag key={key} value={tag} severity={"info"} className='p-2' />
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-wrap align-items-center gap-3 py-3">
                <div className="flex flex-column justify-center gap-2 border-right-1 pr-3">
                    <span className="font-semibold">Cuisine</span>
                    <Tag value={cuisine} severity={"info"} className='p-1'></Tag>
                </div>
                <div className="flex flex-column justify-center gap-2">
                    <span className="font-semibold">Difficulty</span>
                    <Tag value={difficulty} severity={difficulty === "Easy" ? "success" : difficulty === "Hard" ? "danger" : "warning"} className='p-1'></Tag>
                </div>
            </div>
        </section>
    )
}

export default PageHeader