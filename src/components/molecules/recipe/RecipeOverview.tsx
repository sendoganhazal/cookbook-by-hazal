import React from 'react'
import { Panel } from 'primereact/panel';
import { Tag } from 'primereact/tag';
import { Divider } from 'primereact/divider';


type RecipeOverviewProps = {
  prepTimeMinutes: number,
  cookTimeMinutes: number,
  servings: number,
  caloriesPerServing: number,
  cuisine?: string,
  difficulty?: string,
}


const RecipeOverview = ({ prepTimeMinutes, cookTimeMinutes, servings, caloriesPerServing, cuisine, difficulty }: RecipeOverviewProps) => {
  return (
    <section className="col-12 md:col-6 lg:col-4 px-3 py-4">
      <Panel header="Overview">
        <div className='p-2'>
          <div className="flex justify-content-between align-center gap-2 p-3">
            <span className="font-semibold">Cuisine</span>
            <Tag value={cuisine} severity={"info"} className='p-1'></Tag>
          </div>
          <Divider />
          <div className="flex justify-content-between align-center gap-2 p-3">
            <span className="font-semibold">Difficulty</span>
            <Tag value={difficulty} severity={difficulty === "Easy" ? "success" : difficulty === "Hard" ? "danger" : "warning"} className='p-1'></Tag>
          </div>
          <Divider />
          <div className="flex justify-content-between align-center gap-2 p-3">
            <span className="font-semibold">Preparation Time</span>
            <span>{prepTimeMinutes} min</span>
          </div>
          <Divider />
          <div className="flex justify-content-between align-center gap-2 p-3">
            <span className="font-semibold">Cook Time</span>
            <span>{cookTimeMinutes} min</span>
          </div>
          <Divider />
          <div className="flex justify-content-between align-center gap-2 p-3">
            <span className="font-semibold">Serving</span>
            <span>{servings} min</span>
          </div>
          <Divider />
          <div className="flex justify-content-between align-center gap-2 p-3">
            <span className="font-semibold">Calories</span>
            <span>{caloriesPerServing} cal</span>
          </div>
          
        </div>
      </Panel>
    </section>
  )
}

export default RecipeOverview