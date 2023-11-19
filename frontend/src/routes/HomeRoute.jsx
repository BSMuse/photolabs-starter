import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  const {
    favPhotos,
    setFavPhotos,
    showModal,
    setModal,
    handleFavClick,
    handleCloseClick,
    handlePhotoClick,
    photoData,
    topicData,
    navigateToTopic,
  } = useApplicationData();

  const topNavigationProps = {
    favPhotos,
    topicData,
    navigateToTopic,
  };

  const photoListProps = {
    data: photoData,
    favPhotos,
    setFavPhotos,
    showModal,
    setModal,
    handleFavClick,
    handlePhotoClick
  };

  return (
    <div className="home-route">
      <TopNavigation {...topNavigationProps} />
      {showModal.status && (
        <PhotoDetailsModal
        {...photoListProps}
        handleCloseClick={handleCloseClick}
      />
      )}
      <PhotoList {...photoListProps} />
    </div>
  );
};

export default HomeRoute;
