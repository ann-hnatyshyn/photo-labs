import React from 'react';
import './App.scss';
import PhotoList from '../src/components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';



const App = () => {
  return (
  <div className="App">
    <TopNavigation/>
    <PhotoList/>
    <HomeRoute/>
  </div>
  )
};

export default App;