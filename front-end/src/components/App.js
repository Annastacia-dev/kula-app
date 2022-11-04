import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Restaurants from './Restaurants';


const App = () => {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/restaurants')
      .then(res => res.json())
      .then(restaurants => setRestaurants(restaurants));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/home" element={<Restaurants restaurants={restaurants} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
    
  );
}

export default App;
