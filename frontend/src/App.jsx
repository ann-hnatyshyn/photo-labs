import React from 'react';
// import PhotoListItem from './components/PhotoListItem';
import PhotoList from '../src/components/PhotoList';
import './App.scss';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';



const App = () => {
  return (
  <div className="App">
    <TopNavigation/>
    <TopicList/>
    <PhotoList/>
  </div>
  )
};

export default App;