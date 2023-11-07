import React, {useEffect} from "react";
import PhotoFavButton from "./PhotoFavButton";
import useApplicationData from "hooks/useApplicationData";
import "../styles/PhotoListItem.scss";

function PhotoListItem(props) {
  const { id, imageReg, imageFull, profile, username, location, favPhotos, setFavPhotos, setModal, showModal } = props;
  const { selected, setSelected } = useApplicationData()

  const handleFavClick = () => {
    !selected ? setFavPhotos( prev =>  [...prev,id]) : setFavPhotos(prev => prev.filter((prevId) => prevId !== id ));
    setSelected(!selected);
  }

  const handlePhotoClick = () => {
    console.log(favPhotos)
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

useEffect(() => {
  // Check if the current photo's ID is in the favPhotos array
  if (Array.isArray(favPhotos) && favPhotos.length > 0) {
    console.log('Loading');
    setSelected(Array.isArray(favPhotos) && favPhotos.includes(id));
  } else {
    console.log('FavPhotos:', favPhotos);
  }
}, [favPhotos, id]);


  return (
    <div id={id} className="photo-list__item">
      <PhotoFavButton selected={selected} onClick={handleFavClick} />
      <img src={imageReg} onClick ={handlePhotoClick} className="photo-list__image" alt="Photo" />
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
