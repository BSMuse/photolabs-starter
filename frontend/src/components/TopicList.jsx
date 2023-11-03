import React from "react";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";
import "../styles/TopicList.scss";

const TopicList = () => { 

const data = topics
  
  const topicArray = () => { 
    return data.map((topic) => {
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
