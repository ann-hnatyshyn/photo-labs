import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



const TopicList = ({topics}) => {
  return (
    <div className="topic-list__item">
      {topics.map((topic) => (
        <TopicListItem
        key={topic.id}
        topic={topic}
        id={topic.id}
        slug={topic.slug}
        title={topic.title} 
        />
      ))}
    </div>
  );
};

export default TopicList;
