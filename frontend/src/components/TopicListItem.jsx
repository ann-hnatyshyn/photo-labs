import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ topic, photosByTopic }) => {
  return (
    <div className='topic-list__item'>
      <div
        onClick={() => {
          console.log(`Topic clicked: ${topic.id}`); // Debugging log
          photosByTopic(topic.id); // Trigger filtering action
        }}
      >
        {topic.title}
      </div>
    </div>
  );
};

export default TopicListItem;
