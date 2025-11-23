import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';



const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);



  return (
    <div>
      filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>

      <h2>Recipes</h2>
      {recipes.length === 0 && <p>No recipes yet.</p>}

      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            marginBottom: "10px",
            borderRadius: "5px"
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
