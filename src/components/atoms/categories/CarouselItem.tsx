import Link from 'next/link'
import React from 'react'
import { Card } from 'primereact/card'

const CarouselItem = (item:string) => {
  return (
    <div className="border-1 border-indigo-100 border-round m-2 text-center py-5 px-3">
        <Link href={"#"}  className="mb-1 text-blue-800 font-semibold uppercase">{item}</Link>
    </div>
  )
}

export default CarouselItem