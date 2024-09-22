import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ setTopics, title }) => {
  return (
    <div className='topic-list__item'>
      <span>{setTopics}</span>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
