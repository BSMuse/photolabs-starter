import React, { useState, useEffect } from 'react';
import '../styles/TopNavigationBar.scss';
import FavIcon from './FavIcon';
import TopicList from './TopicList';

const TopNavigation = (props) => {
  // State variable to track whether there are favorite photos
  const [havePhotos, setHavePhotos] = useState(false);

  // Use effect to update the 'havePhotos' state when the 'favPhotos' prop changes
  useEffect(() => {
    props.favPhotos.length > 0 ? setHavePhotos(true) : setHavePhotos(false)
  }, [props.favPhotos]);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* Render the TopicList component with topic data and the navigateToTopic function */}
      <TopicList topicData={props.topicData} navigateToTopic={props.navigateToTopic} />
      {/* Render the FavIcon component with 'selected' and 'havePhotos' props */}
      <FavIcon selected={true} havePhotos={havePhotos} />
    </div>
  );
}

export default TopNavigation;
