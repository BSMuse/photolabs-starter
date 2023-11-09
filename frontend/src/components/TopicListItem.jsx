import React, {useEffect} from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, title, navigateToTopic } = props;



  return (
    <>
      <div className="topic-list__item" id={id} onClick={() => navigateToTopic(id)}>
        <span>{title}</span>
      </div>
    </>
  );
};

export default TopicListItem;

