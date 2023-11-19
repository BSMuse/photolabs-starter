import React from "react";
import "../styles/PhotoList.scss";
import useApplicationData from "hooks/useApplicationData";
import PhotoListItem from './PhotoListItem';

function PhotoList(props) {
  // Use the custom hook 'useApplicationData' to access 'favPhotos' and 'setSelected'
  const { data } = props;

  // Create an array of PhotoListItem components based on the 'data' prop
  const photosArray = data.map((data) => (
    <PhotoListItem 
      key={data.id} 
      id={data.id}
      imageFull={data.urls.full} 
      imageReg={data.urls.regular}
      profile={data.user.profile}
      username={data.user.username}
      location={data.location}
      favPhotos={props.favPhotos}
      showModal={props.showModal}
      setModal={props.setModal}
      handleFavClick={props.handleFavClick}
      handlePhotoClick={props.handlePhotoClick}
      selected={props.favPhotos.includes(data.id)}
    />
  ));

  return (
    <ul className="photo-list">
      {photosArray}
    </ul>
  );
}

export default PhotoList;
