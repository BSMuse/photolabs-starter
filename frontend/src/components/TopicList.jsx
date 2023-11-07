import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";
import useApplicationData from "hooks/useApplicationData";

const TopicList = () => { 

const { topicData } = useApplicationData();
  
  const topicArray = () => { 
    return topicData.map((topic) => {
      return <TopicListItem key={topic.id} title={topic.title} />;
    });
  }

  return (
    <div className="top-nav-bar__topic-list">
      {topicArray()}
    </div>
  );
};

export default TopicList;
