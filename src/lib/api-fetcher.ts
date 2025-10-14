const BASE_URL = "https://dummyjson.com/recipes";
import { RecipeResponse, Recipe } from "./types";
export async function fetchAllRecipes() {
  const url = `${BASE_URL}?limit=0`;

  try {
    const res = await fetch(url);
    if (res.ok) {
      const data: RecipeResponse = await res.json();
      return data;
    } else {
      console.error("Error", res.status);
      return { error: true, status: res.status };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: true, status: 500 };
  }
}

export async function fetchAllMealTypes() {
  const response = await fetchAllRecipes();
  // Hata dönmüşse boş array döndür
  if ("error" in response) {
    return [];
  }

  const meal_type: string[] = [
    ...new Set(
      response.recipes.flatMap((recipe: Recipe) => recipe.mealType ?? [])
    ),
  ];
  return meal_type;
}
