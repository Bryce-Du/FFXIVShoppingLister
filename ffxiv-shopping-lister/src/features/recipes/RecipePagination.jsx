import React from 'react';
import { useDispatch } from 'react-redux';
import { getRecipes, getRecipesByClass } from './recipeSlice';

function RecipePagination({ pagination, classFiltered }) {
  const dispatch = useDispatch();

  const handleNext = () => {
    console.log(pagination?.PageNext)
    classFiltered ? dispatch(getRecipesByClass({ classId: classFiltered, page: pagination?.PageNext })) : dispatch(getRecipes(pagination?.PageNext))
  }
  const handlePrev = () => {
    classFiltered ? dispatch(getRecipesByClass({ classId: classFiltered, page: pagination?.PagePrev })) : dispatch(getRecipes(pagination?.PagePrev))
  }

  return (
    <div>
      <button onClick={handlePrev}>Previous Page</button>
      <button onClick={handleNext}>Next Page</button>
    </div>
  );
}

export default RecipePagination;