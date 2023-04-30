import React from 'react';

function Recipe({ id, icon, name, onClick }) {

  const handleClick = () => {
    onClick(id)
  }

  return (
    <div onClick={handleClick}>
      <img src={`https://xivapi.com${icon}`} alt={`Recipe ${id} icon`} />
      {name}
    </div>
  );
}

export default Recipe;