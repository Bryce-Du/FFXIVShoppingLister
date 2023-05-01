import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getRecipeById } from './recipeSlice';

import './RecipeDetails.css'

function RecipeDetails({ id }) {
  const dispatch = useDispatch();
  const { recipe } = useSelector((state) => state.recipe)

  useEffect(() => {
    dispatch(getRecipeById(id))
  }, [dispatch, id])

  if (!recipe) { return null }

  return (
    <div>
      <div className='headerContainer'>
        <img src={`https://xivapi.com${recipe.Icon}`} alt={`Recipe ${id} icon`} />
        <h4>{recipe.Name}</h4>
      </div>
      <div className='ingredientsContainer'>
        <h4>Ingredients:</h4>
        <div>
          {recipe.AmountIngredient0 > 0 ? <img src={`https://xivapi.com${recipe.ItemIngredient0.Icon}`} alt="ItemIngredient0 icon" /> : null}
          {recipe.AmountIngredient0 > 0 ? `${recipe.AmountIngredient0} ${recipe.ItemIngredient0.Name}` : null}
        </div>
        <div>
          {recipe.AmountIngredient1 > 0 ? <img src={`https://xivapi.com${recipe.ItemIngredient1.Icon}`} alt="ItemIngredient1 icon" /> : null}
          {recipe.AmountIngredient1 > 0 ? `${recipe.AmountIngredient1} ${recipe.ItemIngredient1.Name}` : null}
        </div>
        <div>
          {recipe.AmountIngredient2 > 0 ? <img src={`https://xivapi.com${recipe.ItemIngredient2.Icon}`} alt="ItemIngredient2 icon" /> : null}
          {recipe.AmountIngredient2 > 0 ? `${recipe.AmountIngredient2} ${recipe.ItemIngredient2.Name}` : null}
        </div>
        <div>
          {recipe.AmountIngredient3 > 0 ? <img src={`https://xivapi.com${recipe.ItemIngredient3.Icon}`} alt="ItemIngredient3 icon" /> : null}
          {recipe.AmountIngredient3 > 0 ? `${recipe.AmountIngredient3} ${recipe.ItemIngredient3.Name}` : null}
        </div>
        <div>
          {recipe.AmountIngredient4 > 0 ? <img src={`https://xivapi.com${recipe.ItemIngredient4.Icon}`} alt="ItemIngredient4 icon" /> : null}
          {recipe.AmountIngredient4 > 0 ? `${recipe.AmountIngredient4} ${recipe.ItemIngredient4.Name}` : null}
        </div>
        <div>
          {recipe.AmountIngredient5 > 0 ? <img src={`https://xivapi.com${recipe.ItemIngredient5.Icon}`} alt="ItemIngredient5 icon" /> : null}
          {recipe.AmountIngredient5 > 0 ? `${recipe.AmountIngredient5} ${recipe.ItemIngredient5.Name}` : null}
        </div>
        <div>
          {recipe.AmountIngredient6 > 0 ? <img src={`https://xivapi.com${recipe.ItemIngredient6.Icon}`} alt="ItemIngredient6 icon" /> : null}
          {recipe.AmountIngredient6 > 0 ? `${recipe.AmountIngredient6} ${recipe.ItemIngredient6.Name}` : null}
        </div>
        <div>
          {recipe.AmountIngredient7 > 0 ? <img src={`https://xivapi.com${recipe.ItemIngredient7.Icon}`} alt="ItemIngredient7 icon" /> : null}
          {recipe.AmountIngredient7 > 0 ? `${recipe.AmountIngredient7} ${recipe.ItemIngredient7.Name}` : null}
        </div>
        <div>
          {recipe.AmountIngredient8 > 0 ? <img src={`https://xivapi.com${recipe.ItemIngredient8.Icon}`} alt="ItemIngredient8 icon" /> : null}
          {recipe.AmountIngredient8 > 0 ? `${recipe.AmountIngredient8} ${recipe.ItemIngredient8.Name}` : null}
        </div>
        <div>
          {recipe.AmountIngredient9 > 0 ? <img src={`https://xivapi.com${recipe.ItemIngredient9.Icon}`} alt="ItemIngredient9 icon" /> : null}
          {recipe.AmountIngredient9 > 0 ? `${recipe.AmountIngredient9} ${recipe.ItemIngredient9.Name}` : null}
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;