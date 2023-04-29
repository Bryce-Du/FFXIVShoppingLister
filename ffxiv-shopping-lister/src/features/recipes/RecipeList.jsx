import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from './recipeSlice';
import Recipe from './Recipe';

function RecipeList(props) {
  const dispatch = useDispatch();
  const { recipes, loading, error } = useSelector((state) => state.recipe)

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>
  }
  if (recipes.length == 0) {
    return <div>No recipes were found.</div>
  }
  return (
    <div>
      {recipes.Results.map((recipe) => {
        return <Recipe key={recipe.ID} id={recipe.ID} icon={recipe.Icon} name={recipe.Name} />
      })}
    </div>
  );
}

export default RecipeList;