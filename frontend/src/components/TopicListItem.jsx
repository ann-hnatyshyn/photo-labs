import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ topic, photosByTopic }) => {
  return (
    <div className='topic-list__item'>
      <div onClick={() => photosByTopic(topic.id)}>{topic.title}</div>
    </div>
  );
};

export default TopicListItem;
