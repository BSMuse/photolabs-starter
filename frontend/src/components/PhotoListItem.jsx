import React, { useEffect } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

function PhotoListItem(props) {
  const { id, imageReg, imageFull, profile, username, location, handleFavClick, handlePhotoClick, selected } = props;


  return (
    <div id={id} className="photo-list__item">
      <PhotoFavButton selected={selected} onClick={() => handleFavClick(id)} />
      <img src={imageReg} onClick={() => handlePhotoClick(id, imageFull, profile, username, location, selected)} className="photo-list__image" alt="Photo" />
      <div className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile" alt="Profile" />
        <div className= "photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
}

export default PhotoListItem;
