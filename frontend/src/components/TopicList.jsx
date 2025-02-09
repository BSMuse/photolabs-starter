import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  // Function to create an array of TopicListItem components based on 'topicData' prop
  const topicArray = () => {
    return props.topicData.map((topic) => {
      return <TopicListItem key={topic.id} title={topic.title} id={topic.id} navigateToTopic={props.navigateToTopic} />;
    });
  }

  return (
    <div className="top-nav-bar__topic-list">
      {/* Render a list of TopicListItem components generated by 'topicArray' function */}
      {topicArray()}
    </div>
  );
};

export default TopicList;
