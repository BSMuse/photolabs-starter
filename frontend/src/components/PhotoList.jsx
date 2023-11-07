import React, {useEffect} from "react";
import "../styles/PhotoList.scss";
import useApplicationData from "hooks/useApplicationData";
import PhotoListItem from './PhotoListItem';


function PhotoList(props) {

  const { favPhotos, selected, setSelected, showModal } = useApplicationData(); 
  const { data } = props

  const photosArray = data.map((data) => (
    <PhotoListItem 
      key={data.id} 
      id={data.id}
      imageFull={data.urls.full} 
      imageReg = {data.urls.regular}
      profile={data.user.profile}
      username={data.user.username}
      location={data.location}
      favPhotos = {props.favPhotos}
      setFavPhotos = {props.setFavPhotos}
      showModal = {props.showModal}
      setModal = {props.setModal}
      handleFavClick={props.handleFavClick}
      handlePhotoClick={props.handlePhotoClick}
      selected = {favPhotos.includes(data.id)}
      setSelected = {setSelected}
    />
  ));

  // useEffect(() => {
  //   // Loop through each photo item and check if it's in favPhotos
  //   photosArray.forEach((photoItem) => {
  //     const { id } = photoItem.props;
  //     if (props.favPhotos.length === 0) {
  //       console.log(`Loading - Photo ID: ${id}`);
  //     } else {
  //       console.log(`Fav Photos - Photo ID: ${id}`);
  //       console.log(props.favPhotos);
  //       setSelected(true);
  //       // Add your setSelected logic here if needed
  //     }
  //   });
  // }, [favPhotos]);

  return (
    <ul className="photo-list">
      {photosArray}
    </ul>
  );
}

export default PhotoList;
