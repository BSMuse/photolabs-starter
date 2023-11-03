import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = () => { 

  const sampleDataForTopicList = [
    {
      id: "1",
      slug: "topic-1",
      title: "Nature",
    },
    {
      id: "2",
      slug: "topic-2",
      title: "Travel",
    },
    {
      id: "3",
      slug: "topic-3",
      title: "People",
    },
  ];
  
  const topicArray = () => { 
    console.log('test')
    return sampleDataForTopicList.map((topic) => {
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
