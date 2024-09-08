import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ({setTopics}) => {

  console.log(setTopics);

  return (
    <div className="top-nav-bar__topic-list">
      {setTopics.map((setTopics) => (
        <TopicListItem
        setTopics={setTopics}
        key={setTopics.id}
        id={setTopics.id}
        title={setTopics.title}
        />
      ))}
    </div>
  );
};

export default TopicList;
