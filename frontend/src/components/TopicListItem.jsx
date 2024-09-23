import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ topics, getPhotosByTopics }) => {
  return (
    <div className='topic-list__item'>
      <div onClick={() => getPhotosByTopics(topics.id)}> {topics.title} </div>
    </div>
  );
};

export default TopicListItem;
