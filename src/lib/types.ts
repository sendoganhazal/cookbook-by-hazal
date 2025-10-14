export interface Recipe {
  id: number;
  name: string;
  mealType?: string[]; // array olduğu için string[]
  instructions?: string;
  ingredients: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
}

// API’nin tamamını tanımlamak istersen:
export interface RecipeResponse {
  recipes: Recipe[];
}