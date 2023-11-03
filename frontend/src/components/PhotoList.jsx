import React from "react";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";
import PhotoListItem from './PhotoListItem';


function PhotoList(props) {

  const data = photos

  const photosArray = data.map((data) => (
    <PhotoListItem 
      key={data.id} 
      id={data.id}
      imageSource={data.urls.full} 
      profile={data.user.profile}
      username={data.user.username}
      location={data.location}
      favPhotos = {props.favPhotos}
      setFavPhotos = {props.setFavPhotos}
    />
  ));

  return (
    <ul className="photo-list">
      {photosArray}
    </ul>
  );
}

export default PhotoList;
