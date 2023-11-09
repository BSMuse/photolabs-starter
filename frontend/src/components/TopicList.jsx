import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => { 
  
  const topicArray = () => { 
    return props.topicData.map((topic) => {
      return <TopicListItem key={topic.id} title={topic.title} id ={topic.id} navigateToTopic = {props.navigateToTopic}/>;
    });
  }

  return (
    <div className="top-nav-bar__topic-list">
      {topicArray()}
    </div>
  );
};

export default TopicList;
