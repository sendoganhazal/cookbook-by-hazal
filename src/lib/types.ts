export interface Recipe {
  id: number;
  name: string;
  mealType?: string[]; // array olduğu için string[]
  instructions?: string;
  ingredients: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  image: string;
  userId: number;

  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  rating: number;
  reviewCount: number;
}

// API’nin tamamını tanımlamak istersen:
export interface RecipeResponse {
  recipes: Recipe[];
}
