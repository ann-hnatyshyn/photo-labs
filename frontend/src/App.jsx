import React from 'react';
import './App.scss';
import PhotoListItem from './components/PhotoListItem';
import PhotoList from '../src/components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const App = () => {

  return (
  <div className="App">
    <PhotoListItem 
      id={sampleDataForPhotoListItem.id}
      location={sampleDataForPhotoListItem.location}
      imageSource={sampleDataForPhotoListItem.imageSource}
      username={sampleDataForPhotoListItem.username}
      profile={sampleDataForPhotoListItem.profile}
    />
  </div>
  )

};


export default App;
