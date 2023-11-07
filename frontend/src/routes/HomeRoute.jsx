import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  const {favPhotos, setFavPhotos, showModal, setModal, handleCloseClick, photoData} = useApplicationData();


  return (
    <div className="home-route">
      <TopNavigation favPhotos={favPhotos}/>
      {showModal.status && <PhotoDetailsModal showModal = {showModal} setModal = {setModal} setFavPhotos = {setFavPhotos} handleCloseClick={handleCloseClick} />}
      <PhotoList data = {photoData} favPhotos={favPhotos} setFavPhotos={setFavPhotos} showModal = {showModal} setModal = {setModal} />
    </div>
  );
};

export default HomeRoute;
