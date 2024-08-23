import React from "react";
import "../styles/TopicListItem.scss";
import TopicList from "./TopicList";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

function TopicListItem({title}) {
  return (
    <div className="topic-list-item">
      <span>{title}</span>
    </div>
  );
}

export default TopicListItem;
