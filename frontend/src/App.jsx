import React from 'react';
import './App.scss';
import PhotoList from '../src/components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';



const App = () => {
  return (
  <div className="App">
    <HomeRoute/>
  </div>
  )
};

export default App;