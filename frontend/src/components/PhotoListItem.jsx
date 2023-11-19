import React, { useEffect } from "react";
import PhotoFavButton from "./PhotoFavButton";
import useApplicationData from "hooks/useApplicationData"; // Assuming this import is correct and pointing to the right file
import "../styles/PhotoListItem.scss";

function PhotoListItem(props) {
  // Destructure props to access various properties
  const { id, imageReg, imageFull, profile, username, location, handleFavClick, handlePhotoClick, selected } = props;


  return (
    <div id={id} className="photo-list__item">
      {/* Render the PhotoFavButton component with 'selected' and 'onClick' props */}
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
