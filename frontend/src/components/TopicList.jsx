import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ({topics}) => {

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topics) => (
        <TopicListItem
        topics={topics}
        key={topics.id}
        id={topics.id}
        title={topics.title}
        />
      ))}
    </div>
  );
};

export default TopicList;
