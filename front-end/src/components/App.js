import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Restaurants from './Restaurants';


const App = () => {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/restaurants')
      .then(res => res.json())
      .then(restaurants => setRestaurants(restaurants));
  }, []);

  return (
    <>
    
      <SignUp/>
      {/* <Restaurants restaurants={restaurants}/> */}
    </>
    
  );
}

export default App;
