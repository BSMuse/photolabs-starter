import React, { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  const [favPhotos, setFavPhotos] = useState([]);

  return (
    <div className="home-route">
      <TopNavigation favPhotos={favPhotos}/>
      <PhotoList favPhotos={favPhotos} setFavPhotos={setFavPhotos} />
    </div>
  );
};

export default HomeRoute;
