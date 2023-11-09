import React, { useEffect } from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  // Destructure props to access 'id', 'title', and 'navigateToTopic' function
  const { id, title, navigateToTopic } = props;

  return (
    <>
      {/* Render a topic list item with an 'id' and an 'onClick' event that triggers 'navigateToTopic' */}
      <div className="topic-list__item" id={id} onClick={() => navigateToTopic(id)}>
        <span>{title}</span>
      </div>
    </>
  );
};

export default TopicListItem;
