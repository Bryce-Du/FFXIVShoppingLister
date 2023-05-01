import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from './recipeSlice';
import Recipe from './Recipe';
import RecipeDetails from './RecipeDetails';

import './RecipeList.css'

function RecipeList(props) {
  const dispatch = useDispatch();
  const { recipes, loading, error } = useSelector((state) => state.recipe)
  const [recipeDetailId, setRecipeDetailId] = useState()

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);



  if (loading) {
    return <div>Loading...</div>
  }
  if (recipes.length === 0) {
    return <div>No recipes were found.</div>
  }
  return (
    <div className='gridContainer'>
      <div className='recipeList'>
        {recipes.Results.map((recipe) => {
          return <Recipe
            key={recipe.ID}
            id={recipe.ID}
            icon={recipe.Icon}
            name={recipe.Name}
            onClick={(id) => setRecipeDetailId(id)} />
        })}
      </div>
      <div>
        <RecipeDetails id={recipeDetailId} />
      </div>
    </div>
  );
}

export default RecipeList;