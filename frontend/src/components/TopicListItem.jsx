import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topics, title }) => {

  return (
    <div className="topic-list__item">
       <span>{topics}</span>
       <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
