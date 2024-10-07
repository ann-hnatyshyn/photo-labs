import React from 'react';
import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = ({ topics, photosByTopic }) => { 
  if (!Array.isArray(topics)) {
    return null; 
  }
  return (
    <div className='top-nav-bar__topic-list'>
      {topics.map((topic) => {
        return <TopicListItem key={topic.id} topic={topic} photosByTopic={photosByTopic}/>
      })}
    </div>
  );
};

export default TopicList;
