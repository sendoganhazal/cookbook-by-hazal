
import RecipeCard from '@/components/atoms/recipes/RecipeCard';
import { Recipe,RecipeResponse } from '@/lib/types';

type DataProps = {
  recipes:Recipe[] | null
}
function RecipesDataView({recipes}:DataProps) {


  return (
    <>

      {
        recipes?.map((recipe)=> (
          <div className="col-12 md:col-6 lg:col-3 px-3 py-4" key={recipe.id}>
            <RecipeCard item={recipe} />
          </div>
        ))
      }
    </>
  )
}

export default RecipesDataView