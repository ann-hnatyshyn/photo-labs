import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "../mocks/topics"


const TopicList = (topic) => {
  return (
    <div className="topic-list__item">
      {topics.map((topic) => (
        <TopicListItem
        key={topic.id}
        id={topic.id}
        slug={topic.slug}
        title={topic.title} 
        />
      ))}
    </div>
  );
};

export default TopicList;
