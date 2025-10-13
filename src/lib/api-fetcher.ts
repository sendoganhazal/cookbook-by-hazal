const BASE_URL = "https://dummyjson.com/recipes";
export async function fetchAllRecipes() {
  const url = `${BASE_URL}?limit=0`;

  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      console.error("Error", res.status);
      return { error: true, status: res.status };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


export async function fetchAllMealTypes() {
    const response = await fetchAllRecipes();
    response.filter((r: unknown) => console.log(r))
}