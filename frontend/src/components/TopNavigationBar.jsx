import React, { useState, useEffect } from 'react';
import '../styles/TopNavigationBar.scss';
import FavIcon from './FavIcon';
import TopicList from './TopicList';

const TopNavigation = (props) => {
  const [havePhotos, setHavePhotos] = useState(false);

  useEffect(() => {
    props.favPhotos.length > 0 ? setHavePhotos(true) : setHavePhotos(false)
  }, [props.favPhotos]);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={props.topicData} navigateToTopic = { props.navigateToTopic }/>
      <FavIcon selected={true} havePhotos={havePhotos} />
    </div>
  );
}

export default TopNavigation;
