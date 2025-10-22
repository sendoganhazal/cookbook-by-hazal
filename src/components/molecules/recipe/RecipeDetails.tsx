import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import { Image } from 'primereact/image';
import { Panel } from 'primereact/panel';


type RecipeDetailProps = {
  image?: string,
  ingredients?: string[],
  instructions?: string[]
}

const RecipeDetails = ({ image, ingredients, instructions }: RecipeDetailProps) => {
  return (
    <section className='col-12 md:col-6 lg:col-6 px-3 py-4'>
      <div className="border-radius mb-3">
        <Image src={image} alt="Image" width="250" preview />
      </div>
      <Panel header="Recipe Detail">
        <TabView>
          <TabPanel header="Ingredients">
            <div className='p-4'>
              <ul>
                {
                  ingredients?.map((ing, key) => (
                    <li key={key} className='pb-3'>{ing}</li>
                  ))
                }
              </ul>
            </div>
          </TabPanel>
          <TabPanel header="Instructions">
            <div className='p-4'>
              <ol>
                {
                  instructions?.map((ins, key) => (
                    <li key={key} className='pb-3'>{ins}</li>
                  ))
                }
              </ol>
            </div>
          </TabPanel>
        </TabView>
      </Panel>
    </section>
  )
}

export default RecipeDetails