import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Restaurants from './Restaurants';
import PublicHomePage from './PublicHomePage';
import Footer from './Footer';


const App = () => {

  const [restaurants, setRestaurants] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/restaurants')
      .then(res => res.json())
      .then(restaurants => setRestaurants(restaurants));
  }, []);

  return (
    <>
      <Routes>

        {
          user ? (
            <>
              <Route path="/" element={<Restaurants restaurants={restaurants} />} />
              <Route path="/home" element={<Restaurants restaurants={restaurants} />} />
            </>
          ) : (
            
            <>
              <Route path="/" element={<PublicHomePage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
            </>
          )

        }
      </Routes>

      <Footer />
    
    </>
  )
}
export default App;
