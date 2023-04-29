import React from 'react';

function Recipe({ id, icon, name }) {


  return (
    <div>
      <img src={`https://xivapi.com${icon}`} alt={`Recipe ${id} icon`} />
      {name}
    </div>
  );
}

export default Recipe;