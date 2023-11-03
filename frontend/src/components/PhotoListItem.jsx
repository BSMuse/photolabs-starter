import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

function PhotoListItem(props) {
  const { id, imageSource, profile, username, location, favPhotos, setFavPhotos} = props;
  const [selected, setSelected] = useState(false)

  const handleFavClick = () => {
    !selected ? setFavPhotos( prev =>  [...prev,id]) : setFavPhotos(prev => prev.filter((prevId) => prevId !== id ))
    setSelected(!selected)
  }


  return (
    <div id={id} className="photo-list__item">
      <PhotoFavButton selected={selected} onClick={handleFavClick} />
      <img src={imageSource} className="photo-list__image" alt="Photo" />
      <div className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile" alt="Profile" />
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
}

export default PhotoListItem; 
