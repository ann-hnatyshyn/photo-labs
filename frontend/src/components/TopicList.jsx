import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ({topics}) => {

  console.log(topics);

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
        key={topic.id}
        id={topic.id}
        topic={topic}
        title={topic.title}
        />
      ))}
    </div>
  );
};

export default TopicList;
