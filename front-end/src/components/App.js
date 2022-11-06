import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Restaurants from './Restaurants';
import Restaurant from './Restaurant';
import PublicHomePage from './PublicHomePage';



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
            <Route path="/" element={<PublicHomePage restaurants={ restaurants} />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/restaurant/:id" element={<Restaurant/>} />
              <Route path="/restaurant" element={<Restaurants restaurants={restaurants} />} /> 
      </Routes>
    </>
  )
}
export default App;
