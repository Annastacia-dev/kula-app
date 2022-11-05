import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import '../css/publichomepage.css'

const PublicHomePage = () => {
  const [topRestaurants, setTopRestaurants] = useState([])

  useEffect(() => {
    const getTopRestaurants = async () => {
      const response = await fetch('http://localhost:4000/top_rated')
      const data = await response.json()
      setTopRestaurants(data.slice(0, 6))
    }
    getTopRestaurants()
  }, [])

  console.log(topRestaurants)

  return (
    <>
    <NavBar />
    <div className="public-home-page">
        <header className='phg-header'>
          <div className="content">
            <h1>Discover the best restaurants, cafés, and bars in your area</h1>
            <div className='page'>
              <div className='search-bar'>
                <input type="text" placeholder="Search for restaurants " />
                <i className="fa-solid fa-magnifying-glass"></i>
               
              </div>
              <h2>Popular Restaurants</h2>
              <p className='description'>
              From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Kula covers it all.
              <br /> Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.
              </p>
              <div className="top-restaurants">
              {
                    topRestaurants.map((restaurant) => {
                      return (
                        <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
                         
                        <div className='card'>
                          <img src={restaurant.image_url} alt={restaurant.name} />
                          <div className='card-content'>
                            <h2>{restaurant.name}</h2>
                            <div className="name-cuisine">
                            <p><i className="fa-solid fa-location-crosshairs"></i>{restaurant.location}</p>
                            <p><i className="fa-solid fa-utensils"></i>{restaurant.cuisine}</p>
                            </div>
                          </div>
                        </div>
                        </Link>
                      )
                    }
                    )
                  }
              </div>
            </div>
          </div>
          
        </header>
    </div>

    <Footer />
    </>
  )
}

export default PublicHomePage