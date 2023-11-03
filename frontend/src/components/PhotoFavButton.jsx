import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() { 

  const [selected, changeSelected] = useState(false)

  const handleClick = () => {
    changeSelected(prev => !prev)
  }


  return (
    <div className="photo-list__fav-icon" onClick = {handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected}/>
        {/* Insert React */}
      </div>
    </div>
  );
}

export default PhotoFavButton;