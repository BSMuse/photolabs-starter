import React, { useEffect } from "react";
import PhotoFavButton from "./PhotoFavButton";
import useApplicationData from "hooks/useApplicationData"; // Assuming this import is correct and pointing to the right file
import "../styles/PhotoListItem.scss";

function PhotoListItem(props) {
  // Destructure props to access various properties
  const { id, imageReg, imageFull, profile, username, location, favPhotos, setFavPhotos, setModal, showModal } = props;

  // Use the custom hook 'useApplicationData' to access selected state and setSelected function
  const { selected, setSelected } = useApplicationData();

  // Function to handle adding/removing photos to/from favorites
  const handleFavClick = () => {
    !selected
      ? setFavPhotos((prev) => [...prev, id])
      : setFavPhotos((prev) => prev.filter((prevId) => prevId !== id));
    setSelected(!selected);
  }

  // Function to handle displaying a modal when a photo is clicked
  const handlePhotoClick = () => {
    setModal({
      ...showModal,
      status: !showModal.status,
      key: id,
      id: id,
      imageFull: imageFull,
      profile: profile,
      username: username,
      location: location,
      favPhotos: favPhotos,
      setFavPhotos: setFavPhotos
    });
  }

  // Use effect to check if the current photo's ID is in the favPhotos array and update the 'selected' state accordingly
  useEffect(() => {
    if (Array.isArray(favPhotos) && favPhotos.length > 0) {
      setSelected(Array.isArray(favPhotos) && favPhotos.includes(id));
    }
  }, [favPhotos, id]);

  return (
    <div id={id} className="photo-list__item">
      {/* Render the PhotoFavButton component with 'selected' and 'onClick' props */}
      <PhotoFavButton selected={selected} onClick={handleFavClick} />
      <img src={imageReg} onClick={handlePhotoClick} className="photo-list__image" alt="Photo" />
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
