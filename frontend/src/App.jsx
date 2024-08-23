import React from 'react';
// import PhotoListItem from './components/PhotoListItem';
import PhotoList from '../src/components/PhotoList';
import './App.scss';
import TopicList from 'components/TopicList';



const App = () => {

  return (
  <div className="App">
     {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
    <PhotoList/>
    <TopicList/>
  </div>
  )

};


export default App;
