import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import useApplicationData from 'hooks/useApplicationData';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = (props) => {
  const { showModal, handleCloseClick } = props;
  const { imageFull, profile, username, location, id, setFavPhotos } = showModal;
  const { selected, handleFavClick, photoData } = useApplicationData();

  console.log(photoData);

  const renderSimilarPhotos = (photos, id) => {
    const similarPhotos = photos.find((photo) => photo.id === id).similar_photos;
    return (
      <div className="photo-details-modal_similar-photos">
        <h3>Similar Photos</h3>
        <div className='similar-photos-container'>
          {Object.values(similarPhotos).map((photo) => (
            <PhotoListItem
              key={photo.id}
              id={photo.id}
              imageReg={photo.urls.regular}
              imageFull={photo.urls.full}
              profile={photo.user.profile}
              username={photo.user.username}
              location={photo.location}
              setFavPhotos={setFavPhotos} 
            />
          ))}
        </div>
      </div>
    );
  };

  // Conditionally render based on the availability of photoData
  if (photoData.length === 0) {
    return <div className="photo-details-modal">Loading...</div>; // Render a loading indicator or message.
  } else {
    return (
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={handleCloseClick}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <div className="photo-details-modal_user-photo_container">
          <PhotoFavButton selected={selected} onClick={() => handleFavClick(id, setFavPhotos)} />
          <img src={imageFull} 
            className="photo-details-modal__image" 
            alt="Photo"   
            title="Click for full image"
            onClick={() => window.open(imageFull, '_blank')}
          />
          <div className="photo-details-modal__user-details">
            <img src={profile} className="photo-details-modal__photographer-profile" alt="Profile" />
            <div className="photo-details-modal__user-info">
              <p>{username}</p>
              <p className="photo-details-modal__photographer-location">
                {location.city}, {location.country}
              </p>
            </div>
          </div>
        </div>
        <div className='photo-details-modal_similar-photos'>
          {renderSimilarPhotos(photoData, showModal.id)}
        </div>
      </div>
    );
  }
};

export default PhotoDetailsModal;
