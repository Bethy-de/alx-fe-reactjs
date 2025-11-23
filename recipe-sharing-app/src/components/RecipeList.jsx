import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';

import { useRecipeStore } from './recipeStore';


const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

const FavoriteButton = ({ recipeId }) => {
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const isFavorite = favorites.includes(recipeId);



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
          <button onClick={() => (isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId))}>
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>

        </div>
      ))}
    </div>
  );
};

export default RecipeList;
      export default FavoriteButton;

