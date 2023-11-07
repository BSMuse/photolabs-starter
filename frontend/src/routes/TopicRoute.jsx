import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import '../styles/HomeRoute.scss';

const TopicRoute = () => {
  const {favPhotos, setFavPhotos, showModal, setModal, handleCloseClick, topicData} = useApplicationData();


  return (
    <div className="home-route">
      <TopNavigation favPhotos={favPhotos}/>
      {showModal.status && <PhotoDetailsModal showModal = {showModal} setModal = {setModal} setFavPhotos = {setFavPhotos} handleCloseClick={handleCloseClick} />}
      <PhotoList data = {topicData} favPhotos={favPhotos} setFavPhotos={setFavPhotos} showModal = {showModal} setModal = {setModal} />
    </div>
  );
};

export default TopicRoute;
