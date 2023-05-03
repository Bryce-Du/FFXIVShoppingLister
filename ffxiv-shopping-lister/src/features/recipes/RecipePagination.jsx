import React from 'react';
import { useDispatch } from 'react-redux';
import { getRecipes } from './recipeSlice';

function RecipePagination({ pagination }) {
  const dispatch = useDispatch();
  // const { pagination } = props

  const handleNext = () => {
    dispatch(getRecipes(pagination?.PageNext))
  }
  const handlePrev = () => {
    dispatch(getRecipes(pagination?.PagePrev))
  }

  return (
    <div>
      <button onClick={handlePrev}>Previous Page</button>
      <button onClick={handleNext}>Next Page</button>
    </div>
  );
}

export default RecipePagination;