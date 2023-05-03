import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClasses, getRecipesByClass } from './recipeSlice';

import './ClassFilters.css'

function ClassFilters({ classFiltered, setClassFiltered }) {
  const dispatch = useDispatch()
  const classes = useSelector((state) => state.recipe.classes?.Results)

  useEffect(() => {
    dispatch(getClasses())
  }, [dispatch])

  const handleClick = (e) => {
    setClassFiltered(e.target.id)
    console.log(classFiltered)
    dispatch(getRecipesByClass({ classId: e.target.id, page: 1 }))
  }

  return (
    <div>
      {classes?.map((c) => {
        if (c.ID >= 8 && c.ID <= 15) {
          return <img key={c.ID} id={c.ID} src={`https://xivapi.com${c.Icon}`} alt={`${c.Name} icon`} onClick={handleClick} />
        }
      })}
    </div>
  );
}

export default ClassFilters;